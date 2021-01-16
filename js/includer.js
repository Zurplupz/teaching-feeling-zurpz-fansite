$(function () {
	var includes = $('[data-include]:not([data-onload="false"])');

	includes.each(function () {
		let file = 'views/' + $(this).data('include') + '.html'
		$(this).load(file)
	});
});