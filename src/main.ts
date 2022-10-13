import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { installRouter } from "./plugins/router";
import {installScreenShot} from "./plugins/screen-shot";

const app = createApp(App);
installRouter(app);
installScreenShot(app);


app.mount('#app')
