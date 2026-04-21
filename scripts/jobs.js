const url = "https://diegothomas2025.github.io/wdd231/finalproject/data/jobs.json";
const jobsContainer = document.querySelector('#jobs-container');
const jobsGrid = document.querySelector('#jobs-grid');

export async function getJobsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
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

        // CREATE ELEMENTS
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const image = document.createElement('img');
        const car = document.createElement('p');
        car.classList.add('car');
        const duration = document.createElement('p');
        duration.classList.add('duration');
        const location = document.createElement('p');
        location.classList.add('location');
        
        // BUILD CARDS
        title.textContent = element.service;
        car.textContent = `Car: ${element.car}`;
        duration.textContent = `Duration: ${element.duration}`;
        location.textContent = `Location: ${element.location}`;

        // SET ATTRIBUTES
        image.setAttribute('src', element.image);
        image.setAttribute('alt', `${element.car} photo`);
        image.setAttribute('lazy', 'loading')

        //APPEND CHILD ELEMENTS AND BUILD CARD STRUCTURES
        div.appendChild(title);
        div.appendChild(image);
        div.appendChild(car);
        div.appendChild(duration);
        div.appendChild(location);
        jobsGrid.appendChild(div)
        jobsContainer.appendChild(jobsGrid);
    });
};