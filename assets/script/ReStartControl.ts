import { _decorator, Component, director, EventTouch, find, game, Node } from 'cc';
import { GameOverControl } from './GameOverControl';
const { ccclass, property } = _decorator;

@ccclass('ReStartControl')
export class ReStartControl extends Component {
    private gameoverClass = null//拿到gameover的class

    onLoad() {
        //拿到gameover的class
        this.gameoverClass = find("Canvas/gameover").getComponent(GameOverControl)

        this.node.on(Node.EventType.TOUCH_START, (e: EventTouch) => {
            // this.gameoverClass.changeActive()//不用更改这个也行
            game.resume()//先恢复游戏正常
            // game.restart()//再重新开始游戏
            director.loadScene('scene');//方法二
        }, this)
    }

    update(deltaTime: number) {

    }
}


