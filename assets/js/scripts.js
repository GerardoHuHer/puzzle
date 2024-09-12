// Arreglos
var c1 = ["1", "2", "3", "4", "5", "6"];
var c2 = [1, 2, 3, 4, 5, 6, 7, 8];
var c3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var c5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var rotationAngle1 = 0;
var rotationAngle2 = 0;
var rotationAngle3 = 0;
var rotationAngle4 = 0;
var rotationAngle5 = 0;

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

// Nos basamos para hacer nuestra función
// function rotateCircle(circleId, rotationSpeed) {
//   const circle = document.getElementById(circleId);
//   let rotationAngle = 0;
//
//   setInterval(() => {
//     rotationAngle += rotationSpeed; // Incrementa el ángulo de rotación
//     circle.style.transform = `rotate(${rotationAngle}deg)`; // Aplica la rotación
//   }, 100); // Actualiza cada 100ms
// }

function rotateCircleButton(id, dir) {
  // id_aux = shalala();
  const circle = document.getElementById(id);
  console.log(id);
  switch (id) {
    case "cir1":
      rotationAngle1 += (20 * dir);
      circle.style.transform = `rotate(${rotationAngle1}deg)`;
      break;

    case "cir2":
      rotationAngle2 += (20 * dir);
      circle.style.transform = `rotate(${rotationAngle2}deg)`;
      break;

    case "cir3":
      rotationAngle3 += (20 * dir);
      circle.style.transform = `rotate(${rotationAngle3}deg)`;
      break;

    case "cir4":
      rotationAngle4 += (20 * dir);
      circle.style.transform = `rotate(${rotationAngle4}deg)`;
      break;
    case "cir5":
      rotationAngle5 += (20 * dir);
      circle.style.transform = `rotate(${rotationAngle5}deg)`;
      break;
  }
}

// rotateCircle("cir1", 3)

distributeItemsInCircle(c1, "cir1")
distributeItemsInCircle(c2, "cir2")
distributeItemsInCircle(c3, "cir3")
distributeItemsInCircle(c4, "cir4")
distributeItemsInCircle(c5, "cir5")
