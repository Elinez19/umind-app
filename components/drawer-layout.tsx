import { Ionicons } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface DrawerItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route?: string;
}

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const router = useRouter();
  const drawerItems: DrawerItem[] = [
    {
      id: "home",
      title: "Home",
      icon: "home-outline",
      route: "/",
    },
    {
      id: "profile",
      title: "Profile",
      icon: "person-outline",
      route: "/profile",
    },
    {
      id: "settings",
      title: "Settings",
      icon: "settings-outline",
      route: "/settings",
    },
    {
      id: "help",
      title: "Help & Support",
      icon: "help-circle-outline",
      route: "/help",
    },
  ];

  const handleNavigation = (route: string) => {
    router.push(route as any);
    props.navigation.closeDrawer();
  };

  const handleLogout = () => {
    // Add logout logic here
    router.push("/auth" as any);
    props.navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>uMind</Text>
        <Text style={styles.headerSubtitle}>Premium Experience</Text>
      </View>

      <ScrollView style={styles.menuContainer}>
        {drawerItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.route || "/")}
            activeOpacity={0.7}
          >
            <Ionicons name={item.icon} size={24} color="#FFFFFF" />
            <Text style={styles.menuItemText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#CCCCCC",
    fontWeight: "300",
  },
  menuContainer: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  menuItemText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 16,
    fontWeight: "500",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingTop: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#1A1A1A",
  },
  logoutText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 16,
    fontWeight: "500",
  },
});
