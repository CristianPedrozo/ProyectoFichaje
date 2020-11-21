import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import moment from 'moment';

const ScrollViewContact = ({ asistencias }) => (
    <ScrollView>
        {
            asistencias.map((asistencia) => (
                //<Row key={contacto.key} contacto={contacto} />
                <View>
                    <Text>{asistencia._id}</Text>
                    {/* <Text>checkIn: {asistencia.checkIn}</Text> */}
                    <Text>Entrada: {moment(asistencia.checkIn, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')} </Text>
                    {/* <Text>checkOut: {asistencia.checkOut}</Text> */}
                    <Text>Salidda: {moment(asistencia.checkOut, 'YYYY-MM-DDThhmm:ss').format('DD-MM-YYYY, h:mm:ss a')} </Text>
                </View>

            ))
        }
    </ScrollView>
)

export default ScrollViewContact;