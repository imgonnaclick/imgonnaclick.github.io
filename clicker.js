let pkt=0.0; //obecnie
let wszystkie=0.0;
let klikniecia=0;
let wartosc=1.0;
let wartosc_passive=0;

let lvl=1; //max lvl 40
let lvl_wartosc=[1, 2.05, 1.1, 1.2, 1.3, 1.5, 1.8, 2, 2.5, 3, 5, 7, 10, 13, 15, 20, 25, 40, 60, 100, 130, 150, 200, 250, 300, 400, 500, 1000, 1300, 2000, 3000, 5000, 10000, 20000, 30000, 100000, 300000, 1000000, 10000000, 1000000000]; //index+1
let lvl_cena=[0, 100, 150, 200, 250, 500, 800, 1000, 1500, 2000, 5000, 7000, 10000, 13000, 15000, 20000, 25000, 40000, 60000, 100000, 130000, 150000, 200000, 250000, 300000, 400000, 500000, 1000000, 1300000, 2000000, 3000000, 5000000, 10000000, 20000000, 30000000, 100000000, 300000000, 1000000000, 10000000000, 1000000000000];

if (localStorage.pkt && localStorage.wszystkie && localStorage.klikniecia) {
  pkt = parseFloat(localStorage.pkt);
  wszystkie = parseFloat(localStorage.wszystkie);
  klikniecia = parseInt(localStorage.klikniecia);

  wartosc=lvl_wartosc[lvl-1];
} else {
  localStorage.pkt=pkt;
  localStorage.wszystkie=wszystkie;
  localStorage.klikniecia=klikniecia;
}

if (localStorage.lvl) {
  lvl = parseInt(localStorage.lvl);
  wartosc=lvl_wartosc[lvl-1];

} else {
  localStorage.lvl=lvl;
}

document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
document.getElementById("lvlup").innerHTML="LVL "+lvl;
document.getElementById("lvl_text").innerHTML="LVL: "+lvl;
document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";
//tu




function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);


  wszystkie+=wartosc; //staty
  klikniecia++;

  localStorage.pkt = pkt; //save
  localStorage.klikniecia = klikniecia;
  localStorage.wszystkie = wszystkie;

}
//document.getElementById("idokienka").style.getPropertyValue("visibility")
function okno(type) {
  let kontenerokienka = document.getElementById("kontenerokienka");
  let idokienka = document.getElementById("idokienka");

  if(kontenerokienka.style.getPropertyValue("pointer-events") == "all") {
    kontenerokienka.style.pointerEvents = "none";
    //idokienka.style.visibility = "hidden";
    idokienka.className = "okienko"
  } else {
    kontenerokienka.style.pointerEvents = "all";
    //idokienka.style.visibility = "visible";
    idokienka.className ="okienko okienko_on"
  }
}


function lvlup() {
  if(pkt>=lvl_cena[lvl]) {
    pkt-=lvl_cena[lvl];
    lvl++;
    wartosc=lvl_wartosc[lvl-1];
    document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
    document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";

    document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
    document.getElementById("lvlup").innerHTML="LVL "+lvl;
    document.getElementById("lvl_text").innerHTML="LVL: "+lvl;

    localStorage.pkt = pkt; //save
    localStorage.lvl = lvl;
  } else {
    //alert('za mało kaski byniu');
  }
}



function cleareg() {
  localStorage.clear();
  location.reload(false)
}

function pasywne_kopanie() {
  pkt+=wartosc_passive;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);

  localStorage.pkt = pkt;
}


//pasywne_kopanie_interval = setInterval(pasywne_kopanie, 1000);





































/*
function lvlup() {
  if (lvl<30) {
    lvl++;
  } else {
    //tu ma być coś co sobie poradzi z lvlami xD
  }

}*/
