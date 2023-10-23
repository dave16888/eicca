import{p as I,I as h,aP as M,B as T,av as j,H as q,g as x,u as S,aD as $,R as o,a8 as K,aO as N,S as Q,K as i,h as B,a as f,ax as Z,Q as w,d as z,a0 as J,a9 as W,aa as X,Z as Y,m as g,ad as p,aw as ee,$ as D,al as le,b4 as G,a3 as ae}from"./index-84cea71e.js";import{b as te}from"./VInput-9766b42b.js";const R=Symbol.for("vuetify:selection-control-group"),_=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:h,trueIcon:h,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:M},...T(),...j(),...q()},"SelectionControlGroup"),ne=I({..._({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");x()({name:"VSelectionControlGroup",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),a=$(),d=o(()=>e.id||`v-selection-control-group-${a}`),r=o(()=>e.name||d.value),t=new Set;return K(R,{modelValue:l,forceUpdate:()=>{t.forEach(n=>n())},onForceUpdate:n=>{t.add(n),N(()=>{t.delete(n)})}}),Q({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),B(()=>{var n;return f("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const O=I({label:String,trueValue:null,falseValue:null,value:null,...T(),..._()},"VSelectionControl");function oe(e){const u=p(R,void 0),{densityClasses:c}=ee(e),l=S(e,"modelValue"),a=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),d=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=o({get(){const m=u?u.modelValue.value:l.value;return r.value?m.some(s=>e.valueComparator(s,a.value)):e.valueComparator(m,a.value)},set(m){if(e.readonly)return;const s=m?a.value:d.value;let v=s;r.value&&(v=m?[...D(l.value),s]:D(l.value).filter(V=>!e.valueComparator(V,a.value))),u?u.modelValue.value=v:l.value=v}}),{textColorClasses:n,textColorStyles:b}=le(o(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),k=o(()=>t.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:a,falseValue:d,model:t,textColorClasses:n,textColorStyles:b,icon:k}}const ue=x()({name:"VSelectionControl",directives:{Ripple:Z},inheritAttrs:!1,props:O(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:a,densityClasses:d,icon:r,model:t,textColorClasses:n,textColorStyles:b,trueValue:k}=oe(e),m=$(),s=o(()=>e.id||`input-${m}`),v=w(!1),V=w(!1),C=z();a==null||a.onForceUpdate(()=>{C.value&&(C.value.checked=t.value)});function P(y){v.value=!0,(!G||G&&y.target.matches(":focus-visible"))&&(V.value=!0)}function A(){v.value=!1,V.value=!1}function E(y){e.readonly&&a&&ae(()=>a.forceUpdate()),t.value=y.target.checked}return B(()=>{var F,U;const y=l.label?l.label({label:e.label,props:{for:s.value}}):e.label,[H,L]=J(c);return f("div",g({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},d.value,e.class]},H,{style:e.style}),[f("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(F=l.default)==null?void 0:F.call(l),W(f("div",{class:["v-selection-control__input"]},[r.value&&f(Y,{key:"icon",icon:r.value},null),f("input",g({ref:C,checked:t.value,disabled:!!(e.readonly||e.disabled),id:s.value,onBlur:A,onFocus:P,onInput:E,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},L),null),(U=l.input)==null?void 0:U.call(l,{model:t,textColorClasses:n,textColorStyles:b,props:{onFocus:P,onBlur:A,id:s.value}})]),[[X("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&f(te,{for:s.value,clickable:!0},{default:()=>[y]})])}),{isFocused:v,input:C}}}),ie=I({indeterminate:Boolean,indeterminateIcon:{type:h,default:"$checkboxIndeterminate"},...O({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),se=x()({name:"VCheckboxBtn",props:ie(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),a=S(e,"modelValue");function d(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),t=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return B(()=>f(ue,g(e,{modelValue:a.value,"onUpdate:modelValue":[n=>a.value=n,d],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:t.value,"aria-checked":l.value?"mixed":void 0}),c)),{}}});export{se as V,ie as m};
