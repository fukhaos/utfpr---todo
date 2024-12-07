import Title from "@/components/Title";
import { TextInput, ScrollView, Text, View, StyleSheet } from "react-native";
import { theme, styles } from '@/components/styles'
import SuperButton from "@/components/SuperButton";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

export default function Index() {

  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<Array<string>>([])

  const addTodo = () => {
    setTodos([...todos, newItem])
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Title name="Adicione seu item:" ></Title>
        <Title name={newItem} upperCase={newItem.length > 10} ></Title>
        <TextInput
          onChangeText={setNewItem}
          style={styles.input}
          placeholderTextColor={theme.placeholderTextColor}
          placeholder="Digite seu novo item"
        />
        <SuperButton title="Adicionar" onPress={addTodo}></SuperButton>

        {todos.map((item) => {
          return <TodoItem />
        })}


      </View>
    </ScrollView>
  );
}




