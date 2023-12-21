import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert} from 'react-native';
import * as React from 'react'
import * as firebase from 'firebase'

export default class Home extends React.Component{

    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        return (
            <View>
                <Text>Home Screen</Text>

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
