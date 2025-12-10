const textArea = document.getElementById('textArea'); 
const sizeInput = document.getElementById('sizeInput');
const button = document.getElementById('myButton');
const canvasWrapper = document.getElementById('canvasWrapper');

// Ajustar altura del canvas a 400px
canvasWrapper.style.height = '400px';

// Crear div para el texto original
const textDisplay1 = document.createElement('div');
textDisplay1.style.position = 'absolute';
textDisplay1.style.top = '0';
textDisplay1.style.left = '0';
textDisplay1.style.width = '100%';
textDisplay1.style.fontFamily = "'Boska', sans-serif";
textDisplay1.style.whiteSpace = 'pre-wrap'; // permite saltos de línea y ajuste
textDisplay1.style.wordWrap = 'break-word';
textDisplay1.style.color = 'white';
canvasWrapper.appendChild(textDisplay1);

// Crear div para el texto duplicado
const textDisplay2 = document.createElement('div');
textDisplay2.style.position = 'absolute';
textDisplay2.style.top = '0';
textDisplay2.style.left = '0';
textDisplay2.style.width = '100%';
textDisplay2.style.fontFamily = "'Boska', sans-serif";
textDisplay2.style.whiteSpace = 'pre-wrap'; // permite saltos de línea y ajuste
textDisplay2.style.wordWrap = 'break-word';
textDisplay2.style.color = 'white';
canvasWrapper.appendChild(textDisplay2);

// Función para actualizar ambos textos en tiempo real
function updateText() {
  const size = sizeInput.value + 'px';
  textDisplay1.style.fontSize = size;
  textDisplay2.style.fontSize = size;

  // Insertar el valor actual del textarea
  textDisplay1.textContent = textArea.value;
  textDisplay2.textContent = textArea.value;
}

// Función para cambiar solo el color de fondo
function changeColor() {
  const r = Math.floor(Math.random() * 156) + 100; // 100-255
  const g = Math.floor(Math.random() * 156) + 100;
  const b = 255;
  canvasWrapper.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Eventos
textArea.addEventListener('input', updateText);
sizeInput.addEventListener('input', updateText);
button.addEventListener('click', changeColor);

// Inicializar textos
updateText();
