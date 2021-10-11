import { LitElement,html } from 'lit-element';

export class CartaPresentacion extends LitElement {

    static get properties(){
        return{
            especialidad: {type: String},
            nombre: {type: String},
            numero: {type: Number},
        }
    }

    constructor(){
        super();
        this.nombre = ''
        this.especialidad = ''
        this.numero = ''
    }
    render(){
        return html`
        <style>
            .CartaPresentacion{
                border: white 5px outset;
                background-color: rgb(227, 228, 228);

            }
            label, input{
                display:block;
                float:none;
                width:200px;
            }

            .Carta{
                background-color: rgb(98, 99, 100);
                width: 200px;
                text-align: center;
                color: rgb(242, 243, 243);
                border-radius: 10px 10px 10px 10px;
                -moz-border-radius: 10px 10px 10px 10px;
                -webkit-border-radius: 10px 10px 10px 10px;
                border: 0px solid #000000;
            }
            .Carta .especialidad{
                font-size: 20px;
                padding-top: 5px;
                margin-bottom:0;
                padding-bottom:0;

            }
            .Carta .nombre{
                font-size: 18px;
                margin:0;
                padding:0;
            }
            h4{
                text-align:center;
            }
        </style>
        <div class="CartaPresentacion">
            <h4>Carta de presentacion</h4>
            <div class="Inputs">
                <label for="">Especialidad</label>
                <input type="text" vaule="${this.especialidad}" @change="${this.cambiarEspecialidad}" placeholder="Tu Especialidad">
                <label for="">Nombre</label>
                <input type="text" vaule="${this.nombre}" @change="${this.cambiarNombre}" placeholder="Tu Nombre">
                <label for="">Número</label>
                <input type="text" vaule="${this.numero}" @change="${this.cambiarNumero}" placeholder="Tu Número">
            </div>
            <div class="Carta">
                    <p class="especialidad">${this.especialidad}</p>
                    <p class="nombre">${this.nombre}</p>
                    <p class="numero">${this.numero}</p>
            </div>
        </div>
        `
    }
    cambiarEspecialidad(dato){
        this.especialidad = dato.target.value;
        console.log(this.especialidad);
    }




    
    cambiarNombre(e){
        this.nombre=e.target.value;
        console.log(this.nombre);
        console.log(e.bubbles);
    }
    cambiarNumero(e){
        this.numero=e.target.value;
        console.log(this.numero);
    }
}
customElements.define('carta-presentacion', CartaPresentacion);