import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState} from 'react';


const AddTask = ({addTask, clearTasks}) => {
    
    const [text, setText] = useState('');
    const onchange = (textValue) => {setText(textValue)};

    return (
        <View>
            <TextInput 
                placeholder='Add task ...' 
                style={styles.textInput} 
                onChangeText={onchange}/>

            <View style={ styles.btnsView }>
                {/* Task add button */}
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() => {
                        addTask(text)
                        Keyboard.dismiss()}}>
                        <MaterialIcons
                            name='add'
                            size={37}
                            color={"#e3e3e3"}/>
                </TouchableOpacity>
                
                {/* Task clear button */}
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() => {
                        clearTasks()
                        Keyboard.dismiss()}}>
                        <MaterialIcons 
                            name="delete-sweep"
                            size={35} 
                            color="firebrick"/>
            </TouchableOpacity>
            </View>      
        </View>
    );
}


const styles = StyleSheet.create({
  btn: {
    padding: 9,
    margin: 5,
    backgroundColor: "#c2bad8",
    borderRadius: 50,
    flexDirection: 'row',
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  btnsView: {
     flexDirection: 'row',
  },
  
  textInput: {
      height: 60,
      padding: 8,
      margin: 2,
      fontSize: 16,
  },
});


export default AddTask
