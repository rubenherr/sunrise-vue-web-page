<template>
<div class="container">

  <h1>Contáctenos</h1>

  <div class="row">
    <div class="col-lg"></div>            
    <div class="col-lg-8">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="nombre" placeholder="Nombre">
          <label for="nombre">Nombre</label>
        </div>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="correo" placeholder="name@example.com">
          <label for="correo">Correo electrónico</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="telefono" placeholder="Número de teléfono">
          <label for="telefono">Número de teléfono</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="asunto" placeholder="Asunto">
          <label for="asunto">Asunto</label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="mensaje" style="height: 100px"></textarea>
          <label for="mensaje">Mensaje</label>
        </div>
        <br>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Enviar copia a sí mismo
          </label>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn--solid btn--default btn--pointer"> Enviar </button>       
        </div>
    </div>
    <div class="col-lg"></div> 
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
img.btn-whatsapp {
    left: 80px;
}
.grecaptcha-badge { visibility: visible }
</style>>

