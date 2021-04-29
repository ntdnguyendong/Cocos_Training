cc.Class({
  extends: require("Charmander"),

  properties: {
    nameObj: "Bulbasaur",
    scaleXRange : 1,
  },

  ctor() {},

  start() {},

  update(dt) {
    this.timeCount += Math.round(dt * 60);
    this.scaleXObj();
    if (this.timeCount == 60) {
      this.talk();
    }
  },

  scaleXObj() {
    if (this.timeCount <= 30) {
      this.node.scaleX += this.scaleXRange/ 2 / 30;
    } else if (this.timeCount <= 60) {
      this.node.scaleX -= this.scaleXRange / 30;
    } else if (this.timeCount <= 120) {
    } else {
      this.node.scaleX = this.scaleXRange;
      this.timeCount = 0;
    }
  },
});
