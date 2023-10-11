import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreControl')
export class ScoreControl extends Component {
    private score: number = 0
    private label: any = null;

    start() {
        this.addScore()
    }

    update(deltaTime: number) {

    }

    addScore(num: number = 0) {
        this.score += num//接收传过来要增加的分数比例，大舰3分，普通飞机1分
        this.label = this.getComponent(Label)
        let text = '分数：' + this.score
        this.label.string = text
    }
}


