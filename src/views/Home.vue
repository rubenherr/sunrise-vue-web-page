<template>
    <MiSunrise />
    <LayerSunrisecargo />
<section class="section has-margin">
  <div class="db-news wrapper">
    <section class="tracking-search tracking-search--horizontal">
        <video src="/imagenes/video/Schenker.mp4" autoplay muted loop style="width: 100%;" controls></video>
    </section>
  </div>
</section> 
    <SliderProductos />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import MiSunrise from '@/components/MiSunrise.vue'
import LayerSunrisecargo from '@/components/LayerSunrisecargo.vue'
import SliderProductos from '@/components/SliderProductos.vue'

export default {
  name: 'Home',
  
  components: {
    HelloWorld, MiSunrise, LayerSunrisecargo, SliderProductos,
  },
  
  props:{ 
    //msg: String
  },

  data: () => ({
    msg:'Validando actualizacion de la pagina'
  }),

  mounted() {

    console.log('Se Ejecuta con el metodo mounted en el home')

  },

};
</script>
