const imagenProyectos = [
    {
        name: '<strong>Técnico en terreno:</strong> Instalación y reparación de redes de telecomunicaciones.',
        img: './assets/IMG/Tecnico en terreno.jpg',
        github: 'https://www.github.com/RodolfoDescazeaux',
    },

    {
        name: '<strong>Iluminación profesional:</strong> Montaje de equipos de iluminación profesional y mecánica de levante.', 
        img: './assets/IMG/Iluminacion profesional.jpg',
        github: 'https://www.github.com/RodolfoDescazeaux',
    },

    {
        name: '<strong>Ingeniero electrónico:</strong> Mantenimiento de equipos de adquisición de datos en carreteras.',
        img: './assets/IMG/Ingeniero electronico.jpg',
        github: 'https://www.github.com/RodolfoDescazeaux',
    },
];

function modalcito(i) {

    const modal = document.querySelector('#exampleModal');
    console.log(modal);
    const h1 = modal.querySelector('h1');
    h1.innerHTML = imagenProyectos[i].name;
    const img = modal.querySelector('img');
    img.setAttribute('src', imagenProyectos[i].img);
    const a = modal.querySelector('a');
    a.setAttribute('href', imagenProyectos[i].github);
}