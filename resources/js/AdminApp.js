import { createApp } from 'vue';
import App from './AdminApp.vue';
import '../css/app.css';
import router from './routes/Admin.js'

createApp(App).use(router).mount('#app');
