const pizzas = [{
    id: 1,
    nombre: "Muzza de Cancha",
    precio: 890,
    Ingredientes: ['Muzarela', 'Oregano', 'Tomate'],
  },

  {
    id: 2,
    nombre: "La Mauro Zeta",
    precio: 1299,
    Ingredientes: ['Muzarela', 'Cebolla', 'Oregano'],
  },

  {
    id: 3,
    nombre: "Pizza Napo con Ajo",
    precio: 1449,
    Ingredientes: ['Muzarela', 'Tomate', 'Ajo'],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1699,
    Ingredientes: ['Muza', 'Roquefort', 'Parmesano', 'Provolone'],
  },

  {
    id: 5,
    nombre: "Pizza 420",
    precio: 1420,
    Ingredientes: ['Muza', 'Cebolla Morada', 'Burrata', 'Calabresa'],
  },

  {
    id: 6,
    nombre: "Pizza don vito",
    precio: 1380,
    Ingredientes: ['Doble Muzza', 'Cornicione Relleno'],
  },
];
/*
// Pizzas que tengan un id impar
const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
pizzasImpares.forEach((pizza) =>
  console.log(`La ${pizza.nombre} tiene un id impar`)
);

//Pizzas por menos de 600?

function precioMenorA600(pizza) {
  return pizza.precio < 600;
}

if (pizzas.some(precioMenorA600)) {
  console.log("Hay pizzas con precio menor a $600");
} else {
  console.log("Por el momento no hay pizzas con precio menor a $600");
}

//Las pizzas y sus nombres
pizzas.forEach((pizza) => console.log(`Vení a probar nuestra ${pizza.nombre}`));

//Las pizzas y sus precios

pizzas.forEach((pizza) =>
  console.log(`En nuestro local podes conseguir pizzas por $${pizza.precio}`)
);

//las pizzas con sus precios

pizzas.forEach((pizza) =>
  console.log(
    `Nuestra clasica ${pizza.nombre} a solo un click por tan solo $${pizza.precio}`
  )
];

*/

const infoPizza = document.querySelector('.info-pizza')
const input = document.querySelector('.seleccionar');
const seleccionarBtn = document.querySelector('.seleccionar-btn');
const errorMessage = document.querySelector('.error-message')

let nuevoPizzas = []


const pizzaId = () => {

    const filterId = input.value;

    if (!filterId.length) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (filterId < 1 || filterId > 6) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorOptions()
        nuevoPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (
        nuevoPizzas = pizzas.filter(pizza => pizza.id === parseInt(filterId))
    ) {
        errorMessage.style.visibility = 'hidden';
    }

    renderPizza(nuevoPizzas);

}


const createHtmlPizza = pizzas => {
    return `<h2 class="title"><p>Variedad: </p>${pizzas.nombre}</h2>
      <h4 class="precio"><p>Precio: </p>$${pizzas.precio}</h4>`
}

const createHtmlErrorNoneText = () => {
    return `<h3 class="message">hora de que elijamos juntos</h3>`
}

const createHtmlErrorOptions = () => {
    return `<h3 class="message">Estamos trabajando para darte mas opciones, podes elegir de la 1 a la 6</h3>`
}

const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzasa => createHtmlPizza(pizzasa))



const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';
}

init();
console.log('')