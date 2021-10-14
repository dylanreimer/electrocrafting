class Overlay{
    constructor(text1, text2, startButton){
        this.text1 = text1 
        this. text2  =text2
        this.startButton = startButton 
        this.startButton.position(gameSettings.overlayX + 190, gameSettings.overlayY + 150)
    }
    render(){
        strokeWeight(0)
        fill(gameSettings.overlayColor)
        rect(gameSettings.overlayX, gameSettings.overlayY, gameSettings.overlayWidth, gameSettings.overlayHeight)
        fill(0)
        stroke(0)
        textSize(gameSettings.textSize + 100)
        text(this.text1, gameSettings.overlayX + 90, gameSettings.overlayY + 120)
        text(this.text2, gameSettings.overlayX + 30, gameSettings.overlayY + 300 )
    }
}