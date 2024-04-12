import React from 'react';

import TelaForm from './src/telas/TelaForm';
import TelaList from './src/telas/TelaList';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements';
import { LivrariaProvider } from './src/context/LivrariaProvider';
import MembrosDupla from './src/telas/MembrosDupla';
import TelaDetalhes from './src/telas/TelaDetalhes'; 

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <LivrariaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="TelaList"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#FF69B4", 
                        },
                        headerTintColor: "white",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                        headerRightContainerStyle: {
                            marginRight: 10,
                        },
                    }}
                >
                    <Stack.Screen
                        name="TelaList"
                        component={TelaList}
                        options={({ navigation }) => ({
                            title: "LIVRARIA",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("TelaForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={30} color="white" />}
                                />
                            ),
                        })}
                    />
                    <Stack.Screen name="MembrosDupla" component={MembrosDupla} options={{ title: "Sobre os Membros" }}/>
                    <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{ title: "Detalhes do Livro" }}/>
                    <Stack.Screen name="TelaForm" component={TelaForm} options={{ title: "Formulario do Livro" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </LivrariaProvider>
    );
}