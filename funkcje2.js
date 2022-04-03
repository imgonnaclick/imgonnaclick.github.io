function komunikat() {
  let ifdone = 0;
  let idkomunikatu = document.getElementById("idkomunikatu");
  idkomunikatu.className = "komunikat komunikat_on";
  setTimeout(function(){
    idkomunikatu.className = "komunikat";
  },2000);
  let ifdone = 1;

}
