const selecionados = [];
const maxNumbers = 15
document.querySelectorAll("ul li").forEach((item) => {
  item.addEventListener("click", () => {
    const result = document.querySelector("#result"); 
    item.classList.toggle("color-selecionada"); 
    const itemText = item.textContent;
    if (selecionados.includes(itemText)) {
      const index = selecionados.indexOf(itemText);
      if (index > -1) {
        selecionados.splice(index, 1);
      }
    } else {
      selecionados.push(itemText);
    }
    if(selecionados.length > maxNumbers) {
      alert("Somente é possível selecionar 15 números.")
      return
    }
    result.textContent = selecionados.join(" - ");
  });
});

