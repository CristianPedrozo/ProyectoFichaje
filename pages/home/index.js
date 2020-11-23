import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

export default function Home({ navigation }) {

    const crudEmpleado={"name":{"first":"Admin","last":"admin"},
    "adress":{"street":"Calle Falsa","number":1234,"floor":5,"apartment":"C"},
    "_id":"5fab59367fa94b820060a637",
    "phone":"1511223344",
    "email":"admin@admin",
    "secret":"WjJGaWFWOXNZVzFoYzE5cmNHRkFlV0ZvYjI4dVkyOXQ5MTI2",
    "imagePatch":"TBD",
    "isAdmin":true,
    "checkIn":1000,
    "checkOut":1900,"__v":0,
    "institutionId":"5fb6d091c18f42c2583213f8"};

    return (
        <View style={styles.container}>
            <Text>This is the home page- SOLO TEST, ELIMINAR</Text>
            <Button title="Go back"
                onPress={() => {
                    // navigation.navigate("About", {nombre})
                    navigation.navigate("indexFichar", 
                        {usuario:crudEmpleado}
                    )
                }} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
}});