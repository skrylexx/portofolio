///////////////////////////
//SCRIPT AUTO WRITTER/////
/////////////////////////

const textDisplay = document.getElementById('animate');
const phrases = ['Étudiant en deuxième année à l\'EPSI.', 'Passionné d\'informatique !', 'Suivi de formations sur TryHackMe.', 'Développement web front et back end.']

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false


function writter(){
    textDisplay.innerHTML = currentPhrase.join('')

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




///////////////////////
//SCRIPT CARROUSSEL///
/////////////////////

$(document).on('ready', function () {
  $(".articles").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
  });
});