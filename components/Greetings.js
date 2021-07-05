import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Greetings() {
    return (
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:80,marginBottom:20,marginLeft:20}}>
            <View style={{flex:0.7}}>
                <Text style={{fontSize:22,color:'#B0C6E1'}}>Hello</Text>
                <Text style={{fontSize:28,color:"#356B8F",fontWeight:'bold'}}>Developer!</Text>
            </View>
            <View style={{flex:0.3,left:10}}>
                <Image resizeMode="contain" style={{width:70,height:70}} source = {{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F147%2F147140.png&f=1&nofb=1'}} />
            </View>
        </View>
    )
}
