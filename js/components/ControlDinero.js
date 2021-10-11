import { LitElement, html } from 'lit-element';

export class ControlDinero extends LitElement {
    static get properties(){
        return {
            saldoInicial   : {type: Number},
            saldoFinal     : {type: Number},
            gastoLunes     : {type: Number},
            gastoMartes    : {type: Number},
            gastoMiercoles : {type: Number},
            gastoJueves    : {type: Number},
            gastoViernes   : {type: Number},
            gastoSabado    : {type: Number},
            gastoDomingo   : {type: Number},
        }
    }
    constructor(){
        super();
        this.saldoInicial = 0;
        this.saldoFinal = 0;
        this.gastoLunes = 0;
        this.gastoMartes = 0;
        this.gastoMiercoles = 0;
        this.gastoJueves = 0;
        this.gastoViernes = 0;
        this.gastoSabado = 0;
        this.gastoDomingo = 0;
    }
    render(){
        return html `
        <style>
            h4{
                text-align:center;
            }
            .ControlDinero{
                width:200px;
                border: white 5px outset;
                background-color: rgb(227, 228, 228);
            }
        </style>
        <div class="ControlDinero">
            <h4>Control Dinero</h4>
            <label for="">Tu Ingreso</label>
            <input type="number" @change="${this.cambiarSaldoInicial}"      placeholder="Tu Ingreso">
            <label for="">Tus Gastos</label>
            <input type="number" @change="${this.cambiarGastoLunes}" placeholder="Gasto Lunes">
            <input type="number" @change="${this.cambiarGastoMartes}" placeholder="Gasto Martes">
            <input type="number" @change="${this.cambiarGastoMiercoles}" placeholder="Gasto Miercoles">
            <input type="number" @change="${this.cambiarGastoJueves}" placeholder="Gasto Jueves">
            <input type="number" @change="${this.cambiarGastoViernes}" placeholder="Gasto Viernes"> 
            <input type="number" @change="${this.cambiarGastoSabado}" placeholder="Gasto Sábado"> 
            <input type="number" @change="${this.cambiarGastoDomingo}" placeholder="Gasto Domingo">
            <p>Tu ingreso inicial es <b>$${this.saldoInicial}</b></p>
            <p>Tu restante es <b>$${this.saldoFinal}</b></p>
        </div>

        `
    }
    cambiarSaldoInicial(e){
        this.saldoInicial = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;
    }
    cambiarGastoLunes(e){
        this.gastoLunes = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
    cambiarGastoMartes(e){
        this.gastoMartes = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;
    }
    cambiarGastoMiercoles(e){
        this.gastoMiercoles = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
    cambiarGastoJueves(e){
        this.gastoJueves = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
    cambiarGastoViernes(e){
        this.gastoViernes = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
    cambiarGastoSabado(e){
        this.gastoSabado = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
    cambiarGastoDomingo(e){
        this.gastoDomingo = e.target.value;
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;

    }
// Me decía que restaGastos no está definido
    restaGastos(){
        this.saldoFinal = this.saldoInicial - this.gastoLunes - this.gastoMartes - this.gastoMiercoles - this.gastoJueves - this.gastoViernes - this.gastoSabado - this.gastoDomingo;
    }
}
customElements.define('control-dinero', ControlDinero);