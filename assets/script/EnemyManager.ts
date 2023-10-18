import { _decorator, Collider2D, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {
    @property(Prefab)  enemy: Prefab = null//敌机对象
    @property(Prefab)  bigplane: Prefab = null //敌人大舰
    @property(Prefab)  enemy3: Prefab = null //超大舰

    start() {
        //获取父enemy空节点的坐标
        const { x, y } = this.node.getPosition()
        //x是-209多，敌机的坐标是相当于父节点，是0,0
        this.schedule(() => {
            const airplaneNode = instantiate(this.enemy)
            //设置敌机的出发坐标：x坐标随机数40-440(40（包含）到 440（不包含）)，y不变
            airplaneNode.setPosition(Math.random() * 400 + 40, y)
            //添加到canvas中
            this.node.addChild(airplaneNode)
        }, 0.5)

        //敌人大舰
        this.schedule(() => {
            const bigplaneNode = instantiate(this.bigplane)
            bigplaneNode.setPosition(Math.random() * 418 - 209, y)
            bigplaneNode.setParent(this.node.parent)//addChild添加不进去了
        }, 1)

        //超大舰
        this.schedule(() => {
            const enemy3Node = instantiate(this.enemy3)
            enemy3Node.setPosition(Math.random() * 418 - 209, y)
            enemy3Node.setParent(this.node.parent)//addChild添加不进去了
        }, 1)
    }

    update(deltaTime: number) {

    }
}


