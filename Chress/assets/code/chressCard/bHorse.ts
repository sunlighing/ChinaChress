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

import {chressCard} from '../lib/defineGame';
import Chress from '../lib/CardChress'


import gm from "../gm"


@ccclass
export default class bHorse extends Chress {

    private id: number = chressCard.blackHorse;  //黑 马 

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    /**
     * 马共有八个位置，但是邻近有四个方向蹩马脚，只计算四个方向即可
     */
    getload():number[][]{
        let temp = []
        cc.log(gm.qipanNode)
        if (this.positionx-1 >=0  ){
            if(gm.qipanNode[this.positionx-1][this.positiony] ==null){
                if(this.positionx -2 >=0 && this.positiony+1 >)
            }
        }
        if (this.positionx+1 >=9  ){
            if(gm.qipanNode[this.positionx+1][this.positiony] ==null){
                
            }
        }
        if (this.positiony +1 >=8  ){
            if(gm.qipanNode[this.positionx][this.positiony+1] ==null){
                
            }
        }
        if (this.positiony -1 >=0  ){
            if(gm.qipanNode[this.positionx][this.positiony-1] ==null){
                
            }
        }

        
        
        return temp
    }
    // update (dt) {}
}
