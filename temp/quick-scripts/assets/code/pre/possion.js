(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/pre/possion.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '584ee0x0UdABrAymZQWCsue', 'possion', __filename);
// code/pre/possion.ts

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
var gm_1 = require("../gm");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.falg = null; //位置是红旗还是黑棋
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    //点击位置时情况： 1，位置上没有棋子，（1）gm.queque 队列里面也没有 棋子， chu
    NewClass.prototype.onLoad = function () {
        this.node.on("click", function () {
            if (gm_1.default.qipanNode[this.positionx][this.positiony] != null) { //这个位置有棋子
                if (gm_1.default.queque.isNull() == 0) { //队列为空 亮出路径
                    this.node.getChildByName("touch").active = true;
                    cc.log("亮出路径");
                    gm_1.default.queque.pushing(gm_1.default.qipanNode[this.positionx][this.positiony]);
                    gm_1.default.lightLoad();
                    //棋子被推入队列
                }
                else { //队列里不为空  检查在不在队列里面
                    if ()
                        if (gm_1.default.queque.checkIsOk([this.positionx, this.positiony]) == true) {
                            //可以被队列棋子吃了
                        }
                        else {
                            cc.log("棋子吃不到");
                        }
                }
            }
            else { //这个位置没有棋子
                if (gm_1.default.queque.isNull() == 0) { //队列为空 ，棋盘上没有棋子，是真的不处理
                    cc.log("队列为空不处理");
                }
                else { //队列里不为空 
                    if (gm_1.default.queque.checkIsOk([this.positionx, this.positiony]) == true) {
                        //在队列棋子路径上，可以队列棋子移动到此路径上 
                        cc.log("在路径上可以处理");
                    }
                    else {
                        //不在路径上，移动个毛
                        cc.log("不在路径上不处理");
                    }
                }
            }
        }.bind(this));
    };
    NewClass.prototype.start = function () {
    };
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
        //# sourceMappingURL=possion.js.map
        