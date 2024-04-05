import {Text} from "@rneui/base";
import { useState } from "react";
import {Button, TextInput, View, StyleSheet} from 'react-native'


const TelaForm = ({ route, navigation }) => {
    const [livro, setLivro] = useState(route.params ? route.params : {});

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                value={livro.titulo}
                onChangeText={(text) => setLivro({ ...livro, titulo: text })}
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
                style={styles.input}
                value={livro.autor}
                onChangeText={(text) => setLivro({ ...livro, autor: text })}
            />
            <Text style={styles.label}>Biografia</Text>
            <TextInput
                style={[styles.input, styles.biografiaInput]}
                multiline
                value={livro.biografia}
                onChangeText={(text) => setLivro({ ...livro, biografia: text })}
            />
            <Button
                title="SALVAR"
                onPress={() => {
                    navigation.goBack();
                }}
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