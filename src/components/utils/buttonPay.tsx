import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonPayment(props: { title: string, onPress: () => void }) {
  return (
    <TouchableOpacity style={stylesButtonPayment.buttonContainer} onPress={props.onPress}>
      <Text style={stylesButtonPayment.text} >{props.title}</Text>
    </TouchableOpacity>
  );
}

const stylesButtonPayment = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#07689F",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export function ButtonBack(props: { title: string }) {
  return (
    <TouchableOpacity style={stylesButtonBack.buttonContainer}>
      <Text style={stylesButtonBack.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const stylesButtonBack = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "transparent",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    color: "#07689F",
    fontSize: 18,
    fontWeight: "600",
  },
});
