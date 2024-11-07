import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { styles } from './styleLaunch';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';  // Importe o tipo de navegação
  

type LaunchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Launch'>;

type Props = {
  navigation: LaunchScreenNavigationProp;
};

export default function Launch({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#dbead5" barStyle="light-content" />
   
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
      </View>

   
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} 
      >
        <Text style={styles.buttonText}>Produtor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.buttonText}>Técnico</Text>
      </TouchableOpacity>


      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}
