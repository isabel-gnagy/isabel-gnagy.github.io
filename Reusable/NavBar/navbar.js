class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar">
        <!-- Will not display until the CSS has loaded -->
        <style> .topnav { display: none; } </style>
        <link href="Reusable/NavBar/navStyle.css" rel="stylesheet" type="text/css">
            <div class="topnav" id="myTopnav">
              <a href="index.html" class="active">Home</a>
      
              <div class="dropdown">
                <button class="dropbtn">
                  About Me
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="mystory.html">My Story</a> 
                  <a href="gtkm.html">Get To Know Me</a>
                </div>
              </div>
      
              <div class="dropdown">
                <button class="dropbtn">
                  Professional
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="edu.html">Education</a>
                  <a href="employ.html">Employment</a>
                </div>
              </div>
              
              <a href="project.html">My Projects</a>
              
              <a style="font-size: 15px" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
    
    `;
  }
}

customElements.define("nav-component", NavBar);
