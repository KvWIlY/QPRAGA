import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#dbead5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3d5a40',
        marginBottom: 16,
        textAlign: 'center',
    },
    notificationItem: {
        backgroundColor: '#e9f5ec',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7d32',
    },
    notificationDescription: {
        fontSize: 16,
        color: '#555',
        marginTop: 4,
    },
    noNotificationsText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    addNotificationButton: {
        backgroundColor: '#3d5a40',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    addNotificationButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
