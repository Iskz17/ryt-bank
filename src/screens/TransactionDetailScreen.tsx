import React from "react";
import { View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";

const TransactionDetailScreen = ({ route }: any) => {
  const { transaction } = route.params;
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <Card style={{ padding: 16, borderRadius: 12 }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ marginBottom: 16 }}>
            {transaction.description}
          </Text>

          <Text variant="bodyMedium">Amount</Text>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>
            {transaction.isMasked
              ? "••••"
              : `RM ${transaction.amount.toFixed(2)}`}
          </Text>

          <Text variant="bodyMedium">Date</Text>
          <Text style={{ marginBottom: 12 }}>{transaction.date}</Text>

          <Text variant="bodyMedium">Type</Text>
          <Text>{transaction.type}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default TransactionDetailScreen;
