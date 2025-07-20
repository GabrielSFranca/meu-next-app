import React from "react";
import Image from "next/image";

interface Props {
    title: string;
    desc: string;
    imgUrl: string;
    imgH?: number;
    imgW?: number;
    alt?: string;
}
export function Card ({
    title, 
    desc, 
    imgUrl, 
    imgH=50, 
    imgW=50, 
    alt=' '} : Props) {

    return(
        <div>

            <h2>{title}</h2>
            <Image 
                src={imgUrl}
                height={imgH}
                width={imgW} 
                alt={alt}            
            />
            <p>{desc}</p>

        </div>
    );
}