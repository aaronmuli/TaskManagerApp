import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TaskList = ({item, deleteTask}) => {
  return (
        <TouchableOpacity>
            <View style={styles.taskCard}>
                <View style={styles.taskView}>
                    <Text style={styles.Tasktext}>{item.text}</Text>
                    <Text style={styles.dateTime}>{item.dTime}</Text>
                </View>
                <MaterialCommunityIcons 
                        name="delete-forever-outline" 
                        size={26} 
                        color={'firebrick'}
                        onPress={() => deleteTask(item.id)}/>
            </View>
        </TouchableOpacity>
       );
}


const styles = StyleSheet.create({
    taskCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 30,
        padding: 15,
        margin: 5,
    },


    taskView: {
        flex:1,
    },

    Tasktext: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
    },

    dateTime: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#000',
        alignItems: 'baseline',
        margin: 10,
    },
});


export default TaskList
