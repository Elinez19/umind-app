import { Ionicons } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
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

  // Animation values
  const [headerAnim] = useState(new Animated.Value(0));
  const [menuAnim] = useState(new Animated.Value(0));
  const [footerAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Entrance animations with staggered timing
    Animated.stagger(200, [
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(menuAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(footerAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
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
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#2a2a2a", "#1a1a1a", "#000000"]}
      locations={[0, 0.2, 0.5, 0.8, 1]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Animated.View
          style={[
            styles.headerContent,
            {
              opacity: headerAnim,
              transform: [
                {
                  translateY: headerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.headerTitle}>uMind</Text>
          <Text style={styles.headerSubtitle}>Premium Experience</Text>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.menuContainer,
          {
            opacity: menuAnim,
            transform: [
              {
                translateY: menuAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          },
        ]}
      >
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
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={[
            styles.footerContent,
            {
              opacity: footerAnim,
              transform: [
                {
                  translateY: footerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </LinearGradient>
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
  headerContent: {
    alignItems: "center",
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
  footerContent: {
    alignItems: "center",
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
