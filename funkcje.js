function local_save() {
  localStorage.pkt = pkt; //save
  localStorage.klikniecia = klikniecia;
  localStorage.wszystkie = wszystkie;
  localStorage.lvl = lvl;
  localStorage.wartosc_passive = wartosc_passive;
}

function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);


  wszystkie+=wartosc; //staty
  klikniecia++;

  local_save();

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

    local_save();
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
  wszystkie+=wartosc_passive;
  if(wartosc_passive>=0.1){
    przyznanych_pasywek++;
  }
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);

  localStorage.pkt = pkt;
}


pasywne_kopanie_interval = setInterval(pasywne_kopanie, 1000);

function p_kopanie_wartosc(rozmiar) {
  komunikat();
  if (rozmiar==0 && pkt>=10) { //np 0 - 0.1, 1 - 1, 2 - 10, 3 - 100
    pkt-=10;
    wartosc_passive+=0.1;
    local_save();
    document.getElementById("pasywka_teraz").innerHTML="Wartość pasywki teraz: "+wartosc_passive.toFixed(1);
  }
}
