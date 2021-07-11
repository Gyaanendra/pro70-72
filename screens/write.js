import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , Image ,TextInput,ImageBackground, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import firebase from 'firebase';
import db from '../config';

export default class Write extends React.Component{

    constructor(){
        super()

        this.state={
            Title:'',
            Author:'',
            Write:''
        }
    }

  writestory = async()=>{
     db.collection('story').add({
         'Author':this.state.Author,
         'Title':this.state.Title,
         'Written_Story':this.state.Write,
         'Date':firebase.firestore.Timestamp.now().toDate()
     })
     alert("submited ")
  }


  
    
    render(){
        return(
    
                    <View style={css.con}>
                   <View style={css.con2}>
                   <Text style={css.text}> 
                       Author:- <TextInput style={css.textimput} 
                       onChangeText={text=>{
                        this.setState({
                            Author:text
                        })
                      }}
                     value={this.state.Author}

                       />     
                      </Text>
                   </View>

                   <View style={css.con2}>
                   <Text style={css.text}> 
                    Title:-<TextInput style={css.textimput}
                      onChangeText={text=>{
                        this.setState({
                            Title:text
                        })
                      }}
                     value={this.state.Title}
                    />     
                      </Text>
                   </View>

                   <View style={css.con2}>
                   <Text style={css.text}> 
                    Write your story:-
                    <TextInput 
                    style={css.textimput2}
                    onChangeText={text=>{
                        this.setState({
                            Write:text
                        })
                      }}
                     value={this.state.Write}
                    />     
                      </Text>
                      
                   </View>
                         
                   <View>
                       <TouchableOpacity style={css.appButtonContainer}
                       onPress={this.writestory}
                       >
                           <Text style={css.appButtonText}>
                               Submit
                           </Text>
                       </TouchableOpacity>
                   </View>

               </View>
            
               
           
        )
    }
}

const css = StyleSheet.create({
    con:{
        flex:1,
        marginLeft:15,
        marginTop:10
        
    },
    con2:{
        
        marginLeft:10,
        marginTop:24
        
    },
    
    text:{
       fontSize:25,
       color:'#171010',
    },
    textimput:{
        fontSize:25,
        borderRadius:15,
        borderWidth:2,
        color:'#171010',
       
        
    },

    textimput2:{
        fontSize:25,
        borderRadius:15,
        borderWidth:2,
        color:'#171010',
        width:17,
       height:30
        
    },

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:70,
        marginTop:10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})