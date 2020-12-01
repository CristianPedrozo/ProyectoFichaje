import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image , ScrollView} from 'react-native';

// const API_BASE_URL = `https://tranquil-dusk-24173.herokuapp.com/api`
const API_BASE_URL = 'https://stark-atoll-54719.herokuapp.com/api'
// const API_BASE_URL = 'https://tp2-nodejs.herokuapp.com/api'

const modifyEmployee = ({route,navigation})=>{
    //route.params para modificación
    const {empleado} = route.params;
    
    const [first,setFirst] = useState(empleado.name.first)
    const [last,setLast] = useState(empleado.name.last)
    const [street, setStreet] = useState(empleado.adress.street)
    const [number, setNumber] = useState(empleado.adress.number)
    const [floor, setFloor] = useState(empleado.adress.floor)
    const [apartment, setApartment] = useState(empleado.adress.apartment)
    const [phone, setPhone] = useState(empleado.phone)
    const [email, setEmail] = useState(empleado.email)
    const [checkIn, setCheckIn] = useState(empleado.checkIn)
    const [checkOut, setCheckOut] = useState(empleado.checkOut)
    const [isAdmin, setisAdmin] = useState(empleado.isAdmin)
    const [puedeEnviar, setPuedeEnviar] = useState(false)
 
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
        checkIn: parseInt(checkIn),
        checkOut: parseInt(checkOut)
    }

    
    // Validacion de botón Modificar empleado
    useEffect( () => {

        validateEmail = (email) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
          };
          
        setPuedeEnviar(first.length > 0 && last.length > 0 && validateEmail(email))
        
    }, [first, last, email])

    function modify(){
        const headers = new Headers();
        // console.log(emp);
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(emp)
        }

        fetch(`${API_BASE_URL}/usuarios/${empleado._id}`, requestOptions)
        .then(res => {
            // console.log("Data antes de tratamiento: ", JSON.stringify(res))
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        navigation.goBack();
    }

    function deleted(){
        const headers = new Headers();
        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify({"_id": empleado._id })
        }

        fetch(`${API_BASE_URL}/usuarios/${empleado._id}`, requestOptions)
        .then(res => {
            // console.log("Data antes de tratamiento: ", JSON.stringify(res))
            return res
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })

        navigation.goBack();
    }

    return (
        <ScrollView>
        <View style={styles.container}> 
            <View>
                <TextInput style={styles.input} placeholder ="Nombres" onChangeText={setFirst} >{empleado.name.first}</TextInput>
                <TextInput style={styles.input} placeholder ="Apellidos" onChangeText={setLast} >{empleado.name.last}</TextInput>
                <TextInput style={styles.input} placeholder ="Email" onChangeText={setEmail}>{empleado.email}</TextInput>
                <TextInput style={styles.input} placeholder ="Calle" onChangeText={setStreet}>{empleado.adress.street}</TextInput>
                <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Número" onChangeText={setNumber} >{empleado.adress.number}</TextInput>
                <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Piso" onChangeText={setFloor} >{empleado.adress.floor}</TextInput>
                <TextInput style={styles.input} placeholder ="Depto." onChangeText={setApartment}>{empleado.adress.apartment}</TextInput>
                <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Telefono" onChangeText={setPhone}>{empleado.phone}</TextInput>
                <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Horario Entrada" onChangeText={setCheckIn}>{empleado.checkIn}</TextInput>
                <TextInput style={styles.input} keyboardType = "numeric" placeholder ="Horario Salida" onChangeText={setCheckOut}>{empleado.checkOut}</TextInput> 
                <View style={styles.fixToText}>
                    <Button color="#004b8d" title="Modificar" onPress={modify} disabled={!puedeEnviar}/>
                    <Button color="#004b8d" title="Eliminar" onPress={deleted} />
                    
                    {/* // onPress={()=>Alert.alert(
                    //     'Confirmar',
                    //     'Desea eliminar el  registro?',
                    //     [
                    //         {
                    //             text: 'Si',
                    //             onPress:() => {deleted}
                    //         },
                    //         {
                    //             text: 'Cancelar',
                    //             onPress:() => console.log("Acción Cancelada")
                    //         }
                    //     ]
                    // )} */}
                    
                </View>
            </View>
        </View>
        </ScrollView>
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