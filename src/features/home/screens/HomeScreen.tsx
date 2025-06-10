import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { FeatureCard } from "../../../../src/components/FeatureCard";
import { ImageSlider } from "../../../../src/components/ImageSlider";
import { MaterialCard } from "../../../../src/components/MaterialCard";
import { useTheme } from "../../../../src/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { isDark, toggleTheme, colors } = useTheme();

  const sliderImages = [
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  ];

  const features = [
    {
      title: "Actividades",
      description: "Gestiona las actividades del club",
      icon: "calendar",
      color: colors.primary,
      onPress: () => navigation.navigate("Actividades"),
    },
    {
      title: "Asociados",
      description: "Administra los asociados del club",
      icon: "people",
      color: colors.secondary,
      onPress: () => navigation.navigate("Asociados"),
    },
    {
      title: "Préstamos",
      description: "Controla los préstamos a asociados",
      icon: "cash",
      color: colors.success,
      onPress: () => navigation.navigate("Prestamos"),
    },
    {
      title: "Pagos",
      description: "Gestiona los pagos de préstamos",
      icon: "card",
      color: colors.info,
      onPress: () => navigation.navigate("Pagos"),
    },
  ];

  const quickActions = [
    {
      title: "Nueva Actividad",
      icon: "add-circle",
      onPress: () => navigation.navigate("ActividadCreate"),
    },
    {
      title: "Nuevo Asociado",
      icon: "person-add",
      onPress: () => navigation.navigate("AsociadoCreate"),
    },
    {
      title: "Nuevo Préstamo",
      icon: "document-text",
      onPress: () => navigation.navigate("PrestamoCreate"),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      {/* Header Section */}
      <View className="bg-primary-light dark:bg-primary-dark p-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold text-white">Club Móvil</Text>
            <Text className="text-white opacity-80">
              Bienvenido al sistema de gestión
            </Text>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: colors.primary }}
            thumbColor={isDark ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Image Slider */}
      <View className="p-4">
        <MaterialCard elevation={4}>
          <ImageSlider images={sliderImages} height={200} />
        </MaterialCard>
      </View>

      {/* Quick Actions */}
      <View className="p-4">
        <Text className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Acciones Rápidas
        </Text>
        <View className="flex-row justify-between">
          {quickActions.map((action, index) => (
            <MaterialCard
              key={index}
              style={{ width: "30%", alignItems: "center" }}
              onPress={action.onPress}
            >
              <Ionicons
                name={action.icon as any}
                size={32}
                color={colors.primary}
              />
              <Text className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                {action.title}
              </Text>
            </MaterialCard>
          ))}
        </View>
      </View>

      {/* Main Features */}
      <View className="p-4">
        <Text className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Funcionalidades
        </Text>
        {features.map((feature, index) => (
          <MaterialCard
            key={index}
            onPress={feature.onPress}
            style={{ marginBottom: 12 }}
          >
            <View className="flex-row items-center">
              <View
                className="bg-opacity-20 p-3 rounded-lg mr-4"
                style={{ backgroundColor: feature.color + "20" }}
              >
                <Ionicons
                  name={feature.icon as any}
                  size={24}
                  color={feature.color}
                />
              </View>
              <View>
                <Text className="text-lg font-bold text-gray-800 dark:text-white">
                  {feature.title}
                </Text>
                <Text className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </Text>
              </View>
            </View>
          </MaterialCard>
        ))}
      </View>

      {/* Stats Section */}
      <View className="p-4">
        <Text className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Resumen
        </Text>
        <View className="flex-row justify-between">
          <MaterialCard style={{ width: "48%" }}>
            <Text className="text-3xl font-bold text-primary-light dark:text-primary-dark">
              12
            </Text>
            <Text className="text-gray-600 dark:text-gray-300">
              Actividades Activas
            </Text>
          </MaterialCard>
          <MaterialCard style={{ width: "48%" }}>
            <Text className="text-3xl font-bold text-secondary-light dark:text-secondary-dark">
              45
            </Text>
            <Text className="text-gray-600 dark:text-gray-300">
              Asociados Totales
            </Text>
          </MaterialCard>
        </View>
      </View>
    </ScrollView>
  );
};
