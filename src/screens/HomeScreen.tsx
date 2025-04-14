import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Available Balance in</Text>
        <Text style={styles.balanceAmount}>RM 22,1340</Text>
        <TextInput
          style={styles.searchBox}
          placeholder="Search here"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: "#6D5FFD" }]}
        >
          <Ionicons name="document-text-outline" size={24} color="white" />
          <Text style={styles.actionTitle}>Account Statement</Text>
          <Text style={styles.actionSubtitle}>Acc to Acc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: "#FD5F5F" }]}
        >
          <MaterialIcons name="compare-arrows" size={24} color="white" />
          <Text style={styles.actionTitle}>Fund Transfer</Text>
          <Text style={styles.actionSubtitle}>Acc to Acc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: "#FBAA4D" }]}
        >
          <MaterialIcons name="receipt" size={24} color="white" />
          <Text style={styles.actionTitle}>Pay Bills</Text>
          <Text style={styles.actionSubtitle}>Acc to Acc</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.transactionList}>
        <View style={styles.transactionRow}>
          <FontAwesome5 name="utensils" size={20} color="#6D5FFD" />
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionName}>Grocery Store</Text>
            <Text style={styles.transactionDetail}>Jaya Grocer</Text>
          </View>
          <Text style={styles.amountNegative}>RM35.00</Text>
        </View>

        <View style={styles.transactionRow}>
          <FontAwesome5 name="shopping-cart" size={20} color="#FD5F5F" />
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionName}>Restaurant</Text>
            <Text style={styles.transactionDetail}>Kenny Hills Bakers</Text>
          </View>
          <Text style={styles.amountNegative}>RM230.00</Text>
        </View>

        <View style={styles.transactionRow}>
          <FontAwesome5 name="wallet" size={20} color="#00B386" />
          <View style={styles.transactionInfo}>
            <Text style={styles.transactionName}>Payment Receive</Text>
            <Text style={styles.transactionDetail}>TnG E-Wallet</Text>
          </View>
          <Text style={styles.amountPositive}>RM50.00</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 100,
  },
  balanceContainer: {
    paddingHorizontal: 20,
  },
  balanceLabel: {
    fontFamily: "GilroyMedium",
    color: "#888",
    fontSize: 14,
  },
  balanceAmount: {
    fontFamily: "GilroyBold",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },
  searchBox: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#EEE",
    borderRadius: 10,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  actionCard: {
    width: 120,
    height: 110,
    borderRadius: 16,
    padding: 10,
    justifyContent: "space-between",
  },
  actionTitle: {
    fontFamily: "GilroyBold",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  actionSubtitle: {
    fontFamily: "GilroyMedium",

    color: "white",
    fontSize: 10,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  transactionTitle: {
    fontFamily: "GilroyBold",

    fontWeight: "bold",
    fontSize: 16,
  },
  seeAll: {
    fontFamily: "GilroyMedium",

    color: "#FF5C00",
    fontSize: 14,
  },
  transactionList: {
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontFamily: "GilroyBold",

    fontWeight: "bold",
    fontSize: 14,
  },
  transactionDetail: {
    fontFamily: "GilroyMedium",

    fontSize: 12,
    color: "#888",
  },
  amountNegative: {
    color: "#DA2121",
    fontWeight: "bold",
  },
  amountPositive: {
    color: "#00B386",
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
});
