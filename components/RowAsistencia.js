import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RowAsistencia = ({ asistencia }) => (
    <View style={styles.row}>
        <Text>
            <Image source={require('../assets/login.png')} style={styles.logo}></Image>
            Entrada: {moment(asistencia.checkIn, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')}
        </Text>
        <Text>
            <Image source={require('../assets/logout.png')} style={styles.logo}></Image>
            Salida: {moment(asistencia.checkOut, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        fontSize: 50,
        padding: 20
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center'
    },
})

export default Row;