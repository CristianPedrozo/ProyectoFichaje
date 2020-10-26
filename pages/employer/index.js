import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function Employeer({navigation}){
    return(
        <View>
            <Text>This is miTablero Page</Text>
            <View>
                <Button
                    title="Editar datos"
                    
                    // onPress={()=> {
                    //     navigation.navigate("")
                    // }}
                    onPress={() => Alert.alert('Editar datos')}   
                />

                <Button
                    title="ABM Empleados"
                    
                    // onPress={()=> {
                    //     navigation.navigate("")
                    // }}
                    onPress={() => Alert.alert('ABM Empleados')}  
                />

                <Button
                    title="Asistencias"
                    
                    // onPress={()=> {
                    //     navigation.navigate("")
                    // }}
                    onPress={() => Alert.alert('Asistencias')}  
                />

                <Button
                    title="Informes"
                    
                    // onPress={()=> {
                    //     navigation.navigate("")
                    // }}
                    onPress={() => Alert.alert('Informes')}  
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
    title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 200,
      },
});