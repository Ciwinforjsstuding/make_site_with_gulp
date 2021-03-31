const cards = document.querySelectorAll("[data-card]");

const clearCard = () => {
  if (document.querySelectorAll(".card-border-active").length > 0) {
    cards.forEach(node => {
      node.classList.remove("card-border-active");
      node.childNodes[9].classList.remove("card-btn-active");
      node.childNodes[9].childNodes[1].classList.remove("card-btn-text-active");
    });
  }
} 

cards.forEach(node => {
  node.addEventListener("click", () => {
    clearCard();
    node.classList.add("card-border-active");
    node.childNodes[9].classList.add("card-btn-active");
    node.childNodes[9].childNodes[1].classList.add("card-btn-text-active");
  })
})