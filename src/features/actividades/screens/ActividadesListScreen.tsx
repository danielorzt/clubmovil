import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types/navigation";
import { Actividad } from "../../../../types/actividad";
import { MaterialCard } from "../../../../components/MaterialCard";
import { useTheme } from "../../../../theme/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamList, "Actividades">;

export const ActividadesListScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const [actividades, setActividades] = useState<Actividad[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    const mockActividades: Actividad[] = [
      {
        id: "1",
        titulo: "Fiesta de Fin de Año",
        descripcion: "Celebración del fin de año con todos los asociados",
        fecha: new Date("2024-12-31"),
        lugar: "Salón Principal",
        cupo_maximo: 100,
        estado: "activa",
      },
      {
        id: "2",
        titulo: "Taller de Finanzas",
        descripcion: "Aprende a manejar tus finanzas personales",
        fecha: new Date("2024-03-15"),
        lugar: "Sala de Conferencias",
        cupo_maximo: 30,
        estado: "activa",
      },
    ];

    setActividades(mockActividades);
    setIsLoading(false);
  }, []);

  const renderActividad = (actividad: Actividad) => (
    <MaterialCard
      key={actividad.id}
      onPress={() =>
        navigation.navigate("ActivityDetails", { id: actividad.id })
      }
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-800 dark:text-white">
            {actividad.titulo}
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            {actividad.descripcion}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {actividad.fecha.toLocaleDateString()} - {actividad.lugar}
          </Text>
        </View>
        <View className="bg-primary-light dark:bg-primary-dark px-3 py-1 rounded-full">
          <Text className="text-white text-sm">
            {actividad.estado.toUpperCase()}
          </Text>
        </View>
      </View>
    </MaterialCard>
  );

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-600 dark:text-gray-300">Cargando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800 dark:text-white">
          Actividades
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ActivityCreate")}
          className="bg-primary-light dark:bg-primary-dark px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Nueva Actividad</Text>
        </TouchableOpacity>
      </View>

      {actividades.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-600 dark:text-gray-300">
            No hay actividades disponibles
          </Text>
        </View>
      ) : (
        actividades.map(renderActividad)
      )}
    </View>
  );
};
