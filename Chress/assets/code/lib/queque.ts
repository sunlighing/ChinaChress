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

@ccclass
export default class quequ extends cc.Component {
    private static queque:Array<cc.Node> = []; //只存放一个棋子
    private static chressload :Array<Array<number>> = []; //队列棋子里的路径


    public pushing(node:cc.Node){  //队列例
        if (quequ.queque.length ==0 ){
            quequ.queque.push(node)
            quequ.chressload=node.getComponent(node.name).getload()
           
            cc.log(quequ.chressload)
        }else{
            cc.log("这个队列棋子要退出去了")
            quequ.queque.pop()
            quequ.chressload=[] 
        }
    }
    
    public pop(){
        quequ.queque.pop()
    }
    
    public isNull(){
        return quequ.queque.length
    }
    
    public checkIsOk(temp:Array<number>):boolean{
        return false 
    }

    public chressloading(){
        return quequ.chressload
    }
    public isSame
}
