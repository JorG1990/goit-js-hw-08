
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate',throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  const timePlay = localStorage.getItem("videoplayer-current-time")
  console.log(timePlay);
},1000));

// Obtén la referencia al elemento de video
const videoPlayer = document.getElementById('vimeo-player');

// Verificar si hay un tiempo guardado al cargar la página
window.addEventListener('load', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    // Establecer el tiempo guardado en el reproductor de video
    videoPlayer.currentTime = savedTime;

    // Ejecutar la función de setCurrentTime con el tiempo guardado
    player.setCurrentTime(savedTime)
      .then(function (seconds) {
        console.log("El tiempo actual se estableció en " + seconds);
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // El tiempo era menor que 0 o mayor que la duración del video
            break;
          default:
            // Ocurrió algún otro error
            break;
        }
      });
  }
});
