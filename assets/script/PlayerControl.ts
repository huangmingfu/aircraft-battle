import { _decorator, Collider2D, Component, Contact2DType, EventTouch, find, game, instantiate, Node, Prefab, resources, Sprite, SpriteFrame, v3 } from 'cc';
import { GameOverControl } from './GameOverControl';
const { ccclass, property } = _decorator;

@ccclass('PlayerControl')
export class PlayerControl extends Component {
    @property(Prefab)
    private bullet: Prefab = null//接收子弹对象
    @property(Prefab)
    private bullet2: Prefab = null//接收子弹2对象
    private gameoverClass = null//拿到gameover的class
    airplaneDeadImages = []//毁坏图片资源
    @property(Prefab)
    award:Prefab = null
    hasAward:boolean = false
    bulletTime = null
    bullet2Time = null
    start() {
        //加载图片
        this.loadImages()
        //拿到gameover的class
        this.gameoverClass = find("Canvas/ContentWidget/gameover").getComponent(GameOverControl)
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        //触摸移动事件
        this.node.on(Node.EventType.TOUCH_MOVE, this.move, this)//最后要加this不然报错

        //设置定时器循环发射子弹
        this.bulletTime = this.schedule(() => {
            if (this.hasAward) {
                // 取消这个计时器
                this.unschedule(this.bulletTime);
            }
            //获取飞机的坐标
            const { x, y } = this.node.getPosition()
            //实例化子弹节点
            const bulletNode = instantiate(this.bullet)
            //通过节点下的方法setParent设置子弹的父节点为当前飞机的父节点，也就是和飞机同级。
            bulletNode.setParent(this.node.parent)//更改子弹节点的父节点
            //子弹的坐标：飞机的y坐标加上70像素的距离
            bulletNode.setPosition(x, y + 70)
            //然后，后面执行BulletControl即子弹的start和update
        }, 0.3)
    }

    //触摸移动飞机
    move(e: EventTouch) {
        //获取当前触点在 UI 窗口内相对于左下角的坐标位置，对象包含 x 和 y 属性。用getLocation会大一倍距离
        const { x, y } = e.getUILocation()
        //设置节点在世界坐标系中的位置
        this.node.setWorldPosition(v3(x, y))
    }
    update(deltaTime: number) {

    }

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact(self: Collider2D, other: Collider2D) {
        //玩家与敌机碰撞
        if (self.tag === 0 && (other.tag === 2 || other.tag === 3)) {
            this.playDead()//播放死亡动画
            this.getComponent(Collider2D).off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);//卸载碰撞事件
            this.node.off(Node.EventType.TOUCH_MOVE, this.move, this)//卸载移动事件绑定
            this.gameoverClass.changeActive()//切换暂停的背景图
            setTimeout(() => {
                game.pause()//暂停游戏
            }, 1000)
        }
        //玩家捡到空投
        if (self.tag === 0 && other.tag === 10) {
            this.hasAward = true
            this.toggleBullet()
            this.debounce(()=>{this.hasAward = false},2000)
        }
    }
    //加载图片
    loadImages() {
        resources.loadDir("player-death", SpriteFrame, (err, spriteFrames) => {
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
    //空投切换子弹
    toggleBullet(){
        //设置定时器循环发射子弹
        this.bullet2Time = this.schedule(() => {
            if (!this.hasAward) {
                // 取消这个计时器
                this.unschedule(this.bullet2Time);
            }
            //获取飞机的坐标
            const { x, y } = this.node.getPosition()
            //实例化子弹节点
            const bulletNode = instantiate(this.bullet2)
            //通过节点下的方法setParent设置子弹的父节点为当前飞机的父节点，也就是和飞机同级。
            bulletNode.setParent(this.node.parent)//更改子弹节点的父节点
            //子弹的坐标：飞机的y坐标加上70像素的距离
            bulletNode.setPosition(x, y + 70)
            //然后，后面执行BulletControl即子弹的start和update
        }, 0.3)
    }
    debounce(
        fn: Function,
        delay: number = 500,
        immediately: boolean = true
      ) {
        let timerID: number = -1;
        return function (this: any, ...arg: any) {
          if (timerID < 0 && immediately) {
            fn.apply(this, arg);
            timerID = 1;
            return;
          }
          if (timerID > 0) {
            clearTimeout(timerID);
          }
          timerID = window.setTimeout(() => {
            fn.apply(this, arg);
          }, delay);
        };
      }
}


