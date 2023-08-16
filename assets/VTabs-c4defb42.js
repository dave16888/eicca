import{b5 as ie,p as M,A as L,B as D,G as ue,g as A,N as ce,O as re,b as ke,aJ as ve,d as W,Q as y,P as B,e as de,an as Ve,h as O,ar as fe,as as we,a as d,j as F,aK as ze,b6 as Be,at as Pe,aO as Ie,b7 as Re,b8 as _e,aS as Ee,aA as $e,l as G,a8 as He,a1 as he,au as me,aH as Me,b9 as Ae,aw as Oe,m as K,aX as Xe,a$ as Ye,I as ee,aI as We,a4 as Fe,a5 as te,ba as Ge,bb as ne,ak as ae,bc as Le,bd as De,u as je,H as qe,J as E,R as Ne}from"./index-4c3e289c.js";const Ue=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:r}=e,s=.5,o=16;e.offsetX=t-a,e.offsetY=r-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<a-o&&e.left(e),e.right&&t>a+o&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<n-o&&e.up(e),e.down&&r>n+o&&e.down(e))};function Ke(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function Je(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),Ue(a)}function Qe(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function Ze(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ke(t,a),touchend:t=>Je(t,a),touchmove:t=>Qe(t,a)}}function pe(e,a){var l;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,r=(t==null?void 0:t.options)??{passive:!0},s=(l=a.instance)==null?void 0:l.$.uid;if(!n||!s)return;const o=Ze(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[s]=o,ie(o).forEach(u=>{n.addEventListener(u,o[u],r)})}function et(e,a){var s,o;const t=(s=a.value)!=null&&s.parent?e.parentElement:e,n=(o=a.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const r=t._touchHandlers[n];ie(r).forEach(l=>{t.removeEventListener(l,r[l])}),delete t._touchHandlers[n]}const ge={mounted:pe,unmounted:et},tt=ge,be=Symbol.for("vuetify:v-window"),ye=Symbol.for("vuetify:v-window-group"),nt=M({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...L(),...D(),...ue()},"VWindow"),dt=A()({name:"VWindow",directives:{Touch:ge},props:nt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=ce(e),{isRtl:r}=re(),{t:s}=ke(),o=ve(e,ye),l=W(),u=y(()=>r.value?!e.reverse:e.reverse),c=B(!1),f=y(()=>{const h=e.direction==="vertical"?"y":"x",T=(u.value?!c.value:c.value)?"-reverse":"";return`v-window-${h}${T}-transition`}),x=B(0),S=W(void 0),m=y(()=>o.items.value.findIndex(h=>o.selected.value.includes(h.id)));de(m,(h,b)=>{const T=o.items.value.length,w=T-1;T<=2?c.value=h<b:h===w&&b===0?c.value=!0:h===0&&b===w?c.value=!1:c.value=h<b}),Ve(be,{transition:f,isReversed:c,transitionCount:x,transitionHeight:S,rootRef:l});const g=y(()=>e.continuous||m.value!==0),P=y(()=>e.continuous||m.value!==o.items.value.length-1);function R(){g.value&&o.prev()}function I(){P.value&&o.next()}const k=y(()=>{const h=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:o.prev,ariaLabel:s("$vuetify.carousel.prev")};h.push(g.value?t.prev?t.prev({props:b}):d(F,b,null):d("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:o.next,ariaLabel:s("$vuetify.carousel.next")};return h.push(P.value?t.next?t.next({props:T}):d(F,T,null):d("div",null,null)),h}),V=y(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?R():I()},right:()=>{u.value?I():R()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return O(()=>fe(d(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var h,b;return[d("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:o}),e.showArrows!==!1&&d("div",{class:"v-window__controls"},[k.value])]),(b=t.additional)==null?void 0:b.call(t,{group:o})]}}),[[we("touch"),V.value]])),{group:o}}}),at=M({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...L(),...ze(),...Be()},"VWindowItem"),ft=A()({name:"VWindowItem",directives:{Touch:tt},props:at(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=Pe(be),r=Ie(e,ye),{isBooted:s}=Re();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=B(!1),l=y(()=>s.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!o.value||!n||(o.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var g;o.value||!n||(o.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=G((g=n.rootRef.value)==null?void 0:g.clientHeight)),n.transitionCount.value+=1)}function f(){u()}function x(g){o.value&&He(()=>{!l.value||!o.value||!n||(n.transitionHeight.value=G(g.clientHeight))})}const S=y(()=>{const g=n.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof g!="string"?n.transition.value:g,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:f,onEnter:x}:!1}),{hasContent:m}=_e(e,r.isSelected);return O(()=>d($e,{transition:S.value,disabled:!s.value},{default:()=>{var g;return[fe(d("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[m.value&&((g=t.default)==null?void 0:g.call(t))]),[[Ee,r.isSelected.value]])]}})),{}}});const ot=M({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...L(),...he(),...D(),...ue()},"VTable"),ht=A()({name:"VTable",props:ot(),setup(e,a){let{slots:t}=a;const{themeClasses:n}=ce(e),{densityClasses:r}=me(e);return O(()=>d(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var s,o,l;return[(s=t.top)==null?void 0:s.call(t),t.default?d("div",{class:"v-table__wrapper",style:{height:G(e.height)}},[d("table",null,[t.default()])]):(o=t.wrapper)==null?void 0:o.call(t),(l=t.bottom)==null?void 0:l.call(t)]}})),{}}});const Se=Symbol.for("vuetify:v-tabs"),lt=M({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Me(Ae({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),st=A()({name:"VTab",props:lt(),setup(e,a){let{slots:t,attrs:n}=a;const{textColorClasses:r,textColorStyles:s}=Oe(e,"sliderColor"),o=y(()=>e.direction==="horizontal"),l=B(!1),u=W(),c=W();function f(x){var m,g;let{value:S}=x;if(l.value=S,S){const P=(g=(m=u.value)==null?void 0:m.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),R=c.value;if(!P||!R)return;const I=getComputedStyle(P).color,k=P.getBoundingClientRect(),V=R.getBoundingClientRect(),h=o.value?"x":"y",b=o.value?"X":"Y",T=o.value?"right":"bottom",w=o.value?"width":"height",$=k[h],j=V[h],_=$>j?k[T]-V[T]:k[h]-V[h],q=Math.sign(_)>0?o.value?"right":"bottom":Math.sign(_)<0?o.value?"left":"top":"center",C=(Math.abs(_)+(Math.sign(_)<0?k[w]:V[w]))/Math.max(k[w],V[w]),X=k[w]/V[w],Y=1.5;Xe(R,{backgroundColor:[I,"currentcolor"],transform:[`translate${b}(${_}px) scale${b}(${X})`,`translate${b}(${_/Y}px) scale${b}(${(C-1)/Y+1})`,"none"],transformOrigin:Array(3).fill(q)},{duration:225,easing:Ye})}}return O(()=>{const[x]=F.filterProps(e);return d(F,K({symbol:Se,ref:u,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},x,n,{"onGroup:selected":f}),{default:()=>{var S;return[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&d("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]}})}),{}}});function oe(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function le(e){let{selectedElement:a,containerSize:t,contentSize:n,isRtl:r,currentScrollOffset:s,isHorizontal:o}=e;const l=o?a.clientWidth:a.clientHeight,u=o?a.offsetLeft:a.offsetTop,c=r&&o?n-u-l:u,f=t+s,x=l+c,S=l*.4;return c<=s?s=Math.max(c-S,0):f<=x&&(s=Math.min(s-(f-x-S),n-t)),s}function it(e){let{selectedElement:a,containerSize:t,contentSize:n,isRtl:r,isHorizontal:s}=e;const o=s?a.clientWidth:a.clientHeight,l=s?a.offsetLeft:a.offsetTop,u=r&&s?n-l-o/2-t/2:l+o/2-t/2;return Math.min(n-t,Math.max(0,u))}const ut=Symbol.for("vuetify:v-slide-group"),xe=M({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ut},nextIcon:{type:ee,default:"$next"},prevIcon:{type:ee,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...L(),...D(),...We({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),se=A()({name:"VSlideGroup",props:xe(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{isRtl:n}=re(),{mobile:r}=Fe(),s=ve(e,e.symbol),o=B(!1),l=B(0),u=B(0),c=B(0),f=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:S}=te(),{resizeRef:m,contentRect:g}=te(),P=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[0]):-1),R=y(()=>s.selected.value.length?s.items.value.findIndex(i=>i.id===s.selected.value[s.selected.value.length-1]):-1);if(Ge){let i=-1;de(()=>[s.selected.value,S.value,g.value,f.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(S.value&&g.value){const v=f.value?"width":"height";u.value=S.value[v],c.value=g.value[v],o.value=u.value+1<c.value}if(P.value>=0&&m.value){const v=m.value.children[R.value];P.value===0||!o.value?l.value=0:e.centerActive?l.value=it({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,isHorizontal:f.value}):o.value&&(l.value=le({selectedElement:v,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:f.value}))}})})}const I=B(!1);let k=0,V=0;function h(i){const v=f.value?"clientX":"clientY";V=(n.value&&f.value?-1:1)*l.value,k=i.touches[0][v],I.value=!0}function b(i){if(!o.value)return;const v=f.value?"clientX":"clientY",z=n.value&&f.value?-1:1;l.value=z*(V+k-i.touches[0][v])}function T(i){const v=c.value-u.value;l.value<0||!o.value?l.value=0:l.value>=v&&(l.value=v),I.value=!1}function w(){x.value&&(x.value[f.value?"scrollLeft":"scrollTop"]=0)}const $=B(!1);function j(i){if($.value=!0,!(!o.value||!m.value)){for(const v of i.composedPath())for(const z of m.value.children)if(z===v){l.value=le({selectedElement:z,containerSize:u.value,contentSize:c.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:f.value});return}}}function _(i){$.value=!1}function q(i){var v;!$.value&&!(i.relatedTarget&&((v=m.value)!=null&&v.contains(i.relatedTarget)))&&C()}function J(i){m.value&&(f.value?i.key==="ArrowRight"?C(n.value?"prev":"next"):i.key==="ArrowLeft"&&C(n.value?"next":"prev"):i.key==="ArrowDown"?C("next"):i.key==="ArrowUp"&&C("prev"),i.key==="Home"?C("first"):i.key==="End"&&C("last"))}function C(i){var v,z,Q,Z,p;if(m.value)if(!i)(v=Le(m.value)[0])==null||v.focus();else if(i==="next"){const H=(z=m.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;H?H.focus():C("first")}else if(i==="prev"){const H=(Q=m.value.querySelector(":focus"))==null?void 0:Q.previousElementSibling;H?H.focus():C("last")}else i==="first"?(Z=m.value.firstElementChild)==null||Z.focus():i==="last"&&((p=m.value.lastElementChild)==null||p.focus())}function X(i){const v=l.value+(i==="prev"?-1:1)*u.value;l.value=De(v,0,c.value-u.value)}const Y=y(()=>{let i=l.value>c.value-u.value?-(c.value-u.value)+oe(c.value-u.value-l.value):-l.value;l.value<=0&&(i=oe(-l.value));const v=n.value&&f.value?-1:1;return{transform:`translate${f.value?"X":"Y"}(${v*i}px)`,transition:I.value?"none":"",willChange:I.value?"transform":""}}),N=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),U=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return o.value||Math.abs(l.value)>0;case"mobile":return r.value||o.value||Math.abs(l.value)>0;default:return!r.value&&(o.value||Math.abs(l.value)>0)}}),Te=y(()=>Math.abs(l.value)>0),Ce=y(()=>c.value>Math.abs(l.value)+u.value);return O(()=>d(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":U.value,"v-slide-group--is-overflowing":o.value},e.class],style:e.style,tabindex:$.value||s.selected.value.length?-1:0,onFocus:q},{default:()=>{var i,v,z;return[U.value&&d("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Te.value}],onClick:()=>X("prev")},[((i=t.prev)==null?void 0:i.call(t,N.value))??d(ne,null,{default:()=>[d(ae,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),d("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:w},[d("div",{ref:m,class:"v-slide-group__content",style:Y.value,onTouchstartPassive:h,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:j,onFocusout:_,onKeydown:J},[(v=t.default)==null?void 0:v.call(t,N.value)])]),U.value&&d("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Ce.value}],onClick:()=>X("next")},[((z=t.next)==null?void 0:z.call(t,N.value))??d(ne,null,{default:()=>[d(ae,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:X,scrollOffset:l,focus:C}}});function ct(e){return e?e.map(a=>typeof a=="string"?{title:a,value:a}:a):[]}const rt=M({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...xe({mandatory:"force"}),...he(),...D()},"VTabs"),mt=A()({name:"VTabs",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=je(e,"modelValue"),r=y(()=>ct(e.items)),{densityClasses:s}=me(e),{backgroundColorClasses:o,backgroundColorStyles:l}=qe(E(e,"bgColor"));return Ne({VTab:{color:E(e,"color"),direction:E(e,"direction"),stacked:E(e,"stacked"),fixed:E(e,"fixedTabs"),sliderColor:E(e,"sliderColor"),hideSlider:E(e,"hideSlider")}}),O(()=>{const[u]=se.filterProps(e);return d(se,K(u,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,o.value,e.class],style:[{"--v-tabs-height":G(e.height)},l.value,e.style],role:"tablist",symbol:Se}),{default:()=>[t.default?t.default():r.value.map(c=>d(st,K(c,{key:c.title}),null))]})}),{}}});export{dt as V,at as a,ft as b,mt as c,st as d,ht as e,nt as m};
