const url = './members.json';

var gridSelector = document.querySelector('#directory-card');
var listSelector = document.querySelector('#directory-list');
const cards = document.querySelector('#cards');


gridSelector.addEventListener('click', () => {
    if (!gridSelector.classList.contains('active')) {    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        cards.classList.add('directory-cards');
        cards.classList.remove('directory-list');
    }
});

listSelector.addEventListener('click', () => {
    if (!listSelector.classList.contains('active')) {
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        cards.classList.add('directory-list');
        cards.classList.remove('directory-cards');
    }
});

async function getMemberData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);

        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');

        const name = document.createElement('h2');
        name.textContent = `${member.name}`;

        const address = document.createElement('p');
        address.textContent = `${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `${member.phone}`;

        const website = document.createElement('p');
        website.textContent = `${member.website}`;

        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        //error catch
        logo.onerror = function() {
            console.log("logo failed");
        };

        const membershipLevel = document.createElement('h3');
        membershipLevel.textContent = `${member.membershipLevel}`;

        const otherInfo = document.createElement('p');
        otherInfo.textContent = `${member.otherInfo}`

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);
        card.appendChild(membershipLevel);
        card.appendChild(otherInfo);

        cards.appendChild(card);
    });
}

getMemberData();
