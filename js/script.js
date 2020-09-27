
var parallax = document.querySelector('.parallax');
var aside = document.querySelector('aside');

if(aside){
	var asideinit = aside.offsetTop;
}
var parainit = parallax.offsetTop;

		
window.onscroll = function (e) {
	if (aside) {
		aside.style.top= asideinit - ((window.scrollY)).toString()+"px";
	}
	parallax.style.top = parainit + ((window.scrollY)/2).toString()+"px";
	
};


