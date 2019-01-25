const button = document.querySelector('button');
const ul = document.querySelector('ul');
const listeCourses = [];

button.addEventListener('click', liste);

function liste() {
    const produit = prompt("Quel produit tu veux ajouter ?");
    ul.innerHTML += `<li>${produit}</li>`;
    listeCourses.push(produit);
}

const promesseFetch = fetch("produits.json");

promesseFetch.then(function(contenuFichier) {
    const promesseJSON = contenuFichier.json();

    promesseJSON.then(function(contenuFichierJSON) {
        for (let i = 0; i < contenuFichierJSON.length; i++) {
            listeCourses.push(contenuFichierJSON[i]);
            ul.innerHTML += `<li>${contenuFichierJSON[i]}</li>`;
        }
    });
});

