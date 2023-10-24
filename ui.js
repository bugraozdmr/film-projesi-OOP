function UI(){
    
}

UI.prototype.addFilmToUI = function(newFilm){
    // <!-- <tr>
    //                      <td><img src="" class="img-fluid img-thumbnail"></td>
    //                      <td></td>
    //                      <td></td>
    //                      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //                      </tr> -->

    const filmList = document.getElementById("films");
    
    filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
      `;
}

UI.prototype.clearInputs = function(element1,element2,element3){
    // icerdeki degerler gitmis olur value input degerler icin kullanilir
    // inputlar sifirlanir filmler alta gecer
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// load all films

UI.prototype.loadAllFilms = function(films){
    localStorage.setItem("films",JSON.stringify(films));

    const filmList = document.getElementById("films");
    
    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
      `;
    })
}

UI.prototype.DeleteFromUI = function(element){
    // td -- > tr  2 yukari remove siler elementi
    element.parentElement.parentElement.remove();
}


UI.prototype.clearAllFilms = function(){
    let filmList = document.querySelector("#films");
    // eger firstelementchild yoksa null doner
    //art arta kullanarak silme yapacak
    while(filmList.firstElementChild !== null){
        filmList.removeChild(filmList.firstElementChild);
    }
}




UI.prototype.showAlert = function(message, alertType){
    
    var alertContainer = document.getElementById("alert-container");
    var alertDiv = document.createElement("div");
    
    // farkli şeyler denemek istedim mesela basınca alert kapancaktı vs ama olmadı

    alertDiv.className = "alert alert-" + alertType + " alert-dismissible fade show";
    alertDiv.innerHTML = message;

    alertContainer.appendChild(alertDiv);


    // Belirli bir süre sonra alerti otomatik olarak kaldırmak için
    setTimeout(function() {
        alertDiv.remove();
    }, 2000);   
}






//-------------------------
// boyle tanimlanabilirdi static ile class uzerinden eleman cagirmis olurduk
// class UI{
//     static addFilmToUI = function(newFilm){
//     // <!-- <tr>
//     //                      <td><img src="" class="img-fluid img-thumbnail"></td>
//     //                      <td></td>
//     //                      <td></td>
//     //                      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     //                      </tr> -->

//     const filmList = document.getElementById("films");
    
//     filmList.innerHTML += `
//         <tr>
//         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
//         <td>${newFilm.title}</td>
//         <td>${newFilm.director}</td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//       </tr>
//       `;
//     }
// }
