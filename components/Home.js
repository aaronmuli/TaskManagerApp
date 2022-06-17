import { 
    StyleSheet, 
    Alert, 
    View, 
    FlatList, 
  } from 'react-native';

  import React from 'react';
  import uuid from 'react-native-uuid';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  import Header from './Header';
  import TaskList from './TaskList';
  import AddTask from './AddTask';
  
  
  
  const Home = ({tasks, setTasks}) => {

    const key = "@StoredData";

    // Called when a task is to be deleted
    // deletes the task with the id prop
    const deleteTask = async (id) => { 
      let newTasks = tasks.filter(prevTask => prevTask.id != id); 
      await AsyncStorage.setItem(key, JSON.stringify(newTasks));
      setTasks(newTasks);
    };


    const clearTasks = async () => {
      await AsyncStorage.setItem(key, "");
      setTasks([]);
    };

    
    // called when a new task is to be added to the tasks
    const addTask = async (task) => {
      let current = Date().toLocaleString(); // gets the current time
      if(task === "") {
        Alert.alert(
          "Error", 
          "Please enter a task.",
          [{text:"OK"},],
          {cancelable: true},);
      }
      else {
        try {
          let newTasks = [...tasks, {id:uuid.v4(), dTime:current, text:task}];
          newTasks = JSON.stringify(newTasks);
          await AsyncStorage.setItem(key, newTasks);
          // setTasks(newTasks) is not working its adding empty tasks to the view.
          setTasks(prevTask => {
            return [...prevTask, {id: uuid.v4(), dTime: current, text: task}];
          });
        }
        catch(e) {
          console.warn(e);
        }
      }
    };
  
  
    return (
        <View>
            <Header title="TASK LIST"/>
            <AddTask addTask={addTask} clearTasks={clearTasks}/>
            <FlatList 
            data={tasks}
            renderItem={({item}) => <TaskList item={item} deleteTask={deleteTask}/>}/>
        </View>
    );
  };
  
  
  export default Home
  