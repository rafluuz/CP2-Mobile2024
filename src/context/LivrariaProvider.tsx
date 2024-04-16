import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DadosLivro from "../dados/DadosLivro";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    biografia: string;
    fotoCapa: string;
}

interface LivrariaContextType {
    livros: Livro[]; 
    adicionarLivro: (livro: Livro) => void;
    editarLivro: (livroEditado: Livro) => void;
    excluirLivro: (livroId: number) => void;
}

export const LivrariaContext = createContext<LivrariaContextType>({
    livros: [], 
    adicionarLivro: () => {},
    editarLivro: () => {},
    excluirLivro: () => {},
});

export const LivrariaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        const carregarLivros = async () => {
            const dadosArmazenados = await AsyncStorage.getItem('@livros');
            if (dadosArmazenados) {
                setLivros(JSON.parse(dadosArmazenados));
            } else {
                setLivros(DadosLivro);
                await AsyncStorage.setItem('@livros', JSON.stringify(DadosLivro));
            }
        };
        carregarLivros();
    }, []);

    const adicionarLivro = async (livro: Livro) => {
        const novosLivros = [...livros, livro];
        await AsyncStorage.setItem('@livros', JSON.stringify(novosLivros));
        setLivros(novosLivros);
    };

    const editarLivro = async (livroEditado: Livro) => {
        const livrosAtualizados = livros.map(livro => livro.id === livroEditado.id ? livroEditado : livro);
        await AsyncStorage.setItem('@livros', JSON.stringify(livrosAtualizados));
        setLivros(livrosAtualizados);
    };

    const excluirLivro = async (livroId: number) => {
        const livrosAtualizados = livros.filter(livro => livro.id !== livroId);
        await AsyncStorage.setItem('@livros', JSON.stringify(livrosAtualizados));
        setLivros(livrosAtualizados);
    };

    return (
        <LivrariaContext.Provider value={{ livros, adicionarLivro, editarLivro, excluirLivro }}>
            {children}
        </LivrariaContext.Provider>
    );
};
