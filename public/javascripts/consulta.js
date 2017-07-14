var tabla = [
  {nombre: "Edgar",apellido:"Ceron",email:"lalala@heheh.com",telefono:"789920",asunto:"muela"},
  {nombre: "LALA",apellido:"ff",email:"wjewjkjekjk",telefono:"78320",asunto:"diente"},
  {nombre: "SOSOS",apellido:"ss",email:"lgga@ewf.com",telefono:"357920",asunto:"colmillo"},
  {nombre: "MSMSS",apellido:"hhh",email:"pooir@qwert.com",telefono:"123456",asunto:"amalgama"},
];


// MUESTRA LA TABLA COMPLETA
  $("#btn").addEventListener("click",mostrarTabla,false);
  console.log("Antes");
  function mostrarTabla(){
    console.log("CLick");

    var cuerpoTabla = $("#tabla");
    var tablallena= "";
    console.log(cuerpoTabla)

    for (let i = 0; i< tabla.length; i++){
      tablallena += "<tr><td>"+ tabla[i].nombre +"</td><td>"+ tabla[i].apellido +
      "</td><td>"+ tabla[i].email +"</td><td>"+ tabla[i].telefono +"</td><td>"+ tabla[i].asunto +"</td></tr>";
    }

    cuerpoTabla.innerHTML = tablallena;
  }






function $(selector){
  return document.querySelector(selector)
}
