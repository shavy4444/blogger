import React,{useContext}from 'react';
import { View,StyleSheet,Text, } from 'react-native';

import {Context} from "../context/blogcontext"

const ShowScreen =({route,navigation}) =>{
const state = useContext(Context);
console.log(state.state);
const rot=route.params;


//console.log(navigation.getParam('id'));
const blogPost=state.state.map((blogPost) => blogPost.id === rot);


    return <View>
        <Text style={styles.text}>{blogPost.title}</Text>
        <Text style={styles.content}>content</Text>
    </View>

}

const styles = StyleSheet.create({
text:{
    fontSize:30,
    alignSelf:'center',
    paddingTop:20
},
content:{
    alignSelf:'center',
    fontSize:10
}
});

export default ShowScreen;