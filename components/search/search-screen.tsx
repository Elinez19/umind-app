import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
    "React Native",
    "Expo Router",
    "Navigation",
    "TypeScript",
    "Mobile Development",
  ]);

  const [suggestions] = useState([
    {
      id: "1",
      title: "Getting Started Guide",
      category: "Documentation",
      icon: "document-text-outline",
    },
    {
      id: "2",
      title: "API Reference",
      category: "Technical",
      icon: "code-outline",
    },
    {
      id: "3",
      title: "Best Practices",
      category: "Guide",
      icon: "star-outline",
    },
    {
      id: "4",
      title: "Troubleshooting",
      category: "Help",
      icon: "help-circle-outline",
    },
    {
      id: "5",
      title: "Performance Tips",
      category: "Optimization",
      icon: "speedometer-outline",
    },
  ]);

  const [searchResults] = useState([
    {
      id: "1",
      title: "React Native Tutorial",
      description: "Learn the basics of React Native development",
      category: "Tutorial",
    },
    {
      id: "2",
      title: "Expo Router Setup",
      description: "How to set up navigation in your Expo app",
      category: "Setup",
    },
    {
      id: "3",
      title: "State Management",
      description: "Managing state in React Native applications",
      category: "Advanced",
    },
  ]);

  const renderRecentSearch = (item: string, index: number) => (
    <TouchableOpacity key={index} style={styles.recentItem}>
      <Ionicons name="time-outline" size={16} color="#666666" />
      <Text style={styles.recentText}>{item}</Text>
      <Ionicons name="close" size={16} color="#666666" />
    </TouchableOpacity>
  );

  const renderSuggestion = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.suggestionItem}>
      <View style={styles.suggestionIcon}>
        <Ionicons name={item.icon} size={20} color="#FFFFFF" />
      </View>
      <View style={styles.suggestionContent}>
        <Text style={styles.suggestionTitle}>{item.title}</Text>
        <Text style={styles.suggestionCategory}>{item.category}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#666666" />
    </TouchableOpacity>
  );

  const renderSearchResult = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.resultDescription}>{item.description}</Text>
        <View style={styles.resultCategory}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <Text style={styles.headerTitle}>Search</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#666666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for anything..."
            placeholderTextColor="#666666"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#666666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.content}>
        {searchQuery.length === 0 ? (
          <>
            {/* Recent Searches */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recent Searches</Text>
                <TouchableOpacity>
                  <Text style={styles.clearAllText}>Clear All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recentContainer}>
                {recentSearches.map(renderRecentSearch)}
              </View>
            </View>

            {/* Suggestions */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Suggestions</Text>
              <FlatList
                data={suggestions}
                renderItem={renderSuggestion}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
              />
            </View>
          </>
        ) : (
          /* Search Results */
          <View style={styles.section}>
            <Text style={styles.resultsHeader}>
              {searchResults.length} results for "{searchQuery}"
            </Text>
            <FlatList
              data={searchResults}
              renderItem={renderSearchResult}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  searchHeader: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  clearAllText: {
    fontSize: 14,
    color: "#666666",
  },
  recentContainer: {
    gap: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    padding: 12,
    borderRadius: 8,
  },
  recentText: {
    flex: 1,
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  suggestionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  suggestionCategory: {
    fontSize: 14,
    color: "#CCCCCC",
  },
  resultsHeader: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 15,
  },
  resultItem: {
    backgroundColor: "#111111",
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },
  resultContent: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  resultDescription: {
    fontSize: 14,
    color: "#CCCCCC",
    marginBottom: 8,
  },
  resultCategory: {
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 12,
    color: "#FFFFFF",
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
