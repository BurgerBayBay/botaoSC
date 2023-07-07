var button = document.getElementById('button');
button.addEventListener('click', () => {
  var computedColor = window.getComputedStyle(button).backgroundColor;
  if (computedColor === 'rgb(11, 132, 146)') {
    button.style.backgroundColor = 'rgb(255, 0, 0)';
  } else if (computedColor === 'rgb(255, 0, 0)') {
    button.style.backgroundColor = 'rgb(0, 255, 0)';
  } else if (computedColor === 'rgb(0, 255, 0)') {
    button.style.backgroundColor = 'rgb(11, 132, 146)';
  }
});
let audioFolder=[
  'Sound effects/aughhhhh-aughhhhh.mp3',
  'Sound effects/discord-notification.mp3',
  'Sound effects/fart-meme-sound.mp3',
  'Sound effects/fart-with-extra-reverb.mp3',
  'Sound effects/female-startled-scream.mp3',
  'Sound effects/goofy-ahh-car-horn-sound-effect.mp3',
  'Sound effects/horny_Q3sE2bv.mp3',
  'Sound effects/horny_Q3sE2bv.mp3',
  'Sound effects/jixaw-metal-pipe-falling-sound.mp3',
  'Sound effects/taco-bell-bong-sfx.mp3',
  'Sound effects/tmp_7901-951678082.mp3',
  'Sound effects/vine-boom.mp3'
]
button.addEventListener('click',()=> {
  let randomIndex= Math.floor(Math.random()*audioFolder.length)
  let randomAudio = new Audio(audioFolder[randomIndex])
  randomAudio.play()
})
