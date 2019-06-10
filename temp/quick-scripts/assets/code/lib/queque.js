(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/lib/queque.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '17c43jApnlKTKC6DxJGZudl', 'queque', __filename);
// code/lib/queque.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var quequ = /** @class */ (function (_super) {
    __extends(quequ, _super);
    function quequ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    quequ_1 = quequ;
    quequ.prototype.pushing = function (node) {
        if (quequ_1.queque.length == 0) {
            quequ_1.queque.push(node);
            quequ_1.chressload = node.getComponent(node.name).getload();
            cc.log(quequ_1.chressload);
        }
        else {
            cc.log("这个队列棋子要退出去了");
            quequ_1.queque.pop();
            quequ_1.chressload = [];
        }
    };
    quequ.prototype.pop = function () {
        quequ_1.queque.pop();
    };
    quequ.prototype.isNull = function () {
        return quequ_1.queque.length;
    };
    quequ.prototype.checkIsOk = function (temp) {
        return false;
    };
    quequ.prototype.chressloading = function () {
        return quequ_1.chressload;
    };
    var quequ_1;
    quequ.queque = []; //只存放一个棋子
    quequ.chressload = []; //队列棋子里的路径
    quequ = quequ_1 = __decorate([
        ccclass
    ], quequ);
    return quequ;
}(cc.Component));
exports.default = quequ;

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
        //# sourceMappingURL=queque.js.map
        