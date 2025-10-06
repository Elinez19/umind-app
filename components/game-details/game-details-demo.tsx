import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GameDetails, sampleGameDetails } from "./game-data";
import GameDetailsScreen from "./game-details-screen";

interface GameDetailsDemoProps {
  onBack?: () => void;
}

export default function GameDetailsDemo({ onBack }: GameDetailsDemoProps) {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const currentGame = sampleGameDetails[currentGameIndex];

  const handlePurchase = (game: GameDetails) => {
    console.log(`Purchasing ${game.title} for ${game.price}`);
    // Handle purchase logic here
  };

  const handleAddToWishlist = (game: GameDetails) => {
    console.log(`Added ${game.title} to wishlist`);
    // Handle wishlist logic here
  };

  const handleBack = () => {
    onBack?.();
  };

  return (
    <View style={styles.container}>
      <GameDetailsScreen
        game={currentGame}
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
