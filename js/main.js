window.wc8787 = {}
let root = document.getElementById('game')
let gameData = {}

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

class onMessage {
    constructor (data) {
        this.data = data
    }

    run () {
        if (this.data.type === 'gameUpdate') {
            root.innerHTML = this.data.value
        } else if (this.data.type === 'dataUpdate') {
            gameData = this.data.value
        }
    }
}

let functions = {
    play: function() {
        window.wc8787.game = new Worker('./game.js')
        window.wc8787.game.onmessage = (data) => {
            const onmessage = new onMessage(data)
            onmessage.run()
        }
    }
}