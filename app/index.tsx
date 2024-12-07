import Title from "@/components/Title";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { styles } from '@/components/styles'

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Title name="Lista de compras" ></Title>
      </View>
    </ScrollView>
  );
}




