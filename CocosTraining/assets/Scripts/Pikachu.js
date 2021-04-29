
cc.Class({
    extends: require("Charmander"),

    properties: {
        nameObj: "Pikachu",
        skewRange : 1,
    },

    start () {

    },

    update (dt) {
        this.timeCount += Math.round(dt*60);
        this.skewObj();
        if(this.timeCount == 60){
            this.talk();
        }
    },
    
    skewObj(){
        if(this.timeCount <= 30 ){
            this.node.skewX += this.skewRange;
        }else if(this.timeCount <= 60){
            this.node.skewX -= (this.skewRange * 2);
        }else if(this.timeCount <= 90){
            this.node.skewX += this.skewRange;
        }else if(this.timeCount <= 150){
            
        }else {
            this.timeCount = 0;
        }
    }
});
