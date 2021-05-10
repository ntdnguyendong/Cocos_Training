cc.Class({
  extends: cc.Component,

  properties: {
    _editboxUserName: null,
    editboxPass: cc.EditBox,
    buttonReg: cc.Button,
    labelCheckUser: cc.Label,
    labelCheckPass: cc.Label,
    richText : cc.RichText,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this._editboxUserName = this.node.getChildByName("EditBoxUserName")
  },

  toolTipUser() {
    this.labelCheckUser.string = "Your account is maximum 10 character";
    this.labelCheckUser.node.active = true;
    this.labelCheckUser.node.color = cc.Color.RED;
  },

  toolTipPass() {
    this.labelCheckPass.string =
      "Your account is min 6 character max 10 character";
    this.labelCheckPass.node.active = true;
    this.labelCheckPass.node.color = cc.Color.RED;
  },

  regexUserName() {
    let regUserName = /^[A-Za-z0-9]+$/;
    let validUser = regUserName.test(this._editboxUserName.getComponent(cc.EditBox).string);
    if (this._editboxUserName.getComponent(cc.EditBox).string.length === 0) {
        this.labelCheckUser.string = "Please enter account name";
    } else if (this._editboxUserName.getComponent(cc.EditBox).string.length > 10) {
        this.labelCheckUser.string = "Your account is maximum 10 character";
    } else if (!validUser) {
        this.labelCheckUser.string = "The account name must not have any special characters";
    } else {
        this.labelCheckUser.node.active = false;
    }
  },

  regexPass() {
    var regUserPas = /^[A-Za-z0-9]+$/;
    let validPass = regUserPas.test(this.editboxPass.string);
    if (this.editboxPass.string.length === 0) {
        this.labelCheckPass.string = "Please enter password";
    } else if (this.editboxPass.string.length < 6 || this.editboxPass.string.length > 10) {
        this.labelCheckPass.string = "Your account is min 6 character max 10 character";
    } else if (!validPass) {
        this.labelCheckPass.string = "The account name must not have any special characters";
    } else if (!this.editboxPass.string.match(/[A-Z]/)
            || !this.editboxPass.string.match(/[a-z]/)
            || !this.editboxPass.string.match(/[0-9]/)) {
        this.labelCheckPass.string = "Password must contain at least 1 lowercase letter 1 uppercase letter 1 number";
    } else{
        this.labelCheckPass.node.active = false;
    }
  },

  viewTime(){
    let nowTime = new Date(Date.now());
    cc.log(nowTime)
    this.richText.string =
    `<color=black>Chào mừng </c><color=red><u>${this._editboxUserName.getComponent(cc.EditBox).string}</c><color=black>
     đã gia nhập<color=yellow><i>${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}</color><color=black> `
  },

  start() {},

  // update (dt) {},
});
