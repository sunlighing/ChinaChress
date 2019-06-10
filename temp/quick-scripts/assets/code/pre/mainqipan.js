(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/pre/mainqipan.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd30e3vgyt1G5at6sd8Yd6VV', 'mainqipan', __filename);
// code/pre/mainqipan.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var defineGame_1 = require("../lib/defineGame");
var gm_1 = require("../gm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.position = null;
        // LIFE-CYCLE CALLBACKS:
        _this.General = null;
        _this.Guard = null;
        _this.Prime = null;
        _this.blackHorse = null;
        _this.blackCar = null;
        _this.cannon = null;
        _this.soldier = null;
        _this.command = null;
        _this.knight = null;
        _this.minister = null;
        _this.redHorse = null;
        _this.redCar = null;
        _this.gun = null;
        _this.troops = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.initPre();
        this.init();
        this.initQizi();
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initPre = function () {
        for (var i = 0; i < 27; i++) {
            gm_1.default.prePool.push(null);
        }
        gm_1.default.prePool[defineGame_1.chressCard.General] = this.General;
        gm_1.default.prePool[defineGame_1.chressCard.Guard] = this.Guard;
        gm_1.default.prePool[defineGame_1.chressCard.Prime] = this.Prime;
        gm_1.default.prePool[defineGame_1.chressCard.blackHorse] = this.blackHorse;
        gm_1.default.prePool[defineGame_1.chressCard.blackCar] = this.blackCar;
        gm_1.default.prePool[defineGame_1.chressCard.cannon] = this.cannon;
        gm_1.default.prePool[defineGame_1.chressCard.soldier] = this.soldier;
        gm_1.default.prePool[defineGame_1.chressCard.command] = this.command;
        gm_1.default.prePool[defineGame_1.chressCard.knight] = this.knight;
        gm_1.default.prePool[defineGame_1.chressCard.minister] = this.minister;
        gm_1.default.prePool[defineGame_1.chressCard.redHorse] = this.redHorse;
        gm_1.default.prePool[defineGame_1.chressCard.redCar] = this.redCar;
        gm_1.default.prePool[defineGame_1.chressCard.gun] = this.gun;
        gm_1.default.prePool[defineGame_1.chressCard.troops] = this.troops;
        cc.log(gm_1.default.prePool);
        //类似散列表，不用查找，直接取出即用
    };
    NewClass.prototype.init = function () {
        var x = 0;
        var y = 0;
        for (var i = 0; i < 10; i++) {
            var tempArray = [];
            var tempA = [];
            for (var j = 0; j < 9; j++) {
                //初始化坐标
                var pre = cc.instantiate(this.position);
                this.node.getChildByName("chressBord").addChild(pre, null, i.toString() + j.toString());
                pre.getComponent("possion").id = i.toString() + j.toString();
                pre.getComponent("possion").positionx = i;
                pre.getComponent("possion").positiony = j;
                pre.getChildByName("touch").active = false;
                pre.getChildByName("lo").active = false;
                pre.x = x;
                pre.y = y;
                tempA.push(pre);
                x = x + defineGame_1.chressWidth.chressWidth;
                tempArray.push(null);
                //初始化棋盘
            }
            gm_1.default.qipan.push(tempArray);
            gm_1.default.qipanNode.push(tempArray);
            gm_1.default.qipanPre.push(tempA);
            y = y + defineGame_1.chressWidth.chressHeight;
            x = 0;
        }
        cc.log(gm_1.default.qipan);
    };
    NewClass.prototype.initQizi = function () {
        gm_1.default.qipan[0][0] = defineGame_1.chressCard.blackCar; //车
        gm_1.default.qipan[0][1] = defineGame_1.chressCard.blackHorse;
        gm_1.default.qipan[0][2] = defineGame_1.chressCard.Prime;
        gm_1.default.qipan[0][3] = defineGame_1.chressCard.Guard;
        gm_1.default.qipan[0][4] = defineGame_1.chressCard.General; //将
        gm_1.default.qipan[0][5] = defineGame_1.chressCard.Guard;
        gm_1.default.qipan[0][6] = defineGame_1.chressCard.Prime;
        gm_1.default.qipan[0][7] = defineGame_1.chressCard.blackHorse;
        gm_1.default.qipan[0][8] = defineGame_1.chressCard.blackCar; //车
        gm_1.default.qipan[2][1] = defineGame_1.chressCard.cannon; //炮
        gm_1.default.qipan[2][7] = defineGame_1.chressCard.cannon; //炮
        gm_1.default.qipan[3][0] = defineGame_1.chressCard.soldier; //卒
        gm_1.default.qipan[3][2] = defineGame_1.chressCard.soldier; //卒
        gm_1.default.qipan[3][4] = defineGame_1.chressCard.soldier; //卒
        gm_1.default.qipan[3][6] = defineGame_1.chressCard.soldier; //卒
        gm_1.default.qipan[3][8] = defineGame_1.chressCard.soldier; //卒
        gm_1.default.qipan[9][0] = defineGame_1.chressCard.redCar; //车
        gm_1.default.qipan[9][1] = defineGame_1.chressCard.redHorse;
        gm_1.default.qipan[9][2] = defineGame_1.chressCard.minister;
        gm_1.default.qipan[9][3] = defineGame_1.chressCard.knight;
        gm_1.default.qipan[9][4] = defineGame_1.chressCard.command; //将
        gm_1.default.qipan[9][5] = defineGame_1.chressCard.knight;
        gm_1.default.qipan[9][6] = defineGame_1.chressCard.minister;
        gm_1.default.qipan[9][7] = defineGame_1.chressCard.redHorse;
        gm_1.default.qipan[9][8] = defineGame_1.chressCard.redCar; //车
        gm_1.default.qipan[7][1] = defineGame_1.chressCard.gun; //炮
        gm_1.default.qipan[7][7] = defineGame_1.chressCard.gun; //炮
        gm_1.default.qipan[6][0] = defineGame_1.chressCard.troops; //卒
        gm_1.default.qipan[6][2] = defineGame_1.chressCard.troops; //卒
        gm_1.default.qipan[6][4] = defineGame_1.chressCard.troops; //卒
        gm_1.default.qipan[6][6] = defineGame_1.chressCard.troops; //卒
        gm_1.default.qipan[6][8] = defineGame_1.chressCard.troops; //卒
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 9; j++) {
                {
                    if (gm_1.default.qipan[i][j] != null) {
                        var pre = cc.instantiate(gm_1.default.prePool[gm_1.default.qipan[i][j]]);
                        this.node.getChildByName("chressBord").getChildByName(i.toString() + j.toString())
                            .getComponent("possion").tag = gm_1.default.qipan[i][j];
                        gm_1.default.qipanNode[i][j] = pre;
                        this.node.getChildByName("chressBord").addChild(pre);
                        pre.getComponent(pre.name).positionx = i;
                        pre.getComponent(pre.name).positiony = j;
                        pre.x = this.node.getChildByName("chressBord").getChildByName(i.toString() + j.toString()).x;
                        pre.y = this.node.getChildByName("chressBord").getChildByName(i.toString() + j.toString()).y;
                    }
                }
            }
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "position", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "General", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Guard", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Prime", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "blackHorse", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "blackCar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "cannon", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "soldier", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "command", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "knight", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "minister", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "redHorse", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "redCar", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "gun", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "troops", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=mainqipan.js.map
        