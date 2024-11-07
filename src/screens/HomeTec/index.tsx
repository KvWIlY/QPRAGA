import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';  

type HomeScreenTecNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTec'>;

type Props = {
  navigation: HomeScreenTecNavigationProp;
};

export default function HomeTec({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegistryTec')} 
      >
        <Text style={styles.buttonText}>Iniciar Notificação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HistoryTec')} 
      >
        <Text style={styles.buttonText}>Historico de Registros</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConsultTec')} 
      >
        <Text style={styles.buttonText}>Consultar pragas</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}
