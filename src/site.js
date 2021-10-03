import loadHome from './home'; 
import loadMenu from './menu';
import loadAbout from './about';

function createHeader() {
    const header = document.createElement("header");
    header.id = "header";
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    let homeLink = ul.appendChild(createLi('home'));
    homeLink.classList.add('nav-link');
    homeLink.onclick = (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveLink(homeLink);
        loadHome();
    }

    ul.appendChild(createLi('&middot;'));

    let menuLink = ul.appendChild(createLi('menu'));
    menuLink.classList.add('nav-link');
    menuLink.onclick = (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveLink(menuLink);
        loadMenu();
    }

    ul.appendChild(createLi('&middot;'));

    let aboutLink = ul.appendChild(createLi('about'));
    aboutLink.classList.add('nav-link');
    aboutLink.onclick = (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveLink(aboutLink);
        loadAbout();
    }

    nav.appendChild(ul);

    return nav;
}

function createLi(content) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    if(content !== '&middot;') {
        a.textContent = content;
        li.appendChild(a);
    }else {
        li.innerHTML = content;
    }
    return li;
}

function setActiveLink(link) {
    const links = document.querySelectorAll('.nav-link');
    // console.log(links);
    links.forEach(link => {
        if(link !== this) {
            link.classList.remove('active');
        }
    })

    link.classList.add('active');
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute('id', 'content');

    return main;
}

function createFooter(content) {
    const footer = document.createElement("footer");
    const span = document.createElement("span");

    span.classList.add('footer-text');
    span.innerText = content;

    footer.setAttribute("id", "footer");
    footer.appendChild(span);

    return footer;
}

function init() {
    const root = document.getElementById('body');
    root.appendChild(createHeader());
    root.appendChild(createMain());
    root.appendChild(createFooter('made with 愛 by redpanda'));

    setActiveLink(document.querySelector('.nav-link'));
    loadHome();

}

export default init;
