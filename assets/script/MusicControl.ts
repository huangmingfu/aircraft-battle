import { _decorator, AudioSource, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MusicOnControl')
export class MusicOnControl extends Component {
    toggleFlag: boolean = true//图片切换标志
    audio: AudioSource = null

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this)
        this.audio = this.getComponent(AudioSource)
    }

    update(deltaTime: number) {

    }
    touchStart() {
        if (this.toggleFlag) {
            resources.load("music-off/spriteFrame", SpriteFrame, (err, spriteFrame) => {
                this.node.getComponent(Sprite).spriteFrame = spriteFrame;
                this.audio.stop()
                this.toggleFlag = false
            });
        } else {
            resources.load("music-on/spriteFrame", SpriteFrame, (err, spriteFrame) => {
                this.node.getComponent(Sprite).spriteFrame = spriteFrame;
                this.audio.play()
                this.toggleFlag = true
            });
        }
    }
}


