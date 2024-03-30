import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Card from './components/Card';
import axios from 'axios';

const URL = 'http://10.0.2.2:3000/project';

function App() {
  const [projectName, setProjectName] = React.useState('');
  const [technologyToUse, setTechnology] = React.useState('');
  const [developers, setDevelopers] = React.useState('');
  const [projectManager, setProjectManager] = React.useState('');
  const [cost, setCost] = React.useState('');

  const [userList, setUserList] = useState([]);

  function fetchData() {
    console.log('Press');
    axios
      .get(URL)
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => console.log(error));

    axios
      .post(URL , {
        projectName: projectName,
        technologyToUse: technologyToUse,
        developers: developers,
        projectManager: projectManager,
        cost: cost,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(userList);
    for (var key in userList) {
      if (userList.hasOwnProperty(key)) {
        console.log(userList[key]._id);
        console.log(userList[key].projectName);
        console.log(userList[key].technologyToUse);
        console.log(userList[key].developers);
        console.log(userList[key].projectManager)
        console.log(userList[key].cost);
      }
    }
    Alert.alert(
      'Project Details',
      `Project Name: ${projectName}\nTechnology to use: ${technologyToUse}\nDevelopers: ${developers}\nProject Manager: ${projectManager}\nCost: ${cost}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.app_text}>Create Project</Text>
      </View>
      <Card description="Project Name" onChangeText={setProjectName} />
      <Card description="Technology to use" onChangeText={setTechnology} />
      <Card description="Developers" onChangeText={setDevelopers} />
      <Card description="Project Manager" onChangeText={setProjectManager} />
      <Card description="Cost" onChangeText={setCost} />
      <View style={styles.button_view}>
        <TouchableOpacity style={styles.button_project} onPress={fetchData}>
          <Text style={styles.button_text}>GENERATE PROJECT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  app_text: {
    color: '#000',
    fontWeight: '900',
    margin: 10,
    fontSize: 30,
  },
  button_project: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 100,
    backgroundColor: 'aqua',
    width: 180,
  },
  button_text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
  },
  button_view: {
    alignItems: 'center',
  },
});

export default App;
