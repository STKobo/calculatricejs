const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', (e) => {
    const valeur = e.keyboardEvent.code.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key ;
    calucler(valeur)
})

const calucler = (valeur) => {
    if(listeKeycode.includes(valeur)){
        
    }
}