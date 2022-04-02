let pkt=0.0; //obecnie
let wszystkie=0.0;
let klikniecia=0;
let wartosc=1.0;
let wartosc_passive=0.0;

let lvl=1; //max lvl 40
let lvl_wartosc=[1, 2.05, 1.1, 1.2, 1.3, 1.5, 1.8, 2, 2.5, 3, 5, 7, 10, 13, 15, 20, 25, 40, 60, 100, 130, 150, 200, 250, 300, 400, 500, 1000, 1300, 2000, 3000, 5000, 10000, 20000, 30000, 100000, 300000, 1000000, 10000000, 1000000000]; //index+1
let lvl_cena=[0, 100, 150, 200, 250, 500, 800, 1000, 1500, 2000, 5000, 7000, 10000, 13000, 15000, 20000, 25000, 40000, 60000, 100000, 130000, 150000, 200000, 250000, 300000, 400000, 500000, 1000000, 1300000, 2000000, 3000000, 5000000, 10000000, 20000000, 30000000, 100000000, 300000000, 1000000000, 10000000000, 1000000000000];

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








document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
document.getElementById("lvlup").innerHTML="LVL "+lvl;
document.getElementById("lvl_text").innerHTML="LVL: "+lvl;
document.getElementById("wartosc_text").innerHTML="Wartość: "+wartosc;
document.getElementById("next_wartosc_text").innerHTML="Następna wartość: "+lvl_wartosc[lvl];
document.getElementById("upgrade").innerHTML="UPGRADE "+lvl_cena[lvl]+"$";
document.getElementById("pasywka_teraz").innerHTML="Wartość pasywki teraz: "+wartosc_passive.toFixed(1);
//tu
let old_type=0;
