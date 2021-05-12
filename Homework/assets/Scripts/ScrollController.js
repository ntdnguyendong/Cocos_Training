const Emitter = require("Emitter");
cc.Class({
    extends: cc.Component,

    properties: {
       scrollView : cc.ScrollView,
       item : cc.Prefab,
       content : cc.Node,
       _itemPosition : 0,
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('instantItem', this.instantItem.bind(this));
    },

    instantItem(data, time) {
        let scrollViewItem = cc.instantiate(this.item);
        scrollViewItem.parent = this.content;
        scrollViewItem.getComponent(cc.Label).string = data +" "+ time;
        this._itemPosition -= 20;
        scrollViewItem.y = this._itemPosition;
    },

    start () {

    },

    // update (dt) {},
});
