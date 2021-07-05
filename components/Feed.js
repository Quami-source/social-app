import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

export default function Feed() {
    return (
        <View style={{marginHorizontal:20,backgroundColor:'#fff',borderRadius:20,marginVertical:50,}}>
            <View style={{flex:0.7}}>
                <Image resizeMode="cover" style={{width:"100%",height:300,borderTopLeftRadius:20,borderTopRightRadius:20}} source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.stocksy.com%2Fa%2FNfh700%2Fz9%2F1836153.jpg%3F1573414392&f=1&nofb=1"}} />
            </View>
            <View style={{padding:20,flexDirection:'row',flex:0.3,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}>
                    <Image resizeMode="cover" style={{width:60,height:60,borderRadius:30}} source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F47%2F8c%2Fff%2F478cff87285ee37497084777cb924660.jpg&f=1&nofb=1"}} />
                </View>
                <View style={{flex:1,}}>
                    <Text style={{color:"#356B8F",fontSize:18}}>Name here</Text>
                    <Text style={{color:'#ccc'}}>Last seen</Text>
                </View>
                <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
