import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import {
  GameDetails,
  sampleGameDetails,
} from "../../components/game-details/game-data";
import GameDetailsScreen from "../../components/game-details/game-details-screen";

export default function GameDetailsPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Find the game by ID
  const game = sampleGameDetails.find((g) => g.id.toString() === id);

  if (!game) {
    // If game not found, show alert and navigate back
    Alert.alert("Game Not Found", "The requested game could not be found.", [
      { text: "OK", onPress: () => router.back() },
    ]);
    return <View style={styles.container} />;
  }

  const handleBack = () => {
    router.back();
  };

  const handlePurchase = (game: GameDetails) => {
    Alert.alert(
      "Purchase Game",
      `Would you like to purchase ${game.title} for ${game.price}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Purchase",
          onPress: () => {
            Alert.alert("Success", "Purchase completed successfully!");
          },
        },
      ]
    );
  };

  const handleAddToWishlist = (game: GameDetails) => {
    Alert.alert("Wishlist", `${game.title} has been added to your wishlist!`);
  };

  return (
    <View style={styles.container}>
      <GameDetailsScreen
        game={game}
        onBack={handleBack}
        onPurchase={handlePurchase}
        onAddToWishlist={handleAddToWishlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
