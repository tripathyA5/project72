import React from 'react';
import { StyleSheet, Text, View,Image, ToastAndriod } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {keyAvoidingView} from 'reactToastAndroid-native';
import WriteStoryScrenn from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen';
export default class App extends React.Component {
  render(){
    return (
    
      <KeyboardAvoidingView>

      <KeyboardAvoidingView/>
        <AppContainer />
      
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
        <Text>
          Write Story
        </Text>
        )
        
      }
      else if(routeName === "Read"){
        return(
         <Text>
           Read Story
         </Text>
        )
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

