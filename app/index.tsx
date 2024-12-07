import Title from "@/components/Title";
import { TextInput, ScrollView, Text, View, StyleSheet } from "react-native";
import { theme, styles } from '@/components/styles'
import SuperButton from "@/components/SuperButton";

export default function Index() {
  const addTodo = () => {

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Title name="Lista de compras" ></Title>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.placeholderTextColor}
          placeholder="Digite seu novo item"
        />
        <SuperButton title="Adicionar" onPress={addTodo}></SuperButton>
      </View>
    </ScrollView>
  );
}




