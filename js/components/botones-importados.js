import { LitElement, html } from 'lit-element';

export class BotonesImportados extends LitElement {
    render(){
        return html `
        <style>
            .BotonesImportados{
                border: white 5px outset;
                background-color: rgb(227, 228, 228);
                width:200px;
                display:flex;
                flex-wrap:wrap;
                justify-content:center;
            }
        </style>
        <div class="BotonesImportados">
            <paper-button class="pink">link</paper-button>
            <paper-button raised class="indigo">raised</paper-button>
            <paper-button toggles raised class="green">toggles</paper-button>
            <paper-button disabled class="disabled">disabled</paper-button>
        </div>
        `
    }
}
customElements.define('botones-importados', BotonesImportados);