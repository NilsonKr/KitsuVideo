import videojs from 'video.js';
import 'videojs-youtube';

const mountNode = document.querySelector('#modalNode');
let id = 0;

/* 

   Videojs dont allow the dynamic url change so... 
   we have to remove the node and then create another one
   with a differente id   

*/

function mountVideo() {
	//Create a video with a new Id
	const newId = id + 1;
	const newVideo = document.createElement('video');
	newVideo.className = 'video-js vjs-theme-fantasy modal--video';
	newVideo.id = `videoModal${newId}`;
	newVideo.controls = true;

	mountNode.append(newVideo);
	mountNode.style.display = 'flex';

	//Return The New Id of our video
	return newId;
}

const renderModal = urlId => {
	const newId = mountVideo();
	const currVideo = document.querySelector(`#videoModal${id}`);

	//if theres a current video we'll delete it to use another one
	if (currVideo) {
		videojs(`videoModal${id}`).dispose();
	}

	//Setting the options with the dynamic url
	const options = {
		techOrder: ['youtube'],
		sources: [{ type: 'video/youtube', src: `https://www.youtube.com/watch?v=${urlId}` }],
	};

	//Setting a new videojs with the new id to change the url and increment the idCounter
	videojs(`videoModal${newId}`, options);
	id += 1;
};

export default renderModal;
