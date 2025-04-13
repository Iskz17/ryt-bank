import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_SPACING = 16;
const CARD_WIDTH = SCREEN_WIDTH * 0.85;
const HEADER_HEIGHT = 280;

const cards = [
  {
    id: "1",
    title: "Syariah Card",
    number: "**** **** **** 3456",
    expiry: "08/23",
    limit: "$24,000.00",
    type: "Debit",
    bgImage: require("../assets/first.png"),
    bank: "Bank Islam",
    bgColor: "rgba(5, 100, 92, 0.73);",
  },
  {
    id: "2",
    title: "Platinum Card",
    number: "**** **** **** 1278",
    expiry: "09/25",
    limit: "$50,000.00",
    type: "Credit",
    bgImage: require("../assets/second.png"),
    bank: "Platinum Bank",
    bgColor: "rgba(0, 20, 39, 0.64);",
  },
  {
    id: "3",
    title: "Travel Card",
    number: "**** **** **** 9981",
    expiry: "01/26",
    limit: "$10,000.00",
    type: "Prepaid",
    bgImage: require("../assets/third.png"),
    bank: "Nomad Bank",
    bgColor: "rgba(255, 115, 0, 0.6);",
  },
];

export default function CardListingScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const theme = useTheme();
  const [activeCard, setActiveCard] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f7f7",
    },
    header: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: HEADER_HEIGHT + 60,
    },
    card: {
      height: 190,
      borderRadius: 24,
      overflow: "hidden",
      justifyContent: "flex-end",
      // padding: 20,
    },
    gradientOverlay: {
      flex: 1,
      justifyContent: "flex-end",
      borderRadius: 24,
      padding: 20,
    },
    detailsBox: {
      padding: 24,
      backgroundColor: "#fff",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      marginTop: 24,
      gap: 12,
    },
    detailRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      paddingVertical: 12,
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
    },
    section: {
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 6,
    },

    sectionTitle: {
      ...theme.fonts.titleLarge,
      fontSize: 18,
      marginBottom: 16,
      color: "#333",
    },
    label: {
      flex: 1,
      ...theme.fonts.bodyMedium,
      color: "#666",
    },

    value: {
      ...theme.fonts.bodyMedium,
      fontWeight: "600",
      color: "#111",
    },

    freezeButton: {
      marginTop: 24,
      borderRadius: 12,
      paddingVertical: 6,
    },
  });

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 60 }]}>
        <FlatList
          data={cards}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: CARD_SPACING }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Card", { card: item })}
              activeOpacity={0.9}
            >
              <ImageBackground
                source={item.bgImage}
                resizeMode="cover"
                style={[
                  styles.card,
                  {
                    width: CARD_WIDTH,
                    marginRight: CARD_SPACING,
                  },
                ]}
                imageStyle={{ borderRadius: 24 }}
              >
                <LinearGradient
                  colors={["rgba(226, 226, 226, 0)", "rgba(2, 2, 2, 0.6)"]}
                  style={styles.gradientOverlay}
                >
                  <Text
                    style={{
                      ...theme.fonts.labelMedium,
                      color: "#ddd",
                      marginBottom: 4,
                    }}
                  >
                    {item.bank}
                  </Text>
                  <Text
                    style={{
                      ...theme.fonts.titleLarge,
                      fontFamily: "NewKansasBold",
                      color: "#fff",
                      marginBottom: 4,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      ...theme.fonts.bodyLarge,
                      color: "#fff",
                    }}
                  >
                    {item.number}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          )}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / (CARD_WIDTH + CARD_SPACING)
            );
            setActiveCard(index);
          }}
        />
      </View>

      <ScrollView
        style={{ marginTop: HEADER_HEIGHT + 20 }}
        contentContainerStyle={styles.detailsBox}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Card Details</Text>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={20}
              color="#666"
            />
            <Text style={styles.label}>Type</Text>
            <Text style={styles.value}>{cards[activeCard].type}</Text>
          </View>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons
              name="card-account-details"
              size={20}
              color="#666"
            />
            <Text style={styles.label}>Number</Text>
            <Text style={styles.value}>{cards[activeCard].number}</Text>
          </View>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons
              name="calendar-range"
              size={20}
              color="#666"
            />
            <Text style={styles.label}>Expiry</Text>
            <Text style={styles.value}>{cards[activeCard].expiry}</Text>
          </View>

          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="bank" size={20} color="#666" />
            <Text style={styles.label}>Spending Limit</Text>
            <Text style={styles.value}>{cards[activeCard].limit}</Text>
          </View>

          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.freezeButton}
            labelStyle={{ fontFamily: "NewKansasBold" }}
            icon="snowflake"
          >
            Freeze Card
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
