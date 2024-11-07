import React from 'react';
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from './style';

export function InformationScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Pragas Quarentenárias e Soluções</Text>

            <Text style={styles.sectionTitle}>O que são Pragas Quarentenárias?</Text>
            <Text style={styles.paragraph}>
                As pragas quarentenárias são espécies de insetos, fungos, bactérias, e outros organismos que podem causar danos severos a culturas agrícolas. Estas pragas são chamadas de "quarentenárias" porque, ao entrarem em um novo país ou região, podem exigir quarentena para evitar sua propagação.
            </Text>

            <Image source={{ uri: 'https://www.embrapa.br/image/journal/article?img_id=85847558&t=1702935097020' }} style={styles.image} />

            <Text style={styles.sectionTitle}>Pragas e o Clima</Text>
            <Text style={styles.paragraph}>
                Com as mudanças climáticas, muitas pragas quarentenárias têm encontrado condições ideais para se proliferar em regiões onde antes não conseguiam sobreviver. O aumento das temperaturas e a maior variabilidade de chuvas contribuem para a sobrevivência e reprodução de pragas como o besouro-da-palmeira, o ácaro-vermelho e a lagarta-do-cartucho.
            </Text>

            <Image source={{ uri: 'https://agroreceita.com.br/wp-content/uploads/2022/11/BANNER-BLOG-1024x614.webp' }} style={styles.image} />

            <Text style={styles.sectionTitle}>Principais Pragas Quarentenárias no Brasil</Text>
            <Text style={styles.paragraph}>
                Algumas das pragas quarentenárias mais comuns no Brasil incluem:
            </Text>
            <Text style={styles.listItem}>• Besouro-da-palmeira (Rhynchophorus ferrugineus)</Text>
            <Text style={styles.listItem}>• Lagarta-do-cartucho (Spodoptera frugiperda)</Text>
            <Text style={styles.listItem}>• Ácaro-vermelho (Tetranychus urticae)</Text>

            <Image source={{ uri: 'https://www.agrolink.com.br/upload/problemas/Spodoptera_frugiperda84.jpg' }} style={styles.image} />

            <Text style={styles.sectionTitle}>Soluções para Controle de Pragas</Text>
            <Text style={styles.paragraph}>
                O controle de pragas quarentenárias exige uma abordagem integrada que combina métodos naturais e químicos para reduzir sua presença e impacto nas plantações. Aqui estão algumas soluções recomendadas:
            </Text>
            <Text style={styles.listItem}>• Monitoramento constante das áreas agrícolas</Text>
            <Text style={styles.listItem}>• Uso de produtos biológicos para controle, como inimigos naturais das pragas</Text>
            <Text style={styles.listItem}>• Aplicação de defensivos agrícolas específicos, sempre respeitando as recomendações de uso</Text>
            <Text style={styles.listItem}>• Práticas de manejo que evitem a proliferação, como rotação de culturas</Text>

            <Image source={{ uri: 'https://www.agrolink.com.br/upload/problemas/Spodoptera_frugiperda86.jpg' }} style={styles.image} />

            <Text style={styles.footerText}>
                A prevenção e o controle de pragas quarentenárias são fundamentais para proteger as culturas e evitar prejuízos econômicos e ecológicos.
            </Text>
        </ScrollView>
    );
}
