var hart = document.querySelectorAll(".fav");
var donehart = document.querySelectorAll(".donefav");

console.log(hart);

hart[0].addEventListener('click', function(){
	hart[0].classList.toggle("filledfav");
});



donehart[0].addEventListener('click', function(){
	hart[0].classList.toggle("filledfav");
});

