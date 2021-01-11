bg_choice = ['bg_2','bg_3','bg_4'];
bg = bg_choice[Math.floor(Math.random() * bg_choice.length)];
const img = 'url(./img/backgrounds/' + bg + '.jpg)';

$(() => $('.bg').css('background-image', img) );