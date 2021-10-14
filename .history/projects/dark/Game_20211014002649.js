class Game {
    constructor(images, sounds){
        this.images = images
        this.sounds = sounds
        this.marioImages = loadMarioImages(this.images.marioImg)
        this.goombaImages = loadGoombaImages(this.images.goombaImg)
        this.numGoombas = gameSettings.numGoombas
        this.started = false
        this.over = false
        this.hero = new Character(this.marioImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
        this.goombas = null
        this.background = new Background()
        this.scoreboard = new Scoreboard()
        this.startButton = createButton('start')
        this.startButton.mousePressed(this.init)
        this.startScreen = new Overlay('EVIL', 'MARIO', this.startButton)
        this.gameOverScreen = new Overlay('game over!', 'start again?', this.startButton)
        this.died = false 
    }

    init = () => {
        if(!this.started){
            this.hero = new Character(this.marioImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
            this.goombas = Array.from({length: this.numGoombas}, (el, i) => {
                return new Goomba(this.goombaImages, {x: gameSettings.goombaFirstX + (gameSettings.goombaMinSpace * (gameSettings.goombaRandomSpaceMult * Math.random()) * i), y: gameSettings.goombaStartY}, gameSettings.goombaSize)
            })
            this.started = true
            this.over= false
            this.died = false
            this.startButton.hide()
            this.sounds.themeSong.play()
        }
    }

    checkCollisions(){
        this.goombas.forEach((goomba) => {
            if(!goomba.disabled){
                if(checkGoombaCollision(this.hero, goomba)){
                    if(checkHeroWins(this.hero)){
                        goomba.die()
                    } else {
                        if(!this.died){
                            this.sounds.themeSong.stop()
                            this.sounds.dieSound.play()
                            this.over = true
                            this.started = false
                            this.startButton.show()
                     
                            this.died = true
                        }

                    }
                }
            }
        })
    }



    render(){
        this.background.render()
        this.scoreboard.render()
        if(this.hero){
             this.hero.render()
        }
        if(this.goombas){
            this.goombas.forEach(goomba => goomba.render())
        }
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
        }
    }

    update(){
        // game over state
        if(this.started && !this.over){
            this.hero.update()
            this.goombas.forEach(goomba => goomba.update())
            
            this.checkCollisions()
        }
    }
}



