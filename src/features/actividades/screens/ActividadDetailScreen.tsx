import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { Actividad } from "../../../../src/types/actividad";

type Props = NativeStackScreenProps<RootStackParamList, "ActividadDetail">;

export const ActividadDetailScreen = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const [actividad, setActividad] = useState<Actividad | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch actividad details
    // For now, using mock data
    setActividad({
      id,
      Nombre_Actividad: "Reunión Mensual",
      Fecha_Actividad: "2024-03-20",
      Total_Recaudado: 1500000,
    });
    setIsLoading(false);
  }, [id]);

  const handleDelete = () => {
    Alert.alert(
      "Eliminar Actividad",
      "¿Estás seguro de que deseas eliminar esta actividad?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () => {
            // TODO: Implement delete API call
            navigation.goBack();
          },
        },
      ]
    );
  };

  if (isLoading || !actividad) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            {actividad.Nombre_Actividad}
          </Text>

          <View className="space-y-2">
            <Text className="text-gray-600">
              Fecha: {new Date(actividad.Fecha_Actividad).toLocaleDateString()}
            </Text>
            <Text className="text-gray-600">
              Total Recaudado: ${actividad.Total_Recaudado.toLocaleString()}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity
            className="flex-1 bg-blue-500 p-4 rounded-lg"
            onPress={() =>
              navigation.navigate("ActividadEdit", { id: actividad.id })
            }
          >
            <Text className="text-white text-center font-semibold">Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-red-500 p-4 rounded-lg"
            onPress={handleDelete}
          >
            <Text className="text-white text-center font-semibold">
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
