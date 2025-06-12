import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Payment } from "../../../types/payment";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "PaymentCreate" | "PaymentEdit"
>;

export const PaymentFormScreen = ({ route, navigation }: Props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params?.id) {
      // TODO: Implement API call to fetch payment details
      // For now using mock data
      setAmount("100");
      setDescription("Monthly fee");
    }
  }, [route.params?.id]);

  const handleSubmit = async () => {
    if (!amount || !description) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call to create/update payment
      const payment: Payment = {
        id: route.params?.id || "1",
        amount: parseFloat(amount),
        description,
        date: new Date(),
        status: "pending",
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to save payment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            {route.params?.id ? "Edit Payment" : "New Payment"}
          </Text>

          <View className="space-y-4">
            <View>
              <Text className="text-gray-600 mb-2">Amount</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-2"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="Enter amount"
              />
            </View>

            <View>
              <Text className="text-gray-600 mb-2">Description</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-2"
                value={description}
                onChangeText={setDescription}
                placeholder="Enter description"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg"
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text className="text-white text-center font-semibold">
            {isLoading ? "Saving..." : "Save Payment"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
