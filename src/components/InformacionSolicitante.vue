<template>

<div class="container">

    <div class="row">
        <h2 class="h2">Trabaja con Nosotros</h2>
        <p>¿Quieres ser parte de Sunrise Cargo - Schenker? Únete al mejor equipo integral y haz parte de la
            familia Sunrise Cargo - Schenker. Nos gustaría conocerte, envíanos tu hoja de vida y en caso de
            tener una vacante que ajuste a tu perfil te contactaremos.
        </p>
    </div>

    <div class="row">
            <div class="col-lg"></div>
                <div class="col-lg-8">
                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 160px;" id="nombre">Nombre</span>
                    <input type="text" class="form-control" aria-label="nombre" aria-describedby="nombre">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 150px;" id="apellidos">Apellidos</span>
                    <input type="text" class="form-control" aria-label="apellidos" aria-describedby="apellidos">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 36px;" id="identificacion">Documento de identidad</span>
                    <input type="text" class="form-control" aria-label="identificacion" aria-describedby="identificacion">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 80px;" id="email">Correo electrónico</span>
                    <input type="text" class="form-control" aria-label="email" aria-describedby="email">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 126px;" id="telefono">Teléfono fijo</span>
                    <input type="text" class="form-control" aria-label="telefono" aria-describedby="telefono">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 86px;" id="direccion">Ciudad residencia</span>
                    <input type="text" class="form-control" aria-label="direccion" aria-describedby="direccion">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A; padding-right: 166px;" id="nombre">Celular</span>
                    <input type="text" class="form-control" aria-label="nombre" aria-describedby="nombre">
                    </div>

                    <div class="input-group mb-3" style="height: 60px;">
                    <span class="input-group-text" style="border-radius: 20px 0px 0px 20px; color: white; background: #2E318A;" id="nombre">Último cargo desempeñado</span>
                    <input type="text" class="form-control" aria-label="nombre" aria-describedby="nombre">
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="mensaje" style="height: 100px"></textarea>
                        <label for="texto">Texto</label>
                    </div>
                    <br>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Al seleccionar esta casilla admito que he leído y aceptado la Política de protección de datos Personales de SUNRISE CARGO
                            - SCHENKER *    
                        </label>
                    </div>

                    <br>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-home">
                    <div class="mb-3 ">
                        <label for="formFile" class="form-label">ADJUNTA TU HOJA DE VIDA:</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>            
                    </div>
                <br>
                </div>
            <div class="col-lg"></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
            return {
                espacio:'&nbsp;'
            }

            }
}
</script>

<style>
.form-control {
border: 1px solid #2E318A;
}
</style>