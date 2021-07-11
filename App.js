import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , Image ,TextInput,ImageBackground, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Write from './screens/write';
import Read from './screens/read';

export default class App extends React.Component{
  render(){
    return (
       
      <View style={styles.container}>

        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./assets/head.png')} style={{ width:400, height:80}} />
        </View>
       
        <AppContainer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'#EBA83A',
 }
   
   
});


const TabNavigator = createBottomTabNavigator(
   {
     Write:{ screen: Write},
     Read :{screen: Read}
   },
   {
     defaultNavigationOptions: ({navigation}) => ({
       tabBarIcon: () =>{
         const routename = navigation.state.routeName;
                 
         if(routename === "Write"){
           return(
             <Image source={require('./assets/write.png')} 
             style={{ width: 35 , height:35}}
              />
           )
         } 
         else if(routename ==="Read"){
           return(
            <Image source={require('./assets/read.png')} 
            style={{ width: 35 , height:35}}
             />
           )
             
         }
       }
     })
   }
)


const AppContainer = createAppContainer(TabNavigator)
