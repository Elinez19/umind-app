import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthWrapper from "./auth/auth-wrapper";
import HomeScreen from "./home/home-screen";
import GameStoreHero from "./onboarding-screen";

type AppScreen = "onboarding" | "auth" | "home";

export default function AppWrapper() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  const handleOnboardingComplete = () => {
    setCurrentScreen("auth");
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentScreen("home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen("auth");
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "onboarding":
        return (
          <GameStoreHero
            ctaLabel="Get Started"
            onCTAPress={handleOnboardingComplete}
          />
        );
      case "auth":
        return <AuthWrapper onAuthSuccess={handleAuthSuccess} />;
      case "home":
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>uMind</Text>
              </View>
            </View>
            <HomeScreen onLogout={handleLogout} />
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderCurrentScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#1A1A1A",
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
  },
  headerTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
