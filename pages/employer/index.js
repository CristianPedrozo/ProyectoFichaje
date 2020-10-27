import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image } from 'react-native';

export default function Employeer({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/images/employer.png')} style={styles.logo}/>
                </View>
                <View style={styles.headerRight}>
                    <Button 
                        title="Editar datos"
                        // onPress={()=> {
                        //     navigation.navigate("")
                        // }}
                        onPress={() => Alert.alert('Editar datos')}   
                    />
                </View>
            </View>
            {/* <Text style={styles.title}>This is Employeer Page</Text> */}
            <View style={styles.body}>
                <View style={styles.division}>
                    <View style={styles.row}>
                        <Button
                            title="ABM Empleados"
                            
                            // onPress={()=> {
                            //     navigation.navigate("")
                            // }}
                            onPress={() => Alert.alert('ABM Empleados')}  
                        />
                    </View>
                    <View style={styles.row}>
                        <Button
                            title="Asistencias"
                            
                            // onPress={()=> {
                            //     navigation.navigate("")
                            // }}
                            onPress={() => Alert.alert('Asistencias')}  
                        />
                    </View>
                </View>
                <View style={styles.division}>
                    <View style={styles.row}>
                        <Button
                            title="Informes"
                            
                            // onPress={()=> {
                            //     navigation.navigate("")
                            // }}
                            onPress={() => Alert.alert('Informes')}  
                        />
                    </View>
                    <View style={styles.row}>
                        <Button
                            title="Otros"
                            
                            // onPress={()=> {
                            //     navigation.navigate("")
                            // }}
                            onPress={() => Alert.alert('Otro')}  
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
        // textAlign: 'center',
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