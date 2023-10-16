import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet2BoxControl')
export class Bullet2BoxControl extends Component {
    private isDead: boolean = false//判断是否销毁了

    start() {
        // this.node.active = false
    }

    update(deltaTime: number) {
        if (this.isDead) return//这里如果销毁了要停止不然会报错，并且暂停敌机移动
        const { x, y } = this.node.getPosition()
        console.log(x,y)
        //敌机移动速度
        const moveY = y + 600 * deltaTime
        this.node.setPosition(x, moveY)
        //如果超出屏幕就删除，优化性能
        if (moveY > 852) {
            this.node.destroy()
        }
    }
    die() {
        if (this.isDead) return;
        this.isDead = true
        // 延迟销毁主要原因是因为:
        // 1如果在销毁对象之前还有其他操作需要处理，立即销毁对象可能会导致这些操作无法正常执行。
        // 2如果销毁对象时，其他对象还在处理与该对象相关的操作，立即销毁可能会导致错误或异常。
        // 3后面敌机需要添加死亡动画
        setTimeout(() => {
            this.node?.destroy()//可能会报不能读取destroy
        }, 100);
    }
}


