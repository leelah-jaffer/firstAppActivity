import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my App!</Text>
      <Text>enter your name:</Text>
      <TextInput placeholder="Jane"/>
      <Text>Enter in your name</Text>
      <TextInput placeholder="Angie"/>

      <Button title="Add user"/>"

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf056a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
