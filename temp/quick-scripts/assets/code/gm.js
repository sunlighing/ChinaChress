(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/gm.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'de42fxzGkpDlrrP/HcUqiJu', 'gm', __filename);
// code/gm.ts

Object.defineProperty(exports, "__esModule", { value: true });
var defineGame_1 = require("./lib/defineGame");
var queque_1 = require("./lib/queque");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gm = /** @class */ (function (_super) {
    __extends(gm, _super);
    function gm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flagStatus = defineGame_1.warStatus.quilce; //初始化
        return _this;
        // update (dt) {}
    }
    gm_1 = gm;
    // LIFE-CYCLE CALLBACKS:
    gm.lightLoad = function () {
        var temp = gm_1.queque.chressloading();
        //[[1,1],[1,1],[1,1]]
        for (var k = 0; k < temp.length; k++) {
            gm_1.qipanPre[temp[k][0]][temp[k][1]].getChildByName("lo").active = true;
        }
    };
    gm.darkLoad = function () {
        var temp = gm_1.queque.chressloading();
        //[[1,1],[1,1],[1,1]]
        for (var k = 0; k < temp.length; k++) {
            gm_1.qipanPre[temp[k][0]][temp[k][1]].getChildByName("lo").active = false;
        }
    };
    gm.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        this.init();
    };
    gm.prototype.start = function () {
    };
    gm.prototype.init = function () {
    };
    gm.openMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    var gm_1;
    gm.qipan = []; //棋盘矩阵 返回服务器，这个和棋盘位置保持一致
    gm.qipanNode = []; //现在棋盘的上的棋子的位置 和棋盘矩阵保持一致
    gm.queque = new queque_1.default(); //手里的棋的队列 
    gm.qipanPre = []; //棋盘位置矩阵 方便显示位置
    gm.prePool = []; //象棋总共的棋子预制体
    gm = gm_1 = __decorate([
        ccclass
    ], gm);
    return gm;
}(cc.Component));
exports.default = gm;

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
        //# sourceMappingURL=gm.js.map
        