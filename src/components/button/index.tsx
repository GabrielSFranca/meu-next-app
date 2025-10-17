"use client";
import React from "react";
import { useState } from "react";

// REACT HOOKS
// ganchos do React

// useState = usa estado
// algo, setAlgo

// ts= requer tipo
// js = useState(0)

// useEffect -
// useRef - 
// useMemo x
export function Button () {
    const [valorAtual, atualizarValAtual] = useState<number>(0);

    function handleClick(){
        //window.alert("Voce clicou no botão "); 
        atualizarValAtual((prevState) => + prevState + 1);
    }

    return(
        <button onClick={handleClick}>
            Clicou aqui {valorAtual} vezes
        </button>
    );
}