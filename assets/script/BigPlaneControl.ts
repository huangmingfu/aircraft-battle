import { _decorator, Collider2D, Component, Contact2DType, find, Node, resources, Sprite, SpriteFrame } from 'cc';
import { ScoreControl } from './ScoreControl';
const { ccclass, property } = _decorator;

@ccclass('BigPlaneControl')
export class BigPlaneControl extends Component {
    private isDead: boolean = false//判断是否销毁了
    private airplaneDeadImages = []//存放本地图片资源
    private attackNum: number = 0 //子弹击中次数
    private scoreClass = null//分数的类

    start() {
        //拿到分数的类
        this.scoreClass = find("Canvas/score").getComponent(ScoreControl)
        this.loadImages()
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update(deltaTime: number) {
        if (this.isDead) return//这里如果销毁了要停止不然会报错，并且暂停敌机移动
        const { x, y } = this.node.getPosition()
        //敌机移动速度
        const moveY = y - 400 * deltaTime
        this.node.setPosition(x, moveY)
        //如果超出屏幕就删除，优化性能
        if (moveY < -852) {
            this.node.destroy()
        }
    }

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact(self: Collider2D, other: Collider2D) {
        //子弹与敌机碰撞，子弹1，敌人大舰3
        if (self.tag === 3 && other.tag === 1) {
            //玩家击中三次才销毁
            if (this.attackNum >= 3) {
                this.scoreClass.addScore(3)//分数+3
                this.die()
            } else {
                this.attackNum++
            }
        }
    }

    //加载图片
    loadImages() {
        resources.loadDir("bigplane-death", SpriteFrame, (err, spriteFrames) => {
            this.airplaneDeadImages = spriteFrames
        })
    }

    //播放死亡动画
    playDead() {
        const spriteNode = this.node.getComponent(Sprite)
        if (spriteNode) {
            for (let i = 0; i < this.airplaneDeadImages.length; i++) {
                //加个定时器，动画过渡效果，不如一下子就切换到了最后一张爆炸的图片
                setTimeout(() => {
                    //判断节点是否被销毁
                    if (this.node?.isValid) {
                        spriteNode.spriteFrame = this.airplaneDeadImages[i]
                    }
                }, i * 80);//i * 80 逐个切换图片
            }
        }
    }

    die() {
        if (this.isDead) return;
        this.isDead = true
        this.playDead()
        // 延迟销毁主要原因是因为:
        // 1如果在销毁对象之前还有其他操作需要处理，立即销毁对象可能会导致这些操作无法正常执行。
        // 2如果销毁对象时，其他对象还在处理与该对象相关的操作，立即销毁可能会导致错误或异常。
        // 3后面敌机需要添加死亡动画
        setTimeout(() => {
            this.node?.destroy()//可能会报error:不能读取destroy
        }, this.airplaneDeadImages.length * 80);
    }
}


