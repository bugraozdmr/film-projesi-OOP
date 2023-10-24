function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    // ayni class icinde islem yapacaksak farkli fonsiyonlar felan kullanacaksak this anahtari onemli
    let films = this.getFilmFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        // array olarak almis olduk
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.DeleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmFromStorage();
    // splite arrayden silme islemi
    films.forEach(function(film,index){
        // liste donduruyor ondan title degiskeni alinsin bu listeden
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });

    // console.log(JSON.stringify(films));

    localStorage.setItem("films",JSON.stringify(films));

}


Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}