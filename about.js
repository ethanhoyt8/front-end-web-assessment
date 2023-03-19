console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let batDuckMan = document.querySelector('#duckbat')
	const batduck = () => {
		alert('You are BatDuck!')
	}
	batDuckMan.addEventListener('mouseover', batduck)


	letmyForm=document.querySelector('form')

	const newThing = (event) => {
		event.preventDefault()

		alert("That's awesome!")
	}

	form.addEventListener('submit', newThing)