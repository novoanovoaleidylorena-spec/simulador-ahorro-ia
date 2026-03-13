function calcular(){

let ingresos = parseFloat(document.getElementById("ingresos").value);
let gastos = parseFloat(document.getElementById("gastos").value);
let meta = document.getElementById("meta").value;
let costo = parseFloat(document.getElementById("costoMeta").value);

let ahorro = ingresos - gastos;

if(ahorro <= 0){

document.getElementById("resultadoTexto").innerHTML =
"No tienes capacidad de ahorro mensual.";

return;

}

let meses = Math.ceil(costo / ahorro);

let formato = costo.toLocaleString("es-CO",{style:"currency",currency:"COP"});

document.getElementById("resultadoTexto").innerHTML =
"Para alcanzar tu meta de " + formato +
" necesitarás ahorrar durante " + meses + " meses.";

let imagen = "";

switch(meta){

case "casa":
imagen="https://cdn-icons-png.flaticon.com/512/69/69524.png";
break;

case "carro":
imagen="https://cdn-icons-png.flaticon.com/512/743/743922.png";
break;

case "viaje":
imagen="https://cdn-icons-png.flaticon.com/512/201/201623.png";
break;

case "estudio":
imagen="https://cdn-icons-png.flaticon.com/512/3135/3135755.png";
break;

case "negocio":
imagen="https://cdn-icons-png.flaticon.com/512/1995/1995531.png";
break;

case "pc":
imagen="https://cdn-icons-png.flaticon.com/512/3474/3474360.png";
break;

case "celular":
imagen="https://cdn-icons-png.flaticon.com/512/15/15874.png";
break;

case "moto":
imagen="https://cdn-icons-png.flaticon.com/512/2972/2972185.png";
break;

case "inversion":
imagen="https://cdn-icons-png.flaticon.com/512/2331/2331945.png";
break;

case "emergencia":
imagen="https://cdn-icons-png.flaticon.com/512/565/565547.png";
break;

}

document.getElementById("imagenMeta").src = imagen;

}
