import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from 'moment';

const RowAsistencia = ({ asistencia }) => (
    <View style={styles.row}>
        <Text>
            <Image source={require('../assets/login.png')} style={styles.logo}></Image>
            Entrada: {moment(asistencia.checkIn, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')}
        </Text>
        <Text>
            Salida: {moment(asistencia.checkOut, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')}
            <Image source={require('../assets/logout.png')} style={styles.logo}></Image>
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

export default RowAsistencia;