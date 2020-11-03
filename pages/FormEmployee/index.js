import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';

const FormEmpleado = ({empleado})=>{
    return (
        <View style={styles.container}> 
            <TextInput style={styles.input} placeholder ="Nombres">{empleado.name.first}</TextInput>
            <TextInput style={styles.input} placeholder ="Apellidos">{empleado.name.last}</TextInput>
            <TextInput style={styles.input} placeholder ="Email">{empleado.email}</TextInput>
            <TextInput style={styles.input} placeholder ="Calle">{empleado.adress.street}</TextInput>
            <TextInput style={styles.input} placeholder ="Número">{empleado.adress.number}</TextInput>
            <TextInput style={styles.input} placeholder ="Piso">{empleado.adress.floor}</TextInput>
            <TextInput style={styles.input} placeholder ="Depto.">{empleado.adress.apartment}</TextInput>
            <TextInput style={styles.input} placeholder ="Telefono">{empleado.phone}</TextInput>
            <TextInput style={styles.input} placeholder ="Horario Entrada">{empleado.checkIn}</TextInput>
            <TextInput style={styles.input} placeholder ="Horario Salida">{empleado.checkOut}</TextInput>
            <Button title="Guardar"/>
        </View>
    )
}

export default FormEmpleado

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

    },

})