import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import auth from './middleware/auth';

const app = createApp(App)

app.use(router)

router.beforeResolve(auth);

app.mount('#app')
