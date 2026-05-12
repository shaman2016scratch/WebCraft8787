let functions = {
  play: async function() {
    const game = new Worker('./game.js')
  }
}
let root = document.getElementById('game')
function start() {
  root.innerHTML = `
    <h1>WebCraft8787</h1>
    <button onclick='functions.play()'>PLAY</button>
    <button>SETTINGS</button>
  `
}
document.addEventListener('DOMContentLoaded', () => {
  start()
});
