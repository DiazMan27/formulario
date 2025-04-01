const form = document.getElementById('movable-form');

let isDragging = false;
let offsetX, offsetY;

form.addEventListener('mousedown', (e) => {
    // Solo activar el arrastre si el usuario hace clic en el formulario
    isDragging = true;

    // Calculamos el desplazamiento entre la posición del ratón y la posición del formulario
    offsetX = e.clientX - form.getBoundingClientRect().left;
    offsetY = e.clientY - form.getBoundingClientRect().top;

    // Cambiar el cursor mientras se arrastra
    form.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Calculamos la nueva posición del formulario
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Establecemos la nueva posición del formulario
        form.style.left = `${x}px`;
        form.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    // Detener el arrastre cuando el usuario suelte el ratón
    isDragging = false;

    // Restaurar el cursor al estado normal
    form.style.cursor = 'move';
});
