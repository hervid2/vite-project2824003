import "./main.css";
import { router } from './router/router';
import './components/header.js';

window.addEventListener("hashchange",()=>{
    router(app);
});
window.addEventListener("DOMContentLoaded",()=>{
    router(app);
});
