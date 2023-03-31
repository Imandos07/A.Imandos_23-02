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
