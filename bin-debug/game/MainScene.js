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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // setting scroller
        this.scroller.viewport = this.viewportGroup;
        this.scroller.bounces = true;
        this.scroller.horizontalScrollBar.autoVisibility = false;
        this.scroller.viewport.scrollH = 720;
        // control arrow
        this.directionGroup.touchEnabled = true;
        this.directionGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.arrowEvent, this);
        // remove tips
        setTimeout(function () {
            _this.viewportGroup.removeChild(_this.tip);
        }, 3000);
        this.startAnimation();
    };
    // arrow event
    MainScene.prototype.arrowEvent = function (evt) {
        var distance = 100;
        var name = evt.target.source;
        var currDistance = this.scroller.viewport.scrollH;
        if (name === 'rr') {
            if (currDistance + distance >= 1460) {
                this.scroller.viewport.scrollH = 1460;
                return;
            }
            this.scroller.viewport.scrollH += distance;
        }
        else if (name === 'lr') {
            if (currDistance - distance <= 0) {
                this.scroller.viewport.scrollH = 0;
                return;
            }
            this.scroller.viewport.scrollH -= distance;
        }
    };
    // initialize animation
    MainScene.prototype.startAnimation = function () {
        var tw = egret.Tween;
        // man arm animation
        tw.get(this.mHand, {
            loop: true
        }).to({
            rotation: 16
        }, 800)
            .to({
            rotation: 15
        }, 200)
            .wait(1000)
            .to({
            rotation: 0
        }, 1000)
            .wait(500);
        // man calf animation
        tw.get(this.mCalf, {
            loop: true
        }).to({
            x: 60.31,
            y: 170.16,
            rotation: 18
        }, 800)
            .to({
            rotation: 16
        }, 200)
            .wait(1000)
            .to({
            x: 56.83,
            y: 180.73,
            rotation: 2
        }, 1000)
            .wait(500);
        // man smog animation
        tw.get(this.smokeGroup, {
            loop: true
        }).to({
            x: 56,
            y: 0,
            alpha: 1
        }, 1000)
            .wait(300)
            .to({
            alpha: 0
        }, 1000)
            .to({
            x: 54.33,
            y: 8.98
        });
        // girl arm animation
        tw.get(this.gHand, {
            loop: true
        }).to({
            rotation: -3
        }, 800)
            .to({
            rotation: 5.21
        }, 800);
        // girl leg animation
        tw.get(this.gLeg, {
            loop: true
        }).to({
            rotation: -10
        }, 800)
            .to({
            rotation: 0
        }, 800);
        // arrow animation
        tw.get(this.lr, {
            loop: true
        }).to({
            x: 10
        }, 800)
            .to({
            x: 0
        }, 800);
        tw.get(this.rr, {
            loop: true
        }).to({
            x: 586
        }, 800)
            .to({
            x: 596
        }, 800);
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
