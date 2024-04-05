import { Avatar, Button, Icon, ListItem, Text, Image } from "react-native-elements";
import { Alert, FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import DadosLivro from "../dados/DadosLivro";

const TelaList = ({ navigation }) => {
    const getLivros = ({ item }) => {
        return (
            <ListItem onPress={() => navigation.navigate("TelaForm", item)}>
                <Image
                    source={{ uri: item.fotoCapa }}
                    style={{ width: 100, height: 150, marginRight: 10 }}
                />
                <ListItem.Content>
                    <ListItem.Title>{item.titulo}</ListItem.Title>
                    <ListItem.Subtitle>{item.autor}</ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Content right>
                    <Button
                        icon={<Icon name="edit" color="gray" />}
                        type="clear"
                        onPress={() => navigation.navigate("TelaForm", item)}
                    />
                    <Button
                        icon={<Icon name="delete" color="red" />}
                        type="clear"
                        onPress={() =>
                            Alert.alert("EXCLUSÃO DE REGISTRO", "DESEJA EXCLUIR?", [
                                {
                                    text: "SIM",
                                    onPress() {
                                        alert("LIVRO " + item.id + " DELETADO");
                                    },
                                },
                                { text: "NÃO" },
                            ])
                        }
                    />
                </ListItem.Content>
            </ListItem>
        );
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={DadosLivro}
                renderItem={getLivros}
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
        alignItems: 'center',
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default TelaList;