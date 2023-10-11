import { _decorator, Component, director, EventTouch, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStart')
export class GameStart extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
            director.loadScene("scene");
        })
    }

    update(deltaTime: number) {

    }
}


