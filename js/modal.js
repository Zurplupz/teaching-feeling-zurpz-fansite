$(() => {

	if (location.hash == '#info-modal') {
		$('#info-modal').hide();
	}

	$('#info-modal').addClass('fade');

	$('[href="#info-modal"]').each(function () {
		$(this).attr('href', '#');
		$(this).attr('data-toggle', "modal");
		$(this).attr('data-target', "#info-modal");
	});

	$('[href="#info-modal"]').click((e) => e.preventDefault() );

});