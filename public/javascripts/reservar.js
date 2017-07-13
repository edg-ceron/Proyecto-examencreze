var tabla = [
  {nombre: "Edgar",apellido:"Ceron",email:"lalala@heheh.com",telefono:"789920",asunto:"muela"},
  {nombre: "LALA",apellido:"ff",email:"wjewjkjekjk",telefono:"78320",asunto:"diente"},
  {nombre: "SOSOS",apellido:"ss",email:"lgga@ewf.com",telefono:"357920",asunto:"colmillo"},
  {nombre: "MSMSS",apellido:"hhh",email:"pooir@qwert.com",telefono:"123456",asunto:"amalgama"},
];

$("#nueva-persona").addEventListener("submit",nuevapersona,false);
function nuevapersona(event) {
  event.preventDefault();

  var equipoIntroducido = $("#nombre").value;
  var apellidoIntroducido = $("#apellido").value;
  var emailIntroducido = $("#email").value;
  var telefonoIntroducido = $("#telefono").value;
  var areaIntroducida = $("#area").value;


  var nuevapersona  = {nombre: equipoIntroducido, apellido: apellidoIntroducido,
    email: emailIntroducido, telefono: telefonoIntroducido, asunto: areaIntroducida};
  tabla.push(nuevapersona);

  console.log("gwggg");
}

function $(selector){
  return document.querySelector(selector)
}
