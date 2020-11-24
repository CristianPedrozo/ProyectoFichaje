import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from "expo-location";
import HaversineGeolocation from "haversine-geolocation";
import { Dimensions } from 'react-native';

export default ({ navigation, route})=>{
  const [asis,setAsis] = useState(null);
  const [permisoCamara, setPermisoCamara] = useState(null);
  const [escaneo, setEscaneo] = useState(false);
  const [ubicacion, setUbicacion] = useState(null);
/*<<<<<<< HEAD
  const URL_API = 'https://tp2-nodejs.herokuapp.com/api';
  const { usuario } = route.params
=======*/
  const URL_API = 'https://tp2-nodejs.herokuapp.com/api';
  const { data } = route.params
  const usuario = data
  const userID = usuario._id
  let estatus;
  
  const obtenerPermisoCamara = async () => {
    try {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermisoCamara(status === 'granted');
    } catch (error) {
      console.log("Error al obtener permisos de la camara", error);
      setPermisoCamara(false);
    }
  };
  const escanearQR = async ({ data }) => {
    setEscaneo(true);
    await fichar(data);

    console.log(estatus);
    if(estatus!==401){
      if(estatus!==403&&estatus!==undefined){
        alert("Asistencias existosa!");
      }else{
        alert("Error en la asistencia, re-intente en un momento");
      }
    }else{
      alert("Error con permisos QR, vuelva a intentar")
    }
    navigation.goBack();
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
  async function impactarAsistencia(metodo,asisten,token){
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    headers.append('token_qr', token);
    const requestOptions = {
      method: metodo,
      headers: headers,
      body: JSON.stringify(asisten ) 
    } 
    let estatus = null;
    let urlFetch;
    const urls={
      post:`${URL_API}/asistencias/`,
      put: `${URL_API}/asistencias/${asisten._id}`
    }
    if(metodo==='POST'){
      urlFetch=urls.post;
      console.log(urlFetch,metodo);
    }else{
      urlFetch=urls.put;
      console.log(urlFetch,metodo);
    }
    estatus = await fetch(urlFetch, requestOptions)
    .then(res => {
      return res.status;
    })
    .catch(err => {
        console.error("error en la asistencia: ", err)
    })
    return estatus;
  };
  async function fichar  (token)  {
    if (ubicacion === null) {
      obtenerUbicacion();
    }
    let UbicacionORT = await obtenerUbicacionORT()
    await obtenerUltimaAsistencia();
    console.log(asis);
    let distanciaEnMetros = HaversineGeolocation.getDistanceBetween(ubicacion, ubicacion, 'm');
    if (distanciaEnMetros<50){
      if(asis!=undefined&&Date.parse(asis.checkIn)===Date.parse(asis.checkOut)){
        let asistenciaAux={
          checkIn:asis.checkIn,
          checkOut:new Date().toISOString(),
          userId:userID,
          _id:asis._id
        };
        estatus=await impactarAsistencia('PUT',asistenciaAux,token);
        await setAsis(estatus);
      }else{
        let fechaAux= new Date().toISOString();
        let asistenciaAux={
          checkIn:fechaAux,
          checkOut:fechaAux,
          userId:userID
        };
        console.log(asis)
        estatus = await impactarAsistencia('POST',asistenciaAux,token);
        console.log(estatus);
        await setAsis(estatus);
      }
    }else{
      alert("Estas a "+distanciaEnMetros+" metros, vuelva a intentar");
    }
  };
  const obtenerUltimaAsistencia= async ()=>{
    try {
      let id = usuario._id;
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
  async function obtenerUbicacionORT (){
    let result;
    try {
      let id = usuario.institutionId;
      result = await fetch(`${URL_API}/instituciones/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response =>response.json()) // returns promise
      .then(responseJson => {
        let var1={
          latitude:0,
          longitude:0
        }
        var1.latitude=responseJson.latitude;
        var1.longitude=responseJson.longitude;
        return var1;
      });
    } catch (error) {
      console.log(error);
    }
    return result;
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
        backgroundColor: "#004b8d",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
      }}>
      {(asis===null||ubicacion===null)&&<Text style={styles.cargando}>Cargando...</Text>}
      {asis!=null&&ubicacion!=null&&<BarCodeScanner onBarCodeScanned={escaneo ? undefined : escanearQR} style={[StyleSheet.absoluteFill, styles.container]}>
        <Image
          style={styles.qr}
          source={require('../../assets/recuadro.png')}
        />
        <Text
          onPress={() => navigation.pop()}
          style={styles.cancel}>
          Cancel
        </Text>
      </BarCodeScanner>}
    </View>
  );
}
const { width } = Dimensions.get('window')
const qrSize = width * 1.1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
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
  },
  cargando: {
    fontSize: width * 0.1,
    textAlign: 'center',
    width: '70%',
    color: 'white',
    justifyContent: 'center'
  }
});