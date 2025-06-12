import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateTo = (screenName: keyof RootStackParamList) => {
    // Uso de 'as any' como solución pragmática para la inferencia de tipos compleja
    // en React Navigation al mezclar pantallas con y sin parámetros.
    navigation.navigate(screenName as any);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bienvenido al Club</Text>
      <Text style={styles.subtitle}>Estado: Habilitado</Text>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateTo("Members")}
        >
          <FontAwesome5 name="users" size={40} color="#007bff" />
          <Text style={styles.cardText}>Asociados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateTo("Activities")}
        >
          <FontAwesome5 name="calendar-alt" size={40} color="#28a745" />
          <Text style={styles.cardText}>Actividades</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateTo("Payments")}
        >
          <MaterialCommunityIcons
            name={"hand-holding-usd" as any}
            size={40}
            color="#ffc107"
          />
          <Text style={styles.cardText}>Participaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigateTo("Loans")}
        >
          <FontAwesome name="money" size={40} color="#dc3545" />
          <Text style={styles.cardText}>Préstamos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343a40",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#343a40",
    textAlign: "center",
  },
});

export default HomeScreen;