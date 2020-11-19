$("#cerros1").html("Rio");
$("#cerros2").html("Rio");
$("#cerros3").html("Rio");
$("#cerros4").html("Rio");

$("#cerro").mouseover(function() {
    $(this).html("Rios");
});
/*
$("#cerros").each(function() {
    $(this).html("<p> Rio </p>");
});
*/
$("#rioUno").mouseover(function() {
    $(this).replaceWith('<img id="rioUno" title="partes rio" src="https://futurorenovable.cl/wp-content/uploads/2015/08/rios-agua-img-noticias.masverdedigital-985x600.jpg"  width="600px" alt="partes rio" />');
});
$("#rioDos").mouseover(function() {
    $(this).replaceWith('<img id="rioDos" title="rio origen glacial" src="http://awsassets.wwf.es/img/z1c5564_michael_poliza_wwf_webres_81544.jpg" alt="rio origen glacial" width="600px"  /></p>')
});
