// LivrariaContext.tsx
import React, { createContext, useState, ReactNode } from "react";
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
    const [livros, setLivros] = useState<Livro[]>(DadosLivro);

    const adicionarLivro = (livro: Livro) => {
        setLivros([...livros, livro]);
    };

    const editarLivro = (livroEditado: Livro) => {
        setLivros(livros.map(livro => (livro.id === livroEditado.id ? livroEditado : livro)));
    };

    const excluirLivro = (livroId: number) => {
        setLivros(livros.filter(livro => livro.id !== livroId));
    };

    return (
        <LivrariaContext.Provider value={{ livros, adicionarLivro, editarLivro, excluirLivro }}>
            {children}
        </LivrariaContext.Provider>
    );
};
