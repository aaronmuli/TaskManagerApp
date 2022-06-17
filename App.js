import { 
  StyleSheet, 
  View, 
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, useCallback } from 'react';
import Home from './components/Home';
import * as SplashScreen from 'expo-splash-screen';


const App = () => {

  const [tasks, setTasks] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const key = "@StoredData";


  const fetchData = async () => {
      try {
        let data = await AsyncStorage.getItem(key);
        data = JSON.parse(data);
        if(data !== null) {
          setTasks(data);
        }
      }
      catch (e) {
        console.warn(e);
      }
  };


  useEffect(() => {
    const prepare = async () => {
      try{
        await SplashScreen.preventAutoHideAsync(); // dont hide splash screen when app is not ready
        await fetchData();
      }
      catch(e){
        console.warn(e);
      }
      finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if(isReady) {
      await SplashScreen.hideAsync(); // hide the splash screen when the app is ready
    }
  }, [isReady]);

  
  if(!isReady) {
    return null;
  }


  return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View 
          style={ styles.container }
          onLayout={ onLayoutRootView }>
          <StatusBar backgroundColor='#372f6a'/>
          <Home tasks={tasks} setTasks={setTasks}/>
        </View>
      </TouchableWithoutFeedback>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1, // this makes the flatlist scrollable
  },
});


export default App
