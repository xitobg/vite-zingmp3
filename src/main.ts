import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons.css'
import './assets/index.css'
import BaseCard from './components/BaseCard.vue'

const app = createApp(App)
app.component('BaseCard', BaseCard)
app.use(store)
app.use(router)

app.mount('#app')
