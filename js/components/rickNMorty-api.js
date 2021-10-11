import { LitElement,html } from "lit-element";
import './get-data';
export class RickNMortyAPI extends LitElement{
    static get properties(){
        return {
            personajes: {type: Array},
            idActual: {type: Number}
        }
    }
    constructor(){
        super();
    }
    firstUpdated(){
        //Escucha el nuevo evento de get-data
        //this.dispatchEvent( new CustomEvent('ApiData', {})
        this.addEventListener('ApiData', (data)=>{
            // console.log(data.detail.data.results);
            this._dataFormat(data.detail.data.results);
        })
    }

    render(){
        return html `
        <!-- Aquí se le indica qué método y qué url -->
        <get-data methodo="GET" url="https://rickandmortyapi.com/api/character/"></get-data>
        <link rel="stylesheet" href="./css/components/contenedorComponent.css">
        <div class="componentShadowDOM">
            <h3>GetData API Rick and Morty</h3>
            <a href="https://rickandmortyapi.com" target="_blank">API Rick And Morty</a> <br>
            <label for="idActual">Número del personaje</label>
            <input type="number" @change="${this.cambiarIdActual}" placeholder="EJ: 1" name="idActual">
            <button @click=${this._getData}>Get Data</button>
            <div id="contenido">

            </div>
        </div>
        `
    }
    cambiarIdActual(e){
        this.idActual = e.target.value;
    }
    _dataFormat(data){
        let characters=[]; //Se vuelve un objeto json
        data.forEach( (character) => { //
            characters.push({
                img: character.image,
                name: character.name,
                gender: character.gender,
                url: character.url,
                specie: character.species
            })
        });
        this.personajes = characters;
    }
    _getData(){
        console.log(this.personajes[1].name);
        let contenido = this.shadowRoot.getElementById('contenido');
        contenido.innerHTML = 
        `<p>${this.idActual}</p>
        <img src=${this.personajes[`${this.idActual}`].img} alt="Personaje con el ID" style="width:150px">
        <p>${this.personajes[`${this.idActual}`].name}</p>
        <p>${this.personajes[`${this.idActual}`].gender}</p>
        <p>${this.personajes[`${this.idActual}`].specie}</p>
        <a href=${this.personajes[`${this.idActual}`].url} target="_blank">URL del personaje</a>
        `
        
    }

}
customElements.define('ricknmorty-api', RickNMortyAPI);