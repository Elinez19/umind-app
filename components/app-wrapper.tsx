import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AuthWrapper from "./auth/auth-wrapper";
import HomeScreen from "./home/home-screen";
import GameStoreHero from "./onboarding-screen";

type AppScreen = "onboarding" | "auth" | "home";

export default function AppWrapper() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("onboarding");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        return <HomeScreen onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderCurrentScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
