import React ,{useContext}from "react";
import {useNavigation} from '@react-navigation/native';
import { Text,View,FlatList, StyleSheet,Button,TouchableOpacity } from "react-native";
import {Context} from "../context/blogcontext";
import { Foundation } from '@expo/vector-icons';
import ShowScreen from "../screens/ShowScreen";


const IndexScreen = ({navigation}) => {
  const { state,addBlogPost,deleteBlog} = useContext(Context);
 // const nav=useNavigation();
  return (
    <View>
   <Text style={styles.text}>NOTES</Text>
   <Button title="Add Note" onPress={addBlogPost}/>
   <FlatList
          data={state} 
           keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item})=>{ 
      return <TouchableOpacity onPress={() => navigation.navigate("MY POST",{id : item.id})}>
      <View style={styles.view}>
          <Text>{item.title}-{item.id}</Text>
         <TouchableOpacity onPress={() => deleteBlog(item.id)}>
            <Foundation name="page-delete" size={24} color="black" />
         </TouchableOpacity>
      </View></TouchableOpacity>
     }} />
     </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
   marginHorizontal:10,
    padding:20,
    alignSelf:'center'
  },
  view:{
   justifyContent: 'space-between',
   flexDirection:'row',
   padding:20
  },
  title:{
    fontSize:15
  },
  icon:{
    fontSize:20
  }
});

export default IndexScreen;