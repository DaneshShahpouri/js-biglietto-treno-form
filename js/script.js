// Variabili di input e risultati
let userName = document.getElementById("user-name");
let userDistance = document.getElementById("user-distance");
let userAge = document.getElementById("user-age");
let output = document.getElementById("output");
let outputTime = document.getElementById("output-time");

// Bottoni
let btnPrice =  document.getElementById("btn-ticket-price");
let btnDistance =  document.getElementById("btn-distance");
let btnTicketGen =  document.getElementById("btn-ticket-generator");
let btnUndo = document.getElementById("btn-undo");

// Variabili per calcoli
let ticketPrice;
let ticketTeen;
let ticketOld;
let ticketDiscount;
let travelTime;

// Variabili biglietto
let nameOutput = document.getElementById("name-pass");
let distancePass = document.getElementById("distance-pass");
let pricePass = document.getElementById("price-pass");
let train = document.getElementById("train")



//Calcola Prezzo
btnPrice.addEventListener("click", function(){
    if(userDistance.value <= 0){
        output.innerHTML = "per favore inserisci un valore superiore allo zero nel campo della distanza"
        userDistance.style.border = "1px solid red"

    }else if(userAge.value <= 0){
        output.innerHTML = "per favore inserisci la tua età";
        userAge.style.border = "1px solid red";
        userDistance.style.borderColor = "transparent";

    }else if(userAge.value > 120){
        output.innerHTML = "sei davvero ancora in vita??";
        userAge.style.border = "1px solid red";

    }else {
        ticketPrice = userDistance.value * 0.21;
        userAge.style.borderColor = "transparent";
        userDistance.style.borderColor = "transparent"
        
        if (userAge.value < 18){
            ticketDiscount = ticketPrice/100 * 20;
            ticketTeen = ticketPrice - ticketDiscount;
            ticketPrice = ticketTeen;
            
        }else if(userAge.value > 65){
            ticketDiscount = ticketPrice/100 * 40;
            ticketOld = ticketPrice - ticketDiscount;
            ticketPrice = ticketOld;
        }
    
        ticketPrice;
        output.innerHTML = `Il tuo biglietto costa ${ticketPrice.toFixed(2)} euro`
    };

});


// Calcola Tempo Viaggio
btnDistance.addEventListener("click", function(){
    if(userDistance.value <= 0){
        output.innerHTML = "per favore inserisci un valore superiore allo zero nel campo della distanza"
        userDistance.style.border = "1px solid red"
    } else {
       travelTime = userDistance.value / 150 * 60;
       if(travelTime>=60){
           travelTime = travelTime/60;
            if(Math.round(travelTime)==1){
                outputTime.innerHTML = "Il tuo viaggio durerà " + "circa " + Math.round(travelTime) + " ora"
            }else{
                outputTime.innerHTML = "Il tuo viaggio durerà " + "circa " + Math.round(travelTime) + " ore"
            }
       } else {

           outputTime.innerHTML = "Il tuo viaggio durerà " + parseInt(travelTime) + " minuti"
       }
    }
})


// Stampa Biglietto
btnTicketGen.addEventListener("click", function(){
    
    if(userDistance.value > 0 && userName.value.length > 0 && userAge.value > 0 && ticketPrice != undefined){
        
        nameOutput.innerHTML = userName.value;
        distancePass.innerHTML = userDistance.value + " km";
        pricePass.innerHTML = ticketPrice.toFixed(2) + " euro";

        train.classList.add("train-animation-class");
        setTimeout(function(){
            train.classList.remove("train-animation-class")
        }, 6000)

    } else {
        output.innerHTML = "Inserisci le informazioni necessarie ed esegui il calcolo del biglietto"
    }
})


// Annulla e reset
btnUndo.addEventListener("click", function(){
    nameOutput.innerHTML = "Nome e Cognome";
    distancePass.innerHTML = "Km";
    pricePass.innerHTML = "euro";
    userAge.value = null;
    userDistance.value = null;
    userName.value = null;
    outputTime.innerHTML = "Il tuo viaggio durerà " ;
    output.innerHTML = `Il tuo biglietto costa`;
})

