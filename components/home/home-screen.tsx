import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfiniteCarousel, { CarouselItemRenderer } from "../carousel";
import { Game, GameCard } from "../onboarding-screen";

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

// Animated cards data (same as onboarding screen)
const animatedCardsData: Game[] = [
  {
    id: 1,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39200.14145291960194275.263e78bd-2ea0-43c6-8a5b-5578131f4b02.ba171ef6-2bab-4956-b9d7-e67e253520d1?q=90&w=177&h=265",
    },
    title: "FC26",
    genre: "Sports",
    price: "$59.99",
    rating: "4.5",
  },
  {
    id: 2,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.38555.70702278257994163.e6749f0b-a7f8-4ed1-b45c-4d7a2278d946.98964621-9b9e-4333-87e3-49e2ee6a7e59?q=90&w=177&h=265",
    },
    title: "Fortnite",
    genre: "FPS",
    price: "$69.99",
    rating: "4.7",
  },
  {
    id: 3,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39619.65187692735347017.570b285d-e5b3-4030-9530-47243e7b82f8.e0f1eef8-e346-45d9-82ed-35600d3ade69?q=90&w=177&h=265",
    },
    title: "Rocket League",
    genre: "Sports",
    price: "$49.99",
    rating: "4.3",
  },
  {
    id: 4,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?q=90&w=177&h=265",
    },
    title: "The Witcher 3",
    genre: "RPG",
    price: "$39.99",
    rating: "4.9",
  },
  {
    id: 5,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.42015.13966330883349940.e8d96f51-63dc-4377-8441-88d85afdd80a.d84cbd17-ae03-4537-8641-8c33c308de78?q=90&w=177&h=265",
    },
    title: "Call of Duty",
    genre: "FPS",
    price: "$29.99",
    rating: "4.8",
  },
];

// Second animated cards data for the new section
const animatedCardsData2: Game[] = [
  {
    id: 6,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.43685.13714795037479433.563e5346-29e4-492a-a767-4bdeeb012f4d.b72cca7f-d4ab-423a-b063-d785bc30c27b?q=90&w=177&h=265",
    },
    title: "Grand Theft Auto V",
    genre: "Action",
    price: "$19.99",
    rating: "4.6",
  },
  {
    id: 7,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.9688.70804610839547354.8da93c46-fd13-4b16-8ebe-e8e02c53d93e.09c2e91e-28bd-4f6f-bfd6-79d6b241667a?q=90&w=177&h=265",
    },
    title: "Mortal Kombat 11",
    genre: "Fighting",
    price: "Free",
    rating: "4.4",
  },
  {
    id: 8,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.30063.13589262686196899.16e3418a-cbf2-4748-9724-1c9dc9b7a0b9.672da915-9117-4230-960d-4f59f3d7beb5?q=90&w=177&h=265",
    },
    title: "Among Us",
    genre: "Party Game",
    price: "$4.99",
    rating: "4.2",
  },
  {
    id: 9,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.39200.14145291960194275.263e78bd-2ea0-43c6-8a5b-5578131f4b02.ba171ef6-2bab-4956-b9d7-e67e253520d1?q=90&w=177&h=265",
    },
    title: "FIFA 24",
    genre: "Sports",
    price: "$69.99",
    rating: "4.3",
  },
  {
    id: 10,
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?q=90&w=177&h=265",
    },
    title: "Cyberpunk 2077",
    genre: "RPG",
    price: "$59.99",
    rating: "4.1",
  },
];

