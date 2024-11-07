import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { styles } from './style';


export default function RegisterNewUser() {  
  const [username, setUsername] = useState('');
  const [nomeTecnico, setNomeTecnico] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargo, setCargo] = useState('');
  const [agencia, setAgencia] = useState('');

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        
        return firestore().collection('funcionarios').add({
          userId: user.uid,
          username,
          nomeTecnico,
          email,
          cargo,
          agencia
        });
      })
      .then(() => {
        Alert.alert('Sucesso', 'Cadastro concluído!', [
          {
            text: 'OK',
            onPress: () => {
              setUsername('');
              setNomeTecnico('');
              setEmail('');
              setPassword('');
              setCargo('');
              setAgencia('');
  
            }
          }
        ]);
      })
      .catch(error => {
        console.error("Erro ao cadastrar usuário:", error);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Técnico</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do Técnico(a)"
        value={nomeTecnico}
        onChangeText={setNomeTecnico}
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
          
      <Picker
        selectedValue={cargo}
        style={styles.picker}
        onValueChange={(itemValue) => setCargo(itemValue)}
      >
        <Picker.Item label="Agrônomo" value="agronomo" />
        <Picker.Item label="Técnico Agrícola" value="tecnico_agricola" />
        <Picker.Item label="Engenheiro Agrônomo" value="engenheiro_agronomo" />
        <Picker.Item label="Especialista em Controle de Pragas" value="especialista_controle_pragas" />
        <Picker.Item label="Consultor de Controle de Pragas" value="consultor_controle_pragas" />
        <Picker.Item label="Supervisor de Campo" value="supervisor_campo" />
        <Picker.Item label="Gerente de Operações Agrícolas" value="gerente_operacoes_agricolas" />
        <Picker.Item label="Entomologista" value="entomologista" />
        <Picker.Item label="Fitopatologista" value="fitopatologista" />
        <Picker.Item label="Pesquisador Agrícola" value="pesquisador_agricola" />
        <Picker.Item label="Coordenador de Controle de Pragas" value="coordenador_controle_pragas" />
        <Picker.Item label="Técnico em Agropecuária" value="tecnico_agropecuaria" />
        <Picker.Item label="Aplicador de Defensivos Agrícolas" value="aplicador_defensivos" />
        <Picker.Item label="Técnico em Manejo Integrado de Pragas" value="tecnico_manejo_integrado" />
        <Picker.Item label="Fiscal Agropecuário" value="fiscal_agropecuario" />
        <Picker.Item label="Engenheiro de Biossegurança" value="engenheiro_biosseguranca" />
      </Picker>

      <Picker
        selectedValue={agencia}
        style={styles.picker}
        onValueChange={(itemValue) => setAgencia(itemValue)}
      >
        <Picker.Item label="MAPA" value="mapa" />
        <Picker.Item label="ANVISA" value="anvisa" />
        <Picker.Item label="IBAMA" value="ibama" />
        <Picker.Item label="EMBRAPA" value="embrapa" />
        <Picker.Item label="ADAB" value="adab" />
        <Picker.Item label="IAGRO" value="iagro" />
        <Picker.Item label="IDAF" value="idaf" />
        <Picker.Item label="INDEA" value="indea" />
        <Picker.Item label="CDA" value="cda" />
        <Picker.Item label="ADAPAR" value="adapar" />
        <Picker.Item label="AGESUL" value="agesul" />
        <Picker.Item label="AGRODEFESA" value="agrodefesa" />
       
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleRegister}  >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
