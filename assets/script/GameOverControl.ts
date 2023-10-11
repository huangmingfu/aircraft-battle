import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOverControl')
export class GameOverControl extends Component {
    start() {
        //隐藏节点
        // this.node.active = false
    }

    update(deltaTime: number) {

    }

    show() {
        this.node.active = true
    }
}


