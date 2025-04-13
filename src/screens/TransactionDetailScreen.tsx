import {
  Card,
  Text,
  useTheme,
  Surface,
  Button,
  Divider,
} from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, TextInput, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import React, { useLayoutEffect } from "react";

const TransactionDetail = ({ route, navigation }: any) => {
  const { transaction } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 0 }}
        >
          <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      paddingTop: 90,
      flex: 1,
      backgroundColor: "#f8f8f8",
    },
    scrollContent: {
      padding: 20,
      paddingBottom: 100,
    },
    totalLabel: {
      fontFamily: "GilroyMedium",
      textAlign: "center",
      fontSize: 16,
      color: "#888",
    },
    totalAmount: {
      fontFamily: "GilroyBold",
      textAlign: "center",
      fontSize: 50,
      fontWeight: "700",
      color: "#000",
    },
    status: {
      fontFamily: "GilroyMedium",
      textAlign: "center",
      fontSize: 14,
      color: "#4CAF50",
    },
    participantCard: {
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 16,
      marginTop: 16,
      gap: 12,
    },
    participantRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    participantName: {
      fontFamily: "GilroyBold",
      fontWeight: "900",
      fontSize: 16,
    },
    participantDetail: {
      fontFamily: "GilroyMedium",

      fontSize: 12,
      color: "#888",
    },
    participantDate: {
      fontFamily: "GilroyMedium",

      fontSize: 12,
      color: "#555",
    },
    participantTime: {
      fontFamily: "GilroyMedium",

      fontSize: 12,
      color: "#aaa",
    },
    detailsBox: {
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: 16,
      marginTop: 24,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
    },
    detailLabel: {
      fontFamily: "GilroyMedium",

      color: "#777",
      fontSize: 14,
    },
    detailValue: {
      fontFamily: "GilroyMedium",

      color: "#000",
      fontWeight: "600",
      fontSize: 14,
    },
    noteInput: {
      fontFamily: "GilroyMedium",

      marginTop: 24,
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 16,
      fontSize: 14,
      lineHeight: 20,
      color: "#000",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
      position: "absolute",
      bottom: 0,
      width: width,
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderTopColor: "#eee",
    },
    footerBtn: {
      flex: 1,
      marginHorizontal: 4,
      borderRadius: 12,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Total Amount */}
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalAmount}>{transaction.amount}</Text>
        <Text style={styles.status}>
          {" "}
          <MaterialCommunityIcons
            name="check-circle-outline"
            size={20}
            color="#4CAF50"
          />{" "}
          Successful
        </Text>

        {/* Participants */}
        <View style={styles.participantCard}>
          <View key={Math.random()} style={styles.participantRow}>
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={20}
              color="#4CAF50"
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.participantName}>{transaction.name}</Text>
              <Text style={styles.participantDetail}>
                {"VISA"} • {"DuitNow"}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.participantDate}>{transaction.date}</Text>
              <Text style={styles.participantTime}>{"5pm"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsBox}>
          {[
            { label: "Transfer ID", value: `#${transaction.id}` },
            { label: "Transfer Amount", value: `${transaction.amount}` },
            { label: "App Fee", value: `- RM0.50` },
            { label: "Total Amount", value: `${transaction.amount}` },
          ].map((item, i) => (
            <View key={i}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{item.label}</Text>
                <Text style={styles.detailValue}>{item.value}</Text>
              </View>
              {i < 3 && <Divider />}
            </View>
          ))}
        </View>

        <TextInput
          placeholder="Enjoy the weekend with your family there :)"
          placeholderTextColor="#888"
          style={styles.noteInput}
          multiline
        />
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.footer}>
        <Button
          mode="outlined"
          labelStyle={{ fontFamily: "NewKansasBold" }}
          style={styles.footerBtn}
        >
          Share
        </Button>
        <Button
          mode="contained"
          labelStyle={{ fontFamily: "NewKansasBold" }}
          style={styles.footerBtn}
        >
          Transfer
        </Button>
      </View>
    </View>
  );
};

export default TransactionDetail;
