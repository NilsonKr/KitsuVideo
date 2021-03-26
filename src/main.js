import './components/header.js';
import './components/card.js';

import fetchData from './fetchData.js';
import renderData from './renderData.js';

//VideoJs Themes And styles
import 'video.js/dist/video-js.min.css';
import '@videojs/themes/dist/fantasy/index.css';

// apis url
const trending = process.env.TRENDS;
const home = process.env.HOME;
const average = process.env.AVERAGE;

// const iconTitle = document.querySelector('#title-icon')
const animeTitle = document.querySelector('#anime__title');
const burguerButton = document.querySelector('#burguer');
const menu = document.querySelector('#Menu');

//Modal Nodes
const modalNode = document.querySelector('#modalNode');
const closeModal = document.querySelector('#closeModal');

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

	if (target.id === 'Card') {
		const urlId = target.dataset.url;

		import('./components/modal.js').then(modalRender => {
			modalRender.default(urlId);
		});
	}
});

fetchData(trending).then(data => renderData(data));

//To close The modal
