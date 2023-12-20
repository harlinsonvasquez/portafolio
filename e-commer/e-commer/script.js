function cambiartema() {
    let theme = document.getElementById('theme').value;
    let body = document.getElementById('body');
    
    const themes = {
        '1': 'write',
        '2': 'black',
        '3': 'libre'
    };

    for (let key in themes) {
        if (theme === key) {
            body.classList.add(themes[key]);
            localStorage.setItem('theme', themes[key]); // Guardar el tema en localStorage
        } else {
            body.classList.remove(themes[key]);
        }
    }
}
// Verificar y aplicar el tema almacenado en localStorage al cargar la página
window.onload = function() {
    let storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        let body = document.getElementById('body');
        body.classList.add(storedTheme);
    }
};