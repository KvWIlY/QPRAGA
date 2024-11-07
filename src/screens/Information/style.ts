import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#dbead5',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#3d5a40',
        marginBottom: 16,
        textAlign: 'center',
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginTop: 16,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 16,
    },
    listItem: {
        fontSize: 16,
        color: '#555',
        marginLeft: 16,
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 16,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        color: '#777',
        marginTop: 20,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 15,
    },
});
