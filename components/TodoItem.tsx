import { View, Text, StyleSheet } from 'react-native'
import { theme } from './styles';


const TodoItem = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Nome da tarefa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.placeholderTextColor,
        width: '100%',
        height: 40,
        marginBottom: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#AAA'
    }
})



export default TodoItem;