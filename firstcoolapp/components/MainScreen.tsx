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