import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator'; 
import { styles } from './style';


type HomeAdminNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: HomeAdminNavigationProp;
};

export function HomeAdmin({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterNewUser')}
      >
        <Text style={styles.buttonText}>Cadastrar Tecnicos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NotificationAdm')}
      >
        <Text style={styles.buttonText}>Notificação de Pragas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Relatorios')}
      >
        <Text style={styles.buttonText}>Relátorios</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}
