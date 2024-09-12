// Arreglos
var c1 = ["1", "2", "3", "4", "5", "6"];
var c2 = [1, 2, 3, 4, 5, 6, 7, 8];
var c3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var c5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function shuffleArray(array) {
  let shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Obtener un índice aleatorio
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Intercambiar elementos
  }

  return shuffledArray;
}

function distributeItemsInCircle(items, id) {
  const circle = document.getElementById(id);
  const radius = circle.offsetWidth / 2;
  const centerX = radius;
  const centerY = radius;
  const angleStep = (2 * Math.PI) / items.length;

  items = shuffleArray(items);

  items.forEach((item, index) => {
    const angle = index * angleStep;
    const x = centerX + radius * Math.cos(angle) - 15;
    const y = centerY + radius * Math.sin(angle) - 15;

    const element = document.createElement('div');
    element.classList.add('item');
    element.textContent = item;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    circle.appendChild(element);
  });
}

function rotateCircle(circleId, rotationSpeed) {
  const circle = document.getElementById(circleId);
  let rotationAngle = 0;

  setInterval(() => {
    rotationAngle += rotationSpeed; // Incrementa el ángulo de rotación
    circle.style.transform = `rotate(${rotationAngle}deg)`; // Aplica la rotación
  }, 100); // Actualiza cada 100ms
}

function rotateCircleButton(id) {
  const circle = document.getElementById(`cir${id}`);
  console.log(`cir${id}`);
  let rotationAngle = 0;
  rotationAngle += 3;
  circle.style.transform = `rotate(${rotationAngle}deg)`;
}

// rotateCircle("cir1", 3)

distributeItemsInCircle(c1, "cir1")
distributeItemsInCircle(c2, "cir2")
distributeItemsInCircle(c3, "cir3")
distributeItemsInCircle(c4, "cir4")
distributeItemsInCircle(c5, "cir5")
