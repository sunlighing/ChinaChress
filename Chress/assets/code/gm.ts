// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import menuMgr from "./lib/menuMgr"
import {warStatus} from "./lib/defineGame"
import quequ from './lib/queque';


const {ccclass, property} = cc._decorator;

@ccclass
export default class gm extends cc.Component {

    menu:menuMgr
    
    flagStatus:string = warStatus.quilce  //初始化

    public static qipan: number[][] = []   //棋盘矩阵 返回服务器，这个和棋盘位置保持一致
    


    public static qipanNode: cc.Node[][] = [];  //现在棋盘的上的棋子的位置 和棋盘矩阵保持一致
    
    public static queque:quequ = new quequ();   //手里的棋的队列 
    
    public static qipanPre: cc.Node[][] = []; //棋盘位置pre矩阵 方便显示位置

    public static prePool:Array<cc.Prefab> = []; //象棋总共的棋子预制体
    // LIFE-CYCLE CALLBACKS:

    public static lightLoad(){ //亮出路径
        let temp = gm.queque.chressloading()
        //[[1,1],[1,1],[1,1]]
        if (temp.length > 0){
            for (let k=0; k<temp.length;k++){
            
                gm.qipanPre[temp[k][0]][temp[k][1]].getChildByName("lo").active=true
            }
        }
       

    }

    public static darkLoad(){ //灭灯
        let temp = gm.queque.chressloading()
        if (temp.length > 0){

        //[[1,1],[1,1],[1,1]]
        for (let k=0; k<temp.length;k++){
            gm.qipanPre[temp[k][0]][temp[k][1]].getChildByName("lo").active=false
        }
        }
    }

    onLoad () {
        cc.game.addPersistRootNode(this.node)
        this.init()
    }
        
    

    start () {
        
    }

    init(){
        
    }
    static async openMenu(){
        quequ.pop()
    }
    

    // update (dt) {}
}
