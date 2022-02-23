# Installation

## Clone the repository and install dependencies

```
git clone https://github.com/htl-anichstrasse/skater-app.git
cd mobile
npm install
```

## Provide Google Maps API key

1. Get an API key from the Google Cloud Platform and activate Maps SDK for Android
2. Open mobile/android/ in Android Studio
3. Edit Gradle Scripts > local.properties => add MAPS_API_KEY variable and insert your API key

```
...
sdk.dir=C\:\\Users\\user\\AppData\\Local\\Android\\Sdk
MAPS_API_KEY=AIzaS...by1c_8
```

## Build and run
1. Sync your project with the Gradle Files
2. Start Metro bundler and run

```
npm start
npm run android
```

Alternatively, you can run the app through Android Studio.

