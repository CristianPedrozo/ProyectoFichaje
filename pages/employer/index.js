import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Employeer({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/employer.png')} style={styles.logo} />
                </View>
                <View style={styles.headerRight}>
                    <Button
                        title="Editar datos"
                        onPress={() => Alert.alert('Editar datos')}
                    />
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.bodyTop}>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={() => Alert.alert('ABM Empleados')}>ABM EMPLEADOS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={() => Alert.alert('Ver asistencias')}>ASISTENCIAS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bodyBottom}>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={() => Alert.alert('Ver informes')}>INFORMES</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity>
                            <Text style={styles.button} onPress={() => Alert.alert('Otro')}>OTRO</Text>
                        </TouchableOpacity>
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
        justifyContent: 'center'
    },
    body : {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    bodyTop: {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 70
    },
    bodyBottom: {
        flex: 1,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        paddingBottom: 50,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#f194ff",
        color: 'white',
        margin: 10,
        textAlign: 'center' 
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignItems: 'center'
      },
});