<template>
      <hr class="hr">
      <footer class="footer footer--main">
        <div class="wrapper wrapper--gutter">
          <div class="footer__navigation">
            <div class="nav nav--aux footer__legal-items">
              <ul>
                <li>
                  <a href="#" class="nav__item " tabindex="" >
                    <span style="font-size: large;color: black;font-weight: bold;">Política de Privacidad</span>
                  </a> 
                </li>
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                <li>
                  <a data-open-dialog-button="dialog-id-552862" class="nav__item" style="font-size: large;color: black;font-weight: bold;">
                    Copyright 2021 Sunrise Cargo - Schenker 2021
                  </a> 
                </li>
              </ul>
            </div>
            <div class="nav nav--icons--social">
              <ul>
                <li>
                  <a href="https://co.linkedin.com/company/sunrisecargo" class="nav__item" target="_blank">
                    <img class="btn-in" src="imagenes/LINKED-IN.png" alt="linked in" style="width: 50px;" />
                  </a>
                      <img 
                        class="btn-whatsapp" 
                        src="imagenes/whatsapp.png" 
                        width="72" height="72" alt="Whatsapp" 
                        onclick="window.location.href='https://wa.me/573144183725?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio'"
                      >
                </li>
              </ul>
            </div>			
          </div>
        </div>
        <!-- <a href="javascript:location.reload()">
          <img src="http://assets.stickpng.com/images/585e4829cb11b227491c338d.png" 
                style="width: 20px;">
        </a> -->
      </footer>  
</template>

<script>
export default {

}
</script>

<style>
        img.btn-whatsapp {
                          display: block !important;
                          position: fixed;
                          z-index: 9999999;
                          bottom: 20px;
                          right: 20px;
                          cursor: pointer;
                          border-radius:100px !important;
                        }
        img.btn-whatsapp:hover{
                              border-radius:100px !important;
                              -webkit-box-shadow: 0px 0px 15px 0px rgba(7,94,84,1); 
                              -moz-box-shadow: 0px 0px 15px 0px rgba(7,94,84,1);
                              box-shadow: 0px 0px 15px 0px rgba(7,94,84,1);
                              transition-duration: 1s;
                              } 


        img.btn-in {
                          display: block !important;
                          z-index: 9999999;
                          bottom: 20px;
                          right: 20px;
                          cursor: pointer;

                        }
        img.btn-in:hover{
                              -webkit-box-shadow: 0px 0px 15px 0px rgba(7,94,84,1); 
                              -moz-box-shadow: 0px 0px 15px 0px rgba(7,94,84,1);
                              box-shadow: 0px 0px 15px 0px rgba(7,94,84,1);
                              transition-duration: 1s;
                              } 
</style>