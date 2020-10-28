import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

export default function Login({ navigation }) {

    //const { nombre } = route.params
    
    return (
        <View style={styles.container}>
            <Text>This is the home page- SOLO TEST, ELIMINAR</Text>
            <Button title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});