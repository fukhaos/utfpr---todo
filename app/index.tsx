import Title from "@/components/Title";
import { TextInput, ScrollView, Text, View, StyleSheet } from "react-native";
import { theme, styles } from '@/components/styles'
import SuperButton from "@/components/SuperButton";
import TodoItem, { ITodoItem } from "@/components/TodoItem";
import { useState } from "react";

export default function Index() {

  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Array<ITodoItem>>([])

  const addTodo = () => {
    const todoItem: ITodoItem = {
      id: Date.now(),
      name: newItem,
      completed: false
    }

    setTodos([...todos, todoItem])
    setNewItem("")
  }

  const updateTodo = (id: number) => {
    setTodos((prevState: Array<ITodoItem>) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }

        return item;
      })
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Title name="Adicione seu item:" ></Title>
        <Title name={JSON.stringify(todos)}  ></Title>
        <TextInput
          value={newItem}
          onChangeText={setNewItem}
          style={styles.input}
          placeholderTextColor={theme.placeholderTextColor}
          placeholder="Digite seu novo item"
        />
        <SuperButton title="Adicionar" onPress={addTodo}></SuperButton>

        {todos.map((item) => {
          return <TodoItem todo={item} updateTodo={updateTodo} />
        })}


      </View>
    </ScrollView>
  );
}




