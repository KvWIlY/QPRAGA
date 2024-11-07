import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#dbead5',
      },
      logoContainer: {
        width: 350,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#dbead5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1,
      },
      title:{
        fontSize:40,
        textAlign: 'center',
        padding: 30,
      },
      label: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dbead5',
      },
      input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#e7f1e0',
      },
      subtitle:{
        fontSize:15,
      },
      logo: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        margin: 0,
        padding: 2,
        marginLeft: 30,
        marginBottom: 50,
      },
      button: {
        width: '100%',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#469536',
        alignItems: 'center',
        marginBottom: 20,
      }
  });