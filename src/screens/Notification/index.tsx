import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , Alert} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { styles } from './style';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';


export function FormularioScreen() {
  const [cultura, setCultura] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [cameraVisible, setCameraVisible] = useState(false);
  const [facing, setFacing] = useState(CameraType.back);

  const handleSave = async () => {
      if (!cultura || !caracteristicas || !localizacao) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }

      try {
        await firestore().collection('notificacoes').add({
          cultura,
          caracteristicas,
          localizacao,
          timestamp: firestore.FieldValue.serverTimestamp(), 
        });

        Alert.alert('Sucesso', 'Dados salvos com sucesso!');

        setCultura('');
        setCaracteristicas('');
        setLocalizacao('');

      } catch (error) {
        console.error('Erro ao salvar dados: ', error);
        Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados.');
      }
  };

    const handlePhotoButtonPress = () => {
      setCameraVisible(true);
    };

    const handleCloseCamera = () => {
      setCameraVisible(false);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Formulário</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={cultura}
          onValueChange={(itemValue: React.SetStateAction<string>) => setCultura(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione a Cultura" value="" />
          <Picker.Item label="Carambola" value="Carambola" />
          <Picker.Item label="Cítrio" value="Cítrio" />
          <Picker.Item label="Banana" value="Banana" />
        </Picker>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Características"
        value={caracteristicas}
        onChangeText={setCaracteristicas}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Localização"
        value={localizacao}
        onChangeText={setLocalizacao}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.photoButton} onPress={handlePhotoButtonPress}>
          <Text style={styles.photoButtonText}>Ativar Câmera</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.okButton} onPress={handleSave}>
          <Text style={styles.okButtonText}>OK</Text>
        </TouchableOpacity>
      </View>

      {cameraVisible && (
        <View style={styles.cameraContainer}>
          <CameraView style={styles.camera} facing={facing}>
            <View style={styles.cameraButtonContainer}>
              <TouchableOpacity style={styles.cameraCloseButton} onPress={handleCloseCamera}>
                <Text style={styles.cameraCloseButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      )}

      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}