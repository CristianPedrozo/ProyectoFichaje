import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';
import Axios from 'axios';


const Item=({empleado})=>{
    return(
        <View style={styles.itemContainer}>
            <Image source={require('../../assets/images/avatar1.png')} style={styles.foto}/>
            <View style={styles.description}>
                <Text style={styles.descName}>{empleado.name.first + " "+ empleado.name.last}</Text>
                <Text style={styles.descEmail}>{empleado.email}</Text>
                <Text style={styles.descDireccion}>{empleado.adress.street  + " " + empleado.adress.number + " " + empleado.adress.floor + " " + empleado.adress.apartment}</Text>
            </View>
        </View>
    )
}

const CrudEmployees = ()=>{

    const [empleados, setEmpleados] =useState([]);

    useEffect(() => {
        getEmpleados();

    }, []);

    const getEmpleados = () => {
        Axios.get('http://192.168.43.228:3000/api/usuarios')
        .then(res => {

            console.log('res get Empleados:', res); 
            setEmpleados(res.data);
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.textTitle}>ABM Empleados</Text>
            <TextInput style={styles.input} placeholder ="Nombre"/>
            <TextInput style={styles.input} placeholder ="Email"/>
            <TextInput style={styles.input} placeholder ="Direccion"/>
            <Button title="Guardar"/>
            <View style={styles.line}/>
            {empleados.map(empleado =>{
                return <Item key={empleado.key} empleado={empleado} />
            })}


        </View>
    )
}

export default CrudEmployees

const styles = StyleSheet.create({

    textTitle:{
        textAlign: "center",
        marginBottom: 20,
    },

    container: {
        padding: 20,
    },
    input:{
        borderWidth:1,
        marginBottom:12,
        borderRadius:25,
        paddingHorizontal:18,
    },
    line:{
        height:2,
        backgroundColor:"black",
        marginVertical: 20,
    },
    foto:{
        width:100,
        height:100,
        borderRadius:100,
    },

    itemContainer:{
        flexDirection:"row",
        marginBottom:20,
    },

    description:{
        marginLeft:18,
    },

    descName:{
        fontSize:20,
        fontWeight:'bold',
    },
    descEmail:{
        fontSize:16,
    },
    descDireccion:{
        fontSize:12,
        marginTop:8,

    }
})
