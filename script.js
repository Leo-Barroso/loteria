const selecionados = [];
const maxNumbers = 15

document.querySelectorAll("ul.items li").forEach((item) => {
  item.addEventListener("click", () => {
    const result = document.querySelector("#result"); 
    const itemText = item.textContent;
    if (selecionados.includes(itemText)) {
      item.classList.remove("color-selecionada"); 
      const index = selecionados.indexOf(itemText);
      if (index > -1) {
        selecionados.splice(index, 1);
      }
    } else {
      if(selecionados.length < maxNumbers) {
        item.classList.add("color-selecionada"); 
        selecionados.push(itemText);
        selecionados.sort()
      } else {
        item.classList.remove("color-selecionada"); 
        alert("Somente é possível selecionar 15 números.")
      }
    } 
    result.textContent = selecionados.join(" - ");
  });
});