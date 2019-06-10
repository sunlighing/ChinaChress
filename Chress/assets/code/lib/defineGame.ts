
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export enum chressWidth {
    chressWidth        = 110,                // 子游戏登录
    chressHeight       = 110 
}

export enum chressCard{
    General=11,         //将 黑
    Guard =  12,        //士 黑
    Prime = 13,         //象 黑
    blackHorse = 14,    //马 黑
    blackCar = 15,      //车 黑
    cannon = 16,         //炮  黑
    soldier = 17,       //卒 黑

    command = 21,       //帅 红
    knight = 22,         //士 红
    minister  = 23,    //相 红
    redHorse = 24,      //马 红
    redCar = 25,          //车 红
    gun = 26,               //炮 红
    troops =27,          //兵 红
    
    none = 0              //无
}

export enum warStatus{
    redRuning = "redRuning", //红
    balckRuning = "blackRuning", //黑
    quilce     = "quilce",   //休战
}