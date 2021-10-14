class Game {
    constructor(images, sounds){
        this.images = images
        this.sounds = sounds
        this.marioImages = loadMarioImages(this.images.marioImg)
        this.enemyImages = loadEnemyImages(this.images.enemyImg)
        this.numEnemies = gameSettings.numEnemies
        this.started = false
        this.over = false
        this.hero = new Character(this.marioImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
        this.enemies = null
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
            this.enemies = Array.from({length: this.numEnemies}, (el, i) => {
                return new enemy(this.enemyImages, {x: gameSettings.enemyFirstX + (gameSettings.enemyMinSpace * (gameSettings.enemyRandomSpaceMult * Math.random()) * i), y: gameSettings.enemyStartY}, gameSettings.enemySize)
            })
            this.started = true
            this.over= false
            this.died = false
            this.startButton.hide()
            this.sounds.themeSong.play()
        }
    }

    checkCollisions(){
        this.enemies.forEach((enemy) => {
            if(!enemy.disabled){
                if(checkEnemyCollision(this.hero, enemy)){
                    if(checkHeroWins(this.hero)){
                        enemy.die()
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
        if(this.enemies){
            this.enemies.forEach(enemy => enemy.render())
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
            this.enemies.forEach(enemy => enemy.update())
            
            this.checkCollisions()
        }
    }
}



