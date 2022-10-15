let header = document.querySelector(".header");
let footer = document.querySelector(".pie-pag");


let encabezado =  `
<div class="encabezado">
<h1>Conocé Misiones</h1>
<nav class="nav-header">
    <a href="index.html">Home</a>
    <a href="about.html">Lugares</a>
    <a href="ubicacion.html">Nosotros</a>
    <a href="registro.html">Contactanos</a>
</nav>
</div>
`;

header.innerHTML= encabezado;

let rodapie = `
<p>Conocé más sobre nosotros en nuestras redes sociales:</p>
<nav class="nav-foot">
    <a target="_blank" href="https:/facebook.com">
        <img class="redes" src="./imagenes/facebook.png" alt="Facebook">
    </a>
    <a target="_blank" href="https:/www.instagram.com">
        <img class="redes" src="./imagenes/instagram.png" alt="instagram">
    </a>
</nav>
`;

footer.innerHTML= rodapie;
