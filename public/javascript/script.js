$(function(){
	$(".hamburger-menu").on('click', function(){
    	$('.toggle').toggleClass('open');
    	$('.navbar-nav').toggleClass('open');
		$('.body').toggleClass('open');
    	
	});

	$(".expand").on('click', function(){
		$('.example1').toggleClass('open');
		
	});
	

AOS.init({
    	easing: "ease",
    	duration: 2000, 
	})
	
	const colors = [
		'#2196f3',
		'#e91e63',
		'#ffeb3b',
		'#74ff1d'
  ]


 function createSquare()
  { 
	 const section = document.querySelector('section');
	 const square = 
document. createElement('span');

	 var size = Math.random() * 50;
	 
	 square.style.width = 20 + size + 'px' ;
	 square.style.height = 20 + size + 'px' ;

	 square.style.top = Math.random() * innerHeight + 'px';
	 square.style.left = Math.random() * innerWidth + 'px';

	 
	 const bg = colors[Math.floor(Math.random() * colors.length)];
	  square.style.background = bg;


	  
	 section.appendChild(square);
	 
	 setTimeout(() => {
		 square.remove()
	 },5000)

  }

setInterval(createSquare , 150)


});

