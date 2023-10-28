document.addEventListener("DOMContentLoaded", () => {
  // Función para dividir el texto en palabras
  function splitTextIntoWords(text) {
      return text.split(/\s+/); // Esto divide el texto en palabras usando espacios como separadores
  }

  // Función para dividir el texto en grupos de 6 palabras
  function splitTextIntoWordGroups(text, groupSize) {
      const words = splitTextIntoWords(text);
      const wordGroups = [];
      for (let i = 0; i < words.length; i += groupSize) {
          wordGroups.push(words.slice(i, i + groupSize).join(" "));
      }
      return wordGroups;
  }

  // Función para crear un elemento de carrusel
  function createCarouselItem(text) {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (carouselInner.children.length === 0) {
          carouselItem.classList.add("active");
      }
      const paragraph = document.createElement("p");
      paragraph.textContent += `...`;
      paragraph.textContent += text;
      carouselItem.appendChild(paragraph);
      return carouselItem;
  }

  // Función para mostrar un elemento aleatorio del arreglo en el carrusel
  function showRandomWordGroup() {
      const randomIndex = getRandomIndex(wordGroups);
      const randomWordGroup = (wordGroups[randomIndex]).toLowerCase();
      
      const carouselItem = createCarouselItem(randomWordGroup);
  
      // Agregar el elemento al carrusel
      carouselInner.appendChild(carouselItem);
  }

  // Función para obtener un índice aleatorio en el rango de un arreglo
  function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
  }

  // Obtener elementos del DOM
  const colElements = document.querySelectorAll(".col-lg-4");
  const carouselInner = document.getElementById("randomcarrousel");

  // Inicializar variables
  let text = "";
  const groupSize = 6;
  const wordGroups = [];

  // Obtener texto de elementos y dividirlo en grupos de palabras
  colElements.forEach((colElement) => {
      text += colElement.textContent + " "; // Agrega el texto de cada elemento y un espacio
  });
  wordGroups = splitTextIntoWordGroups(text.trim(), groupSize);

  // Llamar a la función para mostrar un elemento aleatorio cada 3 segundos
  showRandomWordGroup();
  setInterval(showRandomWordGroup, 1000);
});
