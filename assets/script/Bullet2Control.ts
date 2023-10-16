import { _decorator, Collider2D, Component, Contact2DType, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletControl')
export class Bullet2Control extends Component {
    private isDead: boolean = false


    start() {
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        // if (this.isDead) return//这里如果销毁了要停止不然会报错

        // const { x, y } = this.node.getPosition()
        // // console.log('子弹移动距离', 600 * deltaTime)//10像素左右，deltaTime=0.016800000190734864
        // const moveY = y + 600 * deltaTime
        // //子弹循环往上发射
        // this.node.setPosition(x, moveY)
        // // 判断超出屏幕销毁子弹
        // if (moveY > 852) {
        //     //在定时器中会不断地创建子弹，超出屏幕之后依然存在，这里需要简单的优化一下，子弹超出屏幕范围就进行销毁。
        //     this.node.destroy();
        // }
    }

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact(self: Collider2D, other: Collider2D) {
        //子弹与敌机碰撞，子弹1，敌机2
        if (self.tag === 11 && (other.tag === 2 || other.tag === 3)) {
            console.log('打中')
            this.die()
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


