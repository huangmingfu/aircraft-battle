import { _decorator, Component, EventTouch, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ReStartControl')
export class ReStartControl extends Component {
    onLoad() {
        console.log('Restart onLoad')
        this.node.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
            console.log('重新开始')
        }, this)
    }

    update(deltaTime: number) {

    }
}


