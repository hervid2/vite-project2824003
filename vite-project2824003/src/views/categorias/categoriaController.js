export const categoriaController = async () => {
    
    const respuesta = await fetch("http://localhost:3000/api/categorias");
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
}


// Función para cargar los datos en la tabla de categorías
const cargar_tabla = async () => {
    const response = await categoriaController(); // Obtiene el objeto completo desde el controlador
    const data = response.data; // Accede al arreglo dentro de la propiedad "data"
    
    if (!Array.isArray(data)) {
        console.error("La propiedad 'data' no es un arreglo:", data);
        return;
    }

    data.forEach(categoria => {
        crearFila(categoria); // Crea una fila para cada categoría
    });
};

// Función para crear una fila en la tabla
const crearFila = ({ id, nombre, descripcion }) => {
    const tBody = document.querySelector("#categorias-table tbody"); // Selecciona el tbody de la tabla de categorías
    console.log(tBody); // Verifica si el tbody es encontrado

    if (!tBody) {
        console.error("No se encontró el tbody de la tabla con ID 'categorias-table'");
        return;
    }
    const tr = tBody.insertRow(); // Crea una nueva fila
    const tdId = tr.insertCell(0); // Crea la celda para el ID
    const tdNombre = tr.insertCell(1); // Crea la celda para el Nombre
    const tdDescripcion = tr.insertCell(2); // Crea la celda para la Descripción
    const tdBotonera = tr.insertCell(3); // Crea la celda para los botones

    // Agregar el contenido a las celdas
    tdId.innerHTML = id;
    tdNombre.innerHTML = nombre;
    tdDescripcion.innerHTML = descripcion;

    // Crear botones de acción (Editar y Eliminar)
    const div = document.createElement("div");
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");

    btnEditar.innerHTML = "Editar";
    btnEliminar.innerHTML = "Eliminar";

    // Agregar clases a los botones
    div.classList.add("botonera");
    btnEliminar.classList.add("btn", "btn--small", "btn--danger", "eliminar");
    btnEditar.classList.add("btn", "btn--small", "btn--primary", "editar");

    // Agregar los botones al div y luego a la celda
    div.append(btnEliminar, btnEditar);
    tdBotonera.appendChild(div);

    // Agregar un atributo ID a la fila para identificarla
    tr.setAttribute("id", `categoria_${id}`);
};

// Llama a la función para cargar la tabla al cargar la página
window.addEventListener("load", () => {
    cargar_tabla();
});