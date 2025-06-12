import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import { Activity } from "../../../../src/types/activity";

type Props = NativeStackScreenProps<RootStackParamList, "ActivityDetails">;

export const ActivityDetailsScreen = ({ route, navigation }: Props) => {
  const { id } = route.params;
  const [activity, setActivity] = useState<Activity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch activity details
    // For now, using mock data
    setActivity({
      id,
      name: "Monthly Meeting",
      date: "2024-03-20",
      totalCollected: 1500000,
    });
    setIsLoading(false);
  }, [id]);

  const handleDelete = () => {
    Alert.alert(
      "Delete Activity",
      "Are you sure you want to delete this activity?",
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
            navigation.goBack();
          },
        },
      ]
    );
  };

  if (isLoading || !activity) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            {activity.name}
          </Text>

          <View className="space-y-2">
            <Text className="text-gray-600">
              Date: {new Date(activity.date).toLocaleDateString()}
            </Text>
            <Text className="text-gray-600">
              Total Collected: ${activity.totalCollected.toLocaleString()}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity
            className="flex-1 bg-blue-500 p-4 rounded-lg"
            onPress={() =>
              navigation.navigate("ActivityEdit", { id: activity.id })
            }
          >
            <Text className="text-white text-center font-semibold">Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-red-500 p-4 rounded-lg"
            onPress={handleDelete}
          >
            <Text className="text-white text-center font-semibold">Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
