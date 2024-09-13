// Posibilidades.
var c1 = [1, 2, 3, 4, 5, 6];
var c2 = [1, 2, 3, 4, 5, 6, 7, 8];
var c3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var c5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Contadores de ángulos
var rotationAngle1 = 0;
var rotationAngle2 = 0;
var rotationAngle3 = 0;
var rotationAngle4 = 0;
var rotationAngle5 = 0;

// Id circulo
var id;

// Traemos todos los div que tengan la clase click, en este caso todos los circulos
const divs = document.querySelectorAll(".click");

// Recorremos la lista divs para ver en cual fue donde dimos click
divs.forEach(div => {
  // Agregamos el add listener para ver cuál es el id del circulo donde dimos click
  div.addEventListener("click", function () {
    // Obtenemos el id
    id = this.id;
    // Traemos todos los items de los divs con la clase click
    const elems = document.querySelectorAll('.elem');
    // // Por cada uno de los items reseteamos el color
    elems.forEach(item => {
      item.style.color = '';
      item.style.backgroundColor = '';
    });
    // Traemos el circulo con el id que deseamos que es donde dimos click
    const circle = document.getElementById(id);
    // Traemos todos los div con la clase item del circulo de la línea anterior
    const items = circle.querySelectorAll('.elem');

    // Por cada uno de los items de la lista anterior les cambiamos color
    items.forEach(item => {
      item.style.color = 'red';
      item.style.backgroundColor = 'yellow';
    });
  })
})


function revolverArr(array) {
  let revuelto = array.slice();

  for (let i = 0; i < revuelto.length; i++) {
    const j = Math.floor(Math.random() * 1000) % revuelto.length;
    [revuelto[i], revuelto[j]] = [revuelto[j], revuelto[i]];
  }
  return revuelto;
}

function distributeItemsInCircle(items, id) {
  const circle = document.getElementById(id);
  const radius = circle.offsetWidth / 2;
  const centerX = radius;
  const centerY = radius;
  const sectorC = (2 * Math.PI) / items.length;

  items = revolverArr(items);

  items.forEach((item, index) => {
    const angle = index * sectorC;
    const x = centerX + radius * Math.cos(angle) - 15;
    const y = centerY + radius * Math.sin(angle) - 15;

    const num = document.createElement('div');
    if (index === 0) {
      num.classList.add("win");
    }
    num.classList.add('elem');
    num.textContent = item;
    num.style.left = `${x}px`;
    num.style.top = `${y}px`;

    circle.appendChild(num);
  });
}

function rotateCircleButton(dir) {
  let abs = (x) => {
    if (x >= 0) {
      return x;
    } else {
      return -1 * x;
    }
  }
  const circle = document.getElementById(id);
  switch (id) {
    case "cir1":
      rotationAngle1 += (360 / 6 * dir);
      circle.style.transform = `rotate(${rotationAngle1}deg)`;
      if (abs(rotationAngle1) % 360 === 180) {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "blue";
              item.style.color = "black";
            }
          }
        })
      } else {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "yellow";
              item.style.color = "red";
            }
          }
        })

      }

      break;

    case "cir2":
      rotationAngle2 += (360 / 8 * dir);
      circle.style.transform = `rotate(${rotationAngle2}deg)`;
      if (abs(rotationAngle2) % 360 === 180) {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "blue";
              item.style.color = "black";
            }
          }
        })
      } else {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "yellow";
              item.style.color = "red";
            }
          }
        })

      }

      break;

    case "cir3":
      rotationAngle3 += (360 / 10 * dir);
      circle.style.transform = `rotate(${rotationAngle3}deg)`;
      if (abs(rotationAngle3) % 360 === 180) {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "blue";
              item.style.color = "black";
            }
          }
        })
      } else {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "yellow";
              item.style.color = "red";
            }
          }
        })

      }

      break;

    case "cir4":
      rotationAngle4 += (360 / 12 * dir);
      circle.style.transform = `rotate(${rotationAngle4}deg)`;
      if (abs(rotationAngle4) % 360 === 180) {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "blue";
              item.style.color = "black";
            }
          }
        })
      } else {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "yellow";
              item.style.color = "red";
            }
          }
        })

      }

      break;
    case "cir5":
      rotationAngle5 += (360 / 14 * dir);
      circle.style.transform = `rotate(${rotationAngle5}deg)`;
      if (abs(rotationAngle5) % 360 === 180) {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "blue";
              item.style.color = "black";
            }
          }
        })
      } else {
        items = circle.querySelectorAll(".elem");
        items.forEach((item) => {
          clases = item.classList;
          for (let i = 0; i < clases.length; i++) {
            if (clases[i] === "win") {
              item.style.backgroundColor = "yellow";
              item.style.color = "red";
            }
          }
        })

      }

      break;
  }
  ganar();
}


function ganar() {

  let abs = (x) => {
    if (x >= 0) {
      return x;
    } else {
      return -1 * x;
    }
  }
  // Banderas para ganar
  var band1 = abs(rotationAngle1) % 360 === 180;
  var band2 = abs(rotationAngle2) % 360 === 180;
  var band3 = abs(rotationAngle3) % 360 === 180;
  var band4 = abs(rotationAngle4) % 360 === 180;
  var band5 = Math.floor(abs(rotationAngle5)) % 360 === 180;


  if (band1 && band2 && band3 && band4 && band5) {
    setTimeout(function () {
      alert("Ganaste")
    }, 600);
  }
}


distributeItemsInCircle(c1, "cir1")
distributeItemsInCircle(c2, "cir2")
distributeItemsInCircle(c3, "cir3")
distributeItemsInCircle(c4, "cir4")
distributeItemsInCircle(c5, "cir5")

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    document.getElementById('arriba').click();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    document.getElementById('abajo').click();
  }
});


function rotateMixedCircles(id) {
  const circle = document.getElementById(id);
  switch (id) {
    case "cir1":
      rotationAngle1 += (360 / 6);
      circle.style.transform = `rotate(${rotationAngle1}deg)`;
      break;
    case "cir2":
      rotationAngle2 += (360 / 8);
      circle.style.transform = `rotate(${rotationAngle2}deg)`;
      break;
    case "cir3":
      rotationAngle3 += (360 / 10);
      circle.style.transform = `rotate(${rotationAngle3}deg)`;
      break;
    case "cir4":
      rotationAngle4 += (360 / 12);
      circle.style.transform = `rotate(${rotationAngle4}deg)`;
      break;

    case "cir5":
      rotationAngle5 += (360 / 14);
      circle.style.transform = `rotate(${rotationAngle5}deg)`;
      break;
  }
}

function mixCircles() {
  for (let i = 0; i < 5; i++) {
    let random_number = Math.floor(Math.random() * 100 % 14);
    for (let j = 0; j < random_number; j++) {
      rotateMixedCircles(`cir${i + 1}`);
    }
  }
}
mixCircles()
