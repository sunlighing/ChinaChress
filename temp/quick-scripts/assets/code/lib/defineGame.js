(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/lib/defineGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f4e15mU2qpGhLrJ/haH5N+X', 'defineGame', __filename);
// code/lib/defineGame.ts

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
var chressWidth;
(function (chressWidth) {
    chressWidth[chressWidth["chressWidth"] = 110] = "chressWidth";
    chressWidth[chressWidth["chressHeight"] = 110] = "chressHeight";
})(chressWidth = exports.chressWidth || (exports.chressWidth = {}));
var chressCard;
(function (chressCard) {
    chressCard[chressCard["General"] = 11] = "General";
    chressCard[chressCard["Guard"] = 12] = "Guard";
    chressCard[chressCard["Prime"] = 13] = "Prime";
    chressCard[chressCard["blackHorse"] = 14] = "blackHorse";
    chressCard[chressCard["blackCar"] = 15] = "blackCar";
    chressCard[chressCard["cannon"] = 16] = "cannon";
    chressCard[chressCard["soldier"] = 17] = "soldier";
    chressCard[chressCard["command"] = 21] = "command";
    chressCard[chressCard["knight"] = 22] = "knight";
    chressCard[chressCard["minister"] = 23] = "minister";
    chressCard[chressCard["redHorse"] = 24] = "redHorse";
    chressCard[chressCard["redCar"] = 25] = "redCar";
    chressCard[chressCard["gun"] = 26] = "gun";
    chressCard[chressCard["troops"] = 27] = "troops";
    chressCard[chressCard["none"] = 0] = "none"; //无
})(chressCard = exports.chressCard || (exports.chressCard = {}));
var warStatus;
(function (warStatus) {
    warStatus["redRuning"] = "redRuning";
    warStatus["balckRuning"] = "blackRuning";
    warStatus["quilce"] = "quilce";
})(warStatus = exports.warStatus || (exports.warStatus = {}));

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
        //# sourceMappingURL=defineGame.js.map
        