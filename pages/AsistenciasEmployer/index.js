import { ScrollView } from 'react-native';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import img from "../../assets/images/avatar1.png";

const Item = ({ empleado, onPress, estaPresente }) => {
    var textoEstado = estaPresente == true ? "trabajando" : "ausente"
    let itemImg = <Image style={styles.foto} source= {img} />
    if(empleado.imagePatch != null && empleado.imagePatch.includes("http")){
        let imgAux = { uri: empleado.imagePatch};
        itemImg = <Image style={styles.foto} source= {imgAux} />
    }
    return (
        <View style={styles.itemContainer} >
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={styles.itemContainer}>
                    {itemImg}
                    <View style={styles.description}>
                        <Text style={styles.descName}>{empleado.name.first + " " + empleado.name.last }</Text>
                        <Text style={styles.descEmail}>{empleado.email}</Text>
                        <Text style={styles.descDireccion}>{empleado.adress.street + " " + empleado.adress.number + " " + empleado.adress.floor + " " + empleado.adress.apartment}</Text>
                        <Text style={styles.descEstado}>{"Esta " + textoEstado + " en este momento"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={onPressLicense}>
                <Image style={styles.icono}  source={require('../../assets/images/icono_licencia.jpg')}/>
            </TouchableOpacity>     */}
        </View>
    )
}

export default function AsistenciasEmployer({ navigation, route }) {
    const { data } = route.params;
    const [empleados, setEmpleados] = useState([]);
    const [asistentesActuales, setAsistentesActuales] = useState([]);
    buscarAsistencias();

    useEffect(() => {
        // fetch('https://tranquil-dusk-24173.herokuapp.com/api/usuarios/') ->andaba
        fetch(`https://tp2-nodejs.herokuapp.com/api/usuarios/institucion/${data.institutionId}`)
            // fetch('https://tp2-nodejs.herokuapp.com/api/usuarios')
            .then((response) => {
                if (response.ok) { return response.json() }
                else {
                    alert("No hay datos para tu empresa actual")
                }
            })
            .then((json) => {
                setEmpleados(json)
            })
            .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
    }, [empleados]);

    async function buscarAsistencias() {
        let respuesta = null
        await fetch(`https://tp2-nodejs.herokuapp.com/api/asistencias`)
            // fetch('https://tp2-nodejs.herokuapp.com/api/usuarios')
            .then((response) => {
                if (response.ok) { return response.json() }
            })
            .then((json) => {
                respuesta = json
            })
            .catch((error) => console.error('There has been a problem with your fetch operation: ' + error));
        procesarAsistencias(respuesta)
        return respuesta
    }
    function procesarAsistencias(asistencias) {
        var fechaActual = obtenerFechaActual();
        asistencias.forEach(item => {
            if(item.checkIn.includes(fechaActual) && item.checkOut == null && !asistentesActuales.includes(item.userId))
            {
                setAsistentesActuales(asistentesActuales => [...asistentesActuales, item.userId])
            }
        });
    }
    let obtenerFechaActual = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = yyyy + '-' + mm + '-' + dd;
    }
    return (

        <ScrollView style={styles.container}>
            <View style={styles.line} />
            {empleados.map(empleado => {
                return <Item
                    key={empleado._id}
                    empleado={empleado}
                    onPress={() => { navigation.navigate("Asistencias", { data: empleado }) }}
                    estaPresente = {asistentesActuales.includes(empleado._id)}
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
        flex: 4,
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
    descEstado: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 8,
    },
})
