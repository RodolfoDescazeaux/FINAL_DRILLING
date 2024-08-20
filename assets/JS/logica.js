const imagenProyectos = [
    {
        name: 'Técnico en terreno',
        img: './assets/IMG/Tecnico en terreno.jpg',
        github: 'https://www.github.com',
    },

    {
        name: 'Iluminación profesional',
        img: './assets/IMG/Iluminacion profesional.jpg',
        github: 'https://www.github.com',
    },

    {
        name: 'Ingeniero electrónico',
        img: './assets/IMG/Ingeniero electronico.jpg',
        github: 'https://www.github.com',
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