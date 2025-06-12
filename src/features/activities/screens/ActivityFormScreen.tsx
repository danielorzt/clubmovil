import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../src/types/navigation";
import {
  Activity,
  CreateActivityDTO,
  UpdateActivityDTO,
} from "../../../../src/types/activity";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "ActivityCreate" | "ActivityEdit"
>;

export const ActivityFormScreen = ({ route, navigation }: Props) => {
  const isEdit = route.name === "ActivityEdit";
  const [formData, setFormData] = useState<CreateActivityDTO>({
    name: "",
    description: "",
    date: new Date(),
    location: "",
    maxCapacity: 0,
  });

  useEffect(() => {
    if (isEdit && route.params?.id) {
      // TODO: Fetch activity data and populate form
      // For now using mock data
      setFormData({
        name: "Monthly Meeting",
        description: "Regular monthly meeting",
        date: new Date(),
        location: "Main Hall",
        maxCapacity: 50,
      });
    }
  }, [isEdit, route.params?.id]);

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.description ||
      !formData.location ||
      formData.maxCapacity <= 0
    ) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    // TODO: Implement actual create/update logic
    Alert.alert(
      "Success",
      isEdit ? "Activity updated successfully" : "Activity created successfully"
    );
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="space-y-2">
          <Text className="text-gray-600">Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter activity name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Description</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter activity description"
            value={formData.description}
            onChangeText={(text) =>
              setFormData({ ...formData, description: text })
            }
            multiline
            numberOfLines={4}
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Location</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter activity location"
            value={formData.location}
            onChangeText={(text) =>
              setFormData({ ...formData, location: text })
            }
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Maximum Capacity</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter maximum capacity"
            value={formData.maxCapacity.toString()}
            onChangeText={(text) =>
              setFormData({ ...formData, maxCapacity: parseInt(text) || 0 })
            }
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center font-semibold">
            {isEdit ? "Update Activity" : "Create Activity"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
