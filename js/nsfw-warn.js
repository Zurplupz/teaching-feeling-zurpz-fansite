$(() => {

	function warn() {
		$('[data-include="nsfw-warn"]').each(function () {
			let file = 'views/' + $(this).data('include') + '.html';
			that = $(this);

			$(this).load(file, () => {
				that.find('.modal').modal('show');
			});
		});

		localStorage.setItem("warned", true);
	}

	if (typeof(Storage) !== "undefined") {
		let warned = localStorage.getItem("warned");

		if (!warned) setTimeout(() => warn(), 2500);
	}

});