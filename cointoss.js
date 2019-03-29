var bild = document.getElementById("bild")
var resultat = document.getElementById("resultat")
var knapp = document.getElementById("singlaSlant")

var gameOver = false;

knapp.addEventListener("click", function() {
    if (!gameOver) {
        var siffra = Math.floor(Math.random() * 2)
        bild.className = ""
        if(siffra == 0) { 
            bild.classList.add("coinTossKrona")
            resultat.textContent = "DU FICK KRONA!"
            gameOver = true;
            console.log("KRONA")
            knapp.textContent = "SPELA IGEN?"
        } else {
            bild.classList.add("coinTossKlave")
            resultat.textContent = "DU FICK KLAVE!"
            gameOver = true;
            console.log("KLAVE")
            knapp.textContent = "SPELA IGEN?"
            }
    } else if (gameOver = true) {
        reset()
        }
    })

function reset (){
        gameOver = false;
        knapp.textContent = "SINGLA SLANT!"
        resultat.textContent = "Krona eller klave?"
        bild.classname = ""
        bild.classList = "startbild"
    }
