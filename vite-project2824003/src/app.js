import "./main.css";
import "./form.css";
import { router } from './router/router';
import './components/header.js';
// import { productosController } from "./views/productos/productoController.js";

window.addEventListener("hashchange", () => {
    router(app);
});

