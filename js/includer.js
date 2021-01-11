$(function () {
	var includes = $('[data-include]');

	includes.each(function () {
		let file = 'views/' + $(this).data('include') + '.html'
		$(this).load(file)
	});
});