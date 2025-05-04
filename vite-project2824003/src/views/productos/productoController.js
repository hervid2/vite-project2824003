export const productoController = async () => {
    
    const respuesta = await fetch("http://localhost:3000/api/productos");
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
    
    
}