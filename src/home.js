//homepage content

function createHome() {
    const home = document.createElement("div");
    home.classList.add('main');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = 'The Tea Room';

    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = '茶室';
    title.onmouseover = (e) => {
        console.log('hello')
    }

    let subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle');

    let span = document.createElement('span');
    span.innerText = '[chah-sheet-soo]';

    subtitle.appendChild(span);
    home.appendChild(heading);
    home.appendChild(title);
    home.appendChild(subtitle);

    return home;

}

function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;
