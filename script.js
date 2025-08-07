let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");

let container = document.querySelector(".container ");
let containerList = document.querySelector(".container .list");
let containerThumb = document.querySelector(".container .thumb");

console.log(btnNext, btnPrev, container, containerList, containerThumb);

// Mandando o "type" para função "moveItemOnClick "
btnNext.onclick = () => moveItemOnClick("next");
btnPrev.onclick = () => moveItemOnClick("prev");
// Função mover slide
moveItemOnClick = (type) => {
  // Pegando item por item  que esta dentro de "list " no caso os "list-item"
  let listItems = document.querySelectorAll(".list .list-item");
  // Pegando item por item  que esta dentro de "thumb " no caso os "thumb-item"
  let thumbItems = document.querySelectorAll(".thumb .thumb-item");
  if (type === "next") {
    containerList.appendChild(listItems[0]);
    containerThumb.appendChild(thumbItems[0]);
    container.classList.add("next");
  } else {
    containerList.prepend(listItems[listItems.length - 1]);
    containerThumb.prepend(thumbItems[thumbItems.length - 1]);
    container.classList.add("prev");
  }

  console.log(listItems, thumbItems);

  // Adiciona um temporizador para remover as class criadas no "classLIst" a "next" e "prev"
  setTimeout(() => {
    container.classList.remove("next");
    container.classList.remove("back");
  }, 3000);
};
