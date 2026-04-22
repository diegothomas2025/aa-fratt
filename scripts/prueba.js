const container = document.querySelector('.compare-container');
const afterWrapper = container.querySelector('.after-wrapper');
const afterImage = container.querySelector('.after');
const line = container.querySelector('.slider-line');

let isDragging = false;

// FUNCIÓN reutilizable
function updateSlider(clientX) {
  const rect = container.getBoundingClientRect();
  let x = clientX - rect.left;

  if (x < 0) x = 0;
  if (x > rect.width) x = rect.width;

  const percent = (x / rect.width) * 100;

  afterWrapper.style.width = percent + "%";
  line.style.left = percent + "%";
}

// 🖱 CLICK (esto te faltaba)
container.addEventListener('click', (e) => {
  updateSlider(e.clientX);
});

// 🖱 DRAG
container.addEventListener('mousedown', () => {
  isDragging = true;
});

container.addEventListener('mouseup', () => {
  isDragging = false;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  updateSlider(e.clientX);
});

// 📱 TOUCH
container.addEventListener('touchstart', (e) => {
  updateSlider(e.touches[0].clientX);
});

container.addEventListener('touchmove', (e) => {
  updateSlider(e.touches[0].clientX);
});

container.addEventListener('dragstart', (e) => {
  e.preventDefault();
});