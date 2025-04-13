import React, { useRef, useState, useLayoutEffect } from "react";
import {
  Animated,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import { useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useBiometric } from "../context/BiometricContext";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 180;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: 16,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardDetail: {
    fontFamily: "GilroyMedium",
    color: "#ddd",
    fontSize: 14,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 14,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "rgb(0, 0, 0)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: "GilroyMedium",

    color: "#fff",
    fontWeight: "600",
  },
  transactionName: {
    fontFamily: "GilroyMedium",

    fontSize: 16,
    fontWeight: "500",
  },
  transactionDate: {
    fontFamily: "GilroyMedium",

    fontSize: 12,
    color: "#999",
  },
  transactionAmount: {
    fontFamily: "GilroyMedium",

    fontSize: 16,
    fontWeight: "600",
    color: "#007377",
  },
  transactionAmountNeg: {
    fontFamily: "GilroyMedium",

    fontSize: 16,
    fontWeight: "600",
    color: "rgb(218, 33, 33)",
  },
});

const TransactionsScreen = ({ route, navigation }: any) => {
  const { card } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const { isAuthenticated, triggerAuth } = useBiometric();
  const [refreshing, setRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 0 }}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      theme.fonts.headlineSmall.fontSize,
      theme.fonts.titleLarge.fontSize,
    ],
    extrapolate: "clamp",
  });

  const names = [
    "Aisyah Rahman",
    "Ahmad Zulkifli",
    "Siti Nurhaliza",
    "Hafiz Badrul",
    "Nurul Izzah",
    "Faizal Jamal",
    "Syafiqah Amin",
    "Zainal Abidin",
    "Farah Nadia",
    "Amir Hamzah",
    "Rashidah Hassan",
    "Hakim Salleh",
    "Liyana Musa",
    "Firdaus Azmi",
    "Adibah Karim",
    "Nabila Yusuf",
    "Shafiq Rahim",
    "Hidayah Khalid",
    "Ismail Omar",
    "Aminah Zain",
  ];

  const getRandomAmount = () => {
    const amount = (Math.random() * 1000 + 10).toFixed(2);
    return `RM${amount}`;
  };

  const getIsPositive = () => {
    return Math.random() > 0.5;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.header,
          { height: headerHeight, backgroundColor: card.bgColor },
        ]}
      >
        <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
        <Animated.Text
          style={[
            {
              color: "#fff",
              fontFamily: theme.fonts.displayMedium.fontFamily,
              fontWeight: theme.fonts.displayMedium.fontWeight,
              lineHeight: theme.fonts.displayMedium.lineHeight,
            },
            { fontSize: headerFontSize },
          ]}
        >
          {`${card.title} ${card.number}`}
        </Animated.Text>
        <Text style={styles.cardDetail}>{card.bank}</Text>
        <Text style={styles.cardDetail}>Spending Limit: {card.limit}</Text>
      </Animated.View>

      <Animated.ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}
        contentContainerStyle={{
          paddingTop: HEADER_MAX_HEIGHT - 50,
          paddingBottom: 60,
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const name = names[i % names.length];
          const date = new Date(Date.now() - i * 86400000)
            .toISOString()
            .split("T")[0];
          const initials = name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
          const type = i % 2 === 0 ? "credit" : "debit";

          const amount = getRandomAmount();
          const isPositive = getIsPositive();
          return (
            <TouchableOpacity
              key={`${initials}_${i}_${amount}_card_touchable`}
              onPress={() => {
                if (isAuthenticated) {
                  navigation.navigate("TransactionDetail", {
                    transaction: {
                      id: "PG27VH56UQZ",
                      name: name,
                      amount: amount,
                      date: date,
                      description: "Some random description",
                      type: type,
                    },
                  });
                  return;
                }
                triggerAuth().then(() => {
                  navigation.navigate("TransactionDetail", {
                    transaction: {
                      id: "PG27VH56UQZ",
                      name: name,
                      amount: amount,
                      date: date,
                      description: "Some random description",
                      type: type,
                    },
                  });
                });
              }}
            >
              <View key={i} style={styles.transactionRow}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{initials}</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.transactionName}>{name}</Text>
                  <Text style={styles.transactionDate}>Sep 10, 2024</Text>
                </View>
                {isAuthenticated ? (
                  <Text
                    style={
                      isPositive
                        ? styles.transactionAmount
                        : styles.transactionAmountNeg
                    }
                  >{`${isPositive ? "+" : "-"} ${amount}`}</Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      triggerAuth();
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      {"****"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default TransactionsScreen;
