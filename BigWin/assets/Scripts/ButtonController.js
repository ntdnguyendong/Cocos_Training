const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
     
    },
    onLoad () {
    },

    start () {
    },

    eventButton(){
        this.coinAnim();
        this.bgAnim();
        this.labelBWAnim();
        this.moneyAnim();
    },

    coinAnim(){
        Emitter.instance.emit('Coin-Anim');
    },

    bgAnim(){
        Emitter.instance.emit('Bg-Anim');
    },

    labelBWAnim(){
        Emitter.instance.emit('labelBW-Anim');
    },

    moneyAnim(){
        Emitter.instance.emit('Money-Anim');
    }

});
