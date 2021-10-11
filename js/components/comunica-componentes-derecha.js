import { LitElement,html } from "lit-element";
import './comunica-componentes-izquierda';
import './get-data';
export class ComunicaComponentesDerecha extends LitElement{
    static get properties(){
        return {
            datoDerecha: {type: String}
        }
    }
    constructor(){
        super();
        this.datoDerecha = "";
        addEventListener('EnvioDatosIzquierda', (data)=>{
            this.datoDerecha = data.detail.data;
            // this._dataFormat(data.detail.data.results);
        })
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Comunica Componentes Derecha</h3>
                <p>Escribe un dato y envíaselo al componente de la izquierda.</p>
                <input type="text" @change="${this._actualizaDato}" placeholder="Escribe algo" name="datoDerecha">
                <p>Dato: ${this.datoDerecha}</p>
            </div>
        `
    }
    _actualizaDato(data){
        this._sendData(data.target.value);
        this.datoDerecha = data.target.value;

    }
    _sendData(data){
        this.dispatchEvent( new CustomEvent('EnvioDatosDerecha', {
            detail: {data: data},
            bubbles: true,
            composed:true
        }));
    }

}

customElements.define('comunica-componentes-derecha', ComunicaComponentesDerecha);