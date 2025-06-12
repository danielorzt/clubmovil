import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { Loan } from "../../../../src/types/loan";

type Props = NativeStackScreenProps<RootStackParamList, "Loans">;

export const LoansListScreen = ({ navigation }: Props) => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch loans
    // For now using mock data
    setLoans([
      {
        id: 1,
        memberId: 1,
        loanAmount: 1000000,
        interestRate: 0.1,
        numberOfInstallments: 12,
        loanDate: "2024-03-01",
        member: {
          firstName: "John",
          lastName: "Doe",
          documentId: "123456789",
        },
      },
      {
        id: 2,
        memberId: 2,
        loanAmount: 2000000,
        interestRate: 0.1,
        numberOfInstallments: 24,
        loanDate: "2024-03-15",
        member: {
          firstName: "Jane",
          lastName: "Smith",
          documentId: "987654321",
        },
      },
    ]);
    setIsLoading(false);
  }, []);

  const handleDelete = (id: number) => {
    Alert.alert("Delete Loan", "Are you sure you want to delete this loan?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // TODO: Implement delete API call
          setLoans(loans.filter((loan) => loan.id !== id));
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Loan }) => (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200"
      onPress={() => navigation.navigate("LoanDetails", { id: item.id })}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {item.member?.firstName} {item.member?.lastName}
          </Text>
          <Text className="text-gray-600">
            Amount: ${item.loanAmount.toLocaleString()}
          </Text>
          <Text className="text-gray-600">
            Installments: {item.numberOfInstallments}
          </Text>
          <Text className="text-gray-600">
            Date: {new Date(item.loanDate).toLocaleDateString()}
          </Text>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity
            className="bg-blue-500 px-3 py-1 rounded"
            onPress={() => navigation.navigate("LoanEdit", { id: item.id })}
          >
            <Text className="text-white">Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-red-500 px-3 py-1 rounded"
            onPress={() => handleDelete(item.id)}
          >
            <Text className="text-white">Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
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
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold text-gray-800">Loans</Text>
        <TouchableOpacity
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => navigation.navigate("LoanCreate")}
        >
          <Text className="text-white font-semibold">New Loan</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={loans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
