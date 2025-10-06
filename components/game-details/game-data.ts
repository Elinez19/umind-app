// Enhanced game data for details screen
export interface GameDetails {
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

export const sampleGameDetails: GameDetails[] = [
  {
    id: "1",
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    price: "$39.99",
    rating: "4.9",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.53717.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.80ba72da-abfb-4af6-81f2-a443d12fb870?q=90&w=177&h=265",
    },
    description:
      "The Witcher 3: Wild Hunt is a story-driven, next-generation open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    releaseDate: "May 19, 2015",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    ageRating: "M (Mature 17+)",
    features: [
      "Open world adventure with 100+ hours of gameplay",
      "Complex narrative with meaningful choices",
      "Advanced combat system with magic and alchemy",
      "Monster hunting with unique strategies",
      "Rich character progression and customization",
      "Beautiful graphics and atmospheric soundtrack",
    ],
    screenshots: [
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co1wyy.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co1wyz.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co1wz0.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co1wz1.jpg",
      },
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
        memory: "6 GB RAM",
        graphics: "NVIDIA GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
        storage: "35 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz",
        memory: "8 GB RAM",
        graphics: "NVIDIA GPU GeForce GTX 770 / AMD GPU Radeon R9 290",
        storage: "35 GB available space",
      },
    },
    reviews: [
      {
        rating: 5,
        comment:
          "Absolutely incredible game. The story, characters, and world-building are masterful. One of the best RPGs ever made.",
        author: "GamingMaster",
        date: "2024-01-15",
      },
      {
        rating: 5,
        comment:
          "The attention to detail is phenomenal. Every quest feels meaningful and the choices actually matter. Highly recommended!",
        author: "RPGfan",
        date: "2024-01-10",
      },
      {
        rating: 4,
        comment:
          "Great game with amazing graphics and story. Some minor bugs but overall an excellent experience.",
        author: "GameReviewer",
        date: "2024-01-08",
      },
    ],
  },
  {
    id: "2",
    title: "Fortnite",
    genre: "Battle Royale",
    price: "Free",
    rating: "4.7",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.38555.70702278257994163.6749f0b-a7f8-4ed1-b45c-4d7a2278d946.98964621-9b9e-4333-87e3-49e2ee6a7e59?q=90&w=177&h=265",
    },
    description:
      "Fortnite is a free-to-play Battle Royale game with hundreds of millions of players worldwide. Drop into the Battle Royale and be the last player standing in a game mode that combines PvP combat with base building. Join forces with a friend or squad in Duos or Squads mode.",
    developer: "Epic Games",
    publisher: "Epic Games",
    releaseDate: "July 25, 2017",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
    ageRating: "T (Teen 13+)",
    features: [
      "Free-to-play Battle Royale gameplay",
      "Building mechanics for strategic advantage",
      "Regular content updates and new seasons",
      "Cross-platform play support",
      "Creative mode for custom experiences",
      "Collaborative events and concerts",
    ],
    screenshots: [
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2abc.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2abd.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2abe.jpg",
      },
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i3-3225 3.3 GHz",
        memory: "4 GB RAM",
        graphics: "Intel HD 4000",
        storage: "16 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7300U 3.5 GHz / AMD Ryzen 3 3300U",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960 / AMD R9 280",
        storage: "16 GB available space",
      },
    },
    reviews: [
      {
        rating: 4,
        comment:
          "Fun and addictive battle royale game. The building mechanics add a unique twist to the genre.",
        author: "BattleRoyaleFan",
        date: "2024-01-20",
      },
      {
        rating: 5,
        comment:
          "Great game to play with friends. Constantly updated with new content and events.",
        author: "SquadPlayer",
        date: "2024-01-18",
      },
      {
        rating: 3,
        comment:
          "Good game but can be repetitive after a while. The building aspect is interesting though.",
        author: "CasualGamer",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: "3",
    title: "Call of Duty: Modern Warfare",
    genre: "FPS",
    price: "$69.99",
    rating: "4.8",
    image: {
      uri: "https://store-images.s-microsoft.com/image/apps.42015.13966330883349940.e8d96f51-63dc-4377-8441-88d85afdd80a.d84cbd17-ae03-4537-8641-8c33c308de78?q=90&w=177&h=265",
    },
    description:
      "Call of Duty: Modern Warfare is a first-person shooter video game. The single-player campaign follows a CIA officer and British SAS forces as they team up with rebels from the fictional country of Urzikstan, combating together against Russian forces who have invaded the country.",
    developer: "Infinity Ward",
    publisher: "Activision",
    releaseDate: "October 25, 2019",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    ageRating: "M (Mature 17+)",
    features: [
      "Intense single-player campaign",
      "Multiplayer with various game modes",
      "Battle Royale Warzone mode",
      "Cross-platform play",
      "Regular content updates",
      "Realistic graphics and audio",
    ],
    screenshots: [
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2def.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2deg.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2deh.jpg",
      },
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4340 / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 670 / AMD Radeon HD 7950",
        storage: "175 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K / AMD Ryzen R5 1600X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 390",
        storage: "175 GB available space",
      },
    },
    reviews: [
      {
        rating: 5,
        comment:
          "Excellent campaign and solid multiplayer. The graphics and sound design are top-notch.",
        author: "FPSEnthusiast",
        date: "2024-01-22",
      },
      {
        rating: 4,
        comment:
          "Great game but the file size is massive. Gameplay is smooth and engaging.",
        author: "ModernWarfareFan",
        date: "2024-01-19",
      },
      {
        rating: 4,
        comment:
          "Good addition to the Call of Duty franchise. Warzone mode is particularly fun.",
        author: "CODPlayer",
        date: "2024-01-16",
      },
    ],
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
    description:
      "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special 'Mutators' that let you change the rules entirely, and more than 500 trillion possible cosmetic customization combinations.",
    developer: "Psyonix",
    publisher: "Psyonix",
    releaseDate: "July 7, 2015",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    ageRating: "E (Everyone)",
    features: [
      "Fast-paced soccer with rocket-powered cars",
      "Cross-platform multiplayer",
      "Customizable cars and arenas",
      "Ranked and casual playlists",
      "Regular tournaments and events",
      "Training modes for skill improvement",
    ],
    screenshots: [
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2ghi.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2ghj.jpg",
      },
      {
        uri: "https://images.igdb.com/igdb/image/upload/t_screenshot_med/co2ghk.jpg",
      },
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "2.5 GHz Dual-core",
        memory: "4 GB RAM",
        graphics: "DirectX 11 Compatible",
        storage: "20 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "3.0+ GHz Quad-core",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 470",
        storage: "20 GB available space",
      },
    },
    reviews: [
      {
        rating: 5,
        comment:
          "Addictive and fun! Easy to learn but hard to master. Great game to play with friends.",
        author: "RocketLeaguePro",
        date: "2024-01-25",
      },
      {
        rating: 4,
        comment:
          "Unique concept executed well. The physics are satisfying and the gameplay is smooth.",
        author: "SportsGamer",
        date: "2024-01-21",
      },
      {
        rating: 3,
        comment:
          "Fun game but can get repetitive. Good for short gaming sessions.",
        author: "CasualPlayer",
        date: "2024-01-17",
      },
    ],
  },
];
