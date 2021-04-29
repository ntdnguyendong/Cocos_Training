cc.Class({
  extends: cc.Component,
  properties: {
    nameObj : "Charmander",
    _timeCount : 0,
    jumpRange : 1,
  },
  start() {
  },

  update(dt) {
    this.timeCount += Math.round(dt*60);
    this.jump();
  },
  
  talk() {
    cc.log(this.nameObj + " alo");
  },
  
  jump() {
    if (this.timeCount <= 30) {
      this.node.setPosition(cc.v2(this.node.x, this.node.y + this.jumpRange));
    }
    else if (this.timeCount <= 60) {
       this.node.setPosition(cc.v2(this.node.x, this.node.y - this.jumpRange));
    }else{
        this.timeCount = 0;
        this.talk();
    }
  },
});
