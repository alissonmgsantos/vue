import Vue from 'vue'
import App from './App.vue'

// instância do global vue, que será renderizada no app.vue
new Vue({
  el: '#app',
  render: h => h(App)
})
