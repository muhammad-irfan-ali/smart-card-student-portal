import React from "react";
import {StyleSheet, Text, View} from "react-native";

import LinearGradient from "react-native-linear-gradient";

export default function AppAttendanceCard({date, present, enterTime}) {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.textAttendance}>
        {present ? "Present" : "Absent"}
      </Text>
      {present && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.boldText}>Entrance Time:&nbsp;</Text>
            <Text style={styles.text}>{enterTime}</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.boldText}>Exit Time:&nbsp;</Text>
            <Text style={styles.text}>07:00am</Text>
          </View>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
    borderRadius: 5,
    width: "100%",
    marginVertical: 5,
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
  },
  textAttendance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  text: {
    color: "white",
  },
});
