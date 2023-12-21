import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert} from 'react-native';
import * as React from 'react'
import * as firebase from 'firebase'


export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    login=()=>{
        firebase().signInWithEmailAndPassword(this.state.username,this.state.password)
        .then(()=>{
            this.props.navigation.navigate('Home')
        })
        .catch(()=>{
            Alert.alert('ERROR')
        })
    }

    render(){
        return (
            <View>
                <Text>Login Screen</Text>
                <TextInput placeholder='Username' onChangeText={(text)=>{this.setState({username: text})}}/>
                <TextInput placeholder='Password' onChangeText={(text)=>{this.setState({password: text})}}/>
                <TouchableOpacity onPress={()=>{this.login()}}><Text>Login</Text></TouchableOpacity>
                <Text>If you don't have account click to register</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}><Text>Register</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
