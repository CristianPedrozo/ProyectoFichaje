import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image } from 'react-native';

export default function Employeer({navigation , route}){
    const {data} = route.params;
    console.log(data)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/images/employer.png')} style={styles.logo}/>
                </View>
                <View style={styles.headerRight}>
                    <Button 
                        title="Editar datos"
                        onPress={() => {navigation.navigate("Form", {data})}} 
                    />
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.division}>
                    <View style={styles.row}>
                        <Button
                            title="ABM Empleados"
                            onPress={() => {navigation.navigate("ABM Empleados", {admin:data})}}

                        />
                    </View>
                    <View style={styles.row}>
                        <Button
                            title="Asistencias"
                            onPress={() => Alert.alert('Asistencias')}  
                        />
                    </View>
                </View>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
      },
    header: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 40,
      },
    headerLeft: {
        flex: 1,
      },
    headerRight: {
        flex: 1,
      }, 

    title: {
        textAlign: 'center',
        marginVertical: 8,
      },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginTop:100,
        marginLeft: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'contain',
    },

    body: {
        flex: 1,
        flexDirection: 'row',
    },

    division: {
        flex: 1,
        flexDirection: 'column',
    },
});