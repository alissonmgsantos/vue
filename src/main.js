import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// registrando o módulo/plugin no global view object
Vue.use(VueResource); 

// instância do global vue, que será renderizada no app.vue
new Vue({
  el: '#app',
  render: h => h(App)
})
