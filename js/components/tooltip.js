class Tooltip extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
        //delegatesFocus false por defecto
        // indica si queremos que el propio Shadow DOM obtenga el foco o no.
        // this.attachShadow({delegatesFocus:"false"})
        
        //Inyecta html en el shadowRoot
        this.shadowRoot.innerHTML = `
            <style>
                #tooltip-container {
                    font-size: 24px;
                }

                .tooltip{
                    padding: 1rem;
                    border-radius: 10px;
                    background-color: black;
                    color: white;
                }
            </style>
            <slot></slot>
            <span id="tooltip-container">👉</span>
        `;
        
        //_tooltipContainer es la variable que contiene el html
        this._tooltipContainer = this.shadowRoot.querySelector(
            "#tooltip-container"
          );
      

    }
    connectedCallback() {
        console.log("Ready to go 😎");
              // Add event listeners to our div element

        this._tooltipContainer.addEventListener("mouseover",
        //bind indica a que hace referencia el this._showTooltop
            this._showTooltip.bind(this)
        );

        this._tooltipContainer.addEventListener("mouseleave",
            this._hideTooltip.bind(this)
        );

        //_tooltipText es un texto "Default text" por default, u obtiene el 
        // valor del atributo tip-text <example-tooltip tip-text="Aqui algo">
        this._tooltipText = "Default Text" || this.getAttribute("tip-text");

    }

    disconnectedCallback() {
        this._tooltipContainer.removeEventListener("mouseover", 
            this._showTooltip);
        this._tooltipContainer.removeEventListener("mouseleave", 
            this._hideTooltip);
        console.log("All clean 😊");
    }

    _showTooltip() {
        //Crea un elemento dentro de este componente
        this._tooltip = document.createElement("span");
        //Esto podría estar de más, pues _tooltipText ya da por default un valor
        this._tooltip.innerText = 'Default text';
        //Al elemento le asigna una clase
        this._tooltip.className = "tooltip";
        //No basta con crearlo, también hay que aparecerlo
        this.shadowRoot.append(this._tooltip);
        //Le asigna un innetText (mas arriba está la variable)
        this._tooltip.innerText = this._tooltipText;
    }

    _hideTooltip() {
        this._tooltip.remove();
    }
}
customElements.define("example-tooltip",Tooltip)