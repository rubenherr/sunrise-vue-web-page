<template>
    <h1>
        <ChatSocial msg="Diseño Creación Componente WhatsApp" />
    </h1>

    <h2>
        {{ estado ? 'Activo' : 'Desactivado'}}
    </h2>

    <div v-for="(item, index) in servicios" :key="index">
        {{index + 1}} - {{ item }}
    </div>

</template>


<script>
import ChatSocial from '@/components/ChatSocial.vue'

export default {
 
  name: 'Whatsapp',
  
  components: {
    ChatSocial, 
  },

  data() {
        return {
            estado: true,
            servicios: ['WhatsApp','Messenger','Twitter']
        }
  },

};
</script>

<style>
    h1 {
        color:blue
    }
    img.btn-whatsapp {
        left: 80px;
    }
</style>