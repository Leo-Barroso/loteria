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

clean.addEventListener("click", () => {
  document.querySelectorAll("ul.items li").forEach((item) => {
    item.classList.remove("color-selecionada");
  });
  selecionados.length = 0;
  document.querySelector("#result").textContent = "";
});

random.addEventListener("click", () => {
  const items = Array.from(document.querySelectorAll("ul.items li"));
  while (selecionados.length < maxNumbers) {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const itemText = randomItem.textContent;
    if (!selecionados.includes(itemText)) {
      selecionados.push(itemText);
      randomItem.classList.add("color-selecionada");
      selecionados.sort();
    }
  }
  document.querySelector("#result").textContent = selecionados.join(" - ");
});