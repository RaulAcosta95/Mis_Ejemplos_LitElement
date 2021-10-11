import { LitElement,html } from "lit-element";
export class ComunicaComponentesIzquierda extends LitElement{
    static get properties(){
        return {
            datoIzquierda: {type: String}
        }
    }
    constructor(){
        super();
        this.datoIzquierda = "";
        addEventListener('EnvioDatosDerecha', (data)=>{
            this.datoIzquierda = data.detail.data;
            // this._dataFormat(data.detail.data.results);
        })
    }
    render(){
        return html `
            <link rel="stylesheet" href="./css/components/contenedorComponent.css">
            <div class="componentShadowDOM">
                <h3>Comunica Componentes Izquierda</h3>
                <p>Escribe un dato y envíaselo al componente de la derecha.</p>
                <input type="text" @change="${this._actualizaDato}" placeholder="Escribe algo" name="datoIzquierda">
                <p>Dato: <b>${this.datoIzquierda}</b></p>
            </div>

        `
    }
    _actualizaDato(data){
        this._sendData(data.target.value);
        this.datoIzquierda = data.target.value;

    }
    _sendData(data){
        this.dispatchEvent( new CustomEvent('EnvioDatosIzquierda', {
            detail: {data: data},
            bubbles: true,
            composed:true
        }));
    }

}
customElements.define('comunica-componentes-izquierda', ComunicaComponentesIzquierda);