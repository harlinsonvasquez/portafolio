// Esta función se ejecuta cuando cambias el tema desde el selector
function cambiartema() {
    // Obtiene el valor seleccionado en el selector
    let theme = document.getElementById('theme').value;

    // Obtiene la referencia al elemento del cuerpo de la página
    let body = document.getElementById('body');
    
    // Define un objeto que mapea los valores del selector a clases CSS
    const themes = {
        '1': 'write',
        '2': 'black',
        '3': 'libre'
    };

    // Recorre el objeto de temas para aplicar o quitar clases CSS
    for (let key in themes) {
        // Si el tema coincide con la tecla actual, agrega la clase correspondiente
        if (theme === key) {
            body.classList.add(themes[key]);
            // Guarda el tema seleccionado en el localStorage
            localStorage.setItem('theme', themes[key]);
        } else {
            // Si no coincide, elimina la clase
            body.classList.remove(themes[key]);
        }
    }
}

// Esta parte se ejecuta cuando la página termina de cargar
window.onload = function() {
    // Obtiene el tema almacenado en localStorage
    let storedTheme = localStorage.getItem('theme');
    // Si hay un tema almacenado, lo aplica al cuerpo de la página
    if (storedTheme) {
        let body = document.getElementById('body');
        body.classList.add(storedTheme);
    }
};
