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
import {
  Member,
  CreateMemberDTO,
  UpdateMemberDTO,
} from "../../../types/member";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "MemberCreate" | "MemberEdit"
>;

export const MemberFormScreen = ({ route, navigation }: Props) => {
  const [formData, setFormData] = useState<CreateMemberDTO>({
    documentId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params?.id) {
      // TODO: Implement API call to fetch member details
      // For now using mock data
      setFormData({
        documentId: "123456789",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        birthDate: "1990-01-01",
      });
    }
  }, [route.params?.id]);

  const handleSubmit = async () => {
    if (
      !formData.documentId ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement API call to create/update member
      const member: Member = {
        id: route.params?.id || "1",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        joinDate: new Date(),
        status: "active",
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Alert.alert("Success", "Member created successfully");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to save member");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="space-y-4">
        <View className="space-y-2">
          <Text className="text-gray-600">Document ID *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter document ID"
            value={formData.documentId}
            onChangeText={(text) =>
              setFormData({ ...formData, documentId: text })
            }
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">First Name *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter first name"
            value={formData.firstName}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Last Name *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter last name"
            value={formData.lastName}
            onChangeText={(text) =>
              setFormData({ ...formData, lastName: text })
            }
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Email *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Phone *</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter phone number"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            keyboardType="phone-pad"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Address</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="Enter address"
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />
        </View>

        <View className="space-y-2">
          <Text className="text-gray-600">Birth Date</Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4"
            placeholder="YYYY-MM-DD"
            value={formData.birthDate}
            onChangeText={(text) =>
              setFormData({ ...formData, birthDate: text })
            }
          />
        </View>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg mt-4"
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text className="text-white text-center font-semibold">
            {isLoading ? "Saving..." : "Save Member"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
