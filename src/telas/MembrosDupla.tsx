import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MembrosDupla = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Membros da Dupla</Text>
            <Text style={styles.member}>Nome: Rafaela Rodrigues | RM551857 - Uma garota da FIAP linda.</Text>
            <Text style={styles.member}>Nome: Ming Nut Tan | RM99150 - 
            Um garoto asiático muito lindo da FIAP que disputou o NEXT, membro da 2TDSPM e talvez um prodigio.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    member: {
        fontSize: 18,
    }
});

export default MembrosDupla;
