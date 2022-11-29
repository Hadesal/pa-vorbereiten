const nowPlaying = document.querySelector('.now-playing');
const trackArt = document.querySelector('.track-art');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');

const playPauseButton = document.querySelector('.playpause-track');
const nextButton = document.querySelector('.next-track');
const prevButton = document.querySelector('.prev-track');

const seekSlider = document.querySelector('.seek_slider');
const volumeSlider = document.querySelector('.volume_slider');
const currentTimeElement = document.querySelector('.current-time');
const totalDurationElement = document.querySelector('.total-duration');

let trackIndex = 0;
let isPlaying = false;

const currentTrack = document.createElement('audio');

const tracks = [
	{
		name: 'Night Owl',
		artist: 'Broke For Free',
		image: 'Image URL',
		path: 'Night_Owl.mp3'
	},
	{
		name: 'Enthusiast',
		artist: 'Tours',
		image: 'Image URL',
		path: 'Enthusiast.mp3'
	},
	{
		name: 'Shipping Lanes',
		artist: 'Chad Crouch',
		image: 'Image URL',
		path: 'Shipping_Lanes.mp3',
	},
];
