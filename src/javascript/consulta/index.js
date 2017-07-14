var $ = require('jquery');
var yo = require('yo-yo');
var page = require('page');
var empty = require('empty-element');


module.exports =  consulta =>{

  //  QUITAR LAS ETIQUETAS
  var cuerpo = document.getElementById("cuerpo")
  var footer = document.getElementById("footer")
  document.body.removeChild(cuerpo);
  document.body.removeChild(footer);

  //AGREGAR LA ETIQUETA
  var element = yo`
  <section id="cuerpo-consulta">
    <a href="/"><div class="">Casa</div></a>
    <div class="consulta-container">
      <div class="consulta-container-filtro">
        <select id="id_nombre" name="nombre" class="consulta-filtro">
                      <option value="3">Nombre </option>
                      <option value="4">Hora  </option>
                      <option value="5">Apellido  </option>
                      <option value="6">email </option>
        </select>
      </div>
      <div class="consulta-container-txt">
        <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control inputName">
      </div>
      <div class="consulta-container-btn">
        <div id="btn"class="consulta-btn">
          Buscar
        </div>
      </div>
    </div>
    <div class="consulta-tabla">
      <table id="tabla">
      </table>
    </div>
    <div class="consulta-imagen">

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
