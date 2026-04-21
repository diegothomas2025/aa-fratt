const url = "https://diegothomas2025.github.io/wdd231/finalproject/data/services.json"
const servicesContainer = document.querySelector('#services-container');
const lastServiceSelected = document.querySelector('#lastServiceSelected');
const cardContent = document.createElement('div');
cardContent.classList.add('service-content');

export async function getServiceData() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            displayServices(data)
        } else {
            throw Error (await response.text())
        }
    } catch (error) {
        console.log(error)
    }
};

function displayServices(data) {

    if (!servicesContainer) return;

    data.forEach(element => {

        // CREATE ELEMENTS
        const cardContainer = document.createElement('div');
        
        const serviceTitle = document.createElement('h2');
        const price = document.createElement('p');
        const duration = document.createElement('p');
        const description = document.createElement('p');
        const reserveButton = document.createElement('a');

        // BUILD CARD
        serviceTitle.textContent = element.name;
        price.textContent = `Price: ${element.price}`;
        duration.textContent = `Duration: ${element.duration}`;
        description.textContent = `Description: ${element.description}`;
        reserveButton.textContent = "Book Now";
        reserveButton.setAttribute('href', 'https://wa.me/5491137663738')
        reserveButton.setAttribute('target', '_blank')
        
        cardContainer.appendChild(serviceTitle);
        cardContainer.appendChild(price);
        cardContainer.appendChild(duration);
        cardContainer.appendChild(description);
        cardContainer.appendChild(reserveButton);
        cardContent.appendChild(cardContainer);
        servicesContainer.appendChild(cardContent);

        reserveButton.addEventListener('click', () => {
            localStorage.setItem('lastService', element.name)
            lastServiceSelected.textContent = `Last service selected: ${localStorage.getItem('lastService')}`
        });
    });

    const savedService = localStorage.getItem('lastService')
    if (savedService) {
        lastServiceSelected.textContent = `Your last service selected was ${savedService}`;
    }
};
