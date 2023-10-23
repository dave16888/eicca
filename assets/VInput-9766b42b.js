import{p as M,B as D,H as Q,g as _,h as w,a as c,b as Z,Z as q,aR as G,b7 as J,R as s,$ as x,al as W,ai as X,be as H,u as N,aY as B,ad as ee,aD as K,d as ae,Q as E,aU as ne,bf as te,bg as se,f as le,aM as O,e as P,a3 as ue,I as U,av as ie,aw as re,P as oe}from"./index-84cea71e.js";const ce=M({text:String,clickable:Boolean,...D(),...Q()},"VLabel"),Ie=_()({name:"VLabel",props:ce(),setup(e,l){let{slots:t}=l;return w(()=>{var a;return c("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(a=t.default)==null?void 0:a.call(t)])}),{}}});function de(e){const{t:l}=Z();function t(a){let{name:u}=a;const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[u],i=e[`onClick:${u}`],d=i&&n?l(`$vuetify.input.${n}`,e.label??""):void 0;return c(q,{icon:e[`${u}Icon`],"aria-label":d,onClick:i},null)}return{InputIcon:t}}const ve=M({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...D(),...G({transition:{component:J,leaveAbsolute:!0,group:!0}})},"VMessages"),ge=_()({name:"VMessages",props:ve(),setup(e,l){let{slots:t}=l;const a=s(()=>x(e.messages)),{textColorClasses:u,textColorStyles:n}=W(s(()=>e.color));return w(()=>c(X,{transition:e.transition,tag:"div",class:["v-messages",u.value,e.class],style:[n.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((i,d)=>c("div",{class:"v-messages__message",key:`${d}-${a.value}`},[t.message?t.message({message:i}):i]))]})),{}}}),fe=M({focused:Boolean,"onUpdate:focused":B()},"focus");function ke(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();const t=N(e,"focused"),a=s(()=>({[`${l}--focused`]:t.value}));function u(){t.value=!0}function n(){t.value=!1}return{focusClasses:a,isFocused:t,focus:u,blur:n}}const me=Symbol.for("vuetify:form");function ye(){return ee(me,null)}const pe=M({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...fe()},"validation");function he(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:K();const a=N(e,"modelValue"),u=s(()=>e.validationValue===void 0?a.value:e.validationValue),n=ye(),i=ae([]),d=E(!0),$=s(()=>!!(x(a.value===""?null:a.value).length||x(u.value===""?null:u.value).length)),p=s(()=>!!(e.disabled??(n==null?void 0:n.isDisabled.value))),I=s(()=>!!(e.readonly??(n==null?void 0:n.isReadonly.value))),h=s(()=>e.errorMessages.length?x(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):i.value),m=s(()=>{let r=(e.validateOn??(n==null?void 0:n.validateOn.value))||"input";r==="lazy"&&(r="input lazy");const o=new Set((r==null?void 0:r.split(" "))??[]);return{blur:o.has("blur")||o.has("input"),input:o.has("input"),submit:o.has("submit"),lazy:o.has("lazy")}}),y=s(()=>e.error||e.errorMessages.length?!1:e.rules.length?d.value?i.value.length||m.value.lazy?null:!0:!i.value.length:!0),k=E(!1),S=s(()=>({[`${l}--error`]:y.value===!1,[`${l}--dirty`]:$.value,[`${l}--disabled`]:p.value,[`${l}--readonly`]:I.value})),b=s(()=>e.name??ne(t));te(()=>{n==null||n.register({id:b.value,validate:v,reset:C,resetValidation:V})}),se(()=>{n==null||n.unregister(b.value)}),le(async()=>{m.value.lazy||await v(!0),n==null||n.update(b.value,y.value,h.value)}),O(()=>m.value.input,()=>{P(u,()=>{if(u.value!=null)v();else if(e.focused){const r=P(()=>e.focused,o=>{o||v(),r()})}})}),O(()=>m.value.blur,()=>{P(()=>e.focused,r=>{r||v()})}),P(y,()=>{n==null||n.update(b.value,y.value,h.value)});function C(){a.value=null,ue(V)}function V(){d.value=!0,m.value.lazy?i.value=[]:v(!0)}async function v(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const o=[];k.value=!0;for(const f of e.rules){if(o.length>=+(e.maxErrors??1))break;const g=await(typeof f=="function"?f:()=>f)(u.value);if(g!==!0){if(g!==!1&&typeof g!="string"){console.warn(`${g} is not a valid value. Rule functions must return boolean true or a string.`);continue}o.push(g||"")}}return i.value=o,k.value=!1,d.value=r,i.value}return{errorMessages:h,isDirty:$,isDisabled:p,isReadonly:I,isPristine:d,isValid:y,isValidating:k,reset:C,resetValidation:V,validate:v,validationClasses:S}}const be=M({id:String,appendIcon:U,centerAffix:{type:Boolean,default:!0},prependIcon:U,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":B(),"onClick:append":B(),...D(),...ie(),...pe()},"VInput"),Me=_()({name:"VInput",props:{...be()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:t,slots:a,emit:u}=l;const{densityClasses:n}=re(e),{rtlClasses:i}=oe(),{InputIcon:d}=de(e),$=K(),p=s(()=>e.id||`input-${$}`),I=s(()=>`${p.value}-messages`),{errorMessages:h,isDirty:m,isDisabled:y,isReadonly:k,isPristine:S,isValid:b,isValidating:C,reset:V,resetValidation:v,validate:r,validationClasses:o}=he(e,"v-input",p),f=s(()=>({id:p,messagesId:I,isDirty:m,isDisabled:y,isReadonly:k,isPristine:S,isValid:b,isValidating:C,reset:V,resetValidation:v,validate:r})),A=s(()=>{var g;return(g=e.errorMessages)!=null&&g.length||!S.value&&h.value.length?h.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return w(()=>{var R,T,F,L;const g=!!(a.prepend||e.prependIcon),Y=!!(a.append||e.appendIcon),z=A.value.length>0,j=!e.hideDetails||e.hideDetails==="auto"&&(z||!!a.details);return c("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix},n.value,i.value,o.value,e.class],style:e.style},[g&&c("div",{key:"prepend",class:"v-input__prepend"},[(R=a.prepend)==null?void 0:R.call(a,f.value),e.prependIcon&&c(d,{key:"prepend-icon",name:"prepend"},null)]),a.default&&c("div",{class:"v-input__control"},[(T=a.default)==null?void 0:T.call(a,f.value)]),Y&&c("div",{key:"append",class:"v-input__append"},[e.appendIcon&&c(d,{key:"append-icon",name:"append"},null),(F=a.append)==null?void 0:F.call(a,f.value)]),j&&c("div",{class:"v-input__details"},[c(ge,{id:I.value,active:z,messages:A.value},{message:a.message}),(L=a.details)==null?void 0:L.call(a,f.value)])])}),{reset:V,resetValidation:v,validate:r}}});export{Me as V,ye as a,Ie as b,fe as c,de as d,be as m,ke as u};
