import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import RowAsistencia from '../components/RowAsistencia';

const ScrollViewContact = ({ asistencias }) => (
    <ScrollView>
        {
            asistencias.map((asistencia) => (
                <RowAsistencia _id={asistencia._id} asistencia={asistencia} />
            ))
        }
    </ScrollView>
)

export default ScrollViewContact;
