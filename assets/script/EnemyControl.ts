import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyControl')
export class EnemyControl extends Component {
    start() {

    }

    update(deltaTime: number) {
        const { x, y } = this.node.getPosition()
        console.log(x, y)
        const moveY = y - 400 * deltaTime
        this.node.setPosition(x, moveY)
        if (moveY < -852) {
            this.node.destroy()
        }
        console.log('敌机')
    }
}


