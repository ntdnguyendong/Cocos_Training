// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var mObject = cc.Class({
            name: "Object",
            ctor(){
                cc.log('Construct');
            },
            txt(){
                cc.log('text');
            },
           
        });

        var rabitObj = cc.Class({
            name: "Rabit",
            properties : {
                name : "Bunny",
                height : 0.5,
                weigh : 2,
            },
            jump(){
                cc.log(this.name + ' jump');
            }
        });

        var rusRabitObj = cc.Class({
            extends : rabitObj,
            drink(){
                cc.log(this.name + ' drink vodka');
            },
        })
        var obj = new mObject;
        var rabit = new rabitObj;
        var rusRabit = new rusRabitObj;
     
    },

    // update (dt) {},
});
