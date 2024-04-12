import React, { useContext } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Button, Icon, Image, ListItem, Text } from "react-native-elements";
import { LivrariaContext } from "../context/LivrariaProvider";

const TelaList = ({ navigation }) => {
    const { livros, excluirLivro } = useContext(LivrariaContext);

    const handleExclusao = (livro) => {
        Alert.alert(
            "EXCLUSÃO DE REGISTRO",
            "DESEJA EXCLUIR?",
            [
                {
                    text: "SIM",
                    onPress: () => {
                        excluirLivro(livro.id);
                        alert("Livro " + livro.id + " deletado");
                    },
                },
                { text: "NÃO" },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
                <Button
        title="Sobre os Membros"
        onPress={() => navigation.navigate('MembrosDupla')}
        buttonStyle={{ backgroundColor: '#ff698f', marginBottom: 10 }}
    />
            <FlatList
                data={livros}
                keyExtractor={(item) => (item && item.id ? item.id.toString() : "")}
                renderItem={({ item }) => (
                    <ListItem onPress={() => navigation.navigate("TelaForm", { livro: item })}>
                        <ListItem.Chevron onPress={() => navigation.navigate('TelaDetalhes', { livroId: item.id })} size={30} />
                        <Image source={{ uri: item.fotoCapa }} style={{ width: 100, height: 150, marginRight: 10 }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.titulo}</ListItem.Title>
                            <ListItem.Subtitle>{item.autor}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content right>
                            <Button
                                icon={<Icon name="edit" color="gray" />}
                                type="clear"
                                onPress={() => navigation.navigate("TelaForm", { livro: item })}
                            />
                            <Button
                                icon={<Icon name="delete" color="red" />}
                                type="clear"
                                onPress={() => handleExclusao(item)}
                            />
                        </ListItem.Content>
                    </ListItem>
                )}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Nome: Rafaela Rodrigues | RM551857</Text>
                <Text style={styles.detailsText}>Nome: Ming Nut Tan | RM99150</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default TelaList;
