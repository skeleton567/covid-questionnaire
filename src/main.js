import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

import "@/assets/tailwind.css";
import "@/config/vee-validate/rules";

const app = createApp(App);
app.component('the-header',TheHeader);
app.component('the-footer', TheFooter);
app.use(router);
app.use(store);

app.mount("#app");
