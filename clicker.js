let pkt=0.0; //obecnie
let wszystkie=0.0;
let klikniecia=0;
let wartosc=1;
let lvl=1; //max lvl 30

if (localStorage.pkt && localStorage.wszystkie && localStorage.klikniecia) {
  pkt = parseFloat(localStorage.pkt);
  wszystkie = parseFloat(localStorage.wszystkie);
  klikniecia = parseInt(localStorage.klikniecia);
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
}

if (localStorage.lvl) {
  lvl = parseInt(localStorage.lvl);
}



function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);


  wszystkie+=wartosc; //staty
  klikniecia++;

  localStorage.pkt = pkt; //save
  localStorage.klikniecia = klikniecia;
  localStorage.wszystkie = wszystkie;

}


/*
function lvlup() {
  if (lvl<30) {
    lvl++;
  } else {
    //tu ma być coś co sobie poradzi z lvlami xD
  }

}*/
