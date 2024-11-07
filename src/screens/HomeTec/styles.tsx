import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',  // Cor de fundo neutra
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40, // Espaço para a logo no topo
  },
  logo: {
    width: 150,  // Tamanho da logo
    height: 150, // Tamanho da logo
    resizeMode: 'contain',  // Mantém a proporção da imagem
  },
  button: {
    width: '80%',  // Botão um pouco mais largo
    paddingVertical: 15,
    marginVertical: 12,  // Maior espaçamento entre os botões
    backgroundColor: '#4CAF50',  // Cor de fundo verde mais atraente
    borderRadius: 10,  // Cantos mais arredondados
    alignItems: 'center',
    elevation: 5,  // Sombra para dar destaque ao botão
  },
  buttonText: {
    color: '#FFF',  // Texto em branco para contrastar com o fundo verde
    fontSize: 18,
    fontWeight: 'bold',  // Deixa o texto em negrito
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  notificationContainer: {
    marginVertical: 20,
  },
  notificationText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',  // Texto de notificação mais visível
  },
});
