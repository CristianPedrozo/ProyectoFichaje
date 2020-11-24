import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Row from "../../components/Row";

const API_URL = 'https://tp2-nodejs.herokuapp.com/api/instituciones/'

export default function Employee({ navigation, route }) {

  const { data } = route.params;
  const institutionId = data.institutionId;

  const [isLoading, setLoading] = useState(true);
  const [institucion, setInstitucion] = useState(data);

  useEffect(() => {
    fetch(`${API_URL}${institutionId}`)
      .then((response) => response.json())
      .then((json) => setInstitucion(json))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* {isLoading ? <ActivityIndicator /> : ( */}
            <Image style={styles.logo} source={require('../../assets/images/logoOrt.jpg')} />
          {/* )} */}
        </View>
        <View style={styles.headerRigth}>
          {isLoading ? <ActivityIndicator /> : (
            <Text>{institucion.name}</Text>
          )}
        </View>
      </View>

      <View style={styles.body}>
          <View style={styles.bodyLeft}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Form", { data }) }}>
            <Image style={styles.icono} source={require('../../assets/images/icono_editar.jpg')} />
          </TouchableOpacity>
          </View>
          <View style={styles.bodyRigth}><Row _id={data._id} empleado={data}/></View>
      </View>


      <View style={styles.footer}>
        <View style={[styles.footerLeft, styles.button]}>
          <Button
            title="Fichadas"
            onPress={() => { navigation.navigate("Asistencias", { data }) }}
          />
        </View>
        <View style={[styles.footerRigth, styles.button]}>
          <Button
            title="Fichar"
            onPress={() => { navigation.navigate("indexFichar", { data }) }}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor: 'beige'
  },
  headerLeft: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10
  },
  headerRigth: {
    flex: 0.5,
    color: 'white',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    flexDirection: 'row'
  },
  bodyRigth: {
    flex: 2,
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    marginLeft: 0.1
  },
  bodyLeft: {
    flex: 0.3,
    justifyContent: 'center',
    marginLeft: 10
    //backgroundColor: 'orange'
  },
  footer: {
    flex: 0.7,
    flexDirection: 'row'
  },
  footerLeft: {
    flex: 1,
  },
  footerRigth: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center'
  },
  icono: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});