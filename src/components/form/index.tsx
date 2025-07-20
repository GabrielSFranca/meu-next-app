/**
 * 



 */


import React from "react";


interface PostProps {
    titulo: string;
}

export function Post(
    {titulo} :PostProps
){
    return (
        <div>
            <h1>{titulo}</h1>
        </div>
    );
}