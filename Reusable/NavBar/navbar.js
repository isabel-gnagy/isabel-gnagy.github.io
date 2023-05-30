class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar">
        <!-- Will not display until the CSS has loaded -->
        <style> .topnav { display: none; } </style>
        <link href="Reusable/NavBar/navStyle.css" rel="stylesheet" type="text/css">
            <div class="topnav" id="myTopnav">
              <a href="index.html" class="active">Home</a>
      
              <a href="aboutme.html">About Me</a>
      
              <a href="history.html">Background</a>
              
              <a href="project.html">Projects</a>
              
              <a style="font-size: 15px" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
    
    `;
  }
}

customElements.define("nav-component", NavBar);
