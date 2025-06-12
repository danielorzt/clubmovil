import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Loan } from "../../../types/loan";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "LoanCreate" | "LoanEdit"
>;

export const LoanFormScreen = ({ route, navigation }: Props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [installments, setInstallments] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params?.id) {
      // TODO: Implement API call to fetch loan details
      // For now using mock data
      setAmount("1000");
      setDescription("Personal loan");
      setInstallments("12");
    }
  }, [route.params?.id]);

  const handleSubmit = async () => {
    if (!amount || !description || !installments) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call to create/update loan
      const loan: Loan = {
        id: route.params?.id || "1",
        amount: parseFloat(amount),
        description,
        installments: parseInt(installments),
        startDate: new Date(),
        status: "active",
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to save loan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            {route.params?.id ? "Edit Loan" : "New Loan"}
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

            <View>
              <Text className="text-gray-600 mb-2">Number of Installments</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-2"
                value={installments}
                onChangeText={setInstallments}
                keyboardType="numeric"
                placeholder="Enter number of installments"
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
            {isLoading ? "Saving..." : "Save Loan"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
