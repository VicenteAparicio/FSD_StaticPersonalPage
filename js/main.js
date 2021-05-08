
// APERTURA Y CIERRE DE ABOUT ME
let sum=1;
function descifrar(){
    if(sum>0){
        sum-=1;
        return document.getElementById('containerText').style.lineHeight="1.2em";
    } else {
        sum+=1;
        return document.getElementById('containerText').style.lineHeight=".2em";
    }
}

// GALERÍA DEL PORTFOLIO
function openModal() {
    document.getElementById('myModal').style.display = "flex";
    document.getElementById('hiddenPic').style.display = "none";
    document.getElementById('headerocultar').style.display = "none";
    document.onkeydown = mueve;  
   }
function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('hiddenPic').style.display = "flex";
    document.getElementById('headerocultar').style.display = "flex";
}
function mueve(elEvento) {
    var evento = window.event || elEvento;
    if(evento.keyCode==39){plusSlides(1);}
    if(evento.keyCode==37){plusSlides(-1);}
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n){ //OBTENGO LA POSICION EN EL ARRAY DE LAS IMG EN EL CONTENEDOR HIDDENPIC
    var cajaIma = document.getElementById('hiddenPic');
    var imaPeques = cajaIma.getElementsByTagName('img');
    for (i=0; i<imaPeques.length; i++){
        if (imaPeques[i].src == n.src){
            var numeroFoto = i;
            showSlides(slideIndex = numeroFoto+1);
        }
    }
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}