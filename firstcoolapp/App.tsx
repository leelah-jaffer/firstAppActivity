import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  console.log("App is running");


  return (
    <View>
      <Image style={styles.mainImage} 
      source={require('./_images/minecraft.jpg')}/>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>

    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your name:</Text>
      <TextInput style={styles.InputText} 
                        placeholder="Jane" 
                        autoCapitalize="words" 
                        autoComplete="name" 
                        keyboardType="default"
                        onChangeText={newText => setName(newText)}/>
    </View>  

    <View style={styles.inputFlex}>
      <Text style={styles.labelText}>Enter your surname:</Text>
      <TextInput style={styles.InputText} 
                 placeholder="Arhtur" 
                 autoCapitalize="words" 
                 autoComplete="name-family" 
                 keyboardType="default"
                 onChangeText={newText => setSurname(newText)}/>
    </View>

      <Button title="Add user"
         onPress={() => {
          console.log("Name: " + name + 
            ", Surname: " + surname);
         }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
   paddingTop: 70,
   color: 'purple',
   fontWeight: 'bold',
   fontSize: 50,
   textAlign: 'center'
  },

labelText: {
  fontWeight: 'bold',
},

InputText:{
  borderBottomWidth: 1,

},

mainImage: {
  height: 350,
  width: 400,
  paddingTop: 60,
  justifyContent: 'center',
  alignItems: 'center',
},

inputFlex: {
  flexDirection: 'row',
  marginTop: 25,
  justifyContent: 'space-evenly', 
}

});    