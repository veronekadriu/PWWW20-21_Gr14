// start by getting all the questions and answers
// these will be put into arrays

var questions = document.getElementsByTagName('dt');
var answers = document.getElementsByTagName('dd');


// function for the link that turns them all off
function toggleAllOff(){
	for (var i = 0; i < answers.length; i++) { 
		answers[i].className = 'hide';
	}
}

// function for the link that turns them all on
function toggleAllOn(){
	for (var i = 0; i < answers.length; i++) { 
		answers[i].className = 'show';
	}

}


function toggleNext(el) {
 var next=el.nextSibling;

 next.style.display=((next.style.display=="none") ? "block" : "none");
}


//makes the definition lists click-able
function displayToggle(){
	
	toggleAllOff(); // calls the toggle all off function to turn all the answers off when the page is loaded	
	 
	 for (i=0; i<questions.length; i++) { // loops through the questions a
		 questions[i].onclick=function() { // shows the answers onclick
		 	var next = this.nextSibling;
			while(next.nodeType != 1) next=next.nextSibling; // if it gets to a non-element node, go to the next one
			next.className=((next.className=="hide") ? "show" : "hide");
		}
	 }
}

// initiates the click-able dt's when the page loads
window.onload=function() {
	displayToggle();
	}
