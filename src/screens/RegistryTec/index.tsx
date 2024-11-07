import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from './style';

export  function RegistryTec(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      
      <TextInput style={styles.input} placeholder="Cultura" />
      <TextInput style={styles.input} placeholder="Características" />
      <TextInput style={styles.input} placeholder="Localização" />

      <View style={styles.buttonContainer}>
        <Button title="Foto" onPress={() => {}} />
        <Button title="Notificar" onPress={() => {}} />
      </View>
    </View>
  );
};

