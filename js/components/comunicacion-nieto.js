import { LitElement,html } from "lit-element";

export class ComunicacionNieto extends LitElement{
    constructor(){
        super();
    }
    static get properties(){
        return {
            valorNieto: { type: Number}
        }
    }

    render(){
        return html `
            <p>El valor de Nieto es ${this.valorNieto}</p>
            <button @click=${this.actualizaValorNieto}>Suma 5 en valor Nieto</button>
        `
    }

    actualizaValorNieto(){
        this.valorNieto +=5;
    }

}
customElements.define('comunicacion-nieto', ComunicacionNieto);