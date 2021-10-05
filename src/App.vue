<template>
  <Header />
  <Slider />
      <router-view/>
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';

export default {
  name: 'App',
  
  components: {
    Header, Footer, Slider
  },

  // props:{
  //   msg: 'S'
  // },

  beforeCreate() {
    console.log('No se ha ejecutado nada todavía desde el App')
  },

  // mounted() {
  //   let SunriseJS = document.createElement('script')
  //   SunriseJS.setAttribute('src', '../themes/sunrisecargo/js/sunrise-594978-53.js')
  //   document.head.appendChild(SunriseJS)

  //   // let SunriseJS1 = document.createElement('script')
  //   // SunriseJS1.setAttribute('src', '/bootstrap-5.1.0-dist/js/bootstrap.bundle.min.js')
  //   // document.head.appendChild(SunriseJS1)

  //   console.log('Se Ejecuta con el metodo mounted desde el App')

  // },


mounted() {
    if (document.getElementById('myScript')) { return }
    let src = '../themes/sunrisecargo/js/sunrise-594978-53.js'
    let script = document.createElement('script')
    script.setAttribute('src', src)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('id', 'myScript')
    document.head.appendChild(script)
}


}
</script>

<style>

</style>