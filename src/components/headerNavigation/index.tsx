import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.headerNavigationContainer}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.text}>Pagamento</Text>
        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: "#006557",
    paddingTop: 45,
    paddingBottom: 20,
    marginBottom: 45,
  },
  headerNavigationContainer: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
