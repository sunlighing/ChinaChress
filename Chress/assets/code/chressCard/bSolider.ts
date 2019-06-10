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

@ccclass
export default class bsolder extends Chress {

    private id: number = chressCard.soldier      //卒 黑

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    getload():number[][]{
        if (this.positionx <=4){   //前进一格
            return [[this.positionx+1,this.positiony]]
        }else if (this.positionx <8){ //分情况 j不能出墙
            
        }else if(this.positionx ==8){
        
        }
    }

    start () {

    }

    // update (dt) {}
}
