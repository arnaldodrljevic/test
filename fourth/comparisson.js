function vrijeme() {
    let vrijednost = prompt("Upiši koliko je sati (00-24)");
    let dioDana;
    if (vrijednost > 24) {
        dioDana = 'Pogrešan unos'
    } else if ((vrijednost >= 18 && vrijednost <= 24) || (vrijednost >= 0 && vrijednost< 6)) {
        dioDana = 'Dobro Večer'
    } else if (vrijednost >= 10 && vrijednost<18) {
        dioDana = 'Dobar Dan'
    } else if (vrijednost >= 0) {
        dioDana = 'Dobro Jutro'
    }  else {
        dioDana = 'Pogrešan unos'
    } alert(dioDana)
}