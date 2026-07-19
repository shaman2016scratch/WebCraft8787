window.wc8787 = {}
let root = document.getElementById('game')

function start() {
    root.innerHTML = `
        <h1>WebCraft8787</h1>
        <button onclick='functions.play()'>PLAY</button>
        <button onclick='functions.settings()'>SETTINGS</button>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    start()
})

let functions = {
    play: function() {
        window.wc8787.game = new Worker('./game.js')
        window.wc8787.game.onmessage = (data) => {
            if (data.type === 'gameUpdate') {
                root.innerHTML = data.value
            }
        }
    }
}