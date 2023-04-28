import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function NavigationMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.icons}
        >
          <Entypo name="home" size={24} color="#424F4D" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icons}
        >
          <MaterialCommunityIcons
            name="clipboard-check-outline"
            size={24}
            color="#424F4D"
          />
          <Text style={styles.text}>Plantões</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icons}
        >
          <MaterialIcons name="favorite-outline" size={24} color="#424F4D" />
          <Text style={styles.text}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icons}
        >
          <Feather name="user" size={24} color="#424F4D" />
          <Text style={styles.text}>Minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: "#f2f2f2",
    bottom: 0,
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30
  },
  navigation: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: "#424F4D",
  }
});
