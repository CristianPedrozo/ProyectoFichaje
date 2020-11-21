import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import RowAsistencia from '../components/RowAsistencia';

const ScrollViewAsistencias = ({ asistencias }) => (
    <ScrollView>
        {
            asistencias.map((asistencia) => (
                <RowAsistencia key={asistencia._id} asistencia={asistencia} />
            ))
        }
    </ScrollView>
)

export default ScrollViewAsistencias;
