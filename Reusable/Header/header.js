const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <link href="Reusable/Header/headerStyle.css" rel="stylesheet" type="text/css">
    <header>
        <center><img src="icons/logo.png"></center>
    </header>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);