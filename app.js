			const scriptURL = 'https://script.google.com/macros/s/AKfycbxdawj-qpSCBRNA8hjJ2OMwCRJf6RIaqeXcRGQOxzluQV8KsMCxSYhXkJfOJ-7X2Nuw5Q/exec'
			const form = document.forms['contactForm']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
