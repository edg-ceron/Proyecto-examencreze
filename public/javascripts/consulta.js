var tabla = [
  {nombre: "Edgar",apellido:"Ceron"},
  {nombre: "LALA",apellido:"ff"},
  {nombre: "SOSOS",apellido:"ss"},
  {nombre: "MSMSS",apellido:"hhh"},
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
      tablallena += "<tr><td>"+ tabla[i].nombre +"</td><td>"+ tabla[i].apellido +"</td></tr>";
    }

    cuerpoTabla.innerHTML = tablallena;
  }






function $(selector){
  return document.querySelector(selector)
}
