import { Button } from "@/components/button";
import { Card } from "@/components/card";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button />

      <Card 
        title="titulo"
        desc="O que é Lorem Ipsum?
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
        imgUrl="/next.svg"
        imgH={200}
        imgW={200}
        alt="loremdddddd"
      />
    </div>

  );
}