const bg_choice = ['bg_2','bg_3','bg_4'];

$(() => {

	function changeBg() {
		let current = $('.bg').css('background-image');

		let idx = bg_choice.indexOf(current);

		let new_choices = (idx > -1) ? bg_choice.splice(idx, 1) : bg_choice;

		let bg = new_choices[Math.floor(Math.random() * bg_choice.length)];

		let img = 'url(./img/backgrounds/' + bg + '.jpg)';

		$('.bg').css('background-image', img);
	}

	changeBg(); 
});