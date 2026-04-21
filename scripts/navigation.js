export function showNavigation() {
    
    const hamButton = document.querySelector('#ham-button');
    const navButton = document.querySelector('#nav-button');

    if (!hamButton) return;

    hamButton.addEventListener('click', () => {
        
        hamButton.classList.toggle('show');
        navButton.classList.toggle('show');
    });
};