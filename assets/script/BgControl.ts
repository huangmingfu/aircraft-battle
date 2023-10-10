import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BgControl')
export class BgControl extends Component {
    start() {
        
    }
    // 生命周期每帧调用函数
    update(deltaTime: number) {
         // 使用this.node.children获取当前节点下的子节点
        for (const item of this.node.children) {
             // 使用getPosition获取坐标信息,此方法用于设置节点在本地坐标系（相对于父节点）中的位置。
             // 本地坐标系是相对于父节点的坐标系，它会随父节点的改变而改变。
            const {x,y} = item.getPosition()
            // 计算移动坐标，每次向下移动100像素，即100 * deltaTime
            const moveY = y - 100 * deltaTime
            //设置坐标，x轴不变
            item.setPosition(x,moveY)
             // 如果当前背景超出屏幕 重新回到顶部
            if(moveY < -850){
                item.setPosition(x,852)
            }
        }
    }
}


