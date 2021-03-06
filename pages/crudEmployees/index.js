import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, TouchableOpacity } from 'react-native';
import img from "../../assets/images/avatar1.png";

const API_BASE_URL = `https://tp2-nodejs.herokuapp.com/api/usuarios/institucion/`

const Item = ({empleado, onPress, onPressLicense}) => {

    let itemImg = <Image style={styles.foto} source= {img} />
    if(empleado.imagePatch != null && empleado.imagePatch.includes("http")){
        let imgAux = { uri: empleado.imagePatch};
        itemImg = <Image style={styles.foto} source= {imgAux} />
    }

    return (
        <View style={styles.itemContainer} >
            <TouchableOpacity style={styles.button} onPress={onPress}>   
                <View style={styles.itemContainer}>
                    {/* <Image style={styles.foto}  source={require('../../assets/images/avatar1.png')}/>  */}
                    {itemImg}
                    <View style={styles.description}>
                        <Text style={styles.descName}>{empleado.name.first + " " + empleado.name.last}</Text>
                        <Text style={styles.descEmail}>{empleado.email}</Text>
                        <Text style={styles.descDireccion}>{empleado.adress.street + " " + empleado.adress.number + " " + empleado.adress.floor + " " + empleado.adress.apartment}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressLicense}>
                <Image style={styles.icono}  source={require('../../assets/images/icono_licencia.jpg')}/>
            </TouchableOpacity>     
        </View>
    )
}

export default function CrudEmployees({ route, navigation }) { 
    const {admin} = route.params;
    const institutionId = admin.institutionId;
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        // fetch('https://stark-atoll-54719.herokuapp.com/api/usuarios/') 
        // fetch(`${API_BASE_URL}`) //Lista todos  los usuarios
        fetch(`${API_BASE_URL}${institutionId}`) //Lista usuarios por Institucion del Admin
            .then((response) => response.json())
            .then((json) => setEmpleados(json))
            .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
    }, [empleados]);

    return (

        <ScrollView style={styles.container}>
            <Button title="Crear Empleado"
                onPress={() => navigation.navigate("Create Employee",{institutionId:institutionId})}
            />
            <View style={styles.line} />

            {empleados.map(empleado => {

                return <Item 
                key={empleado._id} 
                empleado={empleado} 
                onPress={() => {navigation.navigate("Modify Employee", {empleado: empleado})}}
                onPressLicense={() => {navigation.navigate("ABM Licencias", {empleado: empleado})}}
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
    foto: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },

    icono: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    iconoEditar: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    itemContainer: {
        width: 280,
        flexDirection: "row",
        marginBottom: 20,
    },

    description: {
        marginLeft: 18,
        flex:4,
    },
    descName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    descEmail: {
        fontSize: 16,
    },
    descDireccion: {
        fontSize: 12,
        marginTop: 8,
    },
})
