System.register("chunks:///_virtual/AwardControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,r,e;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,e=t.Component}],execute:function(){var i;n._RF.push({},"9b5c7mFQatKM4vMSA2T7T2u","AwardControl",void 0);var s=r.ccclass;r.property,t("AwardControl",s("AwardControl")(i=function(t){function n(){for(var o,n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];return(o=t.call.apply(t,[this].concat(r))||this).isDead=!1,o}o(n,t);var r=n.prototype;return r.start=function(){},r.update=function(t){if(!this.isDead){var o=this.node.getPosition(),n=o.x,r=o.y-400*t;this.node.setPosition(n,r),r<-1770&&this.node.destroy()}},r.die=function(){var t=this;this.isDead||(this.isDead=!0,setTimeout((function(){var o;null==(o=t.node)||o.destroy()}),80))},n}(e))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/AwardManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(a){var r,e,t,n,i,o,c,s,u,l;return{setters:[function(a){r=a.applyDecoratedDescriptor,e=a.inheritsLoose,t=a.initializerDefineProperty,n=a.assertThisInitialized},function(a){i=a.cclegacy,o=a._decorator,c=a.Prefab,s=a.instantiate,u=a.v3,l=a.Component}],execute:function(){var d,p,f,h,v;i._RF.push({},"daaaaUzBsJO7oeweqAYm8h4","AwardManager",void 0);var w=o.ccclass,g=o.property;a("AwardManager",(d=w("AwardManager"),p=g(c),d((v=r((h=function(a){function r(){for(var r,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return r=a.call.apply(a,[this].concat(i))||this,t(r,"award",v,n(r)),r}e(r,a);var i=r.prototype;return i.start=function(){var a=this;this.schedule((function(){var r=s(a.award);r.setPosition(u(389*Math.random()-180,1080*Math.random()+800)),a.node.addChild(r)}),2)},i.update=function(a){},r}(l)).prototype,"award",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/BgControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,e,r,n,i;return{setters:[function(o){t=o.inheritsLoose,e=o.createForOfIteratorHelperLoose},function(o){r=o.cclegacy,n=o._decorator,i=o.Component}],execute:function(){var s;r._RF.push({},"05be8KjTdxLWKavufE7nH2D","BgControl",void 0);var c=n.ccclass;n.property,o("BgControl",c("BgControl")(s=function(o){function r(){return o.apply(this,arguments)||this}t(r,o);var n=r.prototype;return n.start=function(){},n.update=function(o){for(var t,r=e(this.node.children);!(t=r()).done;){var n=t.value,i=n.getPosition(),s=i.x,c=i.y-100*o;n.setPosition(s,c),c<-850&&n.setPosition(s,852)}},r}(i))||s);r._RF.pop()}}}));

System.register("chunks:///_virtual/BigPlaneControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScoreControl.ts"],(function(t){var e,n,i,o,a,s,r,l,c,u,d,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,o=t.AudioSource,a=t.find,s=t.Collider2D,r=t.Contact2DType,l=t.resources,c=t.SpriteFrame,u=t.Sprite,d=t.Component},function(t){h=t.ScoreControl}],execute:function(){var p;n._RF.push({},"8b59axUZiJBbLuzTVKDIWS3","BigPlaneControl",void 0);var g=i.ccclass;i.property,t("BigPlaneControl",g("BigPlaneControl")(p=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).isDead=!1,e.airplaneDeadImages=[],e.attackNum=0,e.scoreClass=null,e.audio=null,e}e(n,t);var i=n.prototype;return i.start=function(){this.audio=this.getComponent(o),this.scoreClass=a("Canvas/ContentWidget/score").getComponent(h),this.loadImages();var t=this.getComponent(s);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},i.update=function(t){if(!this.isDead){var e=this.node.getPosition(),n=e.x,i=e.y-400*t;this.node.setPosition(n,i),i<-1200&&this.node.destroy()}},i.onBeginContact=function(t,e){if(3===t.tag&&(1===e.tag||11===e.tag)){if(this.isDead)return;this.attackNum>=3?(this.scoreClass.addScore(3),this.die()):this.attackNum++}},i.loadImages=function(){var t=this;l.loadDir("bigplane-death",c,(function(e,n){t.airplaneDeadImages=n}))},i.playDead=function(){var t=this,e=this.node.getComponent(u);if(e)for(var n=function(n){setTimeout((function(){var i;null!=(i=t.node)&&i.isValid&&(e.spriteFrame=t.airplaneDeadImages[n])}),80*n)},i=0;i<this.airplaneDeadImages.length;i++)n(i)},i.die=function(){var t,e=this;this.isDead||(null==(t=this.audio)||t.play(),this.isDead=!0,this.playDead(),setTimeout((function(){var t;null==(t=e.node)||t.destroy()}),80*this.airplaneDeadImages.length))},n}(d))||p);n._RF.pop()}}}));

