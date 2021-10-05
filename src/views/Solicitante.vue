<template>
<InformacionSolicitante />
</template>


<script>
import InformacionSolicitante from '@/components/InformacionSolicitante.vue'

export default {
 
  name: 'Solicitante',
  
  components: {
    InformacionSolicitante, 
  },

  data: () => ({
  //
  }),

};
</script>

<style>
img.btn-whatsapp {
    left: 80px;
}
.grecaptcha-badge { visibility: visible; }

</style>