import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated, ViewStyle, StyleProp} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useRef, useEffect, ReactNode } from 'react';



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
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} 
        options={{ animation: 'slide_from_bottom' }} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
  
};

// MainScreen Function

function MainScreen({navigation}: MainScreenProps) {

  

  const [Name, setName] = useState('');                 // "Variable" for the text input field for the name
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false);              // "Variable" for the text input field for the surname


  console.log("App is running");
  
  return (
  <View>                       // A View for the style, it has a view inside of a view, the first view is for the style and the second view is for the text input field
    <SafeAreaView>
     <ScrollView>

  
     // Image added in the app
      <Image style={styles.mainImage} 
      source={require('./_images/minecraft.jpg')}/>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>


// A view for the style, this is inside the first view 
<FadeInView>
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

    <Button title="Add User"                               // Button added in 
          onPress={() => {
            if((isEmpty(Name)==false) && (isEmpty(Surname)==false)){
              navigation.navigate('ViewDetails', {
              NameSend: Name,
              SurnameSend: Surname
            });
            setError(false)
          } else {
            setError(true)
          }
          }}
        />


</FadeInView>

// In line error, a quicker way for the error
<Text style={Error? styles.errorRed : styles.blank}>
{Error? "Please fill in all fields!" : ""}
</Text>

<Text style= {styles.errorRed}>
  {Error}
</Text>

      <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//ViewDetails Function, this is the second screen that will be displayed when the button is pressed

function ViewDetails( {navigation, route}: ViewDetailsProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {NameGet} Surname: {SurnameGet}</Text>
    </View>
  );
};

function isEmpty(value : any){
  return(
    (value == null) ||

    (value.hasOwnProperty('length') && value.length === 0) ||

    (value.constructor === Object && Object.keys(value).length === 0)
  )
}

interface FadeInViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>
}

const FadeInView = ({ children, style }: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false   // without this, u wouldnt be able to run it on a mobile app 
      }
    ).start();
  },[fadeAnim])

  return (
    <Animated.View style={{
    ...(style as object),  // added in the fade in effect, after this we have to assign it
    opacity: fadeAnim,  
    }}>
     {children}
    </Animated.View>
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
},

errorRed: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 15,
  textAlign: 'center',
},

blank: {
  fontSize: 0
}

});    