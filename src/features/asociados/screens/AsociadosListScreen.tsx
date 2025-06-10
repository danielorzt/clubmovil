import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { BaseListScreen } from "../../../../src/components/BaseListScreen";
import { Asociado } from "../../../../src/types/asociado";

type Props = NativeStackScreenProps<RootStackParamList, "Asociados">;

export const AsociadosListScreen = ({ navigation }: Props) => {
  const [asociados, setAsociados] = useState<Asociado[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch asociados
    // For now, using mock data
    setAsociados([
      {
        id: 1,
        documento: "123456789",
        nombres: "Juan",
        apellidos: "Pérez",
        email: "juan@example.com",
        telefono: "123-456-7890",
      },
      {
        id: 2,
        documento: "987654321",
        nombres: "María",
        apellidos: "González",
        email: "maria@example.com",
        telefono: "098-765-4321",
      },
    ]);
    setIsLoading(false);
  }, []);

  const renderAsociado = (asociado: Asociado) => (
    <View>
      <Text className="text-lg font-semibold text-gray-800">
        {asociado.nombres} {asociado.apellidos}
      </Text>
      <Text className="text-gray-600">Documento: {asociado.documento}</Text>
      {asociado.email && (
        <Text className="text-gray-600">Email: {asociado.email}</Text>
      )}
      {asociado.telefono && (
        <Text className="text-gray-600">Teléfono: {asociado.telefono}</Text>
      )}
    </View>
  );

  return (
    <BaseListScreen
      title="Asociados"
      data={asociados}
      isLoading={isLoading}
      renderItem={renderAsociado}
      onAddPress={() => navigation.navigate("AsociadoCreate")}
      onItemPress={(asociado) =>
        navigation.navigate("AsociadoDetail", { id: asociado.id })
      }
      navigation={navigation}
    />
  );
};
