$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// if (viewportWidth < 640){
// 	for (let i = 0; i < navLink.length; i++) {
// 		var node = document.createElement('i');
//     node.className = 'fa fa-arrow-left ml-3';
//         navLink[i].appendChild(node);
//         console.log(navLink[i]);
// 	}
// } else{}
// let navLinkBase = document.getElementsByClassName('nav-link');
// let navLink = Array.from(navLinkBase);


// if (screen.width < 640){
// 	for (let i = 0; i < navLink.length; i++) {
// 		var node = document.createElement('i');
//     node.className = 'fa fa-arrow-left ml-3';
//         navLink[i].appendChild(node);
//         console.log(navLink[i]);
// 	}
// } else{}

