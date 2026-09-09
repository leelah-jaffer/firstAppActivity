import { createMaterialTopTabNavigator, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { Button, Text, TextInput, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../components/Styles';
import FadeInView from './Animations';



type TabParamList = {
   
  ListSkills: undefined;
 };

 const Tab = createMaterialTopTabNavigator<TabParamList>();

 type ListSkillsProps =  MaterialTopTabScreenProps<
 TabParamList,
 'ListSkills'
 >;

 function ListSkills({ navigation, route}: ListSkillsProps) {

  const [Skills, setSkills] = useState<string[]>([]);
  const [txtSkill, setSkill] = useState('');

  const removeSkillHandler = (index: number) => {
    setSkills((currentSkills)=> currentSkills.filter((skill, i) => i !== index));
  }

  const renderSkills = () => {

  const arrOutput = [];
  

  for(let i=0; i < Skills.length; i++){
    arrOutput.push(
      <View key={i} style={styles.inputContainer}>
      <Text key={i} style={styles.skillText}>
        {Skills[i]}
        </Text>

        <TouchableOpacity onPress={() => removeSkillHandler(i)}
                          style={styles.deleteBtn}>
        <Text style={styles.deletBtnText}>Delete</Text>
        </TouchableOpacity>
        </View>


    );
  }
  return arrOutput;
  }

  return(
    <View style={styles.appContainer}>
      <SafeAreaView>
        <ScrollView>
<View style={styles.bannerContainer}>
  <Image 
    style={styles.bannerImg} 
    source={require('./_images/banner.jpg')}
  />
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
