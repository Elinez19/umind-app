# Tab Navigation Setup

This document describes the tab navigation implementation in the uMind app.

## Overview

The app now includes a comprehensive tab navigation system with four main tabs:

- **Home**: Main dashboard with featured content
- **Search**: Search functionality with recent searches and suggestions
- **Profile**: User profile management and account settings
- **Settings**: App preferences and configuration options

## Tab Structure

### 1. Tab Layout (`components/tab-layout.tsx`)

- Main tab navigator component using `@react-navigation/bottom-tabs`
- Premium black and white color scheme [[memory:7027780]]
- Bottom tab bar with icons and labels
- Supports logout functionality

### 2. Tab Screens

#### Home Screen (`components/home/home-screen.tsx`)

- Main dashboard with featured content
- Carousel of featured items
- Quick access to main features
- Logout functionality

#### Search Screen (`components/search/search-screen.tsx`)

- Search input with real-time functionality
- Recent searches display
- Suggestions based on categories
- Search results with filtering

#### Profile Screen (`components/profile/profile-screen.tsx`)

- User avatar and information
- Account management options
- Privacy and security settings
- Sign out functionality

#### Settings Screen (`components/settings/settings-screen.tsx`)

- Toggle switches for various preferences
- Security settings
- Data management options
- About and support information

## Features

- **Premium Design**: Black and white color scheme for luxury feel
- **Smooth Navigation**: Native tab navigation with smooth transitions
- **Icon Integration**: Ionicons for consistent iconography
- **Responsive Layout**: Optimized for different screen sizes
- **State Management**: Proper state handling for toggles and preferences

## Usage

The tab navigation is automatically activated when users complete the authentication flow. The `AppWrapper` component manages the transition from onboarding → authentication → tab navigation.

## Customization

To add new tabs:

1. Create a new screen component in the appropriate directory
2. Import it in `tab-layout.tsx`
3. Add a new `Tab.Screen` with appropriate icon and options
4. Update the tab bar styling if needed

## Dependencies

- `@react-navigation/bottom-tabs`: Bottom tab navigation
- `@expo/vector-icons`: Icon library
- `react-native`: Core React Native components
