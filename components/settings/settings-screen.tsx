import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  const settingSections = [
    {
      title: "General",
      items: [
        {
          icon: "notifications-outline",
          title: "Push Notifications",
          subtitle: "Receive notifications about updates",
          type: "toggle",
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        {
          icon: "moon-outline",
          title: "Dark Mode",
          subtitle: "Use dark theme throughout the app",
          type: "toggle",
          value: darkModeEnabled,
          onToggle: setDarkModeEnabled,
        },
        {
          icon: "sync-outline",
          title: "Auto Sync",
          subtitle: "Automatically sync your data",
          type: "toggle",
          value: autoSyncEnabled,
          onToggle: setAutoSyncEnabled,
        },
      ],
    },
    {
      title: "Security",
      items: [
        {
          icon: "finger-print-outline",
          title: "Biometric Authentication",
          subtitle: "Use fingerprint or face ID to unlock",
          type: "toggle",
          value: biometricEnabled,
          onToggle: setBiometricEnabled,
        },
        {
          icon: "shield-outline",
          title: "Two-Factor Authentication",
          subtitle: "Add an extra layer of security",
          type: "navigate",
        },
        {
          icon: "lock-closed-outline",
          title: "Change Password",
          subtitle: "Update your account password",
          type: "navigate",
        },
      ],
    },
    {
      title: "Data & Storage",
      items: [
        {
          icon: "cloud-outline",
          title: "Cloud Backup",
          subtitle: "Backup your data to the cloud",
          type: "navigate",
        },
        {
          icon: "trash-outline",
          title: "Clear Cache",
          subtitle: "Free up storage space",
          type: "navigate",
        },
        {
          icon: "download-outline",
          title: "Export Data",
          subtitle: "Download your data",
          type: "navigate",
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          icon: "information-circle-outline",
          title: "App Version",
          subtitle: "1.0.0",
          type: "info",
        },
        {
          icon: "document-text-outline",
          title: "Terms of Service",
          subtitle: "Read our terms and conditions",
          type: "navigate",
        },
        {
          icon: "shield-checkmark-outline",
          title: "Privacy Policy",
          subtitle: "Learn how we protect your data",
          type: "navigate",
        },
        {
          icon: "help-circle-outline",
          title: "Help & Support",
          subtitle: "Get help or contact us",
          type: "navigate",
        },
      ],
    },
  ];

  const renderSettingItem = (item: any, index: number) => {
    return (
      <TouchableOpacity key={index} style={styles.settingItem}>
        <View style={styles.settingIcon}>
          <Ionicons name={item.icon as any} size={24} color="#FFFFFF" />
        </View>
        <View style={styles.settingContent}>
          <Text style={styles.settingTitle}>{item.title}</Text>
          <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.settingAction}>
          {item.type === "toggle" ? (
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ false: "#333333", true: "#FFFFFF" }}
              thumbColor={item.value ? "#000000" : "#CCCCCC"}
            />
          ) : (
            <Ionicons name="chevron-forward" size={20} color="#666666" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {settingSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionContent}>
            {section.items.map((item, itemIndex) =>
              renderSettingItem(item, itemIndex)
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  sectionContent: {
    backgroundColor: "#111111",
    borderRadius: 12,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#CCCCCC",
  },
  settingAction: {
    marginLeft: 10,
  },
});
