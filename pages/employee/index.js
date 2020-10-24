import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';


export default function Employee() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vista de empleado</Text>
            <StatusBar style="auto" />
            <View style={styles.fixToText}>
                <Button
                title="Fichar"
                onPress={() => Alert.alert('Debería fichar')}
                />
                <Button
                title="Mi tablero"
                onPress={() => Alert.alert('Debería mostrar menú de opciones')}
            />
      </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
    title: {
        textAlign: 'center',
        marginVertical: 200,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});