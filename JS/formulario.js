

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	
	nombre: false,
	apellido: false,
	ciudad: false,
	correo: false,
	viajar: false,
	provincias: false,
	destino: false,
	pasajeros: false,
	salida: false,
	sinfecha: false,
	verificar: false
}



const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		
		case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

function verificarBoton(){
	if(formulario.viajar[0].checked || formulario.viajar[1].checked || formulario.viajar[2].checked){
	campos.viajar = true; 
	}else{
		campos.viajar = false;		
 }

}
function verificarLista(){
	var provincias = document.getElementById('provincias');
	if (provincias.value == "" ){
		console.log("provincias false");
		return campos.provincias=false;
 }else{
	console.log("provincias true");
	return campos.provincias = true;
 }
}
function verificarDestino(){
	var destino = document.getElementById('destino');
	if (destino.value == "" ){
		return campos.destino = false;
 }else{
	return campos.destino=true;
 }
}
function verificarPasajeros(){
	var pasajeros = document.getElementById('pasajeros');
	if (pasajeros.value !== 0 ){
		console.log("pusiste n pasajeros");
		return campos.pasajeros = true;
 }else{
	console.log("Debe seleccionar al menos un pasajero.");
	return campos.pasajeros = false;
 }
}
function verificarSinfecha(){
	var sinfecha = document.getElementById('sinfecha');
	var salida = document.getElementById('salida');
	
	if (sinfecha.checked && salida.value){
		console.log("sin fecha false");
		document.getElementById("sinfecha").checked = false ;
		campos.salida= true;
		return campos.sinfecha = false;
 	}else{
		campos.salida= false;
	return campos.sinfecha = true;
 	}
	
 	
}

function validarFechaSalida(){
	var usarfecha = new Date(document.getElementById('salida').value).toJSON().slice(0,10);
	var hoy = new Date().toJSON().slice(0,10);
	if (usarfecha < hoy){
		alert("ingrese una fecha valida, no puede seleccionar una que ya pasó");
	} 
	var salida = document.getElementById('salida');
	if(salida.value){
		document.getElementById("sinfecha").checked = false ;
		campos.salida = true;
		console.log("salida true");
		return campos.sinfecha = false;
	}else{
		document.getElementById("sinfecha").checked = true ;
		campos.salida = false;
		return campos.sinfecha = true;
	}
}
function validarFechaRetorno(){
	var pasado = new Date(document.getElementById('retorno').value).toJSON().slice(0,10);
	var today = new Date().toJSON().slice(0,10);
	if (pasado < today){
		
		alert("ingrese una fecha valida, no puede seleccionar una que ya pasó");
	}
}
function validarFechas(){
	var salida = document.getElementById('salida');
	if(salida.value){
		console.log("salida seleccionado");
		campos.salida = true;
		m=0;
	}else{
		campos.salida = false;
		m=1;
	}
	var sinfecha = document.getElementById('sinfecha');
	if (sinfecha.checked){
		console.log("seleccionaste sin fecha");
		campos.sinfecha = true;
		f=0;	
	}else{
		campos.sinfecha = false;
		f=1;
	}
	if(m==0 && f==1){
		console.log("verificar esta en true con salida seleccionado");
		return campos.verificar = true;
	}else if(m==1 && f==0){
		console.log("verificar esta en true con sin fecha seleccionado");
		return campos.verificar = true;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	validarFechas();

	const terminos = document.getElementById('terminos');
	if(campos.viajar && campos.nombre && campos.apellido && campos.ciudad && campos.correo  && campos.provincias  && campos.destino  && campos.pasajeros && campos.verificar && terminos.checked  ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
