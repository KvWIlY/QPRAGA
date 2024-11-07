import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './style';

export function Assistance() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Assistência aos Produtores</Text>

            <Text style={styles.introText}>
                Estamos aqui para ajudar você a proteger suas plantações contra pragas quarentenárias. Explore nossas seções de ajuda para encontrar respostas rápidas e dicas importantes. Caso precise de suporte personalizado, clique no botão de chat para falar com um especialista.
            </Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
                <Text style={styles.question}>O que são pragas quarentenárias?</Text>
                <Text style={styles.answer}>
                    São pragas que representam uma ameaça significativa às culturas e podem se proliferar rapidamente em novos ambientes. O controle é importante para evitar danos severos.
                </Text>

                <Text style={styles.question}>Como posso identificar pragas quarentenárias?</Text>
                <Text style={styles.answer}>
                    Fique atento a sinais de deterioração em folhas, frutos e troncos. Procure por insetos visíveis, marcas de mordida ou partes da planta danificadas.
                </Text>

                <Text style={styles.question}>Quais são as melhores práticas para evitar a proliferação dessas pragas?</Text>
                <Text style={styles.answer}>
                    Use monitoramento constante, rotação de culturas, e produtos de controle biológico quando necessário.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Dicas Rápidas</Text>
                <Text style={styles.tip}>• Inspecione regularmente as plantas em busca de sinais de pragas.</Text>
                <Text style={styles.tip}>• Use armadilhas e barreiras naturais para controlar pragas sem prejudicar o ambiente.</Text>
                <Text style={styles.tip}>• Consulte um especialista ao primeiro sinal de infestação para evitar danos maiores.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Precisa de ajuda adicional?</Text>
                <Text style={styles.paragraph}>
                    Nossa equipe está pronta para ajudar! Se você tem uma dúvida específica ou precisa de orientações personalizadas, entre em contato conosco pelo chat.
                </Text>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatButtonText}>Iniciar Chat com Especialista</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
