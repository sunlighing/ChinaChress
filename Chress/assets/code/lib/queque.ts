// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import gm from "../gm"
const {ccclass, property} = cc._decorator;

@ccclass
export default class quequ extends cc.Component {
    private static queque:Array<cc.Node> = []; //只存放一个棋子
    private static chressload :Array<Array<number>> = []; //队列棋子里的路径


    public pushing(node:cc.Node){  //队列例
        if (quequ.queque.length ==0 ){
            quequ.queque.push(node)
            quequ.chressload=node.getComponent(node.name).getload()
           
            cc.log("棋子路径",quequ.chressload)
        }else{
            cc.log("这个队列棋子要退出去了")
            quequ.pop() 
        }
    }
    
    public static pop(){
        quequ.queque.pop()
        quequ.chressload=[] 
    }
    
    public isNull(){
        return quequ.queque.length
    }
    
    public checkIsOk(temp:Array<number>):boolean{
        cc.log('检查路径是否正常',quequ.chressload)
        for(let i in quequ.chressload){
            if(quequ.chressload[i][0] === temp[0] && quequ.chressload[i][1]== temp[1]){
                return true
            }
        }
        return false 
    }
    //gm.qipanNode的位置进行移动 
    //gm.qipan进行移动，
    //棋子本身的x,y,位置的移动
    public moveNode(temp:Array<number>){ //队列棋子进行移动到目标
        
        let NowPossionx = quequ.queque[0].getComponent(quequ.queque[0].name).positionx;
        let  NowPossiony = quequ.queque[0].getComponent(quequ.queque[0].name).positiony
      
        cc.log(NowPossionx,NowPossiony)
        cc.log(temp[0],temp[1])

        gm.qipan[NowPossionx][NowPossiony] = 0 ;
        gm.qipanNode[NowPossionx][NowPossiony] = null;
        
        gm.qipanPre[NowPossionx][NowPossiony].getChildByName("touch").active = false

        gm.qipan[temp[0]][temp[1]] = quequ.queque[0].getComponent(quequ.queque[0].name).id;
        gm.qipanNode[temp[0]][temp[1]] = quequ.queque[0]
       
        quequ.queque[0].getComponent(quequ.queque[0].name).positionx = temp[0];
        quequ.queque[0].getComponent(quequ.queque[0].name).positiony = temp[1];
        
        gm.qipanPre[temp[0]][temp[1]].getChildByName("lo").active = false

        //quequ.queque[0].x = gm.qipanPre[temp[0]][temp[1]].x
        //quequ.queque[0].y = gm.qipanPre[temp[0]][temp[1]].y
        quequ.queque[0].runAction(cc.moveTo(0.2,gm.qipanPre[temp[0]][temp[1]].x,
            gm.qipanPre[temp[0]][temp[1]].y)) 
        quequ.pop()

        cc.log(gm.qipanNode)
        cc.log(gm.qipan)
    }
    
    public EatChressNode(){ //棋子被吃

    }

    public chressloading(){
        return quequ.chressload
    }
    public 
    //public isSame
}
