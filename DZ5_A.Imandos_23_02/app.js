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


$(document).ready(function() {
	$('#myForm').submit(function(event) {
		event.preventDefault();

		var name = $('#name').val();
		var email = $('#email').val();

		$.ajax({
			url: 'url-to-api',
			type: 'POST',
			data: {
				name: name,
				email: email
			},
			success: function(response) {
				showModal('Success', 'The request was successful.');
			},
			error: function(xhr, status, error) {
				showModal('Error', 'An error occurred: ' + xhr.status + ' ' + xhr.statusText);
			}
		});
	});

	function showModal(title, message) {
		var modal = $('<div>').attr('id', 'modal');
		var modalTitle = $('<h2>').text(title);
		var modalMessage = $('<p>').text(message);
		var modalClose = $('<button>').text('Close');
		modal.append(modalTitle);
		modal.append(modalMessage);
		modal.append(modalClose);

		$('body').append(modal);

		modalClose.click(function() {
			modal.remove();
		});
	}
});
