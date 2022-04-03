function komunikat() {
  let idkomunikatu = document.getElementById("idkomunikatu");
  idkomunikatu.className = "komunikat komunikat_on";
  setTimeout(function(){idkomunikatu.className = "komunikat";},1000)

}
