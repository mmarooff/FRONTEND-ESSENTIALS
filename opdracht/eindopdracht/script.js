var persoon = {
    voornaam : prompt("Wat is je voornaam?"),
    achternaam : prompt("Wat is je achternaam?"),
    email : prompt("Wat is je email?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats : prompt("Wat is je woonplaats?"),
   };
 
document.querySelector("#voornaam").innerHTML = persoon.voornaam;
document.querySelector("#achternaam").innerHTML = persoon.achternaam;
document.querySelector("#email").innerHTML = persoon.email;
document.querySelector("#leeftijd").innerHTML = persoon.leeftijd;
document.querySelector("#woonplaats").innerHTML = persoon.woonplaats;
document.querySelector("#koptext").innerHTML = "Hallo" + " " + persoon.voornaam + " " + persoon.achternaam;
 
if(persoon.leeftijd == 16){
    document.querySelector("body").style.backgroundColor = 'orange';
  
}
if(persoon.leeftijd == 17){
    document.querySelector("body").style.backgroundColor = 'blue';
   ;
}
if(persoon.leeftijd == 18){
    document.querySelector("body").style.backgroundColor = 'gold';
    
}
if(persoon.leeftijd == 19){
    document.querySelector("body").style.backgroundColor = 'green';
 
}
if(persoon.leeftijd == null){
    document.querySelector("body").style.backgroundColor = 'red';
 
}