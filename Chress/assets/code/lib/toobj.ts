const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class TdObj extends cc.Component {
    init() {
        this.initComponent()
        this.initOther()
        this.initComponentEvent()
        this.initEtEvent()
        this.initPbEvent()
    }
    initComponent() {
        cc.error("initComponent base", this.node.name)
    }
    initOther() {
        cc.error("initOther base", this.node.name)
    }
    initComponentEvent() {
        cc.error("initComponentEvent base", this.node.name)
    }
    initEtEvent() {
        cc.error("initEtsEvent base", this.node.name)
    }
    initPbEvent() {
        cc.error("initPbEvent base", this.node.name)
    }
}
