"use client";

import React, {useState, useEffect} from "react";

export default function Timer(){
    
    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setContador((contador) => contador + 1);
        }, 1000);
    });
    
    return(
        <div>
            <h2>i ve rendered {contador} times</h2>
        </div>
    );
}