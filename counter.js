// Creamos una variable 'count para almacenar el valor del contador.
let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        // Si el botón clicado tiene la clase 'decrease', disminuimos el contador.
        if(styles.contains('decrease')) {
            count--;
            value.textContent = count;
        } 
        // Si el botón clicado tiene la clase 'increase', aumentamos el contador.
        else if(styles.contains('increase')) {
            count++;
            value.textContent = count;
        } 
        // Si el botón clicado tiene la clase 'reset', reiniciamos el contador a 0.
        else {
            count = 0;
            value.textContent = count;
        }

        // Actualizamos el texto del elemento HTML con el valor del contador actualizado.
        value.textContent = count;

        //Si 'count' es mayor que cero, el color será verde; si es menor que cero, será rojo; de lo contrario, será negro.
        value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#222';
    })
})
