import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Enhanced game interface for details screen
interface GameDetails {
  id: string | number;
  title: string;
  genre: string;
  price: string;
  rating: string;
  image: { uri: string };
  description: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  platforms: string[];
  ageRating: string;
  features: string[];
  screenshots: { uri: string }[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  reviews: {
    rating: number;
    comment: string;
    author: string;
    date: string;
  }[];
}

interface GameDetailsScreenProps {
  game: GameDetails;
  onBack?: () => void;
  onPurchase?: (game: GameDetails) => void;
  onAddToWishlist?: (game: GameDetails) => void;
}

export default function GameDetailsScreen({
  game,
  onBack,
  onPurchase,
  onAddToWishlist,
}: GameDetailsScreenProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "screenshots" | "reviews"
  >("overview");
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    onAddToWishlist?.(game);
  };

  const handlePurchase = () => {
    onPurchase?.(game);
  };

  const renderStars = (rating: string) => {
    const numRating = parseFloat(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={
            i <= numRating
              ? "star"
              : i - 0.5 <= numRating
              ? "star-half"
              : "star-outline"
          }
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>About This Game</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>

      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Developer</Text>
          <Text style={styles.detailValue}>{game.developer}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Publisher</Text>
          <Text style={styles.detailValue}>{game.publisher}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Release Date</Text>
          <Text style={styles.detailValue}>{game.releaseDate}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Platforms</Text>
          <Text style={styles.detailValue}>{game.platforms.join(", ")}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Age Rating</Text>
          <Text style={styles.detailValue}>{game.ageRating}</Text>
        </View>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        {game.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.requirementsSection}>
        <Text style={styles.sectionTitle}>System Requirements</Text>
        <View style={styles.requirementsContainer}>
          <View style={styles.requirementBox}>
            <Text style={styles.requirementTitle}>Minimum</Text>
            {Object.entries(game.systemRequirements.minimum).map(
              ([key, value]) => (
                <View key={key} style={styles.requirementRow}>
                  <Text style={styles.requirementLabel}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                  <Text style={styles.requirementValue}>{value}</Text>
                </View>
              )
            )}
          </View>
          <View style={styles.requirementBox}>
            <Text style={styles.requirementTitle}>Recommended</Text>
            {Object.entries(game.systemRequirements.recommended).map(
              ([key, value]) => (
                <View key={key} style={styles.requirementRow}>
                  <Text style={styles.requirementLabel}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                  <Text style={styles.requirementValue}>{value}</Text>
                </View>
              )
            )}
          </View>
        </View>
      </View>
    </View>
  );

  const renderScreenshots = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.screenshotsContainer}
    >
      {game.screenshots.map((screenshot, index) => (
        <Image key={index} source={screenshot} style={styles.screenshot} />
      ))}
    </ScrollView>
  );

  const renderReviews = () => (
    <View style={styles.reviewsContainer}>
      {game.reviews.map((review, index) => (
        <View key={index} style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewAuthor}>{review.author}</Text>
            <View style={styles.reviewRating}>
              {renderStars(review.rating.toString())}
            </View>
          </View>
          <Text style={styles.reviewComment}>{review.comment}</Text>
          <Text style={styles.reviewDate}>{review.date}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button and wishlist */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={handleAddToWishlist}
        >
          <Ionicons
            name={isInWishlist ? "heart" : "heart-outline"}
            size={24}
            color={isInWishlist ? "#FF4444" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image source={game.image} style={styles.heroImage} />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.heroGradient}
          />

          {/* Game Info Overlay */}
          <View style={styles.heroInfo}>
            <Text style={styles.gameTitle}>{game.title}</Text>
            <View style={styles.gameMeta}>
              <View style={styles.genreContainer}>
                <Text style={styles.genre}>{game.genre}</Text>
              </View>
              <View style={styles.ratingContainer}>
                {renderStars(game.rating)}
                <Text style={styles.ratingText}>{game.rating}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Price and Purchase Section */}
        <View style={styles.priceSection}>
          <View style={styles.priceInfo}>
            <Text style={styles.price}>{game.price}</Text>
            {game.price !== "Free" && (
              <Text style={styles.priceNote}>One-time purchase</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.purchaseButton}
            onPress={handlePurchase}
          >
            <Text style={styles.purchaseButtonText}>
              {game.price === "Free" ? "Download" : "Purchase"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          {["overview", "screenshots", "reviews"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab as any)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "screenshots" && renderScreenshots()}
        {activeTab === "reviews" && renderReviews()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  wishlistButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  heroContainer: {
    position: "relative",
    height: screenHeight * 0.4,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  heroInfo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  gameMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  genreContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  genre: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginLeft: 8,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#111111",
  },
  priceInfo: {
    flex: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  priceNote: {
    fontSize: 12,
    color: "#CCCCCC",
    marginTop: 2,
  },
  purchaseButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  purchaseButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#111111",
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#CCCCCC",
  },
  activeTabText: {
    color: "#000000",
  },
  overviewContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  descriptionSection: {
    marginBottom: 25,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#CCCCCC",
  },
  detailsSection: {
    marginBottom: 25,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  detailLabel: {
    fontSize: 14,
    color: "#CCCCCC",
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
    flex: 2,
    textAlign: "right",
  },
  featuresSection: {
    marginBottom: 25,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 10,
    flex: 1,
  },
  requirementsSection: {
    marginBottom: 25,
  },
  requirementsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  requirementBox: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 8,
  },
  requirementTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  requirementRow: {
    marginBottom: 8,
  },
  requirementLabel: {
    fontSize: 12,
    color: "#CCCCCC",
    marginBottom: 2,
  },
  requirementValue: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  screenshotsContainer: {
    paddingHorizontal: 20,
  },
  screenshot: {
    width: screenWidth * 0.8,
    height: 200,
    borderRadius: 8,
    marginRight: 15,
    resizeMode: "cover",
  },
  reviewsContainer: {
    paddingHorizontal: 20,
  },
  reviewItem: {
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  reviewRating: {
    flexDirection: "row",
  },
  reviewComment: {
    fontSize: 14,
    lineHeight: 20,
    color: "#CCCCCC",
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 12,
    color: "#666666",
  },
});
