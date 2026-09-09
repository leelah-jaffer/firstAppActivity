
import { Text, View, TextInput, Button, Image, ScrollView, SafeAreaView, Animated, ViewStyle, StyleProp, ImageSourcePropType, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { RadioButton} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import styles from '../components/Styles';
import MainScreen from './MainScreen';




 type TabParamList = {
   
   ViewDetails: {
    NameSend: string;
    SurnameSend: string; 
  };
  ListSkills: undefined;
 };
  

const Tab = createMaterialTopTabNavigator<TabParamList>();



type ViewDetailsProps =  MaterialTopTabScreenProps<
TabParamList,
'ViewDetails'
>;

type ListSkillsProps =  MaterialTopTabScreenProps<
TabParamList,
'ListSkills'
>;



export default function App() {
return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { marginTop: 70,},}}>
        <Tab.Screen name="Home" component={MainScreen}/>
        <Tab.Screen
        name="ViewDetails"
        component={ViewDetails}
        initialParams={{
          NameSend: '',
          SurnameSend: ''
        }} />
        <Tab.Screen name="ListSkills" component={ListSkills}/>
       </Tab.Navigator> 
    </NavigationContainer>
  );
  
};




//ViewDetails Function, this is the second screen that will be displayed when the button is pressed

function ViewDetails( {navigation, route}: ViewDetailsProps) {
  const NameGet = route.params?.NameSend;
  const SurnameGet = route.params?.SurnameSend;


  
  const [blockArray] = useState<ImageSourcePropType[]>([
    undefined,

  require('./_images/react-native.png'),
  require ('./_images/python.jpg'),
  require('./_images/kotlin.png'),
]);

  const [iSelected, setIntValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState('0');
  // const [ImageBlock, setImage] = useState<ImageSourcePropType | undefined>(undefined);
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 20, }}>Hello {NameGet} {SurnameGet} !</Text>
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






