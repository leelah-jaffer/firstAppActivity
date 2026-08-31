import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated, ViewStyle, StyleProp, ImageSourcePropType} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { RadioButton} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';



 type RootStackParamList = {
   Home: undefined;
   ViewDetails: {
    NameSend: string;
    SurnameSend: string; 
  };
  ListSkills: undefined;
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

type ListSkillsProps = NativeStackScreenProps<
RootStackParamList,
'ListSkills'
>;



export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen}/>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails}
        options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name="ListSkills" component={ListSkills}/>
        </Stack.Navigator>
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
     // A View for the style, it has a view inside of a view, the first view is for the style and the second view is for the text input field
  <View>                      
    <SafeAreaView>
     <ScrollView>
{/* // Image added in the app*/}
  
     
      <Image style={styles.mainImage} 
      source={require('./_images/minecraft.jpg')}/>
      <Text style={styles.welcomeText}>Welcome to my App!</Text>

{/*// A view for the style, this is inside the first view  */}
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
{/*// In line error, a quicker way for the error */}
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


  
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,

 
  require('./_images/kotlin.png'),
  require ('./_images/python.jpg'),
  require('./_images/react-native.png'),
]);

  const [iSelected, setIntValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState('0');
  // const [ImageBlock, setImage] = useState<ImageSourcePropType | undefined>(undefined);
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Hello {NameGet} {SurnameGet} !</Text>
      <Text>Please select a language:</Text>
      </View>

       <View style={styles.radioContainer}> 
        <View style={styles.radioGroup}>
          <View style={styles.radioButton}>
            <RadioButton.Android
            value = "1"
            status={selectedValue == "1" ? "checked" : "unchecked"}

            onPress={(() => setSelectedValue("1"))}
            color="#ff66b3"
            />
             <Text style={styles.radioLabel}>React Native</Text>

          </View>

          <View style={styles.radioButton}>
            <RadioButton.Android
            value = "2"
            status={selectedValue == "2" ? "checked" : "unchecked"}

            onPress={(() => setSelectedValue("2"))}
            color="#e0f333"
            />
            <Text style={styles.radioLabel}>Python</Text>
            

          </View>

          <View style={styles.radioButton}>
            <RadioButton.Android
            value = "3"
            status={selectedValue == "3" ? "checked" : "unchecked"}

            onPress={(() => setSelectedValue("3"))}
            color="#644ff0"
            />
             <Text style={styles.radioLabel}>Kotlin</Text>
               </View>
             </View>

           <View style={{flex: 1}}> 
            <Text style={{fontWeight: "bold", flex: 0, paddingTop: 30, 
              justifyContent: 'center', textAlign: 'center', alignItems: 'center'}}>
            </Text>
           <Button title="Click Me!"
               onPress={() =>{

                setIntValue(Number(selectedValue));
               
                // switch(selectedValue){
                //   case "1":
                //     setImage(require('./_images/react-native.png'));
                //     break;
                //   case "2": 
                //     setImage(require('./_images/python.jpg')); 
                //     break;
                //   case "3":
                //     setImage(require('./_images/kotlin.png')); 
                //     break;
                //   default:
                //     setImage(undefined);  
                // }
               }}
               />
               <View style={styles.container}>
                  <Image source={blockArray[iSelected]} style={styles.viewImage}></Image>
               </View>

           </View>
          </View>
         </View>

   
  );
};

function ListSkills({ navigation, route}: ListSkillsProps) {

  const [Skills] = useState<string[]>([]);
  const [txtSkill, setSkill] = useState('');

  const renderSkills = () => {

  const arrOutput = [];
  

  for(let i=0; i < Skills.length; i++){
    arrOutput.push(
      <Text key={i} style={styles.skillText}>
        {Skills[i]}
        </Text>
    );
  }
  return arrOutput;
  }

  return(
    <View style={styles.appContainer}>
      <SafeAreaView>
        <ScrollView>
<View style={styles.mainImage}>
  <Image style={styles.bannerImg} source={require('./_images/banner.jpg')}/>
    </View>

    <Text style={styles.welcomeText}>List Your Skills</Text>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Enter your Skills"
                 onChangeText={newText => setSkill(newText)}
                 value={txtSkill}
      
      />

      <Button title="Add Skill"
      onPress={() => {
        Skills.push(txtSkill);
        setSkill("");


      }}/>

    </View>

    <View style={styles.skillContainer}> 


    </View>
      </ScrollView>
      </SafeAreaView>
      </View>
  )
}

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
   fontSize: 30,
   textAlign: 'center'
  },

labelText: {
  fontWeight: 'bold',
},

InputText:{
  borderBottomWidth: 1,

},

mainImage: {
  height: 150,
  width: 500,
  paddingTop: 5,
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
},

radioContainer: {
  flex: 0,
  backgroundColor: ' #1c50ec',
  justifyContent: 'center',
  alignItems: 'center'
},

radioButton: {
  flexDirection: 'row',
  alignItems: 'center',
},

radioLabel: {
  marginLeft: 5,
  fontSize: 15,
  color: 'black',
},

radioGroup: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: 20,
  borderRadius: 10,
  backgroundColor: '#09c667',
  padding: 15,
  elevation: 5,
  shadowColor: '#1f2e2e',
  shadowOffset: { 
    width: 0,
    height: 1
  },
  shadowOpacity: 0.25,                                      //minimum 0, max is 1 of opacity
  shadowRadius: 3
},

container: {
   width: 10,
   height: 10,
   alignContent: 'center'
},

viewImage: {
   width: 150,
   height: 150,
   alignContent: 'center'

},

bannerImg: {
  height: 350,
  alignContent: 'center'
},

inputContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 25,
  borderBottomWidth: 1,
  borderBottomColor: '#f730c5',
},

textInput: {
  borderWidth: 1,
  borderColor: '#000',
  width: '70%',
  margin: 10,
  padding: 5
},

appContainer: {
  flex: 1,
  padding: 50,
  paddingHorizontal: 15,
},

skillContainer: {
  flex: 5
},

skillText: {
  fontSize: 15,
  marginVertical: 5,
  borderBlockColor: 'black',
  borderBottomWidth: 1
},







});    