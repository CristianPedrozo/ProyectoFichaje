import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from "expo-location";
import HaversineGeolocation from "haversine-geolocation";
import { Dimensions } from 'react-native';

export default ({ navigation, route})=>{
  const [asis,setAsis] = useState(undefined);
  const [status,setStatus] = useState(0);
  const [permisoCamara, setPermisoCamara] = useState(null);
  const [escaneo, setEscaneo] = useState(false);
  const [DatosQR, setDatosQR] = useState("");
  const [ubicacion, setUbicacion] = useState(null);
  const URL_API = 'https://stark-atoll-54719.herokuapp.com/api';
  const { usuario } = route.params
  const userID = usuario._id
  const obtenerPermisoCamara = async () => {
    try {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermisoCamara(status === 'granted');
    } catch (error) {
      console.log("Error al obtener permisos de la camara", error);
      setPermisoCamara(false);
    }
  };
  const escanearQR = ({ data }) => {
    console.log ("entre en el escaneo")
    setEscaneo(true);
    setDatosQR(data);
    fichar();

    if(status!=401){
      alert("Asistencias existosa!");
    }else{
      alert("Error en la asistencia, re-intente en un momento");
      setEscaneo(false);
    }
    navigation.pop();
  };
  const obtenerUbicacion = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setUbicacion(coords);
    } catch (error) {
      console.log("error al obtener la ubicacion", error);
      setUbicacion(null);
    }
  };
  const obtenerPermisosGPS = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        obtenerUbicacion();
      }
    } catch (error) {
      console.log("Error al obtener permisos del gps", error);
    }
  };
  function impactarAsistencia(metodo,asisten){
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    headers.append('QR_Secret', DatosQR);
    const requestOptions = {
      method: metodo,
      headers: headers,
      body: JSON.stringify(asisten ) 
    } 

    if(metodo=='POST'){
      fetch(`${URL_API}/asistencias/`, requestOptions)
      .then(res => {
        setStatus(res.status);
        return JSON.stringify(res);
      })
      .catch(err => {
          console.error("Error en la comunicacion en el metodo post: ", err)
      })
    }else{
      console.log("entre en el put");
      fetch(`${URL_API}/asistencias/${asisten._id}`, requestOptions)
      .then(res => {
        setStatus(res.status);
        return JSON.stringify(res);
      })
      .catch(err => {
          console.error("Error en la comunicacion en el metodo put: ", err)
      })
    }

  };
  const fichar = () => {
    if (ubicacion === null) {
      obtenerUbicacion();
    }
    const ubicaciones = [
      {
        latitude: ubicacion.latitude,
        longitude: ubicacion.longitude
      },
      {//aca ira la ubicacion de la ort llamando a la api
        latitude: -34.5495264,
        longitude: -58.4530346
      }
    ];
    let distanciaEnMetros = HaversineGeolocation.getDistanceBetween(ubicaciones[0], ubicaciones[0], 'm');
    obtenerUltimaAsistencia();
    if (distanciaEnMetros<50){
      if(asis!=undefined&&Date.parse(asis.checkIn)===Date.parse(asis.checkOut)){
        console.log("son iguales")
        let asistenciaAux={
          checkIn:asis.checkIn,
          checkOut:new Date().toISOString(),
          userId:userID,
          _id:asis._id
        };
        console.log(asistenciaAux);
        impactarAsistencia('PUT',asistenciaAux);
        obtenerUltimaAsistencia();
      }else{
        let fechaAux= new Date().toISOString();
        let asistenciaAux={
          checkIn:fechaAux,
          checkOut:fechaAux,
          userId:userID
        };
        console.log("son distintos");
        console.log(asistenciaAux);
        impactarAsistencia('POST',asistenciaAux);
        obtenerUltimaAsistencia();
      }
    }
  };
  const obtenerUltimaAsistencia= async ()=>{
  try {
    let id = usuario._id;
    console.log(URL_API+"/asistencias/usuario/"+id+"/latest")
    fetch(`${URL_API}/asistencias/usuario/${id}/latest`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response =>response.json()) // returns promise
      .then(responseJson => setAsis(responseJson[0]));
  } catch (error) {
    console.log(error);
  }
  };
  useEffect(() => {
    obtenerPermisosGPS();
    obtenerPermisoCamara();
    obtenerUltimaAsistencia(); 
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: "#004b8d"
      }}>
      <BarCodeScanner onBarCodeScanned={escaneo ? undefined : escanearQR} style={[StyleSheet.absoluteFill, styles.container]}>
        <Image
          style={styles.qr}
          source={require('../../assets/recuadro.png')}
        />
        <Text
          onPress={() => navigation.pop()}
          style={styles.cancel}>
          Cancel
        </Text>
      </BarCodeScanner>
    </View>
  );
}
const { width } = Dimensions.get('window')
const qrSize = width * 1.1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  qr: {
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: width * 0.1,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  cancel: {
    fontSize: width * 0.07,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  }
});