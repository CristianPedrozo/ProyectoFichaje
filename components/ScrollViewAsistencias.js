import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';

const ScrollViewContact = ({ asistencias }) => (
    <ScrollView>
        {
            asistencias.map((asistencia) => (
                //<Row key={contacto.key} contacto={contacto} />
                <View>
                    <Text>{asistencia._id}</Text>
                    {/* <Text>checkIn: {asistencia.checkIn}</Text> */}
                    <Text>
                        <Image source={require('../assets/login.png')} style={styles.logo}></Image>
                        Entrada: {moment(asistencia.checkIn, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')}
                    </Text>
                    {/* <Text>checkOut: {asistencia.checkOut}</Text> */}
                    <Text>
                        <Image source={require('../assets/logout.png')} style={styles.logo}></Image>
                        Salida: {moment(asistencia.checkOut, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')} 
                    </Text>
                </View>

            ))
        }
    </ScrollView>
)

export default ScrollViewContact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center'
    },
});