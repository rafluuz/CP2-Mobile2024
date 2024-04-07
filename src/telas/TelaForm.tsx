import React, { useContext, useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { LivrariaContext } from "../context/LivrariaProvider";
import { RouteProp } from "@react-navigation/native";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    biografia: string;
    fotoCapa?: string; 
}

interface TelaFormProps {
    route: RouteProp<{ params: { livro?: Livro } }, 'params'>;
    navigation: any; 
}

const TelaForm: React.FC<TelaFormProps> = ({ route, navigation }) => {
    const { livro } = route.params ?? {};
    const { adicionarLivro, editarLivro } = useContext(LivrariaContext);
    const [livroAtual, setLivroAtual] = useState<Livro | undefined>(livro);

    const salvarLivro = () => {
        if (!livroAtual?.id) {
            const livroComFotoCapa = { ...livroAtual, fotoCapa: null };
            adicionarLivro(livroComFotoCapa);
        } else {
            const fotoCapa = livroAtual?.fotoCapa || '';
            const livroComFotoCapa = { ...livroAtual, fotoCapa };
            editarLivro(livroComFotoCapa);
        }
        navigation.goBack();
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                value={livroAtual?.titulo || ''}
                onChangeText={(text) => setLivroAtual({ ...livroAtual, titulo: text })}
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
                style={styles.input}
                value={livroAtual?.autor || ''}
                onChangeText={(text) => setLivroAtual({ ...livroAtual, autor: text })}
            />
            <Text style={styles.label}>Biografia</Text>
            <TextInput
                style={[styles.input, styles.biografiaInput]}
                multiline
                value={livroAtual?.biografia || ''}
                onChangeText={(text) => setLivroAtual({ ...livroAtual, biografia: text })}
            />
            <Button
                title="SALVAR"
                onPress={salvarLivro}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    biografiaInput: {
        height: 100,
    },
});

export default TelaForm;
