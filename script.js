$.getJSON("https://api-alquranid.herokuapp.com/surah", function(value) {

    // console.log(value);

    $.each(value.data, function(i, value) {
        $('#list-surah').append('<div class="col-md-4 col-sm-6 mb-3 "><div class="card"><div class="card-body"> <a onclick = "sessionStorage.somekey = ' + value.nomor + '; console.log(sessionStorage.somekey);"data- fajax = "false" href = "ayat.html" data-transition="slidefade"> ' + value.nomor + '. ' + value.nama + ' </a> </div></div></div > ');
    });



});

let data = sessionStorage.getItem('somekey');

$.getJSON("https://api-alquranid.herokuapp.com/surah/" + data, function(value) {
    console.log(value.data);

    $.each(value.data, function(i, value) {
        $('#isi-ayat').append('<div class="ayat text-center mb-3"><h5 class="fw-bolder">' + value.nomor + '.  ' + value.ar + '</h5><p> ' + value.tr + '</p><i>' + value.id + '</i></div>');
    });
});