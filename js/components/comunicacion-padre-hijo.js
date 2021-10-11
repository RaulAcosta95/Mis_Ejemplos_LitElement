import { LitElement,html } from "lit-element";
import { ComunicacionHijo } from "./comunicacion-hijo";
export class ComunicacionPadre extends LitElement{
    constructor(){
        super();
        this.valorPadre = 0;
    }
    static get properties(){
        return {
            valorPadre: { type: Number}
        }
    }
    render(){
        return html `
            <style>
                div{
                    width:200px;
                    border:white 5px outset;
                    background-color:rgb(227,228,228);
                }
                h1{
                    font-size:20px;
                }
            </style>
            <div>
                <h1>Comunicación Padre-Hijo-Nieto</h1>
                <p>El valorPadre es ${this.valorPadre} </p>
                <button @click=${this.actualizaValorPadre}>Suma 3 en valor padre</button>
                <comunicacion-hijo valorHijo=${this.valorPadre}> </comunicacion-hijo>
                <p>El padre le manda el valor al hijo. El padre puede actualizar el valor del hijo, pero el hijo no puede actualizar el valor del padre.</p>
            </div>
        `
    }
    actualizaValorPadre(){
        this.valorPadre +=3;
    }
}
customElements.define('comunicacion-padre',ComunicacionPadre);