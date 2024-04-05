 import React,{createContext} from "react";
import DadosLivro from "../dados/DadosLivro";
const LivrariaContext = createContext({})

export const LivrariaProvider = props=>{
    return(
        <LivrariaContext.Provider value={{
            state:{
                DadosLivro
            }
        }}>
            {props.children}
        </LivrariaContext.Provider>
    )
}

export default LivrariaContext