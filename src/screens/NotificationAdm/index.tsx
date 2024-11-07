import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from './style';

export default function NotificationAdm() {

    const [notifications, setNotifications] = useState([
        { 
            id: '1', 
            title: 'Suspeita de Praga em Carambola', 
            description: 'Folhas com manchas escuras e pequenos insetos visíveis na parte inferior das folhas. Localização: Região Norte, Fazenda Bela Vista.' 
        },
        { 
            id: '2', 
            title: 'Possível Infestação em Cítrio', 
            description: 'Frutos com perfurações e presença de larvas pequenas. Localização: Região Sudeste, Sítio Estrela do Campo.' 
        },
        { 
            id: '3', 
            title: 'Observação de Praga em Banana', 
            description: 'Folhas amarelando e partes com buracos. Localização: Região Nordeste, Chácara Santa Maria.' 
        },
        { 
            id: '4', 
            title: 'Infestação em Carambola', 
            description: 'Pequenos insetos pretos visíveis nas folhas e frutos danificados. Localização: Região Sul, Fazenda Boa Esperança.' 
        },
        { 
            id: '5', 
            title: 'Alerta de Praga em Cítrio', 
            description: 'Folhas com manchas brancas e presença de teias finas. Localização: Região Centro-Oeste, Sítio Flor da Serra.' 
        },
        { 
            id: '6', 
            title: 'Sinais de Praga em Banana', 
            description: 'Cachos com frutos menores e manchas escuras. Localização: Região Norte, Plantação Sol Nascente.' 
        },
    ]);


    const addNotification = () => {
        const newNotification = {
            id: (notifications.length + 1).toString(),
            title: 'Nova Notificação',
            description: 'Esta é uma nova notificação adicionada dinamicamente.',
        };
        setNotifications([newNotification, ...notifications]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notificações</Text>

            {notifications.length > 0 ? (
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.notificationItem}>
                            <Text style={styles.notificationTitle}>{item.title}</Text>
                            <Text style={styles.notificationDescription}>{item.description}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noNotificationsText}>Nenhuma nova notificação</Text>
            )}

            <TouchableOpacity style={styles.addNotificationButton} onPress={addNotification}>
                <Text style={styles.addNotificationButtonText}>Adicionar Notificação</Text>
            </TouchableOpacity>
        </View>
    );
}
