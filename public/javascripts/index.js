var page = require ('page')


$('.cuerp-reservar-btn').addEventListener('click',function(){
   page('/consulta', consulta);
  console.log("presionar sirvio")
})



function $(selector){
  return document.querySelector(selector)
}
