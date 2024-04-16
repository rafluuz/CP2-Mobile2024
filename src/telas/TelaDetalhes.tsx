import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LivrariaContext } from '../context/LivrariaProvider';

const TelaDetalhes = ({ route }) => {
    const { livros } = useContext(LivrariaContext);
    const { livroId } = route.params;
    const livro = livros.find(l => l.id === livroId);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {livro ? (
                <>
                    <Image source={{ uri: livro.fotoCapa }} style={styles.image} />
                    <Text style={styles.title}>{livro.titulo}</Text>
                    <Text style={styles.author}>Autor: {livro.autor}</Text>
                    <Text style={styles.biography}>{livro.biografia}</Text>
                </>
            ) : (
                <Text>Livro não encontrado</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 220,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    author: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
    biography: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'justify',
    }
});

export default TelaDetalhes;
