
class MyCounter extends HTMLElement{
    //Atributos son de la etiqueta
    static get observedAttributes(){
        return ['count'];
    }

    constructor(){
        super();
        this.attachShadow({
            mode:'open'
        });
        this.count=0;
        const html = `
            <button id="dec">-</button>
            <span id="count">${this.count}</span>
            <button id="inc">+</button>
        `;
        const style = `
            :host{
                display:block;
                border: white 5px outset;
                background-color: rgb(227, 228, 228);
            display: flex;
            align-items: center;
            justify-content: center;
            margin:0;
            padding:0;
            width:200px;
            height:100px;
            }
            button{
                margin:20px;
                height:30px;
                width:30px;
            }
            
        `;
        this.shadowRoot.innerHTML= `
            <style>
                ${style}
            </style>
            ${html}
        `;
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    connectedCallback(){
        this.buttonDec = this.shadowRoot.getElementById('dec');
        this.buttonInc = this.shadowRoot.getElementById('inc');
        this.counterEl = this.shadowRoot.querySelector('span');
        this.buttonInc.addEventListener('click',this.inc);
        this.buttonDec.addEventListener('click',this.dec);
    }
    disconnectedCallback(){
        this.buttonInc.removeEventListener('click',this.inc);
        this.buttonDec.removeEventListener('click',this.dec)
    }
    attributeChangedCallback(attr, oldValue, newValue){
        if(attr==="count"){
            this.count = parseInt(newValue);
            this.update();
        }
    }
    inc(){
        this.count +=1;
        this.setAttribute('count', this.count.toString())
        this.update();
    }
    dec(){
        this.count -=1;
        this.setAttribute('count', this.count.toString())
        this.update();
    }
    update(){
        this.counterEl.textContent = this.count;
    }
}
window.customElements.define('my-counter-jul', MyCounter);