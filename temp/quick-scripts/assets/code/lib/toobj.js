(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/lib/toobj.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dcdf9/FWjRLLLn8IUhj+XMA', 'toobj', __filename);
// lib/toobj.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TdObj = /** @class */ (function (_super) {
    __extends(TdObj, _super);
    function TdObj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TdObj.prototype.init = function () {
        this.initComponent();
        this.initOther();
        this.initComponentEvent();
        this.initEtEvent();
        this.initPbEvent();
    };
    TdObj.prototype.initComponent = function () {
        cc.error("initComponent base", this.node.name);
    };
    TdObj.prototype.initOther = function () {
        cc.error("initOther base", this.node.name);
    };
    TdObj.prototype.initComponentEvent = function () {
        cc.error("initComponentEvent base", this.node.name);
    };
    TdObj.prototype.initEtEvent = function () {
        cc.error("initEtsEvent base", this.node.name);
    };
    TdObj.prototype.initPbEvent = function () {
        cc.error("initPbEvent base", this.node.name);
    };
    TdObj = __decorate([
        ccclass
    ], TdObj);
    return TdObj;
}(cc.Component));
exports.default = TdObj;

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
        //# sourceMappingURL=toobj.js.map
        