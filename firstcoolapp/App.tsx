import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>

      <Text style={styles.welcomeText}>Welcome to my App!</Text>

      <Text>Enter your name:</Text>
      <TextInput placeholder="Jane"/>
      <Text>Enter your surname:</Text>
      <TextInput placeholder="Arhtur"/>

      <Button title="Add user"/>"

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
   paddingTop: 50,
   color: 'pink',
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'center'
  },
});    