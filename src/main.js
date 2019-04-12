import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import 'firebase/firestore'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

Vue.$db = db

new Vue({
  router,
  store,
  render: h => h(App),

  created() {
    //load book
  }
}).$mount('#app')
