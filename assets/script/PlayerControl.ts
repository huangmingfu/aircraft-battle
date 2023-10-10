import { _decorator, Component, EventTouch, instantiate, Node, Prefab, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    @property(Prefab)
    bullet: Prefab = null//接收子弹对象

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
            //获取当前触点在 UI 窗口内相对于左下角的坐标位置，对象包含 x 和 y 属性。用getLocation会大一倍距离
            const { x, y } = e.getUILocation()
            //设置节点在世界坐标系中的位置
            this.node.setWorldPosition(v3(x, y))
        })

        //设置定时器循环发射子弹
        this.schedule(() => {
            //获取飞机的坐标
            const { x, y } = this.node.getPosition()
            //实例化子弹节点
            const bulletNode = instantiate(this.bullet)
            //通过节点下的方法setParent设置子弹的父节点为当前飞机的父节点，也就是和飞机同级。
            bulletNode.setParent(this.node.parent)//更改子弹节点的父节点
            //子弹的坐标：飞机的y坐标加上70像素的距离
            bulletNode.setPosition(x, y + 70)
            //然后，后面执行BulletControl即子弹的start和update
        }, 0.2)
    }

    update(deltaTime: number) {

    }
}


