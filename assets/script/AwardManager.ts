import { _decorator, Component, instantiate, Node, Prefab, v3 } from 'cc';
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
            awardNode.setPosition(v3(Math.random() * 389 - 180, Math.random() * 1800 + 1500))
            //添加到canvas中
            this.node.addChild(awardNode)
            // awardNode.setParent(this.node.parent)
        }, 2)
    }

    update(deltaTime: number) {
        
    }
}


