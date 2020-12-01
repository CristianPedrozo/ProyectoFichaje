import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Alert, Image } from 'react-native';
import CrudEmployees from '../crudEmployees';
import validator from 'validator';

// const API_BASE_URL = `https://tranquil-dusk-24173.herokuapp.com/api`
const API_BASE_URL = `https://tp2-nodejs.herokuapp.com/api`

const createEmployee = ({navigation, route})=>{

const {institutionId}= route.params;

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
    const [puedeEnviar, setPuedeEnviar] = useState(false)
 
    const emp = {
        name: { first: first, last: last },
        adress: {
          street: street,
          number: parseInt(number),
          floor: parseInt(floor),
          apartment: apartment,
        },
        phone: phone,
        email: email,
        jwt: null,
        imagePatch: null,
        isAdmin: false,
        checkIn: parseInt(checkIn),
        checkOut: parseInt(checkOut),
        institutionId: institutionId
    }

    // Validacion de boton Crear empleado
    useEffect( () => {

        validateEmail = (email) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
          };
          
        setPuedeEnviar(first.length > 0 && last.length > 0 && validateEmail(email))
        
    }, [first, last, email])

    function create(){
        const headers = new Headers();
        // console.log(emp);
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(emp)
        }

        fetch(`${API_BASE_URL}/usuarios/`, requestOptions)
        .then(res => {
            navigation.goBack();
            // console.log("Data antes de tratamiento: ", JSON.stringify(res))
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        // 
        // navigation.navigate("ABM Empleados")
    }

    return (
        <ScrollView>
        <View style={styles.container}> 
            <View>
            <TextInput style={styles.input} placeholder ="Nombres" onChangeText={setFirst}></TextInput>
            <TextInput style={styles.input} placeholder ="Apellidos" onChangeText={setLast}></TextInput>
            <TextInput style={styles.input} placeholder ="Email" onChangeText={setEmail}></TextInput>
            <TextInput style={styles.input} placeholder ="Calle" onChangeText={setStreet}></TextInput>
            <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Número" onChangeText={setNumber}></TextInput>
            <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Piso" onChangeText={setFloor}></TextInput>
            <TextInput style={styles.input} placeholder ="Depto." onChangeText={setApartment}></TextInput>
            <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Telefono" onChangeText={setPhone}></TextInput>
            <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Horario Entrada" onChangeText={setCheckIn}></TextInput>
            <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Horario Salida" onChangeText={setCheckOut}></TextInput>
            <Button color="#004b8d" title="Crear Empleado" onPress={create} disabled={!puedeEnviar}/>
            </View>
        </View>
        </ScrollView>
    )
}

export default createEmployee

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