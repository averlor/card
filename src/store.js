import Vue from 'vue'
import Vuex from 'vuex'

import generalModule from './store/general.js'
import booksModule from './store/books.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    generalModule,
    booksModule
  }
})
