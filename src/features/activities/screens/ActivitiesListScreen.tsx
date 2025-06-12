import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Activity } from "../../../types/activity";
import { MaterialCard } from "../../../components/MaterialCard";
import { useTheme } from "../../../theme/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamList, "Activities">;

export const ActivitiesListScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch activities
    // For now using mock data
    setActivities([
      {
        id: "1",
        name: "Monthly Meeting",
        description: "Regular monthly meeting",
        date: new Date(),
        location: "Main Hall",
        maxCapacity: 50,
        status: "active",
      },
      {
        id: "2",
        name: "Annual Party",
        description: "End of year celebration",
        date: new Date("2024-12-31"),
        location: "Garden",
        maxCapacity: 100,
        status: "active",
      },
    ]);
    setIsLoading(false);
  }, []);

  const handleDelete = (id: string) => {
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
            setActivities(activities.filter((activity) => activity.id !== id));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Activity }) => (
    <TouchableOpacity
      className="bg-white p-4 rounded-lg mb-4 shadow-sm border border-gray-200"
      onPress={() => navigation.navigate("ActivityDetails", { id: item.id })}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800">
            {item.name}
          </Text>
          <Text className="text-gray-600">{item.location}</Text>
          <Text className="text-gray-600">
            {new Date(item.date).toLocaleDateString()}
          </Text>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity
            className="bg-blue-500 px-3 py-1 rounded"
            onPress={() => navigation.navigate("ActivityEdit", { id: item.id })}
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
        <Text className="text-2xl font-bold text-gray-800">Activities</Text>
        <TouchableOpacity
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => navigation.navigate("ActivityCreate")}
        >
          <Text className="text-white font-semibold">New Activity</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
