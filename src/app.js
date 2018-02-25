import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hello there'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
