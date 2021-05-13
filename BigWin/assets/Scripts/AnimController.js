const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        bgInit : cc.Node,
        bigWinInit : cc.Node,
        coinInit : cc.Node,
        moneyInit : cc.Label,
        _scaleCoin : 1,
        _nextValueEditBox :1000000,
        _value : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Emitter.instance.registerEvent("Bg-Anim", this.bgAnim.bind(this));
        Emitter.instance.registerEvent("labelBW-Anim", this.bwAnim.bind(this));
        Emitter.instance.registerEvent("Coin-Anim", this.coinAnim.bind(this));
        Emitter.instance.registerEvent("Money-Anim", this.moneyAnim.bind(this));
    },

    start () {

    },

    bgAnim(){
        let anim = cc.tween()
            .to(0.5, {scale : 1.2})
            .to(0.5, {scale :  1})
        cc.tween(this.bgInit).then(anim).repeatForever().start()
    },

    bwAnim(){
        let anim = cc.tween()
            .to(0.5, {scale : 1})
            .to(0.5, {scale : 1.2})
        cc.tween(this.bigWinInit).then(anim).repeatForever().start()
    },

    coinAnim(){
        cc.tween(this.coinInit).repeat(10,
            cc.tween()
            .by(1,{position : cc.v2(this.node.x - 100,this.node.y - 200), scaleX : (this._scaleCoin * -1)})
        )
        .start()
    },

    moneyAnim(){
        cc.tween(this)
            .to(1,{_value : this._nextValueEditBox})
            .start();
    },
    update (dt) {
        this.moneyInit.string = Math.round(this._value);
    },
});
