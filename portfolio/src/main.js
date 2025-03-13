import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import du routeur
import "./assets/main.css"; // Tailwind

const app = createApp(App);
app.use(router); // Ajout du routeur
app.mount("#app");
