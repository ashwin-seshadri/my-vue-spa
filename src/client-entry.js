import { app } from './app.js'

app.$mount('#app')

if (module.hot) {
  module.hot.accept()
}
