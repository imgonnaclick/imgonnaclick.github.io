let pkt=0.0; //obecnie
let wszystkie=0.0;
let klikniecia=0;
let wartosc=1.0;
let wartosc_passive=0.0;
let przyznanych_pasywek=0;

let lvl=1; //max lvl 30
let lvl_wartosc=[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 40, 60, 100, 130, 150, 200, 250, 300, 400, 500, 1000, 1300, 2000]; //index+1
let lvl_cena=[0, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 2000, 40000, 60000, 100000, 130000, 150000, 200000, 250000, 300000, 400000, 500000, 1000000, 1300000, 2000000];

let ifdone = 1;

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







document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
document.getElementById("lvlup").innerHTML="LVL "+lvl;
document.getElementById("lvl_text").innerHTML="LVL: "+lvl;
document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
document.getElementById("next_wartosc_text").innerHTML="Następna wartość: "+lvl_wartosc[lvl];
document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";
document.getElementById("pasywka_teraz").innerHTML="Wartość pasywki teraz: "+wartosc_passive.toFixed(1);
//tu
let old_type=0;
