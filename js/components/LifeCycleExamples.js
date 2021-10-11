import { LitElement, html } from 'lit-element';
import './updateCompleteExample';
export class LifeCycleExamples extends LitElement {
    static get properties(){
        return{
            mensaje : {
                type: String,
                hasChanged(newVal, oldVal) {
                    console.log(`Life Cycle Example: hasChanged mensaje: ${newVal} > ${oldVal}. hasChangedExample: true.`);
                    // this.requestUpdate();
                }
            },
            mensaje2 : {type: String}
        }
    }
    constructor(){
        super();
        this.mensaje = '';
        this.mensaje2 = '';
    }




    connectedCallback( funcion){
        super.connectedCallback();
        //Ejecuta cuando se conecte el componente
        console.log('Life Cycle Example: Connected Callback Example');
    }














    disconnectedCallback(){
        super.disconnectedCallback();
        console.log('Life Cycle Example: Disconnected Callback Example');
    }
    async performUpdate() {
        await new Promise((resolve) => requestAnimationFrame(() => resolve()));
        console.log('Life Cycle Example: performUpdate');
        super.performUpdate();
      }
    render(){
        return html `
            <style>
                .LifeCycleExample{
                    width:200px;
                    border: white 5px outset;
                    background-color: rgb(227, 228, 228);
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    text-align:center;
                }
                input{
                    margin-bottom:5px;
                }
                .nota{
                    color: rgb(248, 118, 118);
                }

            </style>
            <div class="LifeCycleExample">
                <h3>Life Cycle Example</h3>
                <p>Esta es una propiedad [<b>${this.mensaje}</b>] </p>
                <p>Esta es una propiedad  sin hasChanged [<b>${this.mensaje2}</b>] </p>
                <input type="text" vaule="${this.mensaje}" @change="${this.cambiarMensaje}" placeholder="Cambia la propiedad">
                <p class="nota">NOTA: hasChanged() me genera conflicto cuando mensaje2 no existe</p>
                <update-complete-example></update-complete-example>
            </div>
        `
    }
    cambiarMensaje(e){
        this.mensaje = e.target.value;
        this.mensaje2= e.target.value;
    }
    firstUpdated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          console.log(`Life Cycle Example: firstUpdated: Propiedad: ${propName} oldValue: ${oldValue}, . \n
          Obviamente si es firstUpdate, el oldValue es undefined`);
        });
    }
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          console.log(`Life Cycle Example: updated: Propiedad: ${propName} changed. oldValue: ${oldValue}`);
          this.requestUpdate('mensaje', oldValue);
          //RequestUpdate pero no puedo mandar un mensaje dentro de la función
          console.log('Life Cycle Example: requestUpdate: mensaje '+ oldValue);
        });
    }
    // shouldUpdate(changedProperties) {
    //     changedProperties.forEach((oldValue, propName) => {
    //       console.log(`Life Cycle Example: changedProperties: Propiedad: ${propName} changed. oldValue: ${oldValue}`);
    //     });
    //     return changedProperties.has('mensaje');
    //   }
}
customElements.define('life-cycle-example', LifeCycleExamples);