function motsLongs(tabMots, longueur) {
    let resultat = [];
    for (let i = 0; i < tabMots.length; i++) {
        if (tabMots[i].length >= longueur) {
            resultat.push(tabMots[i]);
        }
    }
    return resultat;
};