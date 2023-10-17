import { _decorator, Component, instantiate, Node, Prefab, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AwardManager')
export class AwardManager extends Component {
    @property(Prefab)
    award:Prefab = null

    start() {
        //x是-209多，敌机的坐标是相当于父节点，是0,0
        this.schedule(() => {
            const awardNode = instantiate(this.award)
            awardNode.setPosition(v3(Math.random() * 389 - 180, Math.random() * 1080 + 800))
            //添加到节点中
            this.node.addChild(awardNode)
            // awardNode.setParent(this.node.parent)
        }, 2)
    }

    update(deltaTime: number) {
        
    }
}


