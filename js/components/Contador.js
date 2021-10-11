import { LitElement,html } from 'lit-element';
import './MensajePopUp';
export class Contador extends LitElement {

    static get properties(){
        return{
            counter: { type: Number }
        }
    }

    constructor(){
        super();
        this.counter = 0;
    }

    render(){
        return html`
        <style>
            div{
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                width:200px;
                padding:10px;
                background-color: rgb(229, 229, 232);
                border: white 5px outset;
            }
            p{
                border: white 5px outset;
                width:200px;
            }
            button{
                border: white 5px outset;
                width:100px;
            }
            button:active{
                border: white 2px outset;
            }
        </style>
        <div>
            <p>Contador de clics = ${this.counter}</p>
            <button @click="${this.incrementar}" >+1 Clic</button> <button @click="${this.decrementar}">-1 Clic</button>
            <mensaje-pop-up id="mensaje-pop-up"></mensaje-pop-up>
        </div>
        `
    }

    incrementar(){
        this.counter ++;
        if( (this.counter % 5)==0){
            this.shadowRoot.getElementById('mensaje-pop-up').open(`Has llegado a ${this.counter}`);
        } else if( this.counter == 0){
            this.shadowRoot.getElementById('mensaje-pop-up').open(`Has regresado a ${this.counter}`);
        }
    }
    decrementar(){
        this.counter --;
        if( this.counter == 0){
            this.shadowRoot.getElementById('mensaje-pop-up').open(`Has regresado a ${this.counter}`);
        }

    }

}
customElements.define('contador-clics', Contador);