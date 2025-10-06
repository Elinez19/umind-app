import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

// Import tab screens
import HomeScreen from "./home/home-screen";
import ProfileScreen from "./profile/profile-screen";
import SearchScreen from "./search/search-screen";
import SettingsScreen from "./settings/settings-screen";

const Tab = createBottomTabNavigator();

interface TabLayoutProps {
  onLogout?: () => void;
}

export default function TabLayout({ onLogout }: TabLayoutProps) {
  // Create wrappers to pass the onLogout prop
  const HomeScreenWrapper = () => (
    <HomeScreen onLogout={onLogout || (() => {})} />
  );
  const ProfileScreenWrapper = () => <ProfileScreen onLogout={onLogout} />;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopColor: "#333333",
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#666666",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenWrapper}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenWrapper}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
