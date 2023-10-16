import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AwardManager')
export class AwardManager extends Component {
    @property(Prefab)
    award:Prefab = null

    start() {
        //获取父enemy空节点的坐标
        const { x, y } = this.node.getPosition()
        //x是-209多，敌机的坐标是相当于父节点，是0,0
        this.schedule(() => {
            const awardNode = instantiate(this.award)
            //设置敌机的出发坐标：x坐标随机数40-440(40（包含）到 440（不包含）)，y不变
            awardNode.setPosition(Math.random() * 400 + 40, y)
            //添加到canvas中
            this.node.addChild(awardNode)
            // awardNode.setParent(this.node.parent)
        }, 0.5)
    }

    update(deltaTime: number) {
        
    }
}


