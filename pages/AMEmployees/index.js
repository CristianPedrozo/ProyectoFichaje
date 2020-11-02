import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';


const AMEmployees = ()=>{

    return (
        <View style={styles.container}> 
            <Text style={styles.textTitle}>ABM Empleados</Text>
            <TextInput style={styles.input} placeholder ="Nombres"/>
            <TextInput style={styles.input} placeholder ="Apellidos"/>
            <TextInput style={styles.input} placeholder ="Email"/>
            <TextInput style={styles.input} placeholder ="Calle"/>
            <TextInput style={styles.input} placeholder ="Número"/>
            <TextInput style={styles.input} placeholder ="Piso"/>
            <TextInput style={styles.input} placeholder ="Depto."/>
            <TextInput style={styles.input} placeholder ="Telefono"/>
            <TextInput style={styles.input} placeholder ="Horario Entrada"/>
            <TextInput style={styles.input} placeholder ="Horario Salida"/>
            {/* <TextInput style={styles.radio} placeholder ="Administrador"/> */}
            <Button title="Guardar"/>
        </View>
    )
}

export default AMEmployees

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