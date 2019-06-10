// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import { chressWidth, chressCard } from '../lib/defineGame';

import gm from '../gm'

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    
    @property(cc.Prefab)
    position:cc.Prefab = null
    // LIFE-CYCLE CALLBACKS:
    @property(cc.Prefab)
    General:cc.Prefab = null

    @property(cc.Prefab)
    Guard:cc.Prefab = null

    @property(cc.Prefab)
    Prime:cc.Prefab = null

    @property(cc.Prefab)
    blackHorse:cc.Prefab = null

    @property(cc.Prefab)
    blackCar:cc.Prefab = null

    @property(cc.Prefab)
    cannon:cc.Prefab = null

    @property(cc.Prefab)
    soldier:cc.Prefab = null

    @property(cc.Prefab)
    command:cc.Prefab = null

    @property(cc.Prefab)
    knight:cc.Prefab = null
    
    @property(cc.Prefab)
    minister:cc.Prefab = null
    
    @property(cc.Prefab)
    redHorse:cc.Prefab = null
    
    @property(cc.Prefab)
    redCar:cc.Prefab = null

    @property(cc.Prefab)
    gun:cc.Prefab = null
    
    @property(cc.Prefab)
    troops:cc.Prefab = null

    

    onLoad () {
        this.initPre()
        this.init()
        this.initQizi()
    }
    
    start () {

    }
    
    initPre(){
        for(let i = 0;i<27;i++){
            gm.prePool.push(null)
        }

        gm.prePool[chressCard.General] = this.General 
        gm.prePool[chressCard.Guard] = this.Guard 
        gm.prePool[chressCard.Prime] = this.Prime 
        gm.prePool[chressCard.blackHorse] = this.blackHorse 
        gm.prePool[chressCard.blackCar] = this.blackCar 
        gm.prePool[chressCard.cannon] = this.cannon 
        gm.prePool[chressCard.soldier] = this.soldier
        gm.prePool[chressCard.command] = this.command
        gm.prePool[chressCard.knight] = this.knight
        gm.prePool[chressCard.minister] = this.minister
        gm.prePool[chressCard.redHorse] = this.redHorse
        gm.prePool[chressCard.redCar] = this.redCar
        gm.prePool[chressCard.gun] = this.gun
        gm.prePool[chressCard.troops] = this.troops

        cc.log(gm.prePool)
        //类似散列表，不用查找，直接取出即用
    }

    init(){
        let x = 0 
        let y = 0 
        for(let i = 0;i<10;i++){      
            let tempArray = []
            let tempA = []
            for(let j =0; j<9;j++){
                //初始化坐标
                let pre = cc.instantiate(this.position)

                this.node.getChildByName("chressBord").addChild(pre,null,i.toString()+j.toString())
                
                pre.getComponent("possion").id = i.toString()+j.toString()
                pre.getComponent("possion").positionx = i 
                pre.getComponent("possion").positiony = j
               
                pre.getChildByName("touch").active = false
                pre.getChildByName("lo").active = false
                pre.x = x 
                pre.y = y 
                tempA.push(pre)

                x  =x + chressWidth.chressWidth
                tempArray.push(null)
                
                //初始化棋盘
            }
            gm.qipan.push(tempArray)
            gm.qipanNode.push(tempArray)
            gm.qipanPre.push(tempA)
            y = y + chressWidth.chressHeight
            x = 0
        }
        cc.log(gm.qipan)

    }
    initQizi(){
        gm.qipan[0][0] = chressCard.blackCar //车
        gm.qipan[0][1] = chressCard.blackHorse
        gm.qipan[0][2] = chressCard.Prime
        gm.qipan[0][3] = chressCard.Guard
        gm.qipan[0][4] =chressCard.General  //将
        gm.qipan[0][5] = chressCard.Guard
        gm.qipan[0][6] = chressCard.Prime
        gm.qipan[0][7] = chressCard.blackHorse
        gm.qipan[0][8] = chressCard.blackCar //车

        gm.qipan[2][1] =chressCard.cannon //炮
        gm.qipan[2][7] = chressCard.cannon //炮

        gm.qipan[3][0] = chressCard.soldier //卒
        gm.qipan[3][2] = chressCard.soldier //卒
        gm.qipan[3][4] = chressCard.soldier //卒
        gm.qipan[3][6] = chressCard.soldier //卒
        gm.qipan[3][8] = chressCard.soldier //卒
        
        gm.qipan[9][0] = chressCard.redCar //车
        gm.qipan[9][1] = chressCard.redHorse
        gm.qipan[9][2] = chressCard.minister
        gm.qipan[9][3] = chressCard.knight
        gm.qipan[9][4] = chressCard.command  //将
        gm.qipan[9][5] = chressCard.knight
        gm.qipan[9][6] = chressCard.minister
        gm.qipan[9][7] = chressCard.redHorse
        gm.qipan[9][8] = chressCard.redCar//车

        gm.qipan[7][1] =chressCard.gun //炮
        gm.qipan[7][7] = chressCard.gun //炮
        
        gm.qipan[6][0] =  chressCard.troops //卒
        gm.qipan[6][2] = chressCard.troops //卒
        gm.qipan[6][4] = chressCard.troops //卒
        gm.qipan[6][6] = chressCard.troops //卒
        gm.qipan[6][8] =  chressCard.troops //卒
        
        for(let i =0; i < 10; i++)
        {
            for(let j = 0;j<9;j++){
            {
                if (gm.qipan[i][j] != null){
                    let pre = cc.instantiate(gm.prePool[gm.qipan[i][j]]);
                    this.node.getChildByName("chressBord").getChildByName(i.toString()+j.toString())
                    .getComponent("possion").tag = gm.qipan[i][j];

                    gm.qipanNode[i][j] = pre 
                    
                    this.node.getChildByName("chressBord").addChild(pre)
                    
                    pre.getComponent(pre.name).positionx = i
                    pre.getComponent(pre.name).positiony = j 
                    pre.x = this.node.getChildByName("chressBord").getChildByName(i.toString()+j.toString()).x
                    pre.y = this.node.getChildByName("chressBord").getChildByName(i.toString()+j.toString()).y
                }
            }
        }

    }
    }
    
    
    // update (dt) {}
}
