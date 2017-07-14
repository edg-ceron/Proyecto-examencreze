var $ = require('jquery');
var yo = require('yo-yo');
var page = require('page');
var empty = require('empty-element');


module.exports = reservacion =>{

  //  QUITAR LAS ETIQUETAS
  var cuerpo = document.getElementById("cuerpo")
  var footer = document.getElementById("footer")
  document.body.removeChild(cuerpo);
  document.body.removeChild(footer);

  //AGREGAR LA ETIQUETAS
  var element = yo`
  <section id="cuerpo-reservacion">
    <a href="/"><div class="">Casa</div></a>
    <div class="container-reservacion">
      <p>Reservacion</p>
      <form id="nueva-persona"class=""  method="post">
        <label for="equipo">Nombre:</label>
        <input type="text" name="" value="" id="nombre" required>

        <label for="puntos">Apellido:</label>
        <input type="text" name="" value="" id="apellido" required>

        <label for="puntos">Email:</label>
        <input type="email" name="" value="" id="email" required=null>

        <label for="puntos">Telefono:</label>
        <input type="number" name="" value="" id="telefono" required>

        <label for="puntos">Asunto:</label>
        <textarea name="" type="text" value="" id="area" rows="8" cols="80"></textarea>

        <input type="submit" name="" value="Añadir Equipo">

      </form>
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
  document.body.appendChild(element);
  document.body.appendChild(footer);
}
