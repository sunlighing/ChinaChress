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
export default class NewClass extends cc.Component {

    id:-1;

    positionx :0;
    positiony :0;
    

    falg:boolean = null; //位置是红旗还是黑棋


    
    
    // LIFE-CYCLE CALLBACKS:
    
    //点击位置时情况： 1，位置上没有棋子，（1）gm.queque 队列里面也没有 棋子， chu


    onLoad (){ 
        
        this.node.on("click",function(){
            if(gm.qipanNode[this.positionx][this.positiony] != null){ //这个位置有棋子
                if (gm.queque.isNull() == 0){ //队列为空 亮出路径

                    this.node.getChildByName("touch").active = true
                    cc.log("亮出路径")
                    gm.queque.pushing(gm.qipanNode[this.positionx][this.positiony])
                    gm.lightLoad()
                    //棋子被推入队列

                }else{ //队列里不为空  检查在不在队列里面
                    if()
                    if(gm.queque.checkIsOk([this.positionx,this.positiony]) == true){
                            //可以被队列棋子吃了
                        
                    }else{ 
                        cc.log("棋子吃不到")
                    }
                }
            }else{ //这个位置没有棋子
               
                if (gm.queque.isNull() == 0){ //队列为空 ，棋盘上没有棋子，是真的不处理
                    cc.log("队列为空不处理")

                }else{ //队列里不为空 
                        
                    if(gm.queque.checkIsOk([this.positionx,this.positiony]) == true){
                            //在队列棋子路径上，可以队列棋子移动到此路径上 
                            cc.log("在路径上可以处理")
                    }else{ 
                            //不在路径上，移动个毛
                        cc.log("不在路径上不处理")
                    }

                }

            }
        }.bind(this))
    }

    start () {

    }

    // update (dt) {}
}
