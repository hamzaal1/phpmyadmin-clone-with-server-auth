import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import auth from './middleware/auth';

const pinia = createPinia();
const app = createApp(App)

app.use(router)
app.use(pinia)

router.beforeResolve(auth);

app.mount('#app')
