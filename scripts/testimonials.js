const url = "https://diegothomas2025.github.io/wdd231/finalproject/data/testimonials.json";
const testimonialsContainer = document.querySelector('#testimonials-container')

export async function getTestimonialData() {
    
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayTestimonials(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayTestimonials(data) {

    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = "";
    
    data.forEach(element => {

        // GET HTML ELEMENTS
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('testimonial-card');
        const fullname = document.createElement('h3');
        const comment = document.createElement('p');
        const location = document.createElement('p');
        const rating = document.createElement('p');

        //BUILD CARD
        fullname.textContent = `${element.name} ${element.lastname}`
        comment.textContent = element.comment;
        location.textContent = `Location: ${element.location}`;
        rating.textContent = "⭐".repeat(element.rating)

        cardContainer.appendChild(rating);
        cardContainer.appendChild(comment);
        cardContainer.appendChild(fullname);
        cardContainer.appendChild(location);
        testimonialsContainer.appendChild(cardContainer);
    });
};