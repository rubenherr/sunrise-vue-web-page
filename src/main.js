import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { load } from 'recaptcha-v3'
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

import '../public/bootstrap-5.1.0-dist/css/bootstrap.css'
import './assets/css/sunrise-594984-56.css'
import './assets/css/sunrise-portable-717258-1.css'
import './assets/css/sunrise-landscape-717256-1.css'


// import LoadScript from 'vue-plugin-load-script'
// Vue.use(LoadScript)


// Vue.loadScript("./assets/js/sunrise-594978-53.js").then(() => {
//     // Código en caso de que tu script cargue
// }).catch(() => {
//     // Código en caso de que la carga de tu script fallé
// });


load('6LfOFe0bAAAAAPGs2LrTcX2OZgvDat7nxIaCVg16', {
  useRecaptchaNet: true,
  autoHideBadge: false
}).then((recaptcha) => {

})

createApp(App).use(store).use(router).use(VueSocialChat).mount('#app')
