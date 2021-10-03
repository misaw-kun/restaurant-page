
function createAbout() {
    let main = document.createElement('main');
    main.setAttribute('id', 'content');

    const box = document.createElement("div");
    box.classList.add('main');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = 'Contact Us';

    let contact = document.createElement('p');
    contact.classList.add('desc');
    contact.innerHTML = "The Tea Room <br /> 420 East Church St, 109 <br /> Orlando, Florida 32801 <br /> +1 123-456-789";

    let hr = document.createElement('hr');

    let days = document.createElement('p');
    days.classList.add('desc');
    days.innerHTML = "Monday Closed <br /> Tuesday Closed <br /> Wednesday Closed <br /> Thursday 10:30 am - 5:00 pm <br /> Friday 10:30 am - 5:00 pm <br /> Saturday 10:30 am - 5:00 pm <br /> Sunday 10:30 am - 5:00 pm <br />";

    box.appendChild(h1);
    box.appendChild(contact);
    box.appendChild(hr);
    box.appendChild(days);

    main.appendChild(box);

    return main;
}

function loadAbout() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createAbout());
}

export default loadAbout;
