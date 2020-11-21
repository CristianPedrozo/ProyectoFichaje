import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';

const API_BASE_URL = 'https://stark-atoll-54719.herokuapp.com/api'

const modifyEmployee = ({route,navigation})=>{

    const {data} = route.params;
    
    const [first,setFirst] = useState(data.name.first)
    const [last,setLast] = useState(data.name.last)
    const [street, setStreet] = useState(data.adress.street)
    const [number, setNumber] = useState(data.adress.number)
    const [floor, setFloor] = useState(data.adress.floor)
    const [apartment, setApartment] = useState(data.adress.apartment)
    const [phone, setPhone] = useState(data.phone)
    const [email, setEmail] = useState(data.email)
 
    const emp = {
        _id:data._id,
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
        isAdmin: false,
    }

    function modify(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(emp)
        }

        fetch(`${API_BASE_URL}/usuarios/${data._id}`, requestOptions)
        .then(res => {
            console.log("Data antes de tratamiento: ", JSON.stringify(res))
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        navigation.navigate("Employee");
    }


    return (
        <View style={styles.container}> 
            <View>
                <TextInput style={styles.input} placeholder ="Nombres" onChangeText={setFirst} >{data.name.first}</TextInput>
                <TextInput style={styles.input} placeholder ="Apellidos" onChangeText={setLast} >{data.name.last}</TextInput>
                <TextInput style={styles.input} placeholder ="Email" onChangeText={setEmail}>{data.email}</TextInput>
                <TextInput style={styles.input} placeholder ="Calle" onChangeText={setStreet}>{data.adress.street}</TextInput>
                <TextInput style={styles.input} placeholder ="Número" onChangeText={setNumber} >{data.adress.number}</TextInput>
                <TextInput style={styles.input} placeholder ="Piso" onChangeText={setFloor} >{data.adress.floor}</TextInput>
                <TextInput style={styles.input} placeholder ="Depto." onChangeText={setApartment}>{data.adress.apartment}</TextInput>
                <TextInput style={styles.input} placeholder ="Telefono" onChangeText={setPhone}>{data.phone}</TextInput>
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