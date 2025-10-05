import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ForgotPasswordScreen from "./forgot-password-screen";
import LoginScreen from "./login-screen";
import SignupScreen from "./signup-screen";

type AuthScreen = "login" | "signup" | "forgot-password";

interface AuthWrapperProps {
  onAuthSuccess: () => void;
}

export default function AuthWrapper({ onAuthSuccess }: AuthWrapperProps) {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("login");

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

  return <View style={styles.container}>{renderCurrentScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
