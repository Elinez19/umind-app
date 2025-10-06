import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ProfileScreenProps {
  onLogout?: () => void;
}

export default function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const profileOptions = [
    {
      icon: "person-outline",
      title: "Personal Information",
      subtitle: "Update your details",
    },
    {
      icon: "shield-outline",
      title: "Privacy & Security",
      subtitle: "Manage your privacy settings",
    },
    {
      icon: "notifications-outline",
      title: "Notifications",
      subtitle: "Control notification preferences",
    },
    {
      icon: "card-outline",
      title: "Payment Methods",
      subtitle: "Manage your payment options",
    },
    {
      icon: "help-circle-outline",
      title: "Help & Support",
      subtitle: "Get help and contact support",
    },
    {
      icon: "information-circle-outline",
      title: "About",
      subtitle: "App version and information",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color="#FFFFFF" />
          </View>
        </View>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {profileOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <View style={styles.optionIcon}>
              <Ionicons name={option.icon as any} size={24} color="#FFFFFF" />
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.signOutButton} onPress={onLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF4444" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#CCCCCC",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  optionSubtitle: {
    fontSize: 14,
    color: "#CCCCCC",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
  },
  signOutText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FF4444",
    marginLeft: 10,
  },
});
