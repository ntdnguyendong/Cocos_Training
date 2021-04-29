cc.Class({
  extends: require("Charmander"),

  properties: {
    nameObj: "Eevee",
    turnRange: 180,
  },

  start() {
  },
  
  update(dt) {
    this.timeCount += dt * 60;
    
    this.turnObj();
    if (this.timeCount == 60) {
      this.talk();
    }
  },

  turnObj() {
    if (this.timeCount <= 60) {
      this.node.angle += this.turnRange / 60;
      cc.log(this.node.angle);
    } else if (this.timeCount <= 240) {
      this.node.angle = Math.round(this.node.angle / this.turnRange) * this.turnRange; 
    } else {
      this.timeCount = 0;
    }
  },
});
