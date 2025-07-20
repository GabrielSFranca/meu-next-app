"use client";
import React from "react";
import { useState } from "react";

export function Button () {
    const [count, setcont]=useState(0);

    function handleClick(){
        //window.alert("Voce clicou no botao "); 
        setcont(count + 1);
    }

    return(
        <button onClick={handleClick}>
            Clicou aqui {count} vezes
        </button>
    );
}