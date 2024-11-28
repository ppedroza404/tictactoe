import GameScreen from '@/screens/GameScreen';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import 'react-native-reanimated';
import { BackgroundColor, Font, Images } from "../common/Const";
import Utils from '@/common/Utils';
import * as Fonts from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackgroundColor,
  },
  splashContainer: {
    backgroundColor: BackgroundColor
  },
  splashImage: {
    width: '80%',
    height: '80%', 
  }
});

export default function Home() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await Fonts.loadAsync({
        [Font.FontName]: Font.FontFile,
      });
      await Utils.Sleep(2);
      setIsFontLoaded(true);
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!isFontLoaded) {
    return (
      <View>
        <Image
          source={Images.Splash}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <GameScreen />
      <StatusBar style="light" />
    </View>
  );
}