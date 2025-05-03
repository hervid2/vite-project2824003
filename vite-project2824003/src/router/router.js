import { loadView } from "../helpers/loadview.js";
import { productoControler } from "../views/productos/productoControler.js";
import { categoriaControler } from "../views/categorias/categoriaController.js";
import { inicioControler } from "../views/inicio/inicioControler.js";
const routes = {
    inicio:{
        "template": "inicio.index.html",
        controlador: inicioControler
    },
    productos :{
        "template": "productos.index.html",
        controlador: productoControler
    },
    categorias:{
        "template": "categorias.index.html",
        controlador: categoriaControler
    }
};

export const router = (app) => {
    const hash =location.hash.slice(1);
    
    const {template, controlador} = matchRoute(hash);
    // LLamando la vista
    loadView(app, template);
    //Ejecutar el controlador
    // ?

    controlador()
}

const matchRoute = (hash) => {
    if (!hash){
        return routes["inicio"];

    }
    for (const route in routes){
        if (route === hash){
            return routes[route];
        } 
    }
}