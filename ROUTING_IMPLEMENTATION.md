# Game Details Screen Routing Implementation

This document describes the implementation of the game details screen using Expo Router with route grouping and dynamic routes.

## Route Structure

```
app/
├── _layout.tsx              # Root layout with Stack navigator
├── index.tsx                # Main entry point (redirects to tabs)
├── (tabs)/                  # Tab group
│   ├── _layout.tsx          # Tab navigator layout
│   ├── index.tsx            # Home tab
│   ├── search.tsx           # Search tab
│   ├── profile.tsx          # Profile tab
│   └── settings.tsx         # Settings tab
└── game/
    └── [id].tsx             # Dynamic route for game details
```

## Implementation Details

### 1. Route Groups

- **`(tabs)`**: Groups all tab-related routes together
- **`game`**: Contains game-specific routes

### 2. Dynamic Routes

- **`[id].tsx`**: Dynamic route that captures game ID from URL
- Uses `useLocalSearchParams()` to get the game ID
- Automatically finds the game from sample data

### 3. Navigation Flow

#### From Home Screen:

1. **Game Cards**: Click on any game card in carousels
2. **Featured Games**: Click on featured game items
3. **Navigation**: `router.push(\`/game/\${gameId}\`)`

#### To Game Details:

1. **URL**: `/game/1`, `/game/2`, etc.
2. **Component**: `app/game/[id].tsx`
3. **Data**: Finds game by ID from `sampleGameDetails`

### 4. Key Features

#### Dynamic Route Handler (`app/game/[id].tsx`):

- Extracts game ID from URL parameters
- Finds corresponding game data
- Handles invalid game IDs with error alert
- Provides purchase and wishlist functionality

#### Navigation Integration:

- **GameCard Component**: Added `onPress` handler
- **Home Screen**: Added navigation to featured games
- **Router**: Uses Expo Router for type-safe navigation

#### Error Handling:

- Invalid game IDs show alert and navigate back
- Graceful fallback for missing game data

## Usage Examples

### Navigate to Game Details:

```tsx
import { router } from "expo-router";

// Navigate to specific game
router.push(`/game/${gameId}` as any);
```

### Access Game Data in Details Screen:

```tsx
import { useLocalSearchParams } from "expo-router";

export default function GameDetailsPage() {
  const { id } = useLocalSearchParams();
  const game = sampleGameDetails.find((g) => g.id.toString() === id);

  if (!game) {
    // Handle invalid game ID
    return <ErrorComponent />;
  }

  return <GameDetailsScreen game={game} />;
}
```

## File Structure

### App Routes:

- `app/_layout.tsx`: Root stack navigator
- `app/(tabs)/_layout.tsx`: Tab navigator with 4 tabs
- `app/(tabs)/index.tsx`: Home screen with game navigation
- `app/game/[id].tsx`: Dynamic game details route

### Components:

- `components/game-details/`: Complete game details implementation
- `components/onboarding-screen.tsx`: Updated GameCard with navigation
- `components/home/home-screen.tsx`: Added navigation to featured games

## Navigation Flow

1. **User opens app** → Redirected to `/(tabs)`
2. **User browses home** → Sees game cards and featured games
3. **User taps game** → Navigates to `/game/{id}`
4. **Game details loads** → Shows full game information
5. **User can navigate back** → Returns to previous screen

## Type Safety

- Uses TypeScript for route parameters
- Type assertions for dynamic routes (`as any`)
- Proper typing for game data interfaces
- Error handling for invalid routes

## Future Enhancements

- Add deep linking support
- Implement search result navigation
- Add game categories and filtering
- Support for user reviews and ratings
- Integration with backend API
