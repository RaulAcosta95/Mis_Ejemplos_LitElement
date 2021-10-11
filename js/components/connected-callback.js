import { LitElement, html } from "lit-element";

export class ConnectedCallback extends LitElement{
    static get properties(){
        return{
            quien: {type:String}
        }
    }
    constructor(){
        super();
        this.quien = "Mundo"
    }
    connectedCallback() {
        super.connectedCallback(); //Necesario el super
        console.log('Connected Callback');
    }
    disconnectedCallback() {
        console.log('Disconnected Callback');
    }
      
      render(){
        return html`
            <style>
                p{
                    border: white 5px outset;
                        background-color: rgb(227, 228, 228);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin:0;
                    padding:0;
                    width:200px;
                }
            </style>
            <div>
                <p>ConnectedCallback Component</p>
            </div>
          `
      }
}
customElements.define('connected-callback', ConnectedCallback);