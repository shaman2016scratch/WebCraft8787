let gameData = {}
let gameObj = ''

class onGameMessage {
    constructor (data) {
        this.data = data
    }

    run () {
        if (this.data.type === 'gameUpdated') {
            gameObj = this.data.value
        } else if (this.data.type === 'dataUpdated') {
            gameData = this.data.value
        }
    }
}

self.onmessage = (data) => {
    const onmessage = new onGameMessage(data)
    onmessage.run
}