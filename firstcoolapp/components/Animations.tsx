import React from "react";
import { useRef, useEffect, ReactNode } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";





interface FadeInViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>
}

const FadeInView = ({ children, style }: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false   // without this, u wouldnt be able to run it on a mobile app 
      }
    ).start();
  },[fadeAnim])

  return (
    <Animated.View style={{
    ...(style as object),  // added in the fade in effect, after this we have to assign it
    opacity: fadeAnim,  
    }}>
     {children}
    </Animated.View>
)

}

export default FadeInView;