import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#dbead5',
    },
    title: {
      fontSize:40,
      textAlign: 'center',
      padding: 30,
      fontWeight: 'bold',

    },
    input: {
      borderWidth: 1,
      borderColor: '#dbead5',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      backgroundColor: '#e7f1e0',
    },
    button: {
      backgroundColor: '#469536',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#dbead5',
      fontWeight: 'bold',
      fontSize: 16,
    },
    picker: {
      height: 50,
      marginBottom: 15,
      borderColor: '#fff',
      borderRadius: 8,
      backgroundColor: '#c1d8b4',
    },
  });