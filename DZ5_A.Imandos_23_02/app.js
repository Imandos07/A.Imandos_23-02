const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const rub = document.querySelector("#rub")


const convert = (elem, target, rate) => {
	elem.addEventListener("input", () => {
		fetch("data.json")
			.then(response => response.json())
			.then(data => {
				if (rate === "KGS") {
					target.value = (elem.value / data.usd).toFixed(2)
				} else if (rate === "RUB") {
					target.value = (elem.value / data.rub).toFixed(2)
				} else if (rate === "KGS2") {
					target.value = (elem.value * data.usd).toFixed(2)
				} else if (rate === "RUB2") {
					target.value = (elem.value * data.rub).toFixed(2)
				}
				elem.value !== "" || (target.value = "")
			})
			.catch(error => console.error(error))
	})
}


convert(som, usd, "KGS")
convert(usd, som, "KGS2")
convert(rub, usd, "RUB")
convert(usd, rub, "RUB2")
convert(som, rub, "KGS2")
convert(rub, som, "RUB2")


document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#myForm');
	form.addEventListener('submit', function(event) {
	  event.preventDefault();
  
	  const name = document.querySelector('#name').value;
	  const email = document.querySelector('#email').value;
  
	  fetch('url-to-api', {
		method: 'POST',
		body: JSON.stringify({
		  name: name,
		  email: email
		}),
		headers: {
		  'Content-Type': 'application/json'
		}
	  })
		.then(function(response) {
		  if (!response.ok) {
			throw Error(response.statusText);
		  }
		  showModal('Success', 'The request was successful.');
		})
		.catch(function(error) {
		  showModal('Error', 'An error occurred: ' + error);
		});
	});
  
	function showModal(title, message) {
	  const modal = document.createElement('div');
	  modal.setAttribute('id', 'modal');
	  const modalTitle = document.createElement('h2');
	  modalTitle.textContent = title;
	  const modalMessage = document.createElement('p');
	  modalMessage.textContent = message;
	  const modalClose = document.createElement('button');
	  modalClose.textContent = 'Close';
	  modal.appendChild(modalTitle);
	  modal.appendChild(modalMessage);
	  modal.appendChild(modalClose);
  
	  document.querySelector('body').appendChild(modal);
  
	  modalClose.addEventListener('click', function() {
		modal.remove();
	  });
	}
  });
  