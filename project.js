// form islemi icin
const form = document.getElementById("film-form");
// inputlar
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// body icindeki card-body alincak ancak ikincisi
const cardBody = document.querySelectorAll(".card-body")[1];
// delete all films button
const deleteAllElement = document.querySelector("#clear-films");

var result1 ;

//* eger class olarak ES6 ozelliklerine gore kullansaydik direkt obje olusturmak gerekmezdi
//* UI.clearAll() diye cagirirdik gibi
// UI objesi baslatma

const ui = new UI();

// Storage Objesi baslatma

const storage = new Storage();


// tum eventleri yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    cardBody.addEventListener("click",deleteFilm);
    // deleteAllElement.addEventListener("click",clearAll);

    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
    });
}

//* clear them all
//* altta are you sure sonrasinda eventListener icinde cagrilacak
function clearAll(){

    if(result1 === 1){

        
        ui.clearAllFilms();

        
        // key vererek sildik
        ui.showAlert("Tüm filmler silindi","warning");
        storage.clearAllFilmsFromStorage();
    }
}



//* UI'a gider fonksiyon orda calisir
// body uzerinde gezerken tikladigimiz yeri kontrol eder delete-film id'si buluncada uygular
function deleteFilm(e){
    if (e.target.id === "delete-film") {
        ui.DeleteFromUI(e.target);
        let title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.DeleteFilmFromStorage(title);
        // nasilsa calisiyor bir sekilde ondan yukariya yazdim
        ui.showAlert("Film silindi","success");
    }
    // burdan aldim yukariya tasidim showAlert'i
}


function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || url === "" || director === ""){
        //hata
        ui.showAlert("Tüm alanları doldurun !","danger");
    }
    else{
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);    //arayuze film ekleme
        storage.addFilmToStorage(newFilm);
        ui.showAlert("Film başarıyla eklendi","success");





    }


    // her ekleme islemi sonrasi input alanlari bosaltilacak

    ui.clearInputs(titleElement,directorElement,urlElement);

    // submit onleme
    e.preventDefault();
}








// Yes button click event
document.getElementById("confirmYesButton").addEventListener("click", function() {
    // Evet seçildiğinde yapılacak işlemler buraya yazılabilir
    // Sonuç olarak 1 dönebilirsiniz
    // Örnek olarak 1 dönüyoruz
    var result = 1;
  
    result1 = result;
    // Onay penceresini kapat
    $('#exampleModalCenter').modal('hide');
  
    // Sonucu kullan

    // çok uğraştım cidden
    // İlgili işlemi burada gerçekleştirin (örneğin, "clearAll" fonksiyonunu çağırın)
    clearAll();
  });
  
  // No button click event (İptal işlemi)
  // bu zaten calismaz boyle classlar yok .modal-footer .btn-secondary .. bosuna yazilmis
  document.querySelector('.modal-footer .btn-secondary').addEventListener('click', function() {
    // İptal (No) seçildiğinde yapılacak işlemler buraya yazılabilir
    // Sonuç olarak 2 dönebilirsiniz
    // Örnek olarak 2 dönüyoruz
    var result = 2;
  
    result1 = result;
    // Onay penceresini kapat
    $('#exampleModalCenter').modal('hide');
    
  });

  
  // "Clear Films" butonu için tıklama olayı
  document.querySelector('#clear-films').addEventListener("click", function() {
    // Onay penceresini aç
    $('#exampleModalCenter').modal('show');
    
})
  
  