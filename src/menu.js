
function createMenu() {
    const menu = document.createElement('main');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('matcha', 'matcha(&yen; 200)'));
    menu.appendChild(createMenuItem('black', 'black(&yen; 200)'));
    menu.appendChild(createMenuItem('green', 'green(&yen; 150)'));
    menu.appendChild(createMenuItem('oolong', 'oolong(&yen; 400)'));
    menu.appendChild(createMenuItem('honey-ginger', 'honey-ginger(&yen; 300)'));
    menu.appendChild(createMenuItem('masala', 'masala(&yen; 350)'));

    return menu;

}

function createMenuItem(name, content) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cover = document.createElement('div'); 
    cover.classList.add('card__cover');
    const description = document.createElement('div');
    description.classList.add('card__content');

    const img = document.createElement('img');
    img.src = `./images/${name.toLowerCase()}.jpg`
    img.alt = `${name}`

    description.innerHTML = content;

    cover.appendChild(img);
    card.appendChild(cover);
    card.appendChild(description);

    return card;
}

function loadMenu() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;
