import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import ForgotPasswordScreen from "./forgot-password-screen";
import LoginScreen from "./login-screen";
import SignupScreen from "./signup-screen";

type AuthScreen = "login" | "signup" | "forgot-password";

interface AuthWrapperProps {
  onAuthSuccess: () => void;
}

export default function AuthWrapper({ onAuthSuccess }: AuthWrapperProps) {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("login");
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Trigger fade animation when screen changes
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentScreen]);

  const handleLogin = async (email: string, password: string) => {
    // Simulate login - replace with actual authentication logic
    console.log("Login attempt:", { email, password });
    // For demo purposes, accept any credentials
    onAuthSuccess();
  };

  const handleSignup = async (
    name: string,
    email: string,
    password: string
  ) => {
    // Simulate signup - replace with actual authentication logic
    console.log("Signup attempt:", { name, email, password });
    // For demo purposes, accept any credentials
    onAuthSuccess();
  };

  const handleResetPassword = async (email: string) => {
    // Simulate password reset - replace with actual logic
    console.log("Password reset for:", email);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onLogin={handleLogin}
            onNavigateToSignup={() => setCurrentScreen("signup")}
            onNavigateToForgotPassword={() =>
              setCurrentScreen("forgot-password")
            }
          />
        );
      case "signup":
        return (
          <SignupScreen
            onSignup={handleSignup}
            onNavigateToLogin={() => setCurrentScreen("login")}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordScreen
            onResetPassword={handleResetPassword}
            onNavigateBack={() => setCurrentScreen("login")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.screenContainer, { opacity: fadeAnim }]}>
        {renderCurrentScreen()}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
});