export default function HomeScreen({ onLogout }: HomeScreenProps) {
  // Animation values
  const [headerAnim] = useState(new Animated.Value(0));
  const [searchAnim] = useState(new Animated.Value(0));
  const [categoriesAnim] = useState(new Animated.Value(0));
  const [cardsAnim] = useState(new Animated.Value(0));
  const [cards2Anim] = useState(new Animated.Value(0));
  const [featuredAnim] = useState(new Animated.Value(0));
  const [recentAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Entrance animations with staggered timing
    Animated.stagger(150, [
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(categoriesAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(cardsAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(cards2Anim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(featuredAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(recentAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    headerAnim,
    searchAnim,
    categoriesAnim,
    cardsAnim,
    cards2Anim,
    featuredAnim,
    recentAnim,
  ]);
  const renderGameItem = ({ item }: { item: GameItem }) => {
    const handlePress = () => {
      router.push(`/game/${item.id}` as any);
    };

    return (
      <TouchableOpacity
        style={styles.gameCard}
        onPress={handlePress}
        activeOpacity={0.8}
      >
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
  };

  return (
    <LinearGradient
      colors={["#000000", "#1a1a1a", "#2a2a2a", "#1a1a1a", "#000000"]}
      locations={[0, 0.2, 0.5, 0.8, 1]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Animated.View
            style={[
              styles.header,
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
            <View>
              <Text style={styles.greeting}>Welcome back!</Text>
              <Text style={styles.subtitle}>Discover new games</Text>
            </View>
            <TouchableOpacity style={styles.profileButton} onPress={onLogout}>
              <Text style={styles.profileText}>👤</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Search Bar */}
          <Animated.View
            style={[
              styles.searchContainer,
              {
                opacity: searchAnim,
                transform: [
                  {
                    translateY: searchAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.searchIcon}>🔍</Text>
            <Text style={styles.searchPlaceholder}>Search games...</Text>
          </Animated.View>

          {/* Categories */}
          <Animated.View
            style={[
              styles.categoriesContainer,
              {
                opacity: categoriesAnim,
                transform: [
                  {
                    translateY: categoriesAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
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
          </Animated.View>

          {/* Animated Cards Section */}
          <Animated.View
            style={[
              styles.cardsSection,
              {
                opacity: cardsAnim,
                transform: [
                  {
                    translateY: cardsAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Trending Games</Text>
            <View style={styles.cardsContainer}>
              <InfiniteCarousel<Game>
                carouselItems={animatedCardsData}
                onIndexChange={() => {}}
                itemWidthRatio={0.7}
                autoPlaySpeed={50}
                renderItem={
                  (({ item }) => (
                    <GameCard game={item} />
                  )) as CarouselItemRenderer<Game>
                }
              />
            </View>
          </Animated.View>

          {/* Second Animated Cards Section */}
          <Animated.View
            style={[
              styles.cardsSection,
              {
                opacity: cards2Anim,
                transform: [
                  {
                    translateY: cards2Anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Popular Games</Text>
            <View style={styles.cardsContainer}>
              <InfiniteCarousel<Game>
                carouselItems={animatedCardsData2}
                onIndexChange={() => {}}
                itemWidthRatio={0.7}
                autoPlaySpeed={45}
                renderItem={
                  (({ item }) => (
                    <GameCard game={item} />
                  )) as CarouselItemRenderer<Game>
                }
              />
            </View>
          </Animated.View>

          {/* Featured Games */}
          <Animated.View
            style={[
              styles.featuredSection,
              {
                opacity: featuredAnim,
                transform: [
                  {
                    translateY: featuredAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Featured Games</Text>
            <FlatList
              data={featuredGames}
              renderItem={renderGameItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.gamesList}
            />
          </Animated.View>

          {/* Recent Activity */}
          <Animated.View
            style={[
              styles.recentSection,
              {
                opacity: recentAnim,
                transform: [
                  {
                    translateY: recentAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityCard}>
              <Text style={styles.activityText}>
                You haven&apos;t played any games yet
              </Text>
              <Text style={styles.activitySubtext}>
                Start exploring to see your activity here
              </Text>
            </View>
          </Animated.View>
        </ScrollView>
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
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  cardsSection: {
    marginBottom: 32,
  },
  cardsContainer: {
    height: 300,
    marginTop: 16,
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
