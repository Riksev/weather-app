# React Native Weather Dashboard

A cross-platform mobile weather application providing real-time meteorological data. Engineered for both iOS and Android environments using a unified JavaScript codebase.

## 🛠 Tech Stack
- **Framework:** React Native, Expo
- **API:** OpenWeatherMap
- **Navigation:** React Navigation

## 🏗 Architecture & Technical Decisions

- **Asynchronous Data Handling:** Built a robust data-fetching layer to query external weather APIs. Implemented explicit UI states (Loading, Success, Error) to prevent blank screens during network latency.
- **Device API Integration:** Utilised Expo Location services to fetch accurate longitudinal and latitudinal coordinates, ensuring the user immediately sees local weather upon granting permissions.
- **Graceful Error Fallbacks:** Engineered error boundaries and fallback UI components to handle scenarios where the user denies location permissions or the mobile device loses network connectivity.

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/Riksev/weather-app.git

# Install dependencies
npm install

# Run on iOS simulator or Android emulator
npx expo start