System.register("chunks:///_virtual/Bullet2Control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,r,s;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Collider2D,r=t.Contact2DType,s=t.Component}],execute:function(){var a;n._RF.push({},"172fd1ZxApABbq5grLhUyyu","Bullet2Control",void 0);var c=e.ccclass;e.property,t("Bullet2Control",c("BulletControl")(a=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this).isDead=!1,o}o(n,t);var e=n.prototype;return e.start=function(){var t=this.getComponent(i);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},e.update=function(t){if(!this.isDead){var o=this.node.getPosition(),n=o.x,e=o.y+600*t;this.node.setPosition(n,e),e>852&&this.node.destroy()}},e.onBeginContact=function(t,o){11!==t.tag||2!==o.tag&&3!==o.tag&&4!==o.tag||this.die()},e.die=function(){var t=this;this.isDead||(this.isDead=!0,setTimeout((function(){var o;null==(o=t.node)||o.destroy()}),30))},n}(s))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/BulletControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,e,i,r,s;return{setters:[function(t){o=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,i=t.Collider2D,r=t.Contact2DType,s=t.Component}],execute:function(){var a;n._RF.push({},"a56e8MESgNDjaEdXZP+zHeg","BulletControl",void 0);var c=e.ccclass;e.property,t("BulletControl",c("BulletControl")(a=function(t){function n(){for(var o,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(o=t.call.apply(t,[this].concat(e))||this).isDead=!1,o}o(n,t);var e=n.prototype;return e.start=function(){var t=this.getComponent(i);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},e.update=function(t){if(!this.isDead){var o=this.node.getPosition(),n=o.x,e=o.y+600*t;this.node.setPosition(n,e),e>852&&this.node.destroy()}},e.onBeginContact=function(t,o){1!==t.tag||2!==o.tag&&3!==o.tag&&4!==o.tag||this.die()},e.die=function(){var t=this;this.isDead||(this.isDead=!0,setTimeout((function(){var o;null==(o=t.node)||o.destroy()}),0))},n}(s))||a);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Enemy3Control.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScoreControl.ts"],(function(t){var e,n,o,i,a,s,r,l,c,u,d,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.AudioSource,a=t.find,s=t.Collider2D,r=t.Contact2DType,l=t.resources,c=t.SpriteFrame,u=t.Sprite,d=t.Component},function(t){h=t.ScoreControl}],execute:function(){var p;n._RF.push({},"773ec/44XpD24vJrMi88Zqh","Enemy3Control",void 0);var f=o.ccclass;o.property,t("Enemy3Control",f("Enemy3Control")(p=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).isDead=!1,e.airplaneDeadImages=[],e.attackNum=0,e.scoreClass=null,e.audio=null,e}e(n,t);var o=n.prototype;return o.start=function(){this.audio=this.getComponent(i),this.scoreClass=a("Canvas/ContentWidget/score").getComponent(h),this.loadImages();var t=this.getComponent(s);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},o.update=function(t){if(!this.isDead){var e=this.node.getPosition(),n=e.x,o=e.y-400*t;this.node.setPosition(n,o),o<-1500&&this.node.destroy()}},o.onBeginContact=function(t,e){if(4===t.tag&&(1===e.tag||11===e.tag)){if(this.isDead)return;var n;if(this.attackNum>=20)null==(n=this.audio)||n.play(),this.scoreClass.addScore(20),this.die();else this.attackNum++}},o.loadImages=function(){var t=this;l.loadDir("enemy3-death",c,(function(e,n){t.airplaneDeadImages=n}))},o.playDead=function(){var t=this,e=this.node.getComponent(u);if(e)for(var n=function(n){setTimeout((function(){var o;null!=(o=t.node)&&o.isValid&&(e.spriteFrame=t.airplaneDeadImages[n])}),80*n)},o=0;o<this.airplaneDeadImages.length;o++)n(o)},o.die=function(){var t=this;this.isDead||(this.isDead=!0,this.playDead(),setTimeout((function(){var e;null==(e=t.node)||e.destroy()}),100*this.airplaneDeadImages.length))},n}(d))||p);n._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScoreControl.ts"],(function(t){var e,n,o,i,a,s,r,l,c,d,u,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.AudioSource,a=t.find,s=t.Collider2D,r=t.Contact2DType,l=t.resources,c=t.SpriteFrame,d=t.Sprite,u=t.Component},function(t){h=t.ScoreControl}],execute:function(){var p;n._RF.push({},"2d011d+sdBH5IAXKa98bBxx","EnemyControl",void 0);var g=o.ccclass;o.property,t("EnemyControl",g("EnemyControl")(p=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).isDead=!1,e.airplaneDeadImages=[],e.scoreClass=null,e.audio=null,e}e(n,t);var o=n.prototype;return o.start=function(){this.audio=this.getComponent(i),this.scoreClass=a("Canvas/ContentWidget/score").getComponent(h),this.loadImages();var t=this.getComponent(s);t&&t.on(r.BEGIN_CONTACT,this.onBeginContact,this)},o.update=function(t){if(!this.isDead){var e=this.node.getPosition(),n=e.x,o=e.y-400*t;this.node.setPosition(n,o),o<-1200&&this.node.destroy()}},o.onBeginContact=function(t,e){2!==t.tag||1!==e.tag&&11!==e.tag||(this.scoreClass.addScore(1),this.die())},o.loadImages=function(){var t=this;l.loadDir("enemy-death",c,(function(e,n){t.airplaneDeadImages=n}))},o.playDead=function(){var t=this,e=this.node.getComponent(d);if(e)for(var n=function(n){setTimeout((function(){var o;null!=(o=t.node)&&o.isValid&&(e.spriteFrame=t.airplaneDeadImages[n])}),80*n)},o=0;o<this.airplaneDeadImages.length;o++)n(o)},o.die=function(){var t,e=this;this.isDead||(null==(t=this.audio)||t.play(),this.isDead=!0,this.playDead(),setTimeout((function(){var t;null==(t=e.node)||t.destroy()}),80*this.airplaneDeadImages.length))},n}(u))||p);n._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,r,i,a,o,l,u,c;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,l=e.Prefab,u=e.instantiate,c=e.Component}],execute:function(){var s,p,y,d,f,h,m,g,b;a._RF.push({},"b156cHGgtJFJ5Wld38EBcHa","EnemyManager",void 0);var v=o.ccclass,P=o.property;e("EnemyManager",(s=v("EnemyManager"),p=P(l),y=P(l),d=P(l),s((m=n((h=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return n=e.call.apply(e,[this].concat(a))||this,r(n,"enemy",m,i(n)),r(n,"bigplane",g,i(n)),r(n,"enemy3",b,i(n)),n}t(n,e);var a=n.prototype;return a.start=function(){var e=this,n=this.node.getPosition(),t=(n.x,n.y);this.schedule((function(){var n=u(e.enemy);n.setPosition(418*Math.random()-209,t),e.node.addChild(n)}),.5),this.schedule((function(){var n=u(e.bigplane);n.setPosition(418*Math.random()-209,t),n.setParent(e.node.parent)}),1),this.schedule((function(){var n=u(e.enemy3);n.setPosition(418*Math.random()-209,t),n.setParent(e.node.parent)}),5)},a.update=function(e){},n}(c)).prototype,"enemy",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=n(h.prototype,"bigplane",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=n(h.prototype,"enemy3",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;n._RF.push({},"5ab3becWzFGm4xVdgDotw5d","GameOverControl",void 0);var a=o.ccclass;o.property,t("GameOverControl",a("GameOverControl")(c=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).active=!1,e}e(n,t);var o=n.prototype;return o.start=function(){this.node.active=this.active},o.update=function(t){},o.changeActive=function(){this.node.active=!this.active},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/GameStart.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o,c,a;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.Node,c=t.director,a=t.Component}],execute:function(){var i;n._RF.push({},"9a442stTfVDpbY2VJyjE5nr","GameStart",void 0);var s=r.ccclass;r.property,t("GameStart",s("GameStart")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){this.node.on(o.EventType.TOUCH_START,(function(t){c.loadScene("scene")}))},r.update=function(t){},n}(a))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AwardControl.ts","./AwardManager.ts","./BgControl.ts","./BigPlaneControl.ts","./Bullet2Control.ts","./BulletControl.ts","./Enemy3Control.ts","./EnemyControl.ts","./EnemyManager.ts","./GameOverControl.ts","./GameStart.ts","./MusicControl.ts","./PlayerControl.ts","./ReStartControl.ts","./ScoreControl.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MusicControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,r,i,c,u,a,s;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,r=t.Node,i=t.AudioSource,c=t.resources,u=t.SpriteFrame,a=t.Sprite,s=t.Component}],execute:function(){var l;e._RF.push({},"d505aDfPcpKHJnXJG+c/Thi","MusicControl",void 0);var p=n.ccclass;n.property,t("MusicOnControl",p("MusicOnControl")(l=function(t){function e(){for(var o,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(o=t.call.apply(t,[this].concat(n))||this).toggleFlag=!0,o.audio=null,o}o(e,t);var n=e.prototype;return n.start=function(){this.node.on(r.EventType.TOUCH_START,this.touchStart,this),this.audio=this.getComponent(i)},n.update=function(t){},n.touchStart=function(){var t=this;this.toggleFlag?c.load("music-off/spriteFrame",u,(function(o,e){t.node.getComponent(a).spriteFrame=e,t.audio.stop(),t.toggleFlag=!1})):c.load("music-on/spriteFrame",u,(function(o,e){t.node.getComponent(a).spriteFrame=e,t.audio.play(),t.toggleFlag=!0}))},e}(s))||l);e._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameOverControl.ts","./AwardControl.ts"],(function(t){var e,n,i,o,a,l,r,s,u,h,c,d,p,f,g,m,C,v,b,y,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,l=t._decorator,r=t.Prefab,s=t.AudioSource,u=t.find,h=t.Collider2D,c=t.Contact2DType,d=t.Node,p=t.instantiate,f=t.v3,g=t.game,m=t.resources,C=t.SpriteFrame,v=t.Sprite,b=t.Component},function(t){y=t.GameOverControl},function(t){T=t.AwardControl}],execute:function(){var P,A,D,w,I,O,E;a._RF.push({},"26adcMCokRO3r/E0XoF4LZ/","PlayerControl",void 0);var _=l.ccclass,B=l.property;t("PlayerControl",(P=_("PlayerControl"),A=B(r),D=B(r),P((O=e((I=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return e=t.call.apply(t,[this].concat(a))||this,i(e,"bullet",O,o(e)),i(e,"bullet2",E,o(e)),e.gameoverClass=null,e.airplaneDeadImages=[],e.hasAward=!1,e.bulletTime=null,e.bullet2Time=null,e.audio=null,e}n(e,t);var a=e.prototype;return a.start=function(){this.audio=this.getComponent(s),this.loadImages(),this.gameoverClass=u("Canvas/ContentWidget/gameover").getComponent(y);var t=this.getComponent(h);t&&(t.on(c.BEGIN_CONTACT,this.onBeginContact,this),t.on(c.END_CONTACT,this.onEndContact,this)),this.node.on(d.EventType.TOUCH_MOVE,this.move,this),this.bullet1Send()},a.bullet1Send=function(){var t=this;this.bulletTime=function(){if(t.hasAward)t.unschedule(t.bulletTime);else{var e=t.node.getPosition(),n=e.x,i=e.y,o=p(t.bullet);o.setParent(t.node.parent),o.setPosition(n,i+70)}},this.schedule(this.bulletTime,.2)},a.move=function(t){var e=t.getUILocation(),n=e.x,i=e.y;this.node.setWorldPosition(f(n,i))},a.onBeginContact=function(t,e){var n;0!==t.tag||2!==e.tag&&3!==e.tag&&4!==e.tag||(null==(n=this.audio)||n.play(),this.playDead(),this.getComponent(h).off(c.BEGIN_CONTACT,this.onBeginContact,this),this.node.off(d.EventType.TOUCH_MOVE,this.move,this),this.gameoverClass.changeActive(),setTimeout((function(){g.pause()}),1e3))},a.onEndContact=function(t,e){var n=this;if(0===t.tag&&10===e.tag){if(e.getComponent(T).die(),this.hasAward)return;this.scheduleOnce((function(){n.hasAward=!1}),2),this.toggleBullet()}},a.loadImages=function(){var t=this;m.loadDir("player-death",C,(function(e,n){t.airplaneDeadImages=n}))},a.playDead=function(){var t=this,e=this.node.getComponent(v);if(e)for(var n=function(n){setTimeout((function(){var i;null!=(i=t.node)&&i.isValid&&(e.spriteFrame=t.airplaneDeadImages[n])}),80*n)},i=0;i<this.airplaneDeadImages.length;i++)n(i)},a.toggleBullet=function(){this.hasAward||(this.bullet2Time=function(){if(!this.hasAward)return this.unschedule(this.bullet2Time),void this.bullet1Send();for(var t=0;t<=6;t++){var e=this.node.getPosition(),n=e.x,i=e.y,o=p(this.bullet2);o.setParent(this.node.parent),o.setPosition(n+40*-Math.cos(Math.PI/180*t*30),i+(40*Math.sin(Math.PI/180*t*30)+40))}},this.schedule(this.bullet2Time,.1),this.hasAward=!0)},e}(b)).prototype,"bullet",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(I.prototype,"bullet2",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=I))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/ReStartControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameOverControl.ts"],(function(t){var e,o,n,r,a,c,s,i,l;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,n=t._decorator,r=t.find,a=t.Node,c=t.game,s=t.director,i=t.Component},function(t){l=t.GameOverControl}],execute:function(){var u;o._RF.push({},"03937t2K59ODZRh9vsaexLw","ReStartControl",void 0);var p=n.ccclass;n.property,t("ReStartControl",p("ReStartControl")(u=function(t){function o(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).gameoverClass=null,e}e(o,t);var n=o.prototype;return n.onLoad=function(){this.gameoverClass=r("Canvas/ContentWidget/gameover").getComponent(l),this.node.on(a.EventType.TOUCH_START,(function(t){c.resume(),s.loadScene("scene")}),this)},n.update=function(t){},o}(i))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,r,e,n,c;return{setters:[function(o){t=o.inheritsLoose},function(o){r=o.cclegacy,e=o._decorator,n=o.Label,c=o.Component}],execute:function(){var s;r._RF.push({},"a8414VmxqBALZKjI28Qqh5o","ScoreControl",void 0);var i=e.ccclass;e.property,o("ScoreControl",i("ScoreControl")(s=function(o){function r(){for(var t,r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return(t=o.call.apply(o,[this].concat(e))||this).score=0,t.label=null,t}t(r,o);var e=r.prototype;return e.start=function(){this.addScore()},e.update=function(o){},e.addScore=function(o){void 0===o&&(o=0),this.score+=o,this.label=this.getComponent(n);var t="分数："+this.score;this.label.string=t},r}(c))||s);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});