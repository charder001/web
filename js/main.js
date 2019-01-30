var hart = document.querySelectorAll(".fav");
var donehart = document.querySelectorAll(".donefav");
var popup = document.querySelector(".popup");
var badge = document.querySelector(".badge");
var download = document.getElementById("download");

console.log(hart);

hart[0].addEventListener('click', function(){
	hart[0].classList.toggle("filledfav");
	badge.classList.toggle("badgetoggle");

});

hart[1].addEventListener('click', function(){
	popup.classList.toggle("popuptoggle");
});



donehart[0].addEventListener('click', function(){
	hart[0].classList.toggle("filledfav");
});

/*
download.addEventListener("click", function(){
  var elem = document.getElementById("Bar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById("Bar").style.backgroundColor = "green";
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1 + '%';
    }
  } elem.classList.toggle("bartoggle");
});*/


download.addEventListener("click", function(){
  var elem = document.getElementById("Bar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 65) {
      clearInterval(id);
      document.getElementById("Bar").style.backgroundColor = "red";
      elem.innerHTML = 'Geen internet verbinding';
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1 + '%';
    }
  } elem.classList.toggle("bartoggle");
});
