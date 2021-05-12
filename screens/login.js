import React from 'react';
import { render } from 'react-dom';
import { Alert, FlatList, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SearchBar, Header} from 'react-native-elements';
import db from '../config'
export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={email:'', password:''}
    }

login=async(email, password)=>{
if(email&&password){
try {
   const response = await firebase.auth().signInWithEmailAmdPassword(email, password)
   if(response){
this.props.navigation.navigate("WriteStory")
   }
} catch (error) {
    switch(error.code){
        case 'auth/user-not-found':
            Alert.alert("user doesn't exist")
            break;
        case 'auth/invalid-email':
            Alert.alert("incorrect email or password")
            break;
    }
}
}

else {
    Alert.alert("please enter your email ID and password")
}
}
render(){
    return(
        <KeyboardAvoidingView>
            <View>
                <TextInput style={styles.loginBox}
                placeholder="enter email address"
                onChangeText={(text)=>{
                    this.setState({email:text})
                }}
                keyboardType="email-address"
                value={this.state.email}
                />
                <TextInput style={styles.loginBox}
                placeholder="enter password"
                onChangeText={(text)=>{
                    this.setState({password:text})
                }}
               secureTextEntry={true}
                value={this.state.password}
                />
            </View>
            <View>
                <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                onPress={()=>{
                    this.login(this.state.email, this.state.password)
                }}>
                    <Text style={{textAlign:'center'}}>
                        login
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
}
const styles = StyleSheet.create({ loginBox: { width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin:10, paddingLeft:10 } })