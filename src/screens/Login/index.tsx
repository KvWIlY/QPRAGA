import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import auth from '@react-native-firebase/auth';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;  
};

export default function LoginScreen({ navigation }: Props) {  
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    useEffect(() => {
      setUserEmail('');
      setPassword('');
    }, [])
  
    function userLogin() {
      auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          navigation.navigate('HomeAdmin') 
        })
        .catch(error => {
          alert('Login inválido! Tente novamente.');
        });
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={userPassword}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={userLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
}
