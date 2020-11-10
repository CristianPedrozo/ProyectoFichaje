import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';

const API_BASE_URL = `https://tranquil-dusk-24173.herokuapp.com/api`

const FormEmployee = ({route})=>{
    //route.params para modificación
    const {empleado} = route.params;
    //Para el alta
    const [first,setFirst] = useState("")
    const [last,setLast] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [floor, setFloor] = useState("")
    const [apartment, setApartment] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [checkIn, setCheckIn] = useState(0)
    const [checkOut, setCheckOut] = useState(0)
    
    let emp = {
        name: { first: first, last: last },
        adress: {
          street: street,
          number: number,
          floor: floor,
          apartment: apartment,
        },
        phone: phone,
        email: email,
        jwt: null,
        imagePatch: null,
        isAdmin: false,
        checkIn: checkIn,
        checkOut: checkOut
}
    function createEmployee(){
        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({emp})
        }

        fetch(`${API_BASE_URL}/usuarios/`, requestOptions)
        .then(res => {
            console.log("Data antes de tratamiento: ", res)
            return res.json()
        }).then(data)
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })
    }

    return (
        <View style={styles.container}> 
        {   
            (empleado) ?
            <View>
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
            :
            <View>
            <TextInput style={styles.input} placeholder ="Nombres" onChangeText={setFirst}></TextInput>
            <TextInput style={styles.input} placeholder ="Apellidos" onChangeText={setLast}></TextInput>
            <TextInput style={styles.input} placeholder ="Email" onChangeText={setEmail}></TextInput>
            <TextInput style={styles.input} placeholder ="Calle" onChangeText={setStreet}></TextInput>
            <TextInput style={styles.input} placeholder ="Número" onChangeText={setNumber}></TextInput>
            <TextInput style={styles.input} placeholder ="Piso" onChangeText={setFloor}></TextInput>
            <TextInput style={styles.input} placeholder ="Depto." onChangeText={setApartment}></TextInput>
            <TextInput style={styles.input} placeholder ="Telefono" onChangeText={setPhone}></TextInput>
            <TextInput style={styles.input} placeholder ="Horario Entrada" onChangeText={setCheckIn}></TextInput>
            <TextInput style={styles.input} placeholder ="Horario Salida" onChangeText={setCheckOut}></TextInput>
            <Button title="Crear Empleado" onPress={console.log(emp)}/>
            </View>
        }
        </View>
    )
}

export default FormEmployee

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