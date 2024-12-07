import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { theme } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface ITodoItem {
    id: number,
    name: string,
    completed: boolean,
}

interface ITodoItemProps {
    todo: ITodoItem,
    updateTodo: (id: number) => void
}

const TodoItem = ({ todo, updateTodo }: ITodoItemProps) => {
    const { id, name, completed } = todo;
    const handleUpdate = () => {
        updateTodo(id)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleUpdate} >
            <Text style={styles.text}>{name}</Text>
            <Ionicons name={completed ? "bookmark" : "bookmark-outline"} size={24} color={theme.tint} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.placeholderTextColor,
        width: '100%',
        height: 40,
        marginBottom: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    text: {
        color: '#AAA'
    }
})



export default TodoItem;