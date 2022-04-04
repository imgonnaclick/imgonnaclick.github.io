function local_save() {
  localStorage.pkt = pkt; //save
  localStorage.klikniecia = klikniecia;
  localStorage.wszystkie = wszystkie;
  localStorage.lvl = lvl;
  localStorage.wartosc_passive = wartosc_passive;
  localStorage.cena_passive = cena_passive;
  localStorage.przyznanych_pasywek = przyznanych_pasywek;
  localStorage.ile_daly_pasywki = ile_daly_pasywki;
}

function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);

  wszystkie+=wartosc; //staty
  klikniecia++;

  local_save();
  //plusjeden();
}

main_obrazek.onclick = function(e) {
  lewyxd();
  var ten_div = document.createElement("div");
  ten_div.className = "plusik plusik_on"
  ten_div.style.top = e.clientY + "px";
  ten_div.style.left = (e.clientX)-70 + "px";
  ten_div.innerHTML = "+"+wartosc;
  main_kontener.appendChild(ten_div);
  setTimeout(function() {
    ten_div.className = "plusik"
    ten_div.style.top = (e.clientY)-100 + "px"
    setTimeout(function() {
      ten_div.remove();
    },300);
  },150);
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
  if(lvl<40){
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
    komunikat("zakupiono level")
    } else {
      komunikat("nie masz wystarczająco pesos", 0)
    }
  } else {
    komunikat("osiągnąłeś maksymalny level")
  }
}



function cleareg() {
  localStorage.clear();
  location.reload(false)
}

function pasywne_kopanie() {
  pkt+=wartosc_passive;
  wszystkie+=wartosc_passive;
  ile_daly_pasywki+=wartosc_passive;
  if(wartosc_passive>=0.1){
    przyznanych_pasywek++;
    local_save()
  }
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
}


pasywne_kopanie_interval = setInterval(pasywne_kopanie, 1000);

function p_kopanie_wartosc(rozmiar) {
  if (rozmiar==0 && pkt>=cena_passive) {
    pkt-=cena_passive;
    wartosc_passive+=0.1;
    cena_passive=cena_passive+5;

    local_save();
    document.getElementById("pasywka_teraz").innerHTML="Wartość pasywki teraz: "+wartosc_passive.toFixed(1);
    document.getElementById("button_pasywka").innerHTML="0.1 na sekundę - "+cena_passive+"$";
    komunikat();
  } else {
    komunikat("nie masz wystarczająco pesos", 0)
  }
}
