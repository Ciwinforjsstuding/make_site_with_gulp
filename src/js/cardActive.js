const cards = document.querySelectorAll("[data-card]");
// console.log()
cards.forEach(node => {
  node.addEventListener("click", () => {
    const cardBtn = node.childNodes[9];
    const cardBtnText = node.childNodes[9].childNodes[1];
    const isActive =  node.classList.contains("card-border-active") ? true : false;
    if (isActive) {
      cardBtn.classList.remove("card-btn-active");
      node.classList.remove("card-border-active");
      cardBtnText.classList.remove("card-btn-text-active");
    } else {
      node.classList.add("card-border-active");
      cardBtn.classList.add("card-btn-active");
      cardBtnText.classList.add("card-btn-text-active");
    }
    console.log()
  })
})