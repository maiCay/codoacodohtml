let header = document.querySelector(".header");
let footer = document.querySelector(".pie-pag");


let encabezado =  `
<div class="encabezado">
<h1>Conocé Misiones</h1>
<nav class="nav-header">
    <a href="index.html">Home</a>
    <a href="about.html">Lugares</a>
    <a href="ubicacion.html">Nosotros</a>
    <a href="newform.html">Contactanos</a>
</nav>
</div>
`;

header.innerHTML= encabezado;

let rodapie = `
<p>Conocé más sobre nosotros en nuestras redes sociales:</p>
<nav class="nav-foot">
    <a href="https:/facebook.com" target="_blank"><img class="redes" src="./imagenes/facebook.png" alt="Facebook"></a>
    <a href="https:/www.instagram.com" target="_blank"><img class="redes" src="./imagenes/instagram.png" alt="instagram"></a>
    <a href="https://github.com/maiCay/codoacodohtml" target="_blank"><img class="redes" src="./imagenes/github.png" alt="Github"></a>
</nav>
<p>&#169 Copyright 2022 / Kena Matzenbacher - Jesica Machetti - Maira Cayano</p>
<br>
`;

footer.innerHTML= rodapie;
