let anim_timeout;
function komunikat(zawartosc="zakupiono upgrade", typ=1) {
  let idkomunikatu = document.getElementById("idkomunikatu");
  idkomunikatu.innerHTML = zawartosc;

  if(typ==0) {
    idkomunikatu.className = "komunikat komunikat_on_red";
  } else {
    idkomunikatu.className = "komunikat komunikat_on";
  }




  if(ifdone==1) {
    ifdone=0;
    anim_timeout = setTimeout(function(){
      idkomunikatu.className = "komunikat";
      ifdone = 1;
    },2000);
  } else {
    clearTimeout(anim_timeout);
    ifdone=0;
    anim_timeout = setTimeout(function(){
      idkomunikatu.className = "komunikat";
      ifdone = 1;
    },2000);
  }
}
