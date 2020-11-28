import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import img from "../../assets/images/avatar1.png";

export default function Employeer({navigation , route}){
    const {data} = route.params;
    console.log(data)
    let itemImg = <Image style={styles.logo} source= {img} />
    if(data.imagePatch != null && data.imagePatch.includes("http")){
        let imgAux = { uri: data.imagePatch};
        itemImg = <Image style={styles.logo} source= {imgAux} />
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    {itemImg}
                </View>
                <View style={styles.headerRight}>
                    <Button color="#004b8d"
                        title="Editar datos"
                        onPress={() => {navigation.navigate("Form", {data})}} 
                    />
                </View>
            </View>
            <View style={styles.body}>
                    <View style={[styles.bodyLeft, styles.forButton]}>
                        {/* <Button style={styles.button}
                            title="ABM Empleados"
                            onPress={() => {navigation.navigate("ABM Empleados", {admin:data})}}

                        /> */}
                        <TouchableOpacity onPress={() => {navigation.navigate("ABM Empleados", {admin:data})}}>
                            <View style={styles.view}>
                                <Text style={styles.text}>Empleados</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.bodyRigth, styles.forButton]}>
                        {/* <Button style={styles.button}
                            title="Asistencias"
                            onPress={()=> { navigation.navigate("AsistenciasEmployer", {data:data})}}  
                        /> */}
                        <TouchableOpacity onPress={()=> { navigation.navigate("AsistenciasEmployer", {data:data})}}>
                            <View style={styles.view}>
                                <Text style={styles.text}>Asistencias</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
      },
    header: {
        flex: 0.4,
        flexDirection: 'row',
        backgroundColor: 'beige'
      },
    headerLeft: {
        marginTop:20,
        marginLeft:10,
        flex: 1,
      },
    headerRight: {
        flex: 1,
        marginTop: 50,
        marginRight: 20,
      }, 

    title: {
        textAlign: 'center',
        marginVertical: 8,
      },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginTop:100,
        marginLeft: 20,
    },
    logo: {
        width: 140,
        height: 140,
        borderRadius: 70,
        alignItems: 'center'
      },
    body: {
        marginTop: 140,
        flex: 0.5,
        flexDirection: 'row',
    },

    bodyLeft: {
        flex: 1,
      },
    
    bodyRigth: {
        flex: 1,
    },

    forButton: {
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        height:50,
    },
    button:{
        height:36,
        fontSize: 30,
    },
    text:{
        marginRight:25,
        marginBottom:20,
        marginTop:30,
        fontSize:20,
        color:'white',
        textAlign:'center',
    },
    view:{
        width:180,
        height:90,
        backgroundColor:'#004b8d'  
    },
    buttonBlue:{
        color:'#004b8d'
    }
});