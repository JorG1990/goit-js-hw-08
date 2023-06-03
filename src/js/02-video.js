
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  const timePlay = localStorage.getItem("videoplayer-current-time")
  console.log(timePlay);
});

player.setCurrentTime(0).then((tiempoActual) => {
   seconds = "videoplayer-current-time"
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});

