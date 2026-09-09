import { StyleSheet } from 'react-native';


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
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
},

viewImage: {
  width: 150,
  height: 150,
  resizeMode: 'contain',
},

bannerContainer: {
  width: '100%',
  alignItems: 'center',
},

bannerImg: {
  width: '100%',
  height: 200,
  resizeMode: 'contain',
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

deleteBtn: {
  backgroundColor: '#f31b1b',
  padding: 5,
  borderRadius: 5,

},

deletBtnText: {
  color: 'white',
  fontWeight: 'bold',
},

});    

export default styles;