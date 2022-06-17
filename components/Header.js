/*
  The header file for the app
*/


import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Header = ({title}) => {
  return (
       <View style={styles.header}>
           <Text style={styles.text}>{title}</Text>
       </View>
  );
}


const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.length-2,
    height: 60,
    backgroundColor: 'darkslateblue',  
    padding: 15
  },

  text: {
      fontSize: 23,
      color: '#fff',
      textAlign: 'center'
  }
});


export default Header
