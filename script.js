/* On isole notre html */
const navigationLateral = document.getElementById("jsNavigationLateral");
const ouvertureDuMenu = document.getElementById("jsOuvertureDuMenu");
const fermetureLateral = document.getElementById("jsFermetureLateral");


function ouvreMenu() {
    navigationLateral.classList.add("active");
}

function fermeMenu() {
    navigationLateral.classList.remove("active");
}

/* Cliquez pour ouvrir ou fermer le menu. */
ouvertureDuMenu.onclick = ouvreMenu;
fermetureLateral.onclick = fermeMenu;

