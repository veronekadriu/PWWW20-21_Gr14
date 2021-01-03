

var questions = document.getElementsByTagName('dt');
var answers = document.getElementsByTagName('dd');



function toggleAllOff(){
	for (var i = 0; i < answers.length; i++) { 
		answers[i].className = 'hide';
	}
}


function toggleAllOn(){
	for (var i = 0; i < answers.length; i++) { 
		answers[i].className = 'show';
	}

}


function toggleNext(el) {
 var next=el.nextSibling;

 next.style.display=((next.style.display=="none") ? "block" : "none");
}


function displayToggle(){
	
	toggleAllOff(); 
	 
	 for (i=0; i<questions.length; i++) { 
		 questions[i].onclick=function() { 
		 	var next = this.nextSibling;
			while(next.nodeType != 1) next=next.nextSibling; 
			next.className=((next.className=="hide") ? "show" : "hide");
		}
	 }
}


window.onload=function() {
	displayToggle();
	}
