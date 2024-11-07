import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Assistance } from '~/src/screens/Assistance';
import HomeScreen from '~/src/screens/HomeScreen';
import { InformationScreen } from '~/src/screens/Information';
import { FormularioScreen } from '~/src/screens/Notification';
import Launch from '~/src/screens/Launch';
import LoginScreen from '~/src/screens/Login';
import RegisterNewUser from '~/src/screens/RegisterNewUser';
import { HomeAdmin } from '~/src/screens/HomeAdmin';
import Relatorios from '~/src/screens/Relatorios'
import NotificationAdm from '~/src/screens/NotificationAdm';
import HistoryTec from '~/src/screens/HistoryTec';
import HomeTec from '~/src/screens/HomeTec';
import { RegistryTec } from '~/src/screens/RegistryTec';
import { ConsultTec } from '~/src/screens/ConsultTec';


export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Assistance: undefined;
  Informations: undefined;
  Launch: undefined;
  Login: undefined;
  RegisterNewUser: undefined;
  HomeAdmin: undefined;
  Relatorios: undefined;
  NotificationAdm: undefined;
  HistoryTec: undefined,
  HomeTec: undefined
  RegistryTec: undefined
  ConsultTec: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="Notification" component={FormularioScreen} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="Assistance" component={Assistance} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="Informations" component={InformationScreen} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="Launch" component={Launch} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="RegisterNewUser" component={RegisterNewUser} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="HomeAdmin" component={HomeAdmin} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="Relatorios" component={Relatorios} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="NotificationAdm" component={NotificationAdm} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="HistoryTec" component={HistoryTec} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="HomeTec" component={HomeTec} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="RegistryTec" component={RegistryTec} options={{ headerTitle: '', headerTransparent: true}}/>
        <Stack.Screen name="ConsultTec" component={ConsultTec} options={{ headerTitle: '', headerTransparent: true}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
