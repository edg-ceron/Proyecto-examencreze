var $ = require('jquery');
var yo = require('yo-yo');
var page = require('page');
var empty = require('empty-element');



module.exports =  home =>{
  //  QUITAR LAS ETIQUETAS
//______________________________________________
//_____CONSULTA SI EXISTE ELEMENTO PREGUNTADO___________
  var cuerpo;
 if (document.getElementById("cuerpo-reservacion")) {
  cuerpo = document.getElementById("cuerpo-reservacion")
  document.body.removeChild(cuerpo);
  console.log("Existe reservacion");
}  else if ( document.getElementById("cuerpo-consulta")) {
     cuerpo = document.getElementById("cuerpo-consulta")
     document.body.removeChild(cuerpo);
     console.log("Existe consulta");
}else {
  cuerpo = document.getElementById("cuerpo")
  document.body.removeChild(cuerpo);
}
//______________________________________________

  var footer = document.getElementById("footer")
  document.body.removeChild(footer);

  //AGREGAR LA ETIQUETA
  var cuerpo = yo`
  <section id="cuerpo">
    <div class="cuerp-logo">
      <div class="cuerp-logo-txt">
        <h1>Tratamientos para niños
Contamos con un dentista para niños
en cada una de nuestras clínicas</h1>
        </div>
      </div>
    <div class="cuerp-reservar">
      <a href="/reservacion"><div class="cuerp-reservar-btn btn">Reservar una cita</div></a>
      <a href="/consulta"><div class="cuerp-consultar-btn btn">Consultar citas</div></a>
    </div>
  </section>
  `;
  var footer = yo`
  <footer id="footer">
    <div class="footer-texto fondo">
    <div class="margen">
      <p>Contacto en: </p>
      <div class="footer-img">
        <a href="https://www.facebook.com/edgar.ceronmiranda"><img class="footer-img-1" src="images/facebook.png" alt=""></a>
        <a href=""><img class="footer-img-2" src="images/linkedin.png" alt=""></a>
      </div>
      <div class="footer-final">
        <p>Terms & conditions Privacy policy Copyrights Notification</p>
        <h6>©2017 Derechos Reservados. unocero es una marca registrada de Servicios Track Cero, S.C.</h6>
      </div>
    </div>
  </div>
  </footer>
  `;

  document.body.appendChild(cuerpo);
  document.body.appendChild(footer);

}
