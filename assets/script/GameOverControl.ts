import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOverControl')
export class GameOverControl extends Component {
    private active: boolean = false
    start() {
        //隐藏节点
        this.node.active = this.active
    }

    update(deltaTime: number) {

    }

    changeActive() {
        this.node.active = !this.active
    }
}


