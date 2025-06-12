import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/features/auth/screens/LoginScreen";
import { RegisterScreen } from "./src/features/auth/screens/RegisterScreen";
import { MainTabNavigator } from "./src/Navigation/MainTabNavigator";
import { ActivityDetailsScreen } from "./src/features/activities/screens/ActivityDetailsScreen";
import { ActivityFormScreen } from "./src/features/activities/screens/ActivityFormScreen";
import { MemberFormScreen } from "./src/features/members/screens/MemberFormScreen";
import { LoanFormScreen } from "./src/features/loans/screens/LoanFormScreen";
import { PaymentFormScreen } from "./src/features/payments/screens/PaymentFormScreen";
import { ThemeProvider } from "./src/theme/ThemeContext";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {/* Auth Stack */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Register" }}
          />

          {/* Main Stack */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabNavigator}
            options={{
              headerShown: false,
            }}
          />

          {/* Activities Stack */}
          <Stack.Screen
            name="ActivityDetails"
            component={ActivityDetailsScreen}
            options={{ title: "Activity Details" }}
          />
          <Stack.Screen
            name="ActivityCreate"
            component={ActivityFormScreen}
            options={{ title: "New Activity" }}
          />
          <Stack.Screen
            name="ActivityEdit"
            component={ActivityFormScreen}
            options={{ title: "Edit Activity" }}
          />

          {/* Members Stack */}
          <Stack.Screen
            name="MemberCreate"
            component={MemberFormScreen}
            options={{ title: "New Member" }}
          />
          <Stack.Screen
            name="MemberEdit"
            component={MemberFormScreen}
            options={{ title: "Edit Member" }}
          />
          <Stack.Screen
            name="MemberDetails"
            component={MemberFormScreen}
            options={{ title: "Member Details" }}
          />

          {/* Loans Stack */}
          <Stack.Screen
            name="LoanCreate"
            component={LoanFormScreen}
            options={{ title: "New Loan" }}
          />
          <Stack.Screen
            name="LoanEdit"
            component={LoanFormScreen}
            options={{ title: "Edit Loan" }}
          />
          <Stack.Screen
            name="LoanDetails"
            component={LoanFormScreen}
            options={{ title: "Loan Details" }}
          />

          {/* Payments Stack */}
          <Stack.Screen
            name="PaymentCreate"
            component={PaymentFormScreen}
            options={{ title: "New Payment" }}
          />
          <Stack.Screen
            name="PaymentEdit"
            component={PaymentFormScreen}
            options={{ title: "Edit Payment" }}
          />
          <Stack.Screen
            name="PaymentDetails"
            component={PaymentFormScreen}
            options={{ title: "Payment Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}