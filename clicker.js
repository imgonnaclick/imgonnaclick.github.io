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
document.getElementById("next_wartosc_text").innerHTML="Następna wartość: "+lvl_wartosc[lvl];
document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";
//tu
let old_type=0;



function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);


  wszystkie+=wartosc; //staty
  klikniecia++;

  localStorage.pkt = pkt; //save
  localStorage.klikniecia = klikniecia;
  localStorage.wszystkie = wszystkie;

}

function okno(type) {
  let kontenerokienka = document.getElementById("kontenerokienka");
  let idokienka = document.getElementById("idokienka");
  let actual_div = document.getElementById("div_lvl");
  let div_lvl = document.getElementById("div_lvl");
  let div_sklep = document.getElementById("div_sklep");
  let div_staty = document.getElementById("div_staty");
  let div_ustawienia = document.getElementById("div_ustawienia");
                //0=lvl 1=sklep 2=staty 3=ustawienia
  if(type==0){
    actual_div = div_lvl;
  } else if(type==1) {
    actual_div = div_sklep;
  } else if (type==2) {
    actual_div = div_staty;
  } else if (type==3) {
    actual_div = div_ustawienia;
  }


  if(kontenerokienka.style.getPropertyValue("pointer-events") == "all") {

    if (old_type==type) {
      kontenerokienka.style.pointerEvents = "none";
      //idokienka.style.visibility = "hidden";
      idokienka.className = "okienko"
      div_lvl.className = "div_hidden";
      div_sklep.className = "div_hidden";
      div_staty.className = "div_hidden";
      div_ustawienia.className = "div_hidden";
    } else if (type==0) {
      div_sklep.className = "div_hidden";
      div_staty.className = "div_hidden";
      div_ustawienia.className = "div_hidden";
      div_lvl.className = "div_hidden div_visible";
    } else if (type==1) {
      div_lvl.className = "div_hidden";
      div_staty.className = "div_hidden";
      div_ustawienia.className = "div_hidden";
      div_sklep.className = "div_hidden div_visible";
    } else if (type==2) {
      div_lvl.className = "div_hidden";
      div_ustawienia.className = "div_hidden";
      div_sklep.className = "div_hidden";
      div_staty.className = "div_hidden div_visible";
    } else if (type==3) {
      div_lvl.className = "div_hidden";
      div_staty.className = "div_hidden";
      div_sklep.className = "div_hidden";
      div_ustawienia.className = "div_hidden div_visible";
    }







  } else {
    kontenerokienka.style.pointerEvents = "all";
    //idokienka.style.visibility = "visible";
    idokienka.className = "okienko okienko_on"
    actual_div.className = "div_visible";
  }

  old_type=type;
}


function lvlup() {
  if(pkt>=lvl_cena[lvl]) {
    pkt-=lvl_cena[lvl];
    lvl++;
    wartosc=lvl_wartosc[lvl-1];
    document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
    document.getElementById("next_wartosc_text").innerHTML="Następna wartość: "+lvl_wartosc[lvl];
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
