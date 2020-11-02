import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CrudEmployees from '../crudEmployees';

export default function Home({ navigation}) {

    return(
        // <View style={styles.container}>
        //     <Text style ={styles.title}>This is Home!</Text>
        //     <View style={styles.fixToText}>
        //         <Button
        //             title="Employer"
                    
        //             onPress={()=> {
        //                 navigation.navigate("Employer")
        //             }}
        //         />
                
        //         <Button
        //             title="Employee"
                    
        //             onPress={()=> {
        //                 navigation.navigate("Employee")
        //             }}
        //         />
        //     </View>
        // </View>
        <View>
            <ScrollView>
                <CrudEmployees></CrudEmployees>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
    title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 200,
      },
});