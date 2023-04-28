import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderNavigation from './src/components/headerNavigation';
import PaymentForm from './src/components/paymentForm';
import NavigationMenu from './src/components/navigationMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderNavigation />
      <PaymentForm />
      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: "100%",
    flexDirection: 'column',
    alignContent: 'center',
  },
});
