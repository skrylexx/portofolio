/////////////////////////////////
//SCRIPT AUTO WRITTER INDEX/////
///////////////////////////////

const textDisplay = document.getElementById('animate');
const phrases = ['Étudiant en deuxième année à l\'EPSI.', 'Passionné d\'informatique !', 'Suivi de formations sur TryHackMe.', 'Développement web front et back end.']

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false


function writter(){
    textDisplay.innerHTML = currentPhrase.join('');
    if(i < phrases.length){
        if(!isDeleting && j <= phrases[i].length){
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
        if(isDeleting && j <= phrases[i].length){
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
            setTimeout(500)
        }
        if(j === phrases[i].length){
            isDeleting = true
            isEnd = true
            setTimeout(500)
        }
        if(isDeleting && j === 0){
            currentPhrase = []
            isDeleting = false
            i++
            if(i == phrases.length){
                i = 0
            }
        }
    }
    const speedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (200 -100) + 100
    const deleteTime = isDeleting ? speedUp : normalSpeed
    setTimeout(writter, deleteTime)
}
writter()


///////////////////////////
//SCRIPT SEMI-CAROUSSEL///
/////////////////////////

let titres = ["AQUIRESPI", "TryHackMe", "EPSI","New CyberHospital", "A propos de moi"];
let descriptions = ["Stage d'une durée de deux mois. Mission principale : Développement d'un site web.", "Learning paths terminées, certifications obtenues ...","Choix d'orientation, dates de stage ou d'alternance, suivi des cours dispensés..." ,"Projet ouvert au sein de l'EPSI où nous avons décidé de créer un PCB capable d'analyser un réseau automatiquement.", "Coordonnées, CV téléchargeable, documents supplémentaires..."];

function changeText(value) {
  document.getElementById('titreCarte').innerHTML = titres[value];
  document.getElementById('textCarte').innerHTML = descriptions[value];
  document.getElementById('more').href="en-savoir-plus-" + value + ".html";
}


/////////////
//LOADER////
///////////

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    if(sessionStorage.getItem('premierChargement') === null){
        loader.classList.add('fondu-out');
        setTimeout(6000)
        loader.style.display = "none";
    } else {
        loader.style.display = "none"; 
    }
    sessionStorage.setItem('premierChargement', 'done');
})