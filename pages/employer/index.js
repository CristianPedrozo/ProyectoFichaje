import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Employer({navigation}){
    return(
        <View>
            <Text style={styles.title}>This is Employer Page</Text>
            <View style={styles.fixToText}>
                <Button
                    title="Fichar"
                    
                    onPress={()=> {
                        navigation.navigate("")
                    }}
                />

                <Button
                    title="Mi Tablero"
                    
                    onPress={()=> {
                        navigation.navigate("miTablero")
                    }}
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
        marginVertical: 200,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});