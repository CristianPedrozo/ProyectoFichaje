import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Row from "../../components/Row";

export default function Tablero({ navigation, route }) {
    //const { data } =  route.params.data
    const {data} = route.params;

  return (
    <View style={styles.container}>
        <Row _id={data._id} empleado={data} />
        {/* <Text>{data.email }</Text> */}
        <StatusBar style="auto" />
        <Button title="Go back"
            onPress={() => navigation.goBack()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});