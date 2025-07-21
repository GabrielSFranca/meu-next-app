import React from "react";

interface Props {
    title:string;
}

export function Heading({title} : Props){
    return <h1>{title}</h1>;
}