import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const API_BASE_URL = 'https://tp2-nodejs.herokuapp.com/api'

const modifyEmployee = ({route,navigation})=>{

    const {empleado} = route.params;
    
    const [first,setFirst] = useState(empleado.name.first)
    const [last,setLast] = useState(empleado.name.last)
    const [street, setStreet] = useState(empleado.adress.street)
    const [number, setNumber] = useState(empleado.adress.number)
    const [floor, setFloor] = useState(empleado.adress.floor)
    const [apartment, setApartment] = useState(empleado.adress.apartment)
    const [phone, setPhone] = useState(empleado.phone)
    const [email, setEmail] = useState(empleado.email)
    const [isAdmin, setisAdmin] = useState(empleado.isAdmin)

    const emp = {
        _id:empleado._id,
        name: { first: first, last: last },
        adress: {
          street: street,
          number: parseInt(number),
          floor: parseInt(floor),
          apartment: apartment
        },
        phone: phone,
        email: email,
        jwt: null,
        imagePatch: null,
        isAdmin: isAdmin,
    }

    function modify(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(emp)
        }

        fetch(`${API_BASE_URL}/usuarios/${empleado._id}`, requestOptions)
        .then(res => {
            //console.log("empleado antes de tratamiento: ", JSON.stringify(res))
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        // navigation.navigate("Employee");
        navigation.goBack()
    }


    return (
        <View style={styles.container}> 
            <View>
                <Text style={styles.textTitle}>Datos personales</Text>
                <TextInput style={styles.input} placeholder ="Nombres" onChangeText={setFirst} >{empleado.name.first}</TextInput>
                <TextInput style={styles.input} placeholder ="Apellidos" onChangeText={setLast} >{empleado.name.last}</TextInput>
                <TextInput style={styles.input} placeholder ="Email" onChangeText={setEmail}>{empleado.email}</TextInput>
                <TextInput style={styles.input} placeholder ="Calle" onChangeText={setStreet}>{empleado.adress.street}</TextInput>
                <TextInput style={styles.input} placeholder ="Número" onChangeText={setNumber} >{empleado.adress.number}</TextInput>
                <TextInput style={styles.input} placeholder ="Piso" onChangeText={setFloor} >{empleado.adress.floor}</TextInput>
                <TextInput style={styles.input} placeholder ="Depto." onChangeText={setApartment}>{empleado.adress.apartment}</TextInput>
                <TextInput style={styles.input} placeholder ="Telefono" onChangeText={setPhone}>{empleado.phone}</TextInput>
                <View style={styles.fixToText}>
                    <Button title="Modificar" onPress={modify} />                   
                </View>
            </View>
        </View>
    )
}

export default modifyEmployee

const styles = StyleSheet.create({

    textTitle:{
        textAlign: "center",
        fontSize: 30,
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

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})