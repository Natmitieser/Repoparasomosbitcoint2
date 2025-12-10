document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const background = document.querySelector('.background-grid');
    const logo = document.querySelector('.floating-logo');

    // Mueve el fondo ligeramente opuesto al mouse
    background.style.transform = `perspective(500px) rotateX(60deg) translate(-${x * 20}px, -${y * 20}px)`;
    
    // Mueve el logo un poco para dar profundidad
    logo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
