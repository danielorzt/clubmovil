import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Payment } from "../../../types/payment";

type Props = NativeStackScreenProps<RootStackParamList, "Payments">;

export const PaymentsListScreen = ({ navigation }: Props) => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch payments
    // For now using mock data
    setPayments([
      {
        id: "1",
        amount: 100,
        description: "Monthly fee",
        date: new Date(),
        status: "completed",
      },
      {
        id: "2",
        amount: 50,
        description: "Activity fee",
        date: new Date(),
        status: "pending",
      },
    ]);
    setIsLoading(false);
  }, []);

  const renderPayment = ({ item }: { item: Payment }) => (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4"
      onPress={() => navigation.navigate("PaymentDetails", { id: item.id })}
    >
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-semibold text-gray-800">
            ${item.amount}
          </Text>
          <Text className="text-gray-600">{item.description}</Text>
        </View>
        <View
          className={`px-2 py-1 rounded ${
            item.status === "completed"
              ? "bg-green-100"
              : item.status === "pending"
              ? "bg-yellow-100"
              : "bg-red-100"
          }`}
        >
          <Text
            className={`text-sm font-medium ${
              item.status === "completed"
                ? "text-green-800"
                : item.status === "pending"
                ? "text-yellow-800"
                : "text-red-800"
            }`}
          >
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Text>
        </View>
      </View>
      <Text className="text-gray-500 text-sm mt-2">
        {new Date(item.date).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={payments}
        renderItem={renderPayment}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-500">No payments found</Text>
          </View>
        }
      />
      <TouchableOpacity
        className="absolute bottom-4 right-4 bg-blue-500 w-14 h-14 rounded-full justify-center items-center shadow-lg"
        onPress={() => navigation.navigate("PaymentCreate")}
      >
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
};
