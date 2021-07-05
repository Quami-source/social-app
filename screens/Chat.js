import React from 'react';
import {SafeAreaView,ScrollView,View,Text,StyleSheet,TextInput} from 'react-native'
import Greetings from '../components/Greetings';
import { AntDesign } from '@expo/vector-icons';

export default function Chat() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Greetings/>
                    <View style={styles.search}>
                        <View style={{flex:0.2,marginLeft:20,}}>
                            <View style={{width:30,height:30,borderRadius:15,backgroundColor:'#e587c7',justifyContent:'center',alignItems:'center'}}>
                                <AntDesign  name="search1" size={20} color="#fff" />
                            </View>
                        </View>
                        <View style={{flex:0.8}}>
                            <TextInput placeholder="search friend" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f2f2f2",
        flex:1,
        justifyContent:'center'
    },
    search:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20,
        marginHorizontal:20,
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})
