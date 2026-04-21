export function displayFormData() {
    const myInfo = new URLSearchParams(window.location.search);
    const results = document.querySelector('#results');

    if (!results) return;

    results.innerHTML = `
    <p>Comment by: ${myInfo.get('first')} ${myInfo.get('lastname')}</p>
    <p>Location: ${myInfo.get('location')}</p>
    <p>Overall Rating: ${myInfo.get('rating')} Stars</p>
    <p>Commentary: ${myInfo.get('commentary')}<p/>
    `
}