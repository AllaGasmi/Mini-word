colour = document.querySelector("#couleur");
taille = document.querySelector("#num");
fonte = document.querySelector("select");
parag = document.querySelector("p");


colour.addEventListener("input", (e) => {
  couleuractu = e.target.value;
  parag.style.color = couleuractu;
});
taille.addEventListener("input", (e) => {
  tailleactu = e.target.value;
  parag.style.fontSize = `${tailleactu}px`;
});

fonte.addEventListener("input", (e) => {
  fonteactu = e.target.value;
  parag.style.fontFamily = fonteactu;
});
