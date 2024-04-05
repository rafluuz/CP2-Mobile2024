import React from 'react';

import TelaForm from './src/telas/TelaForm';
import TelaList from './src/telas/TelaList';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements';
import { LivrariaProvider } from './src/context/LivrariaProvider';

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
                    <Stack.Screen name="TelaForm" component={TelaForm} />
                </Stack.Navigator>
            </NavigationContainer>
        </LivrariaProvider>
    );
}