import { createApp } from 'vue';
import App from './FrontApp.vue';
import '../css/app.css';
import router from './routes/Front.js'

createApp(App).use(router).mount('#app');
