import{V as ye,a as O,_ as ge,b as Ve}from"./VBreadcrumbs-aa30814c.js";import{p as te,Z as ke,g as le,u as se,$ as Ce,R as u,h as ae,a0 as oe,a as t,m as F,a1 as we,b as Fe,d as W,e as Pe,F as L,a2 as Ae,a3 as K,a4 as Ie,a5 as Be,_ as Ee,o as Re,c as Se,w as a,s as e,y as c,A as Q,a6 as _,a7 as Y,j as ze,Y as v}from"./index-6a95c3ae.js";import{V as Te}from"./VMain-6b4383b1.js";import{V as X,b as Ue}from"./VCard-f032e528.js";import{c as De,d as C,V as Me,b as x}from"./VTabs-6bf9e4be.js";import{m as de,a as Ne,u as ne,V as z,b as $,c as je,f as Oe,d as We,e as Le,g as Ye}from"./VField-bf0ebd37.js";import{V as Z}from"./VTable-be1aa861.js";import{V as ee,a as Ze,b as qe,c as Ge}from"./VExpansionPanel-24ab5490.js";const He=te({...de(),...ke(Ne(),["inline"])},"VCheckbox"),w=le()({name:"VCheckbox",inheritAttrs:!1,props:He(),emits:{"update:modelValue":l=>!0,"update:focused":l=>!0},setup(l,d){let{attrs:P,slots:p}=d;const s=se(l,"modelValue"),{isFocused:h,focus:o,blur:m}=ne(l),T=Ce(),U=u(()=>l.id||`checkbox-${T}`);return ae(()=>{const[A,I]=oe(P),[B,E]=z.filterProps(l),[D,M]=$.filterProps(l);return t(z,F({class:["v-checkbox",l.class]},A,B,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,id:U.value,focused:h.value,style:l.style}),{...p,default:f=>{let{id:i,messagesId:N,isDisabled:R,isReadonly:y}=f;return t($,F(D,{id:i.value,"aria-describedby":N.value,disabled:R.value,readonly:y.value},I,{modelValue:s.value,"onUpdate:modelValue":j=>s.value=j,onFocus:o,onBlur:m}),p)}})}),{}}}),re="/eicca/assets/tab1-80ffc804.png",Je="/eicca/assets/tab2-e405c6e2.png",Ke="/eicca/assets/tab3-c623b06f.png",Qe="/eicca/assets/tab5-fac0e048.png";const Xe=te({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...de({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>we(l).every(d=>d!=null&&typeof d=="object")},...je({clearable:!0})},"VFileInput"),q=le()({name:"VFileInput",inheritAttrs:!1,props:Xe(),emits:{"click:control":l=>!0,"mousedown:control":l=>!0,"update:focused":l=>!0,"update:modelValue":l=>!0},setup(l,d){let{attrs:P,emit:p,slots:s}=d;const{t:h}=Fe(),o=se(l,"modelValue"),{isFocused:m,focus:T,blur:U}=ne(l),A=u(()=>typeof l.showSize!="boolean"?l.showSize:void 0),I=u(()=>(o.value??[]).reduce((n,r)=>{let{size:g=0}=r;return n+g},0)),B=u(()=>K(I.value,A.value)),E=u(()=>(o.value??[]).map(n=>{const{name:r="",size:g=0}=n;return l.showSize?`${r} (${K(g,A.value)})`:r})),D=u(()=>{var r;const n=((r=o.value)==null?void 0:r.length)??0;return l.showSize?h(l.counterSizeString,n,B.value):h(l.counterString,n)}),M=W(),f=W(),i=W(),N=u(()=>m.value||l.active),R=u(()=>["plain","underlined"].includes(l.variant));function y(){var n;i.value!==document.activeElement&&((n=i.value)==null||n.focus()),m.value||T()}function j(n){G(n)}function ce(n){p("mousedown:control",n)}function G(n){var r;(r=i.value)==null||r.click(),p("click:control",n)}function ie(n){n.stopPropagation(),y(),Ie(()=>{o.value=[],Be(l["onClick:clear"],n)})}return Pe(o,n=>{(!Array.isArray(n)||!n.length)&&i.value&&(i.value.value="")}),ae(()=>{const n=!!(s.counter||l.counter),r=!!(n||s.details),[g,ue]=oe(P),[{modelValue:Gt,...be}]=z.filterProps(l),[pe]=Oe(l);return t(z,F({ref:M,modelValue:o.value,"onUpdate:modelValue":V=>o.value=V,class:["v-file-input",{"v-text-field--plain-underlined":R.value},l.class],style:l.style,"onClick:prepend":j},g,be,{centerAffix:!R.value,focused:m.value}),{...s,default:V=>{let{id:S,isDisabled:k,isDirty:H,isReadonly:he,isValid:me}=V;return t(We,F({ref:f,"prepend-icon":l.prependIcon,onMousedown:ce,onClick:G,"onClick:clear":ie,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},pe,{id:S.value,active:N.value||H.value,dirty:H.value,disabled:k.value,focused:m.value,error:me.value===!1}),{...s,default:fe=>{var J;let{props:{class:_e,...ve}}=fe;return t(L,null,[t("input",F({ref:i,type:"file",readonly:he.value,disabled:k.value,multiple:l.multiple,name:l.name,onClick:b=>{b.stopPropagation(),y()},onChange:b=>{if(!b.target)return;const xe=b.target;o.value=[...xe.files??[]]},onFocus:y,onBlur:U},ve,ue),null),t("div",{class:_e},[!!((J=o.value)!=null&&J.length)&&(s.selection?s.selection({fileNames:E.value,totalBytes:I.value,totalBytesReadable:B.value}):l.chips?E.value.map(b=>t(Le,{key:b,size:"small",color:l.color},{default:()=>[b]})):E.value.join(", "))])])}})},details:r?V=>{var S,k;return t(L,null,[(S=s.details)==null?void 0:S.call(s,V),n&&t(L,null,[t("span",null,null),t(Ye,{active:!!((k=o.value)!=null&&k.length),value:D.value},s.counter)])])}:void 0})}),Ae({},M,f,i)}}),$e={data(){return{tab:"tab-2",keepTab2Active:!1,overlay:!1,items:[{title:"首頁",disabled:!1,href:"breadcrumbs_dashboard"},{title:"關於我們",disabled:!1,href:"breadcrumbs_link_1"},{title:"氣候變遷圖資數據",disabled:!0,href:"breadcrumbs_link_2"}]}},methods:{changeTab(l){l==="tab-6"?this.keepTab2Active=!0:this.keepTab2Active=!1,this.tab=l}}},et={class:"t-box my-0 px-0"},tt=e("div",{class:"topline d-flex align-center py-0"},[e("img",{src:ge,alt:"Point"}),e("h3",null,"風險評估資訊查詢系統")],-1),lt=e("img",{src:Ve,alt:"Point"},null,-1),st=e("img",{class:"img1",src:re,alt:""},null,-1),at=e("h3",null,"01.下載範例表格 ",-1),ot=e("img",{src:Je,alt:""},null,-1),dt=e("h3",null,"02.選擇分析圖資",-1),nt=e("img",{src:Ke,alt:""},null,-1),rt=e("h3",null,"03.上傳分析表格 ",-1),ct=e("img",{src:re,alt:""},null,-1),it=e("h3",null,"04.下載分析結果 ",-1),ut=e("img",{src:Qe,alt:""},null,-1),bt=e("h3",null,"05.瀏覽分析結果 ",-1),pt=e("p",null,"修改分析圖層",-1),ht=e("thead",null,[e("tr",{style:{"background-color":"#5CBCF1"}},[e("th",{style:{width:"80px","text-align":"center","border-radius":"15px 0 0 0"},class:"text-white font-weight-bold"},"項目"),e("th",{class:"text-white font-weight-bold"},"分類"),e("th",{class:"text-white font-weight-bold"},"名稱"),e("th",{class:"box"},[e("div",{class:"test"})]),e("th",{style:{"border-radius":"0 15px 0 0"},class:"text-white font-weight-bold"},"說明")])],-1),mt=e("td",{class:"text-center",style:{border:"1px dashed #b8c2c9","border-top":"none"}},"1",-1),ft=e("td",{style:{"border-right":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},"地形 ",-1),_t={style:{"border-right":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},vt={style:{"border-right":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},xt=e("td",{style:{"border-right":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},null,-1),yt=e("td",{style:{"border-bottom":"none","border-left":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},null,-1),gt=e("td",{style:{"border-bottom":"none","border-right":"1px dashed #b8c2c9"}},null,-1),Vt={style:{"border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},kt={style:{"border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},Ct=e("td",{style:{"border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},null,-1),wt=e("td",{class:"text-center",style:{"border-left":"1px dashed #b8c2c9","border-bottom":"none","border-right":"1px dashed #b8c2c9"}}," 8",-1),Ft=e("td",{style:{"border-bottom":"none"}},"雨量短延時(定量) AR5 RCP8.5",-1),Pt={style:{"border-left":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},At={style:{"border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},It=e("td",{style:{"border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},null,-1),Bt=e("td",{style:{"border-left":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},null,-1),Et=e("td",{style:{"border-bottom":"1px dashed #b8c2c9"}},null,-1),Rt={style:{"border-left":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},St={style:{"border-left":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9"}},zt=e("td",{style:{"border-left":"1px dashed #b8c2c9","border-bottom":"1px dashed #b8c2c9","border-right":"1px dashed #b8c2c9"}},null,-1),Tt=e("tr",null,[e("td")],-1),Ut=e("thead",null,[e("tr",{style:{"background-color":"#5CBCF1"}},[e("th",{style:{"border-radius":"15px 0 0 0"},class:"text-white font-weight-bold"},[e("p",{class:"ps-5"},"項目")]),e("th",{style:{"border-radius":"0 15px 0 0"},class:"text-white font-weight-bold"},[e("p",{class:"pe-5"},"分類")])])],-1),Dt=e("p",{style:{width:"50%"},class:"ps-5"},"1",-1),Mt=e("p",{class:"ps-4"},"地形",-1),Nt=e("td",{class:"text3"},"名稱",-1),jt={style:{border:"1px dashed gray"}},Ot=e("td",{class:"text3"},"說明",-1),Wt=e("tr",null,[e("td",null,"地形(四方位)"),e("td",null,"□"),e("td",null,"圖資數據建置中，請勿應用於本次氣候變遷風險評估。")],-1),Lt=e("td",null,"□",-1),Yt=e("td",null,null,-1),Zt=e("h3",null,"555",-1);function qt(l,d,P,p,s,h){return Re(),Se(Te,{class:"home6"},{default:a(()=>[t(Q,{class:"custom-container pt-13 pb-15 px-0"},{default:a(()=>[e("div",et,[tt,t(ye,{class:"pt-2 px-0 py-0"},{default:a(()=>[t(O,{to:"/",class:"ps-15 pe-4 py-0 top1"},{default:a(()=>[lt]),_:1}),t(O,{class:"ps-15 pe-4 py-2 top2"},{default:a(()=>[c("氣候科學資訊")]),_:1}),t(O,{"active-color":"primary",to:"/data",class:"ps-15 pe-4 py-2 top3"},{default:a(()=>[c("風險評估資訊查詢系統")]),_:1})]),_:1})])]),_:1}),t(Q,{class:"custom-container2 pt-15 px-0"},{default:a(()=>[t(X,{class:"mx-auto out",elevation:"0"},{default:a(()=>[t(Ue,{class:"py-0 px-0 w-100 item"},{default:a(()=>[t(De,{class:"tabs px-0","fixed-tabs":"",stacked:"",modelValue:s.tab,"onUpdate:modelValue":d[0]||(d[0]=o=>s.tab=o)},{default:a(()=>[t(C,{class:_(["btns",{"custom-active-tab":s.tab==="tab-1"}]),value:"tab-1"},{default:a(()=>[st,at]),_:1},8,["class"]),t(C,{class:_(["btns",{"custom-active-tab":s.tab==="tab-2"||s.tab==="tab-6"&&s.keepTab2Active}]),value:"tab-2"},{default:a(()=>[ot,dt]),_:1},8,["class"]),t(C,{class:_(["btns",{"custom-active-tab":s.tab==="tab-3"}]),value:"tab-3"},{default:a(()=>[nt,rt]),_:1},8,["class"]),t(C,{class:_(["btns",{"custom-active-tab":s.tab==="tab-4"}]),value:"tab-4"},{default:a(()=>[ct,it]),_:1},8,["class"]),t(C,{class:_(["btns",{"custom-active-tab":s.tab==="tab-5"}]),value:"tab-5"},{default:a(()=>[ut,bt]),_:1},8,["class"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(X,{elevation:"0",class:"my-15",color:"transparent"},{default:a(()=>[t(Me,{modelValue:s.tab,"onUpdate:modelValue":d[8]||(d[8]=o=>s.tab=o),color:"transparent",style:{height:"700px"}},{default:a(()=>[t(x,{value:"tab-1"},{default:a(()=>[t(q,{class:"download ms-5",onClick:d[1]||(d[1]=o=>s.overlay=!s.overlay),clearable:"",label:"點選下載文件",variant:"underlined"}),t(Y,{modelValue:s.overlay,"onUpdate:modelValue":d[2]||(d[2]=o=>s.overlay=o)},null,8,["modelValue"])]),_:1}),t(x,{value:"tab-2"},{default:a(()=>[t(ze,{rounded:"pill",color:"success",class:_(["analyse",{"custom-active-tab":s.tab==="tab-6"}]),value:"tab-6",onClick:d[3]||(d[3]=o=>h.changeTab("tab-6"))},{default:a(()=>[pt,t(v,null,{default:a(()=>[c("mdi-file-edit")]),_:1})]),_:1},8,["class"]),t(Z,{class:"mt-10",color:"transparent"},{default:a(()=>[ht,e("tbody",null,[e("tr",null,[mt,ft,e("td",_t,[c(" 地形加成(八方位)"),t(v,{color:"#FEAE73",class:"ps-3"},{default:a(()=>[c("mdi-alert-circle")]),_:1})]),e("td",vt,[t(w,{"model-value":!0,disabled:"",style:{width:"40px",height:"50px",margin:"0 auto"},class:"mb-1"})]),xt]),e("tr",null,[yt,gt,e("td",Vt,[c(" 150mm/6hr-基期(1980年-2008年)"),t(v,{color:"#FEAE73",class:"ps-3"},{default:a(()=>[c("mdi-alert-circle")]),_:1})]),e("td",kt,[t(w,{"model-value":!0,disabled:"",style:{width:"40px",height:"50px",margin:"0 auto"},class:"mb-1"})]),Ct]),e("tr",null,[wt,Ft,e("td",Pt,[c(" 150mm/6hr-世紀中(2039年-2065年)"),t(v,{color:"#FEAE73",class:"ps-3"},{default:a(()=>[c("mdi-alert-circle")]),_:1})]),e("td",At,[t(w,{"model-value":!0,disabled:"",style:{width:"40px",height:"50px",margin:"0 auto"},class:"mb-1"})]),It]),e("tr",null,[Bt,Et,e("td",Rt,[c(" 150mm/6hr-世紀末(2075年-2099年)"),t(v,{color:"#FEAE73",class:"ps-3"},{default:a(()=>[c("mdi-alert-circle")]),_:1})]),e("td",St,[t(w,{"model-value":!0,disabled:"",style:{width:"40px",height:"50px",margin:"0 auto"},class:"mb-1"})]),zt]),Tt])]),_:1})]),_:1}),t(x,{value:"tab-6"},{default:a(()=>[t(Z,null,{default:a(()=>[Ut]),_:1}),t(ee,{variant:"accordion"},{default:a(()=>[t(ee,{variant:"accordion"},{default:a(()=>[t(Ze,null,{default:a(()=>[t(qe,{class:"d-flex bg-color:#F1F4F4",style:{"justify-content":"space-between"}},{default:a(()=>[Dt,Mt]),_:1}),t(Ge,null,{default:a(()=>[t(Z,{class:"border"},{default:a(()=>[e("tbody",null,[e("tr",null,[Nt,e("td",jt,[t(w,{"model-value":!0,disabled:"",style:{width:"40px",height:"50px",margin:"0 auto"},class:"mb-1"})]),Ot]),Wt,e("tr",null,[e("td",null,[c("地形加成(八方位)"),t(v,{color:"#FEAE73",class:"ps-3"},{default:a(()=>[c("mdi-alert-circle")]),_:1})]),Lt,Yt])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(x,{value:"tab-3"},{default:a(()=>[t(q,{class:"download ms-5",onClick:d[4]||(d[4]=o=>s.overlay=!s.overlay),clearable:"",label:"點擊上傳文件",variant:"underlined"}),t(Y,{modelValue:s.overlay,"onUpdate:modelValue":d[5]||(d[5]=o=>s.overlay=o)},null,8,["modelValue"])]),_:1}),t(x,{value:"tab-4"},{default:a(()=>[t(q,{class:"download ms-5",onClick:d[6]||(d[6]=o=>s.overlay=!s.overlay),clearable:"",label:"點選下載文件",variant:"underlined"}),t(Y,{modelValue:s.overlay,"onUpdate:modelValue":d[7]||(d[7]=o=>s.overlay=o)},null,8,["modelValue"])]),_:1}),t(x,{value:"tab-5"},{default:a(()=>[Zt]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const ll=Ee($e,[["render",qt]]);export{ll as default};
