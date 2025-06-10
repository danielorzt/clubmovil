import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/features/auth/screens/LoginScreen";
import { RegisterScreen } from "./src/features/auth/screens/RegisterScreen";
import { MainTabNavigator } from "./src/Navigation/MainTabNavigator";
import { ActividadDetailScreen } from "./src/features/actividades/screens/ActividadDetailScreen";
import { ActividadFormScreen } from "./src/features/actividades/screens/ActividadFormScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Iniciar Sesión" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Registro" }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ActividadDetail"
          component={ActividadDetailScreen}
          options={{ title: "Detalle de Actividad" }}
        />
        <Stack.Screen
          name="ActividadCreate"
          component={ActividadFormScreen}
          options={{ title: "Nueva Actividad" }}
        />
        <Stack.Screen
          name="ActividadEdit"
          component={ActividadFormScreen}
          options={{ title: "Editar Actividad" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
