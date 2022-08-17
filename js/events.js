// input fields from form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");

//..
const animalInput = document.getElementById("animal");
const paragraphBox = document.getElementById("infobox")
const form = document.getElementById("formular")

// validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

// show/hide form button
const formBtn = document.getElementById("formbtn");

// eventListners
console.log(cowInput);
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);
formBtn.addEventListener("click", hideForm);


// functions ------------------------------------------------------------

function hideForm(){
    //Hvis knappen trykkes, skal formularen skjules
    form.style.display = "none";

}

function evaluateCow() {

    if (cowInput.value == "ko" | pigInput.value == "gris" & mooseInput.value == "elg") {
        // user feedback
        cowInput.style.backgroundColor = "#99ff33";

    } else {

        cowInput.style.backgroundColor = "red";
    }
}

function evaluatePig() {
    //console.log("pig");

    if (pigInput.value == "gris") {

        pigInput.style.backgroundColor = "#99ff33";
    } else {

        pigInput.style.backgroundColor = "red";
    }
}

function evaluateAll() {
    //console.log("all");

    cowInput.style.backgroundColor = "#99ff33";
    pigInput.style.backgroundColor = "#99ff33";
    mooseInput.style.backgroundColor = "#99ff33";

        if(cowInput.value != "ko"){
            cowInput.style.backgroundColor = "red";
        }

        if(pigInput.value != "gris"){
            pigInput.style.backgroundColor = "red";
        }

        if(mooseInput.value != "elg"){
            mooseInput.style.backgroundColor = "red";
        }

        //Hvis man trykker vælger et dyr skal en paragraph dukke op under form, som fortæller hvad du har valgt
        // if(animalInput.value == "Fugl"){
        //     paragraphBox.innerHTML = "Du har valgt Fugl"
        // }
        // if(animalInput.value == "Fisk"){
        //     paragraphBox.innerHTML = "Du har valgt Fisk"
        // }
        // if(animalInput.value == "Reptil"){
        //     paragraphBox.innerHTML = "Du har valgt Reptil"
        // }
        // if(animalInput.value == "Insekt"){
        //     paragraphBox.innerHTML = "Du har valgt Insekt"
        // }
        // if(animalInput.value == "Pattedyr"){
        //     paragraphBox.innerHTML = "Du har valgt Pattedyr"
        // }
        switch(animalInput.value){
            case "Fugl":
                paragraphBox.innerHTML = "Du har valgt Fugl"
                break;
            case "Fisk":
                paragraphBox.innerHTML = "Du har valgt Fisk"
                break;
            case "Reptil":
                paragraphBox.innerHTML = "Du har valgt Reptil"
                break;
            case "Insekt":
                paragraphBox.innerHTML = "Du har valgt Insekt"
                break;
            case "Pattedyr":
                paragraphBox.innerHTML = "Du har valgt Pattedyr"
                break;
            default:
                paragraphBox.innerHTML = "Du skal vælge et dyr DUMPAP!"
        }

}

//switch bruger noget der hedder strict comparison. Den skal evaluerer på både værdi og datatype.
//værdierne skal derfor have samme dataype for at matche


// functions ------------------------------------------------------------