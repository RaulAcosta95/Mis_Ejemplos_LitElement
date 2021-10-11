import { LitElement, html } from 'lit-element';

export class MEnsajePOpUP extends LitElement {
    static get properties(){
        return{
            msg: { type: String},
            opened: { type: Boolean}
        }
    }
    constructor(){
        super();
        this.msg = "";
        this.opened = false;
    }
    render(){
        return html `
        <style>
            p{
                transition:1s;
                opacity:0;
                width:200px;
                text-align:center;
                background-color: rgb(224, 240, 255);
            }
            .opened{
                border: white 5px outset;
                transition:1s;
                opacity:1;
            }
        </style>
            <p class="${ this.opened ? 'opened': ''}">${this.msg}</p>
        `
    }
    open(mensaje){
        this.msg = mensaje;
        this.opened = true;
        setTimeout(() => {
            this.opened = false;
        }, 2000);
    }
}
customElements.define('mensaje-pop-up', MEnsajePOpUP);