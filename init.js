let pkt=0.0; //potrzebne
let wartosc=1.0;
let cena_passive=10;
let wartosc_passive=0.0;

let wszystkie=0.0; //do statystyk
let klikniecia=0;
let przyznanych_pasywek=0;
let ile_daly_pasywki=0.0;


let lvl=1; //max lvl 31
let lvl_wartosc=[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 120, 150, 200, 250, 500, 1000]; //index+1
let lvl_cena=[0, 100, 150, 200, 400, 600, 800, 1000, 1300, 1600, 1900, 2300, 2700, 3100, 3600, 4100, 4600, 5200, 5800, 6400, 7100, 7800, 9000, 10000, 11000, 12500, 15000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000, 2000000, 5000000];

let lvl_max;
if(lvl_wartosc.length==lvl_cena.length) {
    lvl_max = lvl_wartosc.length;
} else if(lvl_wartosc.length<lvl_cena.length) {
    lvl_max = lvl_wartosc.length;
    console.log("wartosci jest mniej o "+(lvl_cena.length-lvl_wartosc.length))
} else if(lvl_wartosc.length>lvl_cena.length) {
    lvl_max = lvl_cena.length;
    console.log("cen jest mniej o "+(lvl_wartosc.length-lvl_cena.length))
}


let ifdone = 1;
let myszkax;
let myszkay;

if (localStorage.lvl) {
  lvl = parseInt(localStorage.lvl);
  wartosc=lvl_wartosc[lvl-1];

} else {
  localStorage.lvl=lvl;
}

if (localStorage.pkt) {
  pkt = parseFloat(localStorage.pkt);
} else {
  localStorage.pkt=pkt;
}

if (localStorage.wszystkie) {
  wszystkie = parseFloat(localStorage.wszystkie);
} else {
  localStorage.wszystkie=wszystkie;
}

if (localStorage.klikniecia) {
  klikniecia = parseInt(localStorage.klikniecia);
} else {
  localStorage.klikniecia=klikniecia;
}

if (localStorage.wartosc_passive) {
  wartosc_passive = parseFloat(localStorage.wartosc_passive);
} else {
  localStorage.wartosc_passive=wartosc_passive;
}

if (localStorage.przyznanych_pasywek) {
  przyznanych_pasywek = parseInt(localStorage.przyznanych_pasywek);
} else {
  localStorage.przyznanych_pasywek=przyznanych_pasywek;
}

if (localStorage.cena_passive) {
  cena_passive = parseInt(localStorage.cena_passive);
} else {
  localStorage.cena_passive=cena_passive;
}
//
if (localStorage.ile_daly_pasywki) {
  ile_daly_pasywki = parseInt(localStorage.ile_daly_pasywki);
} else {
  localStorage.ile_daly_pasywki=ile_daly_pasywki;
}







document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
document.getElementById("lvlup").innerHTML="LVL "+lvl;
document.getElementById("lvl_text").innerHTML="LVL: "+lvl;
document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
document.getElementById("next_wartosc_text").innerHTML="Następna wartość: "+lvl_wartosc[lvl];
document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";
document.getElementById("pasywka_teraz").innerHTML="Wartość pasywki teraz: "+wartosc_passive.toFixed(1);
document.getElementById("button_pasywka").innerHTML="0.1 na sekundę - "+cena_passive+"$";
//tu
let old_type=0;
