const url = "https://diegothomas2025.github.io/aa-fratt/data/jobs.json";
const jobsContainer = document.querySelector('#jobs-container');
const jobsGrid = document.querySelector('#jobs-grid');

export async function getJobsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayJobs(data);
        } else {
            throw Error (await response.text())
        } 
    } catch (error) {
        console.log(error)
    }   
};

function displayJobs(data) {
    if (!jobsContainer) return;

    data.forEach(element => {

        // CREATE CARD ELEMENTS 
        const divCard = document.createElement('div');
        divCard.classList.add('card')
        const service = document.createElement('h3');
        const car = document.createElement('p');
        const duration = document.createElement('p');
        const location = document.createElement('p');

        service.textContent = `${element.service}`;
        car.textContent = `Modelo: ${element.car}`;
        duration.textContent = `Duracion: ${element.duration}`;
        location.textContent = `Ubicacion: ${element.location}`;

        // CREATE IMAGE SLIDER ELEMENTS
        const containerBox = document.createElement('div');
        containerBox.classList.add('containerBox');
        const imageBefore = document.createElement('img');
        imageBefore.classList.add('before');

        const containerBoxAfter = document.createElement('div');
        containerBoxAfter.classList.add('containerBoxAfter');
        const imageAfter = document.createElement('img');
        imageAfter.classList.add('after');

        const divSliderLine = document.createElement('div');
        divSliderLine.classList.add('slider-line');

        const divSliderCircle = document.createElement('div');
        divSliderCircle.classList.add('slider-circle');
        const logo = document.createElement('img');
        const fratt = document.createElement('p');
        fratt.textContent = "FRATT"

        // SET IMAGE SLIDER ATTRIBUTES
        imageBefore.setAttribute('src', `images/${element.imageBefore}`);
        imageBefore.setAttribute('alt', `${element.car} photo`);
        imageBefore.setAttribute('loading', 'lazy');

        imageAfter.setAttribute('src', `images/${element.imageAfter}`);
        imageAfter.setAttribute('alt', `${element.car} photo`);
        imageAfter.setAttribute('loading', 'lazy');

        logo.setAttribute('src', `images/aa-logo.svg`);
        logo.setAttribute('alt', `AA FRATT LOGO`);
        logo.setAttribute('loading', 'lazy');
        
        // APPEND ELEMENTS

        divCard.appendChild(service)

        containerBox.appendChild(imageBefore); // Slider elements
        containerBoxAfter.appendChild(imageAfter);
        divSliderCircle.appendChild(logo)
        divSliderCircle.appendChild(fratt)

        divSliderLine.appendChild(divSliderCircle);

        containerBox.appendChild(containerBoxAfter);
        containerBox.appendChild(divSliderLine);

        divCard.appendChild(containerBox);
        divCard.appendChild(car)
        divCard.appendChild(duration)
        divCard.appendChild(location)

        jobsGrid.appendChild(divCard);

        initSlider(containerBox);
    });
}

function initSlider(container) {
    const afterWrapper = container.querySelector('.containerBoxAfter');
    const line = container.querySelector('.slider-line');
    let isDragging = false;

    function updateSlider(clientX) {
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;

        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;

        const percent = (x / rect.width) * 100;

        afterWrapper.style.width = percent + "%";
        line.style.left = percent + "%";
    }

    container.addEventListener('click', (e) => updateSlider(e.clientX));
    container.addEventListener('mousedown', () => { isDragging = true; });
    container.addEventListener('mouseup', () => { isDragging = false; });
    container.addEventListener('mouseleave', () => { isDragging = false; });
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });
    container.addEventListener('touchstart', (e) => updateSlider(e.touches[0].clientX));
    container.addEventListener('touchmove', (e) => updateSlider(e.touches[0].clientX));
    container.addEventListener('dragstart', (e) => e.preventDefault());
}