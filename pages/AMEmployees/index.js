import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet,View } from 'react-native';
import FormEmployee from '../FormEmployee/index';

const AMEmployees = ()=>{

    const [empleado, setEmpleado] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-dusk-24173.herokuapp.com/api/usuarios/mail@gmail.com')
          .then((response) =>
              response.json())
          .then((json) => setEmpleado(json))
          .catch((error) => console.error("hubo un error",error));
    }, []);

    return (
        <View style={styles.container}> 
            <FormEmployee empleado={empleado}></FormEmployee>
        </View>
    )
}

export default AMEmployees

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})