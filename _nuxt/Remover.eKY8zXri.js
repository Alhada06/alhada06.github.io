import{Remove as a}from"./index.wBmeACtX.js";import{E as i}from"./ExternalInteractorBase.CIi3zRdK.js";import{aR as m}from"./entry.ZFru8Y40.js";const s="remove";class u extends i{constructor(t){super(t),this.handleClickMode=r=>{const e=this.container,o=e.actualOptions;if(!o.interactivity.modes.remove||r!==s)return;const n=m(o.interactivity.modes.remove.quantity);e.particles.removeQuantity(n)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(t,...r){t.remove||(t.remove=new a);for(const e of r)t.remove.load(e==null?void 0:e.remove)}reset(){}}export{u as Remover};
