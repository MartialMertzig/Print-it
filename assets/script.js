
//Variable constante (const) de type tableau, 
//les valeurs à l'intérieur du tableau ne vont pas bouger pendant l'éxecution du code

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Numéro du slide (slide1.jpg)
let indexSlideActive = 0;

let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {
//Décrémentation : indexSlideActive--
	indexSlideActive = indexSlideActive -1;
    if (indexSlideActive < 0){
	    indexSlideActive = slides.length - 1;
	}
//Méthode
	update(indexSlideActive);
});

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {
//Décrémentation : indexSlideActive++
	indexSlideActive = indexSlideActive +1;
    if (indexSlideActive > slides.length -1 ){
	    indexSlideActive = 0;
	}
//Méthode
	update(indexSlideActive);
});

const dots = document.querySelector(".dots");
//Tableau Slides et création des points
slides.forEach (function (slide, index){
//Pour chaque dot on créer une div
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dots.appendChild(dot);
})

//Méthode
function update(indexSlideActive) {
	const prefix = "assets/images/slideshow/";
//Img de la bannière, le préfix appel le chemin des images
    document.querySelector(".banner-img").src = prefix + slides[indexSlideActive].image;
//Agit sur le P et le Span dans la bannière
	document.querySelector("#banner p").innerHTML = slides[indexSlideActive].tagLine;
//Recupere tout les points sur la page
	let dots = document.querySelectorAll('.dot');
//Annule le dot_selected
	dots.forEach(dot=>{
		dot.classList.remove('dot_selected');
	});
//Ajoute le dot_selected sur le bon point
	dots[indexSlideActive].classList.add('dot_selected');

}
//Charge le point blanc une fois que la page est chargée
document.addEventListener('DOMContentLoaded', function(){
	update(indexSlideActive);
})
