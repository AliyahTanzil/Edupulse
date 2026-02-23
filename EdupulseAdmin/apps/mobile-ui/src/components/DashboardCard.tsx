import React, { useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';

interface DashboardCardProps {
  title: string;
  icon?: string;
  color: string;
  onPress: () => void;
  description?: string;
}

const { width } = Dimensions.get('window');
const COLUMNS = 5;
const MARGIN = 4;
const CARD_SIZE = (width - (MARGIN * 2 * (COLUMNS + 1))) / COLUMNS;

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  color,
  onPress,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.90,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        {
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
          backgroundColor: color,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.pressable}
        android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: true }}
      >
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.glassEffect} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: 12,
    margin: MARGIN,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  pressable: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  glassEffect: {
    position: 'absolute',
    top: -CARD_SIZE * 0.3,
    right: -CARD_SIZE * 0.3,
    width: CARD_SIZE * 0.8,
    height: CARD_SIZE * 0.8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: (CARD_SIZE * 0.8) / 2,
    zIndex: 1,
  },
  title: {
    fontSize: 9,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  description: {
    display: 'none', // Too small for 5-column layout
  },
});

export default DashboardCard;
