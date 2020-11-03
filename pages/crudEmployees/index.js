
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';
import FormEmployee from '../FormEmployee/index';

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

// const Stack = createStackNavigator();
export default function CrudEmployees (){

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-dusk-24173.herokuapp.com/api/usuarios')
          .then((response) => response.json())
          .then((json) => setEmpleados(json))
          .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
      }, []);

    return (

                <View style={styles.container}> 
                    <Button title="Crear Empleado" 
                        onPress={()=> {
                        navigation.navigate("FormEmployee")
                        }} />
                    <View style={styles.line}/>
                    
                    {empleados.map(empleado =>{
                        return <Item key={empleado.key} empleado={empleado} />
                    })}
                </View>

    )
}

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
