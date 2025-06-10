import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { BaseListScreen } from "../../../../src/components/BaseListScreen";
import { Prestamo } from "../../../../src/types/prestamo";

type Props = NativeStackScreenProps<RootStackParamList, "Prestamos">;

export const PrestamosListScreen = ({ navigation }: Props) => {
  const [prestamos, setPrestamos] = useState<Prestamo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch prestamos
    // For now, using mock data
    setPrestamos([
      {
        id: 1,
        asociado_id: 1,
        valor_prestamo: 5000000,
        tasa_interes: 2.5,
        numero_cuotas: 12,
        fecha_prestamo: "2024-03-15",
        asociado: {
          nombres: "Juan",
          apellidos: "Pérez",
          documento: "123456789",
        },
      },
      {
        id: 2,
        asociado_id: 2,
        valor_prestamo: 3000000,
        tasa_interes: 2.0,
        numero_cuotas: 6,
        fecha_prestamo: "2024-03-10",
        asociado: {
          nombres: "María",
          apellidos: "González",
          documento: "987654321",
        },
      },
    ]);
    setIsLoading(false);
  }, []);

  const renderPrestamo = (prestamo: Prestamo) => (
    <View>
      <Text className="text-lg font-semibold text-gray-800">
        {prestamo.asociado?.nombres} {prestamo.asociado?.apellidos}
      </Text>
      <Text className="text-gray-600">
        Valor: ${prestamo.valor_prestamo.toLocaleString()}
      </Text>
      <Text className="text-gray-600">
        Cuotas: {prestamo.numero_cuotas} ({prestamo.tasa_interes}% interés)
      </Text>
      <Text className="text-gray-600">
        Fecha: {new Date(prestamo.fecha_prestamo).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <BaseListScreen
      title="Préstamos"
      data={prestamos}
      isLoading={isLoading}
      renderItem={renderPrestamo}
      onAddPress={() => navigation.navigate("PrestamoCreate")}
      onItemPress={(prestamo) =>
        navigation.navigate("PrestamoDetail", { id: prestamo.id })
      }
      navigation={navigation}
    />
  );
};
