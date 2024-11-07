import React from 'react';
import { View, Text,  FlatList } from 'react-native';
import { styles } from './style';

export default function HistoryTec (){
  // Dados de exemplo de histórico
  const data = [
    { id: '1', registro: 'Praga X - 01/11/2024 - Vale Verde' },
    { id: '2', registro: 'Praga Y - 02/11/2024 - Jardim Tropical' },
    { id: '3', registro: 'Praga Z - 02/11/2024 - Vila Esperança' },
    { id: '4', registro: 'Praga W - 02/11/2024 - Boa Vista' },
    { id: '5', registro: 'Praga Y - 03/11/2024 - Jardim Primavera' },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Registros</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.registro}</Text>}
      />
    </View>
  );
};

