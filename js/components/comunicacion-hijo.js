import { LitElement,html } from "lit-element";
import { ComunicacionNieto } from "./comunicacion-nieto";
export class ComunicacionHijo extends LitElement{
    constructor(){
        super();
    }
    static get properties(){
        return {
            valorHijo: { type: Number}
        }
    }
    render(){
        return html`
            <p>El valor del hijo es ${this.valorHijo}</p>
            <button @click=${this.actualizaValorHijo}>Suma 10 en valor hijo</button>
            <comunicacion-nieto valorNieto=${this.valorHijo}></comunicacion-nieto>
        `
    }
    actualizaValorHijo(){
        this.valorHijo += 10;
    }
}
customElements.define('comunicacion-hijo',ComunicacionHijo);