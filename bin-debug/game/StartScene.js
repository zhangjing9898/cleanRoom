var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super.call(this) || this;
    }
    StartScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // play music
        this.sound = RES.getRes('music_m4a');
        this.soundChannel = this.sound.play(0, -1);
        this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
        this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.popRuleGroup.visible = true;
        }, this);
        this.btnGroup.touchEnabled = true;
        this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controllGroupBtns, this);
        // // monitor pop-up closure event
        this.addEventListener('CLOSE_POP_REWARD_MY', this.closeRewardMy, this);
        this.addEventListener('CLOSE_POP_RULE', this.closeRule, this);
        this.InitAnimation();
    };
    // express my reward pop-up
    StartScene.prototype.showMyReward = function () {
        this.popRewardGroup.visible = true;
    };
    // button event delegation
    StartScene.prototype.controllGroupBtns = function (evt) {
        switch (evt.target) {
            case this.rewardMyBtn:
                this.showMyReward();
                break;
            case this.shareBtn:
                window.location.href = 'https://service.weibo.com/widget/public/login.php?source=share&backurl=https%3A%2F%2Fservice.weibo.com%2Fshare%2Fmobile.php%3Ftitle%3D5.1%25E6%2589%25BE%25E4%25BD%25A0%25E5%25A6%25B9%26url%3Dhttp%253A%252F%252Fhuodong.mobilem.360.cn%252F0422%252Findex.html%26pic%3Dhttp%253A%252F%252Fp7.qhimg.com%252Fd%252Finn%252F385c96b2%252Fwx.jpg%26frefer%3Dhttp%3A%2F%2Fhuodong.mobilem.360.cn%2F0422%2Findex.html';
                break;
            case this.toMainBtn:
                SceneManager.toMainScene();
                break;
        }
    };
    // close myReward pop-up
    StartScene.prototype.closeRewardMy = function () {
        this.popRewardGroup.visible = false;
    };
    // close rule pop-up
    StartScene.prototype.closeRule = function () {
        this.popRuleGroup.visible = false;
    };
    // control music
    StartScene.prototype.musicController = function () {
        if (this.soundChannel) {
            this.soundChannel.stop();
            this.soundChannel = null;
            this.musicRotation(false);
            return;
        }
        this.soundChannel = this.sound.play(0, -1);
        this.musicRotation(true);
    };
    // control musicImg rotation
    StartScene.prototype.musicRotation = function (isPlay) {
        var tw = egret.Tween;
        isPlay === true ? tw.resumeTweens(this.musicImg) : tw.pauseTweens(this.musicImg);
    };
    // initialize animation
    StartScene.prototype.InitAnimation = function () {
        var tw = egret.Tween;
        // musicImg rotation
        tw.get(this.musicImg, {
            loop: true
        }).to({
            rotation: 360
        }, 3000);
        // dustpan animation
        tw.get(this.pjImg, {
            loop: true
        }).to({
            rotation: 4.65
        }, 500).to({
            rotation: 10.61
        }, 500);
        // broom animation
        tw.get(this.sbImg, {
            loop: true
        }).to({
            rotation: 5.55
        }, 500)
            .to({
            rotation: 1.69
        }, 500);
    };
    return StartScene;
}(eui.Component));
__reflect(StartScene.prototype, "StartScene", ["eui.UIComponent", "egret.DisplayObject"]);
