import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletControl')
export class BulletControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        const { x, y } = this.node.getPosition()
        // console.log('子弹移动距离', 600 * deltaTime)//10像素左右，deltaTime=0.016800000190734864
        const moveY = y + 600 * deltaTime
        //子弹循环往上发射
        this.node.setPosition(x, moveY)
        // 判断超出屏幕销毁子弹
        if (moveY > 430) {
            //在定时器中会不断地创建子弹，超出屏幕之后依然存在，这里需要简单的优化一下，子弹超出屏幕范围就进行销毁。
            this.node.destroy();
        }
    }
}


