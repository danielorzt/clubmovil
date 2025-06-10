import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import {
  Actividad,
  CreateActividadDTO,
  UpdateActividadDTO,
} from "../../../../src/types/actividad";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ActividadCreate" | "ActividadEdit"
>;

export const ActividadFormScreen = ({ route, navigation }: Props) => {
  const isEdit = "id" in route.params;
  const [formData, setFormData] = useState<CreateActividadDTO>({
    Nombre_Actividad: "",
    Fecha_Actividad: new Date().toISOString().split("T")[0],
    Total_Recaudado: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      // TODO: Implement API call to fetch actividad details
      // For now, using mock data
      setFormData({
        Nombre_Actividad: "Reunión Mensual",
        Fecha_Actividad: "2024-03-20",
        Total_Recaudado: 1500000,
      });
    }
  }, [isEdit]);

  const handleSubmit = async () => {
    if (!formData.Nombre_Actividad || !formData.Fecha_Actividad) {
      Alert.alert("Error", "Por favor completa todos los campos requeridos");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call to create/update actividad
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al guardar la actividad");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 space-y-4">
        <Text className="text-2xl font-bold text-gray-800">
          {isEdit ? "Editar Actividad" : "Nueva Actividad"}
        </Text>

        <View className="space-y-4">
          <View>
            <Text className="text-gray-700 mb-1">Nombre de la Actividad *</Text>
            <TextInput
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              value={formData.Nombre_Actividad}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, Nombre_Actividad: text }))
              }
              placeholder="Ingrese el nombre de la actividad"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-1">Fecha de la Actividad *</Text>
            <TextInput
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              value={formData.Fecha_Actividad}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, Fecha_Actividad: text }))
              }
              placeholder="YYYY-MM-DD"
            />
          </View>

          <View>
            <Text className="text-gray-700 mb-1">Total Recaudado *</Text>
            <TextInput
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              value={formData.Total_Recaudado.toString()}
              onChangeText={(text) =>
                setFormData((prev) => ({
                  ...prev,
                  Total_Recaudado: parseFloat(text) || 0,
                }))
              }
              keyboardType="numeric"
              placeholder="0"
            />
          </View>
        </View>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg mt-4"
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text className="text-white text-center font-semibold">
            {isLoading ? "Guardando..." : isEdit ? "Actualizar" : "Crear"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
