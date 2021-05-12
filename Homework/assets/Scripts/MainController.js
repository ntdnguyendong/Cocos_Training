const Emitter = require("Emitter");
cc.Class({
  extends: cc.Component,

  properties: {
    editBoxUserName: cc.EditBox,
    editBoxPass: cc.EditBox,
    richText: cc.RichText,
    labelCheckUser: cc.Label,
    labelCheckPass: cc.Label,
    progressBar: cc.ProgressBar,
    labelCheckProgBar : cc.Label,
    button : cc.Button,
    _userName: null,
    _checkUser: false,
    _pass: null,
    _checkPass: false,
    _timeNow : null,
  },

  onLoad() {
    this.toolTipUser();
    this.toolTipPass();
    this.progressBar.progress = 0
  },

  toolTipUser() {
    this.labelCheckUser.string = "Tên phải có 10 ký tự";
    this.labelCheckUser.node.color = cc.Color.RED;
  },

  toolTipPass() {
    this.labelCheckPass.string = "Mật khẩu phải có từ 6 đến 10 ký tự";
    this.labelCheckPass.node.active = true;
    this.labelCheckPass.node.color = cc.Color.RED;
  },

  checkUserName() {
    this._userName = this.editBoxUserName.string;
    let regUserName = /^[A-Za-z0-9]+$/;
    let validUser = regUserName.test(this._userName);
    if(this._userName.length === 0){
        this._checkUser = false;
        this.toolTipUser();
    } else if(this._userName.length > 10){
        this._checkUser = false;
        this.toolTipUser();
    } else if(!validUser){
        this._checkUser = false;
        this.labelCheckUser.string= "Tên không được có ký tự đặc biệt";
        this.labelCheckUser.node.color = cc.Color.RED;
    } else{
        this.labelCheckUser.string = "Tên hợp lệ";
        this.labelCheckUser.node.color = cc.Color.GREEN;
        this._checkUser = true;
    }
  },

  checkPassword() {
    this._pass = this.editBoxPass.string;
    let regUserPas = /^[A-Za-z0-9]+$/;
    let validPass = regUserPas.test(this._pass);
    if (this._pass.length === 0) {
        this._checkPass = false;
        this.toolTipPass();
    } else if (this._pass.length < 6 || this._pass.length > 10) {
        this._checkPass = false;
        this.toolTipPass();
    } else if (!validPass) {
        this._checkPass = false;
        this.labelCheckPass.string = "Mật khẩu không được có ký tự đặc biệt";
    } else if (!this._pass.match(/[A-Z]/)
            || !this._pass.match(/[a-z]/)
            || !this._pass.match(/[0-9]/)) {
        this._checkPass = false;
        this.labelCheckPass.string = "Phải có 1 chữ in hoa, 1 chữ thường, 1 số";
    } else{
        this.labelCheckPass.string = "Mật khẩu hợp lệ";
        this.labelCheckPass.node.color = cc.Color.GREEN;
        this._checkPass = true;
    }
  },

  viewTime(){
    this._timeNow = new Date(Date.now()).toLocaleTimeString('it-IT');
    this.richText.string =
    `<color=black>Chào mừng </c><color=red><u>${this._userName}</c><color=black>
     đã gia nhập<color=yellow><i>${this._timeNow}</color><color=black> `
  },

  progressbarCheck(){
    this.progressBar.progress += this.progressBar.totalLength/8/300;
    if(this.progressBar.progress === 1){
    this.labelCheckProgBar.node.active = true;
    this.button.interactable = false;
    }
  },

  btnClick() {
    if(this._checkPass && this._checkUser){
        this.viewTime();
        Emitter.instance.emit('instantItem', this._userName, this._timeNow);
        this.progressbarCheck();
    }
  },
});
