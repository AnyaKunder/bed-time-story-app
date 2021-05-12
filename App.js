import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import LoginScreen from './screens/login';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }}
 const TabNavigator=createBottomTabNavigator({
   WriteStory:{screen:WriteStoryScreen, 
 navigationOptions:{tabBarLabel:'Write Story'} },
 ReadStory:{screen:ReadStoryScreen, 
  navigationOptions:{tabBarLabel:'Read Story'} },


 })
const SwitchNavigator = createSwitchNavigator({
  loginScreen:{screen:loginScreen},TabNavigator:{screen:TabNavigator}
  
})
const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
