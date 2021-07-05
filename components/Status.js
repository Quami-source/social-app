import React from 'react'
import {Image, View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
//import DATA from '../utils/DATA.json';

const DATA = [
    {
        id:"1",
        img:{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F5%2F4138%2F5434645194_5c2816ffdc_b.jpg&f=1&nofb=1"}
    },
    {
        id:"2",
        img:{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.1africa.tv%2Fwp-content%2Fuploads%2F2016%2F05%2Fafrican-woman.jpg&f=1&nofb=1"}
    },
    {
        id:"3",
        img:{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fportrait-handsome-young-black-african-man_155003-10541.jpg&f=1&nofb=1"}
    },
]

export default function Status() {
    const _render = ()=>{
        return DATA.map((item)=>{
            return(
                <View key={item.id} style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{marginHorizontal:15,justifyContent:'center',alignItems:'center'}}>
                            <Image resizeMode="cover" style={{width:80,height:80,borderWidth:1,borderColor:'#ff5b79',borderRadius:40}} source = {item.img} />
                        </TouchableOpacity>
                    </View>
                
            )
        })
    }
    return (
        <View style={styles.container} >{_render()}</View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal:10,
        flexDirection:'row'
    }
})