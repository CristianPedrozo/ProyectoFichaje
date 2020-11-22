import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Row = ({ empleado }) => (
    <View style={styles.row}>
        {/* <Text>{contacto.name.first}</Text>
        <Text>{contacto.name.last}</Text> */}
        <Text>{empleado.name.first + " " + empleado.name.last}</Text>
        <Text>{empleado.email}</Text>
        <Text>{empleado.adress.street + " " + empleado.adress.number + " " + empleado.adress.floor + " " + empleado.adress.apartment}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        fontSize: 50,
        padding: 20
    }
})

export default Row;