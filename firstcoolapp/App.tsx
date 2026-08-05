import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


 type RootStackParamList = {
   Home: undefined;
   ViewDetails: {
    NameSend: string;
    SurnameSend: string; 
  };
 };
  

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainScreenProps = NativeStackScreenProps<
RootStackParamList,
'Home'
>;

type ViewDetailsProps = NativeStackScreenProps<
RootStackParamList,
'ViewDetails'
>;

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="ViewDetails" component={ViewDetails}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
  
};

function MainScreen({navigation}: MainScreenProps) {

  <Button title="Add User"
          onPress={() => {
            navigation.navigate('ViewDetails', {
              NameSend: Name,
              SurnameSend: Surname
            });
          }}
        />

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App is running");
  
  return (
  <View>
    <SafeAreaView>
     <ScrollView>
  
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
      
      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}



function ViewDetails( {navigation, route}: ViewDetailsProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </View>
  )
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