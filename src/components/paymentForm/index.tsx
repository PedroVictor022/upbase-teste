import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ButtonBack, ButtonPayment } from "../utils/buttonPay";

export default function PaymentForm() {
  const [nCard, setNCard] = React.useState("");
  const [name, setName] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [nDate, setNDate] = React.useState("");
  const [cvv, setCVV] = React.useState("");

  const paymentLoad = () => {
    if (nCard == "" || name == "" || cpf == "" || nDate == "" || cvv == "") {
      alert("Preencha todos os campos!");
    } else {
      alert("Pagamento realizado com sucesso!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.paymentForm}>
        <Text style={styles.textDescription}>
          Insira os dados para concluir a contratação via cartão de crédito.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Número do cartão"
            placeholderTextColor="#6D7A78"
            value={nCard}
            onChange={(e: any) => setNCard(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do titular"
            placeholderTextColor="#6D7A78"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF do titular"
            placeholderTextColor="#6D7A78"
            value={cpf}
            onChange={(e: any) => setCPF(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Validade"
            placeholderTextColor="#6D7A78"
            value={nDate}
            onChange={(e: any) => setNDate(e.target.value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cod. de segurança"
            placeholderTextColor="#6D7A78"
            value={cvv}
            onChange={(e: any) => setCVV(e.target.value)}
          />
        </View>

        <View style={styles.buttonActions}>
          <ButtonPayment title="PAGAR" onPress={paymentLoad} />
          <ButtonBack title="VOLTAR" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  paymentForm: {
    width: "100%",
    maxWidth: 400,
  },
  form: {
    backgroundColor: "white",
    elevation: 1,
    marginBottom: 45,
  },
  textDescription: {
    textAlign: "left",
    marginBottom: 45,
    color: "#424F4D",
    fontSize: 18,
    fontWeight: "600",
    width: "80%",
  },
  buttonActions: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    height: 50,
    padding: 10,
    color: "#6D7A78",
    borderWidth: 0.6,
    fontSize: 14,
    borderColor: "#CCC",
  },

  // BUTTONS STYLE CONFIG
  btnPayment: {
    width: "100%",
  },
});
