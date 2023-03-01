import React, { Component, BackHandler } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native';
import Constants from 'expo-constants';
import RNCloseApp from 'react-native-close-app';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {

    constructor()
    {
      super()
      this.state = {
      Bob: "NA",
      Jimmy: "NA",
      Tina: "NA"
    }
    }

  onSubmit = () =>
  {
    if(this.state.Bob == "NA" || this.state.Jimmy == "NA" || this.state.Tina == "NA")
    {
      alert("please mark all sutudents")
    }else{
      alert("roll submited \n good job")
    }
  }

  onBobPresent = () =>
  {
    
    console.log("test")
  }

render(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Mark Roll
      </Text>
          <Text style={styles.studentName}>
            Bob: {this.state.Bob}
          </Text>
      <TouchableOpacity onPress={() => {this.setState({Bob: "present"})}} style={[styles.buttons, {backgroundColor: "lime"}]}> 
          <Text style={styles.present}>
            present
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({Bob: "absent"})}} style={styles.buttons}>
           <Text style={styles.absent}>
            absent
          </Text>
      </TouchableOpacity>
          <Text style={styles.studentName}>
            Jimmy: {this.state.Jimmy}
          </Text>
      <TouchableOpacity onPress={() => {this.setState({Jimmy: "present"})}} style={[styles.buttons, {backgroundColor: "lime"}]}> 
          <Text style={styles.present}>
            present
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({Jimmy: "absent"})}} style={styles.buttons}>
           <Text style={styles.absent}>
            absent
          </Text>
      </TouchableOpacity>
          <Text style={styles.studentName}>
            Tina: {this.state.Tina}
          </Text>
      <TouchableOpacity onPress={() => {this.setState({Tina: "present"})}} style={[styles.buttons, {backgroundColor: "lime"}]}> 
          <Text style={styles.present}>
            present
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({Tina: "absent"})}} style={styles.buttons}>
           <Text style={styles.absent}>
            absent
          </Text>
      </TouchableOpacity>
      <Button title="submit" onPress={() => {
            this.onSubmit()
          }}/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  studentName: {
    textAlign: "center",
    fontWeight: 500,
    paddingRight: 200
  },
  present: {
    margin: 10,
    backgroundColor: "lime",
    paddingBottom: 3,
    alignItems: "center",
  },
  absent: {
    margin: 10,
    backgroundColor: "red",
    paddingBottom: 3,
    alignItems: "center",
    color: "white"
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
  },
});
