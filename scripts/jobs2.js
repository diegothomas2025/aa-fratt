const url = "https://diegothomas2025.github.io/aa-fratt//data/jobs.json";
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

        // CREATE IMAGE SLIDER ELEMENTS
        const containerBox = document.createElement('div');
        containerBox.classList.add(containerBox);
        const imageBefore = document.createElement('img');

        // SET IMAGE SLIDER ATTRIBUTES
        imageBefore.setAttribute('src', element.imageBefore);
        imageBefore.setAttribute('alt', `${element.car} photo`);
        imageBefore.setAttribute('loading', 'lazy');

        // APPEND ELEMENTS
        containerBox.appendChild(imageBefore);
        jobsGrid.appendChild(containerBox);
        jobsContainer.appendChild(jobsGrid);

        
    });
}