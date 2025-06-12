import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { Member } from "../../../../src/types/member";

type Props = NativeStackScreenProps<RootStackParamList, "Members">;

export const MembersListScreen = ({ navigation }: Props) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch members
    // For now using mock data
    setMembers([
      {
        id: 1,
        documentId: "123456789",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        documentId: "987654321",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        phone: "098-765-4321",
      },
    ]);
    setIsLoading(false);
  }, []);

  const handleDelete = (id: number) => {
    Alert.alert(
      "Delete Member",
      "Are you sure you want to delete this member?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // TODO: Implement delete API call
            setMembers(members.filter((member) => member.id !== id));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Member }) => (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200"
      onPress={() => navigation.navigate("MemberDetails", { id: item.id })}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {item.firstName} {item.lastName}
          </Text>
          <Text className="text-gray-600">ID: {item.documentId}</Text>
          <Text className="text-gray-600">{item.email}</Text>
          <Text className="text-gray-600">{item.phone}</Text>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity
            className="bg-blue-500 px-3 py-1 rounded"
            onPress={() => navigation.navigate("MemberEdit", { id: item.id })}
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
        <Text className="text-2xl font-bold text-gray-800">Members</Text>
        <TouchableOpacity
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => navigation.navigate("MemberCreate")}
        >
          <Text className="text-white font-semibold">New Member</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={members}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
