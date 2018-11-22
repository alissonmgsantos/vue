import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-Router';
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css';


// registrando o módulo/plugin no global view object
Vue.use(VueResource); 
Vue.use(VueRouter); 

//Criando uma instância de rota
const router = new VueRouter({ routes });

// instância do global vue, que será renderizada no app.vue
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
