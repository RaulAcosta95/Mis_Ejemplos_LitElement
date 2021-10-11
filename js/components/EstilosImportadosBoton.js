import { LitElement,html } from 'lit-element';

export class EstilosImportadosBoton extends LitElement {
    
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/botonEstilosImportados.css">
            <button>Hover Me</button>
        `
    }
}
customElements.define('boton-estilos-importados', EstilosImportadosBoton);
