import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { Asociado } from "../../../../src/types/asociado";

type Props = NativeStackScreenProps<RootStackParamList, "AsociadoDetail">;
export const AsociadoDetailScreen = ({ route, navigation }: Props) => {
    const [asociado, setAsociado] = useState<Asociado | null>(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setAsociado({
        id: route.params.id,
        Nombre_Asociado: "Juan Pérez",
        Fecha_Ingreso: "2024-01-15",
        Total_Cuotas: 12,
    });
    setIsLoading(false);
    }, [route.params.id]);

const handleDelete = () => {
    Alert.alert(
        "Eliminar Asociado",
        "¿Estás seguro de que deseas eliminar este asociado?",
        [
            {
                text: "Cancelar",
                style: "cancel",
            },
            {
                text: "Eliminar",
                style: "destructive",
                onPress: () => {
                    navigation.goBack();
                    // Eliminar asociado de la base de datos    
                    },
                    },
                    ],

                );
            }
            if(isLoading || !asociado) {
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
                                {asociado.Nombre_Asociado}
                            </Text>
                            <Text className="text-gray-600 mb-2">
                                Fecha de Ingreso: {asociado.Fecha_Ingreso}
                            </Text>
                            <Text className="text-gray-600">
                                Total de Cuotas: {asociado.Total_Cuotas}
                            </Text>
                        </View>
                        <TouchableOpacity
                            className="bg-red-500 p-3 rounded-lg"
                            onPress={handleDelete}
                        >
                            <Text className="text-white text-center font-semibold">
                                Eliminar Asociado
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );