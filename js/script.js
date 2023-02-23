let userDistance = document.getElementById("user-distance");
let userAge = document.getElementById("user-age");
let output = document.getElementById("output");

let btnPrice =  document.getElementById("btn-ticket-price");
let btnDistance =  document.getElementById("btn-distance");
let ticketPrice;
let ticketTeen;
let TicketOld;
let ticketDiscount;

let travelTime;


btnPrice.addEventListener("click", function(){
    if(userDistance.value <= 0){
        output.innerHTML = "per favore inserisci un valore superiore allo zero nel campo della distanza"
        userDistance.style.border = "1px solid red"

    }else if( userAge.value <= 0){
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
    
        output.innerHTML = `Il tuo biglietto costa ${ticketPrice.toFixed(2)} euro`
    };

  
});

btnDistance.addEventListener("click", function(){
    if(userDistance.value <= 0){
        output.innerHTML = "per favore inserisci un valore superiore allo zero nel campo della distanza"
        userDistance.style.border = "1px solid red"
    } else {
       travelTime = userDistance.value / 150 * 60;
       if(travelTime>=60){
           travelTime = travelTime/60;
            if(Math.round(travelTime)==1){
                console.log("circa " + Math.round(travelTime) + " ora")
            }else{
                console.log("circa " + Math.round(travelTime) + " ore")
            }
       } else {

           console.log(parseInt(travelTime) + " minuti")
       }
    }
})

