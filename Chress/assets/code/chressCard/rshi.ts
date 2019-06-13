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
export default class rshi extends Chress {

    private id: number = chressCard.knight;  //士 红 

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    getload():number[][]{
        let temp = []
        
        if(this.positionx == 8 && this.positiony == 4){
            temp.push([9,5]);
            temp.push([7,5]);
            temp.push([9,3]);
            temp.push([7,3]);
        }
        if(this.positionx == 9 && this.positiony == 5){
            temp.push([8,4])
        }
        if(this.positionx == 7 && this.positiony == 5){
            temp.push([8,4])
        }
        if(this.positionx == 9 && this.positiony == 3){
            temp.push([8,4])
        }
        if(this.positionx == 7 && this.positiony == 3){
            temp.push([8,4])
        }
        return temp
    }

    start () {
        
    }

    // update (dt) {}
}
