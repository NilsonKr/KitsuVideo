const renderData = ({ data }) => {
	// console.log(`${info.posterImage.small}  ${info.titles.en}   ${info.createdAt}  ${info.episodeCount}`)
	const mountNode = document.querySelector('#app');
	let dataToRender = [];

	data.forEach(anime => {
		const title = anime.attributes.titles.en
			? anime.attributes.titles.en
			: anime.attributes.titles.en_jp;
		const episodes = anime.attributes.episodeCount
			? anime.attributes.episodeCount
			: anime.attributes.episodeLength;

		dataToRender.push(
			`<card-anime data-url=https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId} id="Card" img=${anime.attributes.posterImage.small} title="${title}" date=${anime.attributes.createdAt} episodes=${episodes}></card-anime>`
		);
	});

	mountNode.innerHTML = `${dataToRender.join('')}`;
};

export default renderData;
