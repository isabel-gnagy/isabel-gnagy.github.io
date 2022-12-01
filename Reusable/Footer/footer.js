const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <footer>
    <center>&#169; Copyright 2022 Isabel Gnagy. All Rights Reserved.</center>
    </footer>
`

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);