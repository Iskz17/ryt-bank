import React, { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { Card, Text, useTheme, Divider } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { authenticateWithBiometrics } from "../services/biometric";
import { sampleTransactions } from "../utils/sampleData";
import { formatCurrency } from "../utils/formatters";

const TransactionListScreen = ({ navigation }: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();
  const [transactions, setTransactions] = useState(sampleTransactions);

  const handleRevealAmount = async (id: string) => {
    const success = await authenticateWithBiometrics();
    if (!success) return;

    setTransactions((prev) =>
      prev.map((tx) => (tx.id === id ? { ...tx, isMasked: false } : tx))
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
      }}
    >
      <FlatList
        data={sampleTransactions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <Card
            mode="contained"
            style={{
              marginBottom: 12,
              backgroundColor: colors.surface,
              elevation: 0,
              shadowColor: "#ccc",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 3,
            }}
            onPress={() =>
              navigation.navigate("TransactionDetail", { transaction: item })
            }
          >
            <Card.Content
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text variant="bodyMedium" style={{ fontWeight: "600" }}>
                  {item.description}
                </Text>
                <Text variant="bodySmall" style={{ color: colors.tertiary }}>
                  {item.date}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleRevealAmount(item.id)}>
                <Text
                  variant="bodyMedium"
                  style={{
                    fontWeight: "500",
                    color: item.isMasked ? colors.tertiary : colors.secondary,
                  }}
                >
                  {item.isMasked ? "••••" : formatCurrency(item.amount)}
                </Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default TransactionListScreen;
