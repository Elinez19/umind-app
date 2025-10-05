import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeScreenProps {
  onLogout: () => void;
}

interface GameItem {
  id: string;
  title: string;
  genre: string;
  price: string;
  rating: string;
  image: { uri: string };
}

const featuredGames: GameItem[] = [
  {
    id: "1",
    title: "The Witcher 3",
    genre: "RPG",
    price: "$39.99",
    rating: "4.9",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?q=90&w=177&h=265",
    },
  },
  {
    id: "2",
    title: "Fortnite",
    genre: "Battle Royale",
    price: "Free",
    rating: "4.7",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.38555.70702278257994163.e6749f0b-a7f8-4ed1-b45c-4d7a2278d946.98964621-9b9e-4333-87e3-49e2ee6a7e59?q=90&w=177&h=265",
    },
  },
  {
    id: "3",
    title: "Call of Duty",
    genre: "FPS",
    price: "$69.99",
    rating: "4.8",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.42015.13966330883349940.e8d96f51-63dc-4377-8441-88d85afdd80a.d84cbd17-ae03-4537-8641-8c33c308de78?q=90&w=177&h=265",
    },
  },
  {
    id: "4",
    title: "Rocket League",
    genre: "Sports",
    price: "$19.99",
    rating: "4.3",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39619.65187692735347017.570b285d-e5b3-4030-9530-47243e7b82f8.e0f1eef8-e346-45d9-82ed-35600d3ade69?q=90&w=177&h=265",
    },
  },
];

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  const renderGameItem = ({ item }: { item: GameItem }) => (
    <TouchableOpacity style={styles.gameCard}>
      <Image source={item.image} style={styles.gameImage} />
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameGenre}>{item.genre}</Text>
        <View style={styles.gameFooter}>
          <Text style={styles.gamePrice}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#000000"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.subtitle}>Discover new games</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} onPress={onLogout}>
            <Text style={styles.profileText}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchPlaceholder}>Search games...</Text>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            {["All", "Action", "RPG", "Sports", "FPS", "Adventure"].map(
              (category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryChip,
                    category === "All" && styles.categoryChipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      category === "All" && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Featured Games */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Games</Text>
          <FlatList
            data={featuredGames}
            renderItem={renderGameItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gamesList}
          />
        </View>

        {/* Recent Activity */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityText}>
              You haven't played any games yet
            </Text>
            <Text style={styles.activitySubtext}>
              Start exploring to see your activity here
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
    marginTop: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  searchPlaceholder: {
    fontSize: 16,
    color: "rgba(255,255,255,0.5)",
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesScroll: {
    paddingRight: 20,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginRight: 12,
  },
  categoryChipActive: {
    backgroundColor: "#ffffff",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(255,255,255,0.8)",
  },
  categoryTextActive: {
    color: "#000000",
  },
  featuredSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 16,
  },
  gamesList: {
    paddingRight: 20,
  },
  gameCard: {
    width: 160,
    marginRight: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    overflow: "hidden",
  },
  gameImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  gameInfo: {
    padding: 12,
  },
  gameTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 4,
  },
  gameGenre: {
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
    marginBottom: 8,
  },
  gameFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gamePrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },
  recentSection: {
    flex: 1,
  },
  activityCard: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  activityText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: 8,
  },
  activitySubtext: {
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
  },
});
