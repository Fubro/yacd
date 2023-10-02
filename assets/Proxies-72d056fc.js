import{r as v,R as Z,P as A,c as b,V as Ce,j as s,B as g,e as y,W as ke,z as Pe,X as ne,Y as re,b as C,Z as Ne,_ as Se,$ as oe,a0 as z,v as D,a1 as $e,a2 as ae,a3 as T,a4 as le,a5 as H,a6 as q,a7 as Ae,a8 as Be,u as K,a9 as Oe,aa as Te,ab as De,g as ce,C as ie,ac as Le,m as G,a as Fe,ad as Re,ae as Me,af as Ee,ag as Ie}from"./index-f3e68e71.js";import{C as Ue}from"./chevron-down-a9aef5f3.js";import{F as ze,p as He,A as qe,I as Ke}from"./Fab-3f2d2e5e.js";import{R as Ye,T as Ze}from"./TextFilter-e0d1fc98.js";import{f as Ge}from"./index-aa1d003b.js";import{R as Ve}from"./rotate-cw-fb2740ed.js";import{S as We,T as V}from"./Select-a5daab07.js";import"./debounce-c1ba2006.js";function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function Xe(e,t){if(e==null)return{};var n=Je(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Je(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Y=v.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=e.size,a=o===void 0?24:o,l=Xe(e,["color","size"]);return Z.createElement("svg",U({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),Z.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))});Y.propTypes={color:A.string,size:A.oneOfType([A.string,A.number])};Y.displayName="Zap";const W=Y;function ue(e){const t=e.size||24,n=b({[Ce.animate]:e.animate});return s.jsx("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}const Qe="_FlexCenter_1380a_1",et={FlexCenter:Qe};function tt({children:e}){return s.jsx("div",{className:et.FlexCenter,children:e})}const{useRef:X,useEffect:st}=y;function nt({onClickPrimaryButton:e,onClickSecondaryButton:t}){const n=X(null),r=X(null);st(()=>{n.current.focus()},[]);const o=a=>{a.code==="ArrowRight"?r.current.focus():a.code==="ArrowLeft"&&n.current.focus()};return s.jsxs("div",{onKeyDown:o,children:[s.jsx("h2",{children:"Close Connections?"}),s.jsx("p",{children:"Click [Yes] to close those connections that are still using the old selected proxy in this group"}),s.jsx("div",{style:{height:30}}),s.jsxs(tt,{children:[s.jsx(g,{onClick:e,ref:n,children:"Yes"}),s.jsx("div",{style:{width:20}}),s.jsx(g,{onClick:t,ref:r,children:"No"})]})]})}const rt="_header_1y9js_1",ot="_arrow_1y9js_8",at="_isOpen_1y9js_13",lt="_btn_1y9js_20",ct="_qty_1y9js_25",k={header:rt,arrow:ot,isOpen:at,btn:lt,qty:ct};function de({name:e,type:t,toggle:n,isOpen:r,qty:o}){const a=v.useCallback(l=>{l.preventDefault(),(l.key==="Enter"||l.key===" ")&&n()},[n]);return s.jsxs("div",{className:k.header,onClick:n,style:{cursor:"pointer"},tabIndex:0,onKeyDown:a,role:"button",children:[s.jsx("div",{children:s.jsx(ke,{name:e,type:t})}),typeof o=="number"?s.jsx("span",{className:k.qty,children:o}):null,s.jsx(g,{kind:"minimal",onClick:n,className:k.btn,title:"Toggle collapsible section",children:s.jsx("span",{className:b(k.arrow,{[k.isOpen]:r}),children:s.jsx(Ue,{size:20})})})]})}const{useMemo:it}=y;function ut(e,t){return e.filter(n=>{const r=t[n];return r===void 0?!0:!("number"in r&&r.number===0)})}const B=(e,t)=>{if(e&&"number"in e&&e.number>0)return e.number;const n=t&&t.type;return n&&re.indexOf(n)>-1?-1:999999},dt={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort((r,o)=>{const a=B(t[r],n&&n[r]),l=B(t[o],n&&n[o]);return a-l}),LatencyDesc:(e,t,n)=>e.sort((r,o)=>{const a=B(t[r],n&&n[r]);return B(t[o],n&&n[o])-a}),NameAsc:e=>e.sort(),NameDesc:e=>e.sort((t,n)=>t>n?-1:t<n?1:0)};function xt(e,t){const n=t.toLowerCase().split(" ").map(r=>r.trim()).filter(r=>!!r);return n.length===0?e:e.filter(r=>{let o=0;for(;o<n.length;o++){const a=n[o];if(r.toLowerCase().indexOf(a)>-1)return!0}return!1})}function pt(e,t,n,r,o,a){let l=[...e];return n&&(l=ut(e,t)),typeof r=="string"&&r!==""&&(l=xt(l,r)),dt[o](l,t,a)}function xe(e,t,n,r,o){const[a]=Pe(ne);return it(()=>pt(e,t,n,a,r,o),[e,t,n,a,r,o])}const ht="_header_5pmv2_1",mt="_groupHead_5pmv2_5",yt="_action_5pmv2_11",R={header:ht,groupHead:mt,action:yt},ft="_proxy_123h4_1",jt="_now_123h4_23",_t="_error_123h4_27",vt="_selectable_123h4_30",gt="_proxyType_123h4_38",wt="_row_123h4_49",bt="_proxyName_123h4_55",Ct="_proxySmall_123h4_63",f={proxy:ft,now:jt,error:_t,selectable:vt,proxyType:gt,row:wt,proxyName:bt,proxySmall:Ct},kt="_proxyLatency_pw0sa_1",Pt={proxyLatency:kt};function Nt({latency:e,color:t}){let n=" ";if(e)switch(e.kind){case"Error":case"Testing":n="- ms";break;case"Result":n=(e.number!==0?e.number:"-")+" ms";break}return s.jsx("span",{className:Pt.proxyLatency,style:{color:t},children:n})}const{useMemo:N}=y,w={good:"#67c23a",normal:"#d4b75c",bad:"#e67f3c",na:"#909399"};function pe(e){if(!e||e.kind!=="Result")return w.na;const t=e.number;return t===0?w.na:t<200?w.good:t<400?w.normal:typeof t=="number"?w.bad:w.na}function St(e,t){return re.indexOf(t)>-1?{border:"1px dotted #777"}:{background:pe(e)}}function $t({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:a}){const l=N(()=>St(r,n.type),[r,n]),c=N(()=>{let d=t;return r&&r.kind==="Result"&&typeof r.number=="number"&&(d+=" "+r.number+" ms"),d},[t,r]),i=v.useCallback(()=>{o&&a&&a(t)},[t,a,o]),u=N(()=>b(f.proxySmall,{[f.now]:e,[f.selectable]:o}),[o,e]),x=v.useCallback(d=>{d.key==="Enter"&&i()},[i]);return s.jsx("div",{title:c,className:u,style:l,onClick:i,onKeyDown:x,role:o?"menuitem":""})}function At(e){return e==="Shadowsocks"?"SS":e}const Bt=e=>({left:e.left+window.scrollX-5,top:e.top+window.scrollY-38});function Ot({children:e,label:t,"aria-label":n}){const[r,o]=Ne();return s.jsxs(s.Fragment,{children:[v.cloneElement(e,r),s.jsx(Se,{...o,label:t,"aria-label":n,position:Bt})]})}function Tt({now:e,name:t,proxy:n,latency:r,isSelectable:o,onClick:a}){const l=N(()=>pe(r),[r]),c=v.useCallback(()=>{o&&a&&a(t)},[t,a,o]),i=v.useCallback(x=>{x.key==="Enter"&&c()},[c]),u=N(()=>b(f.proxy,{[f.now]:e,[f.selectable]:o}),[o,e]);return s.jsxs("div",{tabIndex:0,className:u,onClick:c,onKeyDown:i,role:o?"menuitem":"",children:[s.jsx("div",{className:f.proxyName,children:s.jsx(Ot,{label:t,"aria-label":"proxy name: "+t,children:s.jsx("span",{children:t})})}),s.jsxs("div",{className:f.row,children:[s.jsx("span",{className:f.proxyType,style:{opacity:e?.6:.2},children:At(n.type)}),s.jsx(Nt,{latency:r,color:l})]})]})}const he=(e,{name:t})=>{const n=oe(e),r=z(e);return{proxy:n[t]||{name:t,type:"Unknown",history:[]},latency:r[t]}},Dt=C(he)(Tt),Lt=C(he)($t),Ft="_list_jv8rm_1",Rt="_listSummaryView_jv8rm_18",me={list:Ft,listSummaryView:Rt};function ye({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){const o=e;return s.jsx("div",{className:me.list,children:o.map(a=>s.jsx(Dt,{onClick:r,isSelectable:n,name:a,now:a===t},a))})}function fe({all:e,now:t,isSelectable:n,itemOnTapCallback:r}){return s.jsx("div",{className:me.listSummaryView,children:e.map(o=>s.jsx(Lt,{onClick:r,isSelectable:n,name:o,now:o===t},o))})}const{createElement:Mt,useCallback:M,useMemo:Et}=y;function It({name:e,all:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,proxies:a,type:l,now:c,isOpen:i,apiConfig:u,dispatch:x}){const d=xe(t,n,r,o,a),p=Et(()=>l==="Selector",[l]),{app:{updateCollapsibleIsOpen:j},proxies:{requestDelayForProxies:h}}=D(),S=M(()=>{j("proxyGroup",e,!i)},[i,j,e]),L=M($=>{p&&x($e(u,e,$))},[u,x,e,p]),_=ae(!1),F=M(async()=>{if(!_.value){_.set(!0);try{await h(u,d)}catch{}_.set(!1)}},[d,u,h,_]);return s.jsxs("div",{className:R.group,children:[s.jsxs("div",{className:R.groupHead,children:[s.jsx(de,{name:e,type:l,toggle:S,qty:d.length,isOpen:i}),s.jsx("div",{className:R.action,children:s.jsx(T,{label:"Test latency",children:s.jsx(g,{kind:"circular",onClick:F,children:s.jsx(ue,{animate:_.value,size:16})})})})]}),Mt(i?ye:fe,{all:d,now:c,isSelectable:p,itemOnTapCallback:L})]})}const Ut=C((e,{name:t,delay:n})=>{const r=oe(e),o=le(e),a=H(e),l=q(e),c=r[t],{all:i,type:u,now:x}=c;return{all:i,delay:n,hideUnavailableProxies:l,proxySortBy:a,proxies:r,type:u,now:x,isOpen:o[`proxyGroup:${t}`]}})(It),{useCallback:je,useState:zt}=y;function Ht({dispatch:e,apiConfig:t,name:n}){return je(()=>e(Ae(t,n)),[t,e,n])}function qt({dispatch:e,apiConfig:t,names:n}){const[r,o]=zt(!1);return[je(async()=>{if(!r){o(!0);try{await e(Be(t,n))}catch{}o(!1)}},[t,e,n,r]),r]}const{useState:Kt,useCallback:Yt}=y;function Zt({isLoading:e}){return e?s.jsx(Ke,{children:s.jsx(W,{width:16,height:16})}):s.jsx(W,{width:16,height:16})}function Gt({dispatch:e,apiConfig:t}){const[n,r]=Kt(!1);return[Yt(()=>{n||(r(!0),e(Oe(t)).then(()=>r(!1),()=>r(!1)))},[t,e,n]),n]}function Vt({dispatch:e,apiConfig:t,proxyProviders:n}){const{t:r}=K(),[o,a]=Gt({dispatch:e,apiConfig:t}),[l,c]=qt({apiConfig:t,dispatch:e,names:n.map(i=>i.name)});return s.jsx(ze,{icon:s.jsx(Zt,{isLoading:a}),onClick:o,text:r("Test Latency"),style:He,children:n.length>0?s.jsx(qe,{text:r("update_all_proxy_provider"),onClick:l,children:s.jsx(Ye,{isRotating:c})}):null})}const Wt="_updatedAt_919yi_1",Xt="_main_919yi_8",Jt="_head_919yi_17",Qt="_action_919yi_23",es="_refresh_919yi_31",P={updatedAt:Wt,main:Xt,head:Jt,action:Qt,refresh:es},{useCallback:J}=y;function ts({name:e,proxies:t,delay:n,hideUnavailableProxies:r,proxySortBy:o,vehicleType:a,updatedAt:l,subscriptionInfo:c,isOpen:i,dispatch:u,apiConfig:x}){const d=xe(t,n,r,o),p=ae(!1),j=Ht({dispatch:u,apiConfig:x,name:e}),h=J(()=>{if(p.value)return;p.set(!0);const m=()=>p.set(!1);u(Te(x,e)).then(m,m)},[x,u,e,p]),{app:{updateCollapsibleIsOpen:S}}=D(),L=J(()=>{S("proxyProvider",e,!i)},[i,S,e]),_=Ge(new Date(l),new Date),F=c?Q(c.Total):0,$=c?Q(c.Download+c.Upload):0,_e=c?((c.Download+c.Upload)/c.Total*100).toFixed(2):0,ve=()=>{if(c.Expire===0)return"Null";const m=new Date(c.Expire*1e3),ge=m.getFullYear()+"-",we=(m.getMonth()+1<10?"0"+(m.getMonth()+1):m.getMonth()+1)+"-",be=(m.getDate()<10?"0"+m.getDate():m.getDate())+" ";return ge+we+be};return s.jsxs("div",{className:P.main,children:[s.jsxs("div",{className:P.head,children:[s.jsx(de,{name:e,toggle:L,type:a,isOpen:i,qty:d.length}),s.jsxs("div",{className:P.action,children:[s.jsx(T,{label:"Update",children:s.jsx(g,{kind:"circular",onClick:j,children:s.jsx(rs,{})})}),s.jsx(T,{label:"Health Check",children:s.jsx(g,{kind:"circular",onClick:h,children:s.jsx(ue,{animate:p.value,size:16})})})]})]}),s.jsxs("div",{className:P.updatedAt,children:[c&&s.jsxs("small",{children:[$," / ",F," ( ",_e,"% )    Expire: ",ve()," "]}),s.jsx("br",{}),s.jsxs("small",{children:["Updated ",_," ago"]})]}),i?s.jsx(ye,{all:d}):s.jsx(fe,{all:d})]})}const ss={rest:{scale:1},pressed:{scale:.95}},ns={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Q(e,t=2){if(!+e)return"0 Bytes";const n=1024,r=t<0?0:t,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(n));return`${parseFloat((e/Math.pow(n,a)).toFixed(r))} ${o[a]}`}function rs(){const t=De.read().motion;return s.jsx(t.div,{className:P.refresh,variants:ss,initial:"rest",whileHover:"hover",whileTap:"pressed",children:s.jsx(t.div,{className:"flexCenter",variants:ns,children:s.jsx(Ve,{size:16})})})}const os=(e,{proxies:t,name:n})=>{const r=q(e),o=z(e),a=le(e),l=ce(e),c=H(e);return{apiConfig:l,proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:c,isOpen:a[`proxyProvider:${n}`]}},as=C(os)(ts);function ls({items:e}){return e.length===0?null:s.jsxs(s.Fragment,{children:[s.jsx(ie,{title:"Proxy Provider"}),s.jsx("div",{children:e.map(t=>s.jsx(as,{name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt,subscriptionInfo:t.subscriptionInfo},t.name))})]})}const cs="_labeledInput_cmki0_1",E={labeledInput:cs},is=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:ee}=y;function us({appConfig:e}){const{app:{updateAppConfig:t}}=D(),n=ee(a=>{t("proxySortBy",a.target.value)},[t]),r=ee(a=>{t("hideUnavailableProxies",a)},[t]),{t:o}=K();return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:E.labeledInput,children:[s.jsx("span",{children:o("sort_in_grp")}),s.jsx("div",{children:s.jsx(We,{options:is.map(a=>[a[0],o(a[1])]),selected:e.proxySortBy,onChange:n})})]}),s.jsx("hr",{}),s.jsxs("div",{className:E.labeledInput,children:[s.jsx("label",{htmlFor:"hideUnavailableProxies",children:o("hide_unavail_proxies")}),s.jsx("div",{children:s.jsx(V,{id:"hideUnavailableProxies",checked:e.hideUnavailableProxies,onChange:r})})]}),s.jsxs("div",{className:E.labeledInput,children:[s.jsx("label",{htmlFor:"autoCloseOldConns",children:o("auto_close_conns")}),s.jsx("div",{children:s.jsx(V,{id:"autoCloseOldConns",checked:e.autoCloseOldConns,onChange:a=>t("autoCloseOldConns",a)})})]})]})}const ds=e=>{const t=H(e),n=q(e),r=Le(e);return{appConfig:{proxySortBy:t,hideUnavailableProxies:n,autoCloseOldConns:r}}},xs=C(ds)(us),ps="_overlay_uuk3b_1",hs="_cnt_uuk3b_5",ms="_afterOpen_uuk3b_16",I={overlay:ps,cnt:hs,afterOpen:ms},{useMemo:ys}=y;function te({isOpen:e,onRequestClose:t,children:n}){const r=ys(()=>({base:b(G.content,I.cnt),afterOpen:I.afterOpen,beforeClose:""}),[]);return s.jsx(Fe,{isOpen:e,onRequestClose:t,className:r,overlayClassName:b(G.overlay,I.overlay),children:n})}function fs({color:e="currentColor",size:t=24}){return s.jsxs("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:t,height:t,stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M2 6h9M18.5 6H22"}),s.jsx("circle",{cx:"16",cy:"6",r:"2"}),s.jsx("path",{d:"M22 18h-9M6 18H2"}),s.jsx("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}const js="_topBar_16fpp_1",_s="_topBarRight_16fpp_13",vs="_textFilterContainer_16fpp_22",gs="_group_16fpp_29",O={topBar:js,topBarRight:_s,textFilterContainer:vs,group:gs},{useState:ws,useEffect:bs,useCallback:se,useRef:Cs}=y;function ks({dispatch:e,groupNames:t,delay:n,proxyProviders:r,apiConfig:o,showModalClosePrevConns:a}){const l=Cs({}),c=se(()=>{l.current.startAt=Date.now(),e(Re(o)).then(()=>{l.current.completeAt=Date.now()})},[o,e]);bs(()=>{c();const h=()=>{l.current.startAt&&Date.now()-l.current.startAt>3e4&&c()};return window.addEventListener("focus",h,!1),()=>window.removeEventListener("focus",h,!1)},[c]);const[i,u]=ws(!1),x=se(()=>{u(!1)},[]),{proxies:{closeModalClosePrevConns:d,closePrevConnsAndTheModal:p}}=D(),{t:j}=K();return s.jsxs(s.Fragment,{children:[s.jsx(te,{isOpen:i,onRequestClose:x,children:s.jsx(xs,{})}),s.jsxs("div",{className:O.topBar,children:[s.jsx(ie,{title:j("Proxies")}),s.jsxs("div",{className:O.topBarRight,children:[s.jsx("div",{className:O.textFilterContainer,children:s.jsx(Ze,{textAtom:ne})}),s.jsx(T,{label:j("settings"),children:s.jsx(g,{kind:"minimal",onClick:()=>u(!0),children:s.jsx(fs,{size:16})})})]})]}),s.jsx("div",{children:t.map(h=>s.jsx("div",{className:O.group,children:s.jsx(Ut,{name:h,delay:n,apiConfig:o,dispatch:e})},h))}),s.jsx(ls,{items:r}),s.jsx("div",{style:{height:60}}),s.jsx(Vt,{dispatch:e,apiConfig:o,proxyProviders:r}),s.jsx(te,{isOpen:a,onRequestClose:d,children:s.jsx(nt,{onClickPrimaryButton:()=>p(o),onClickSecondaryButton:d})})]})}const Ps=e=>({apiConfig:ce(e),groupNames:Me(e),proxyProviders:Ee(e),delay:z(e),showModalClosePrevConns:Ie(e)}),Ls=C(Ps)(ks);export{Ls as default};
