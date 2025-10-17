import React from "react";
import styles from "./page.module.css";

function Tecla({value}: {value:string}){
    /** codigo JavaScript do componente */
    return (
        <td>
            <button className={styles.tecla}>
                {value}
            </button>
        </td>
    );
}

function CalcBlock(){
    return (
        <div className={styles.calc}>
            <div className={styles.display}>
                <p className={styles.result}>0</p>
            </div>
            <table>
            <tbody>
                <tr>
                    <Tecla value="7"/>
                    <Tecla value="8"/>
                    <Tecla value="9"/>
                    <Tecla value="+"/>
                </tr>
                <tr>
                    <Tecla value="4"/>
                    <Tecla value="5"/>
                    <Tecla value="6"/>
                    <Tecla value="-"/>                   
                </tr>
                <tr>
                    <Tecla value="1"/>
                    <Tecla value="2"/>
                    <Tecla value="3"/>
                    <Tecla value="x"/>                   
                </tr>
                <tr>
                    <Tecla value="0"/>
                    <Tecla value="C"/>
                    <Tecla value="/"/>
                    <Tecla value="="/>                   
                </tr>
            </tbody>
            </table>
        </div>
    );
}
export default function Calculator(){
    return (
        <div className={styles.parent}>
            <h1>Calculator</h1>
            <CalcBlock />
        </div>
    );
}


// pagina = export default function..
// componente = export function..

/**
 * 
 * 

 function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
 */