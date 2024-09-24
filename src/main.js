import { createApp } from 'vue'
import App from './App.vue'
import $bus from './utils/Events'
import router from './utils/routes'

const app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;

app.mount('#app');
