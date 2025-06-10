import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ActividadesListScreen } from "../features/actividades/screens/ActividadesListScreen";
import { AsociadosListScreen } from "../features/asociados/screens/AsociadosListScreen";
import { PrestamosListScreen } from "../features/prestamos/screens/PrestamosListScreen";

import { HomeScreen } from "../features/home/screens/HomeScreen";
import { MainTabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Actividades":
              iconName = focused ? "calendar" : "calendar-outline";
              break;
            case "Asociados":
              iconName = focused ? "people" : "people-outline";
              break;
            case "Prestamos":
              iconName = focused ? "cash" : "cash-outline";
              break;
            case "Pagos":
              iconName = focused ? "card" : "card-outline";
              break;
            default:
              iconName = "help-outline";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f4511e",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Actividades"
        component={ActividadesListScreen}
        options={{
          title: "Actividades",
        }}
      />
      <Tab.Screen
        name="Asociados"
        component={ActividadesListScreen} // TODO: Replace with AsociadosListScreen
        options={{
          title: "Asociados",
        }}
      />
      <Tab.Screen
        name="Prestamos"
        component={ActividadesListScreen} // TODO: Replace with PrestamosListScreen
        options={{
          title: "Préstamos",
        }}
      />
      <Tab.Screen
        name="Pagos"
        component={ActividadesListScreen} // TODO: Replace with PagosListScreen
        options={{
          title: "Pagos",
        }}
      />
    </Tab.Navigator>
  );
};
