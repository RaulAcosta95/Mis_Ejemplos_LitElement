import { LitElement, html } from "lit-element";
//Este componente es simplemente GETDATA, en el componente padre se le dirá que API consume
export class GetData extends LitElement{
    static get properties(){
        return {
            url: {type: String},
            methodo: {type: String}
        }
    }
    constructor(){
        super();
    }
    
    
    firstUpdated(){
        this.getData();
    }
    _sendData(data){//Se refiere a enviar datos al componente padre
        //Nuevo evento que escuchará el componente ricknmorty-api (padre)
        this.dispatchEvent( new CustomEvent('ApiData', {
            detail: {data: data},
            bubbles: true,
            composed:true
        }));
    }
    getData(){//Se refiere a obtener los datos de la API
        console.log(`GetDataMethod URL: ${this.url}`);
        console.log(`GetDataMethod Method: ${this.methodo}`);
        fetch(this.url,{method: this.methodo})
            .then((response) => {
                if(response.ok){
                    return response.json()
                } else{
                    return Promise.reject(response);
                }
            })
            .then((data) => { 
                this._sendData(data) //Ejecuta _sendData con la data
            }) 
            .catch ((error) => { 
                console.warn('Something went wrong: ', error); 
            });
    }
}
customElements.define('get-data', GetData);