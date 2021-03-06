import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

const API_BASE_URL = `https://tp2-nodejs.herokuapp.com/api`

const Item = ({license,onPress}) => {
    var fechaStart = moment(license.start, 'YYYY-MM-DDThhmm:ss');
    var fechaEnd = moment(license.end, 'YYYY-MM-DDThhmm:ss');
    var days= fechaEnd.diff(fechaStart, 'days');

    return (
        <View style={styles.itemContainer}>
            <View style={styles.description}>
                <Text style={styles.descName}>Licencia: {days} días</Text>
                <Text>Desde: {moment(license.start, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY')}</Text>
                <Text>Hasta: {moment(license.end, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY')}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image style={styles.icono}  source={require('../../assets/images/icono_editar.jpg')}/>
            </TouchableOpacity>
        </View>
    )
}

export default function CrudLicenses({ route,navigation }) {
    const {empleado} = route.params;
    //Para el listado de licencias
    const [licenses, setLicenses] = useState([]);
    //Para listar las licencias del empleado
    useEffect(() => {
        fetch(`${API_BASE_URL}/licencias/usuario/${empleado._id}`) 
            .then((response) => response.json())
            .then((json) => setLicenses(json))
            .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
    }, [licenses]);

    return (

        <ScrollView style={styles.container}>
            <View style={styles.container}> 
                <Button title="Crear Licencia" onPress={()=> {navigation.navigate("Crear Licencia", {empleado:empleado})}}/>
            </View>
            <View style={styles.line} />

            {licenses.map(license => {

                return <Item key={license._id} license={license} 
                onPress={() => {navigation.navigate("Modificar Licencia", {license: license})}}
                />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    textTitle: {
        textAlign: "center",
        marginBottom: 20,
    },

    container: {
        padding: 20,
    },

    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
    },

    line: {
        height: 2,
        backgroundColor: "black",
        marginVertical: 20,
    },

    icono: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },

    itemContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },

    descName: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    descDate: {
        fontSize: 14,
    },

    description: {
        marginLeft: 18,
        flex:1
    },
})
