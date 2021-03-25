import './components/header.js';
import './components/card.js';
import fetchData from './fetchData.js';
import renderData from './renderData.js';

// apis url
const trending = process.env.TRENDS;
const home = process.env.HOME;
const average = process.env.AVERAGE;

//<--------------->

// const iconTitle = document.querySelector('#title-icon')
const animeTitle = document.querySelector('#anime__title');
const burguerButton = document.querySelector('#burguer');
const menu = document.querySelector('#Menu');

document.body.addEventListener('click', ev => {
	const target = ev.target;
	ev.preventDefault();
	if (target.classList.contains('burguer-click')) {
		burguerButton.classList.toggle('active-burguer');
		menu.classList.toggle('menuActive');
	}
	if (target.id === 'home') {
		animeTitle.innerText = 'Home';
		fetchData(home).then(data => renderData(data));
	}
	if (target.id === 'trending') {
		animeTitle.innerText = 'Trending';
		fetchData(trending).then(data => renderData(data));
	}
	if (target.id === 'likey') {
		animeTitle.innerText = 'Likey';
		fetchData(average).then(data => renderData(data));
	}
});

fetchData(trending).then(data => renderData(data));
