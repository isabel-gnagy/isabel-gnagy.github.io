class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="Reusable/Header/headerStyle.css" rel="stylesheet" type="text/css">
        <header id="header">
            <center><img src="icons/logo.png"></center>
        </header>
    `
    }
}

customElements.define('header-component', Header);