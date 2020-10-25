import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function miTablero({navigation}){
    return(
        <View>
            <Text>This is miTablero Page</Text>

            <Button
                title="Editar datos"
                
                onPress={()=> {
                    navigation.navigate("")
                }}
            />

            <Button
                title="ABM Empleados"
                
                onPress={()=> {
                    navigation.navigate("")
                }}
            />

            <Button
                title="Asistencias"
                
                onPress={()=> {
                    navigation.navigate("")
                }}
            />

            <Button
                title="Informes"
                
                onPress={()=> {
                    navigation.navigate("")
                }}
            />
        </View>
    )
}