import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { VictoryLine, VictoryChart,VictoryAxis, VictoryTheme } from "victory-native";
import * as shape from "d3-shape";

const { width } = Dimensions.get("window");

export default function AnalyticsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.dateText}>Wednesday, 29 May</Text>

      <View style={styles.headerRow}>
        <Text style={styles.title}>Finance</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="refresh" size={20} color="#6D5FFD" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: "#EEF0FF" }]}>
          <Text style={styles.cardTitle}>Incomes</Text>
          <View style={styles.barGroup}>
            {[40, 30, 50, 35].map((h, i) => (
              <View
                key={i}
                style={[styles.bar, { height: h, backgroundColor: "#6D5FFD" }]}
              />
            ))}
          </View>
          <Text style={styles.amountText}>RM5060.12</Text>
          <Text style={styles.monthText}>May</Text>
        </View>

        <View style={[styles.card, { backgroundColor: "#FFF0EF" }]}>
          <Text style={styles.cardTitle}>Spending</Text>
          <View style={styles.barGroup}>
            {[25, 45, 20, 50].map((h, i) => (
              <View
                key={i}
                style={[styles.bar, { height: h, backgroundColor: "#FD5F5F" }]}
              />
            ))}
          </View>
          <Text style={[styles.amountText, { color: "#FD5F5F" }]}>
            RM2560.56
          </Text>
          <Text style={styles.monthText}>May</Text>
        </View>
      </View>

      <View style={styles.statsHeader}>
        <Text style={styles.statsTitle}>Stats</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 200, marginBottom: 16, marginTop:10 }}>
        <VictoryChart
          theme={VictoryTheme.material}
          height={200}
          padding={{ top: 20, bottom: 40, left: 50, right: 50 }}
        >

        <VictoryAxis
          tickValues={[1, 3, 5, 7, 9, 11]}
          tickFormat={["Jan", "Mar", "May", "Jul", "Sep", "Nov"]}
          style={{
            axis: { stroke: "transparent" },
            tickLabels: { fill: "#aaa", fontSize: 12,     fontFamily: 'GilroyMedium', },
            ticks: { stroke: "transparent" },
          }}
        />

        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "transparent" },
            grid: { stroke: "rgba(255,255,255,0.1)" },
    tickLabels: { fill: "#aaa", fontSize: 10,      fontFamily: 'GilroyMedium',},
          }}
        />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#6D5FFD", strokeWidth: 3 },
            }}
            data={[
              { x: 1, y: 120 },
              { x: 2, y: 250 },
              { x: 3, y: 180 },
              { x: 4, y: 300 },
              { x: 5, y: 500 },
              { x: 6, y: 450 },
              { x: 7, y: 380 },
              { x: 8, y: 420 },
              { x: 9, y: 390 },
              { x: 10, y: 610 },
              { x: 11, y: 580 },
              { x: 12, y: 720 },
            ]}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  dateText: {
    fontFamily: 'GilroyMedium',
    color: "#888",
    fontSize: 14,
    marginBottom: 6,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: 'GilroyMedium',

    fontSize: 28,
    fontWeight: "bold",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  card: {
    width: (width - 60) / 2,
    borderRadius: 16,
    padding: 12,
  },
  cardTitle: {
    fontFamily: 'GilroyBold',

    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 6,
  },
  barGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 60,
    marginBottom: 10,
  },
  bar: {
    width: 8,
    borderRadius: 4,
  },
  amountText: {
    fontFamily: 'GilroyBold',

    fontWeight: "bold",
    fontSize: 16,
    color: "#6D5FFD",
  },
  monthText: {
    fontFamily: 'GilroyMedium',

    fontSize: 12,
    color: "#aaa",
  },
  statsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 10,
  },
  statsTitle: {
    fontFamily: 'GilroyMedium',

    fontSize: 18,
    fontWeight: "bold",
  },
  showAll: {
    fontFamily: 'GilroyMedium',

    color: "#6D5FFD",
    fontWeight: "500",
  },
  graphCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  tabText: {
    fontFamily: 'GilroyMedium',

    fontSize: 12,
    color: "#999",
  },
  activeTab: {
    color: "#6D5FFD",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#6D5FFD",
    paddingBottom: 4,
  },
  graphMain: {
    marginBottom: 10,
  },
  graphAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  graphDate: {
    color: "#888",
    fontSize: 13,
  },
  mockChart: {
    backgroundColor: "#EEF0FF",
    height: 100,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  line: {
    position: "absolute",
    width: "90%",
    height: 2,
    backgroundColor: "#6D5FFD",
    borderRadius: 2,
    top: "50%",
  },
  barHighlight: {
    position: "absolute",
    right: 30,
    bottom: 10,
    backgroundColor: "#FD5F5F",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  highlightLabel: {
    color: "white",
    fontSize: 10,
  },
  chartButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
  },
  chartToggle: {
    backgroundColor: "#EEF0FF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  chartToggleText: {
    color: "#6D5FFD",
    fontWeight: "bold",
    fontSize: 12,
  },
});
