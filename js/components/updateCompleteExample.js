import { LitElement, html } from 'lit-element';

class updateCompleteExample extends LitElement {
  static get properties() {
    return {
      prop1: { type: Number }
    };
  }

  constructor() {
    super();
    this.prop1 = 0;
  }

  render() {
    return html`
      <p>prop1: ${this.prop1}</p>
      <button @click="${this.changeProp}">prop1</button>
    `;
  }

  async getMoreState() {
    return;
  }

  async changeProp() {
    this.prop1 = Math.random();
    await Promise.all([this.updateComplete, this.getMoreState()]);
    console.log('Life Cycle Example: Update complete. Other state completed.');
  }
}

customElements.define('update-complete-example', updateCompleteExample);