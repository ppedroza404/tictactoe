import {
  View,
  SafeAreaView,
  ViewStyle,
  Image,
  Pressable,
  Linking,
} from "react-native";

import Utils from "../common/Utils";
import { BackgroundColor, Images } from "../common/Const";
import { ReactNode } from "react";

interface LayoutProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <View
      style={{
        backgroundColor: BackgroundColor,
        flex: 1,
        alignItems: "center",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 480,
          padding: 15,
          ...style,
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Layout;
