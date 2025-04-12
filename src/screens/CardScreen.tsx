import React, { useRef } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { BlurView } from 'expo-blur';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const TransactionsScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [22, 16],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill} />
        <Animated.Text style={[styles.cardTitle, { fontSize: headerFontSize }]}>
          Syariah Card •••• 3456
        </Animated.Text>
        <Text style={styles.cardDetail}>Spending Limit: $24,000.00</Text>
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT + 16, paddingBottom: 60 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={i} style={styles.transactionRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {i % 2 === 0 ? 'AB' : 'RH'}
              </Text>
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.transactionName}>
                {i % 2 === 0 ? 'Anne Brown' : 'Ruth Henry'}
              </Text>
              <Text style={styles.transactionDate}>Sep 10, 2024</Text>
            </View>
            <Text style={styles.transactionAmount}>+ $1,000</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: 16,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 115, 119, 0.5)',
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardDetail: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 14,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#007377',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '600',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007377',
  },
});
