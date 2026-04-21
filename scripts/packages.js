export function displayPackages(packages) {

    const packagesContainer = document.querySelector('#packages-container');
    if (!packagesContainer) return;
    packages.forEach(element => {

        const divContainer = document.createElement('div'); // CREATE ELEMENTS 
        divContainer.classList.add('package-card');
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        const nameSpan = document.createElement('span');
        const nameh2 = document.createElement('h3')
        const price = document.createElement('strong');
        const priceP = document.createElement('p');
        const servicesContainer = document.createElement('ul');
        const reserveButton = document.createElement('button');

        // NAME
        nameSpan.textContent = element.name // BUILD CARDS
        nameh2.textContent = `Fratt `;
        // PRICE
        price.textContent = element.price;
        priceP.textContent = `From `;
        // BUTTON
        reserveButton.textContent = `Book Now`;

        // SERVICES ARRAY
        element.services.forEach(service => { 
            const serviceLi = document.createElement('li');
            serviceLi.textContent = service;
            servicesContainer.appendChild(serviceLi)
        });

        // NAME
        nameh2.appendChild(nameSpan) // APPEND CHILD ELEMENTS
        cardContent.appendChild(nameh2);
        //PRICE
        priceP.appendChild(price)
        cardContent.appendChild(priceP);
        // SERVICES
        cardContent.appendChild(servicesContainer);
        // BUTTON
        divContainer.appendChild(cardContent)
        divContainer.appendChild(reserveButton);
        // CONTAINER
        packagesContainer.appendChild(divContainer);

        reserveButton.addEventListener('click', () => displayDialog(element));
    });
};

const dialogContainer = document.querySelector('#dialog-container');
const closeBtn = document.querySelector('#dialog-container button');

if (dialogContainer && closeBtn) {
    closeBtn.addEventListener('click', () => dialogContainer.close());
}

function displayDialog(element) {
    // DIALOG ELEMENTS
    const dialogTitle = document.querySelector('#dialog-container h2');
    const prices = document.querySelector('#dialog-prices');
    const serviceList = document.querySelector('#dialog-services')
    const message = `Hola, me interesa reservar el paquete Fratt ${element.name} `;
    const whatsappBtn = document.querySelector('#whatsapp-button');
    
    // BUILD CARD
    dialogTitle.textContent = `Fratt ${element.name}`;
    prices.textContent = `From ${element.price}`;
    serviceList.textContent = "";
    element.services.forEach(service => {
        
        const li = document.createElement('li');
        li.textContent = service;   
        serviceList.appendChild(li);
    });
    whatsappBtn.setAttribute('href', `https://wa.me/5491137663738?text=${encodeURIComponent(message)}`)

    dialogContainer.showModal();
}