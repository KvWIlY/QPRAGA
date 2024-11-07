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
        marginBottom: 14,
        textAlign: 'center',
    },
    introText: {
        fontSize: 16,
        color: '#555',
        textAlign: "justify",
        marginBottom: 24,
        lineHeight: 24,
    },
    section: {
        backgroundColor: '#e9f5ec',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 8,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    answer: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        marginTop: 4,
        marginBottom: 10,
    },
    tip: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 16,
    },
    chatButton: {
        backgroundColor: '#3d5a40',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    chatButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
