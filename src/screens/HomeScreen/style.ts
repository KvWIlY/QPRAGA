import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbead5',  
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30, 
  },
  logo: {
    width: 250,  
    height: 250, 
    resizeMode: 'contain',  
  },
  button: {
    width: '80%', 
    paddingVertical: 15,
    marginVertical: 12,  
    backgroundColor: '#469536',  
    borderRadius: 10,  
    alignItems: 'center',
    elevation: 5,  
  },
  buttonText: {
    color: '#dbead5', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    position: 'absolute',
    bottom: 16,
  },
  notificationContainer: {
    marginVertical: 20,
  },
  notificationText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',  
  },
});
