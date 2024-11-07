import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';  

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Notification')} 
      >
        <Text style={styles.buttonText}>Iniciar Notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Assistance')} 
      >
        <Text style={styles.buttonText}>Assistência</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Informations')} 
      >
        <Text style={styles.buttonText}>Informações</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}
