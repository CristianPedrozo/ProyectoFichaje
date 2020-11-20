import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Row = ({contacto}) => (
    <View style={styles.row}>
        <Text>{contacto.name.first}</Text>
        <Text>{contacto.name.last}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        fontSize: 50,
        padding: 20
    }
})

export default Row;