var W=Object.defineProperty;var A=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var I=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))K.call(e,n)&&I(t,n,e[n]);if(A)for(var n of A(e))Q.call(e,n)&&I(t,n,e[n]);return t};import{ai as O,c as N,aF as J,y as j,a5 as D,r as k,g as x,aG as U,N as X,l as z,aH as Y,aI as Z,w as L,al as B,aJ as ee,aK as E,aL as te,u as ae,B as ne,aq as oe,p as _,q as S,H as y}from"./index-2vi5jfnI.js";import{u as H,b as le,a as ue}from"./useNav-BYUNaaRJ.js";function re(){const{$storage:t,$config:e}=O(),n=()=>{var r,g,i,c,h,f,$,C,p,T,l,u,d,m,s,b,M;J().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=j),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},D().locale.value=(g=e==null?void 0:e.Locale)!=null?g:"zh"),t.layout||(t.layout={layout:(i=e==null?void 0:e.Layout)!=null?i:"vertical",theme:(c=e==null?void 0:e.Theme)!=null?c:"light",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(f=e==null?void 0:e.SidebarStatus)!=null?f:!0,epThemeColor:($=e==null?void 0:e.EpThemeColor)!=null?$:"#409EFF",themeColor:(C=e==null?void 0:e.Theme)!=null?C:"light",overallStyle:(p=e==null?void 0:e.OverallStyle)!=null?p:"light"}),t.configure||(t.configure={grey:(T=e==null?void 0:e.Grey)!=null?T:!1,weak:(l=e==null?void 0:e.Weak)!=null?l:!1,hideTabs:(u=e==null?void 0:e.HideTabs)!=null?u:!1,hideFooter:(d=e.HideFooter)!=null?d:!0,showLogo:(m=e==null?void 0:e.ShowLogo)!=null?m:!0,showModel:(s=e==null?void 0:e.ShowModel)!=null?s:"smart",multiTagsCache:(b=e==null?void 0:e.MultiTagsCache)!=null?b:!1,stretch:(M=e==null?void 0:e.Stretch)!=null?M:!1})},a=N(()=>t==null?void 0:t.layout.layout),o=N(()=>t.layout);return{layout:a,layoutTheme:o,initStorage:n}}const w={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"D:/Code/qc/personal/admin-thin/node_modules/.pnpm/@pureadmin+theme@3.2.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #000000d9 !default;
        $menuBg: #fff !default;
        $menuHover: #f6f6f6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: rgb(0 0 0 / 60%) !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: rgb(64 145 247 / 15%) !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: rgb(105 58 201 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: rgb(216 68 147 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: rgb(225 60 57 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: rgb(232 95 51 / 15%) !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: rgb(89 191 193 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: rgb(96 172 128 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `}]},se="/admin/",de="assets",q=t=>{let e=t.replace("#","").match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e},G=(t,e,n)=>{let a=[t.toString(16),e.toString(16),n.toString(16)];for(let o=0;o<3;o++)a[o].length==1&&(a[o]=`0${a[o]}`);return`#${a.join("")}`},fe=(t,e)=>{let n=q(t);for(let a=0;a<3;a++)n[a]=Math.floor(n[a]*(1-e));return G(n[0],n[1],n[2])},ce=(t,e)=>{let n=q(t);for(let a=0;a<3;a++)n[a]=Math.floor((255-n[a])*e+n[a]);return G(n[0],n[1],n[2])},P=t=>`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`,R=({scopeName:t,multipleScopeVars:e})=>{const n=Array.isArray(e)&&e.length?e:w.multipleScopeVars;let a=document.documentElement.className;new RegExp(P(t)).test(a)||(n.forEach(o=>{a=a.replace(new RegExp(P(o.scopeName),"g"),` ${t} `)}),document.documentElement.className=a.replace(/(^\s+|\s+$)/g,""))},F=({id:t,href:e})=>{const n=document.createElement("link");return n.rel="stylesheet",n.href=e,n.id=t,n},me=t=>{const e=v({scopeName:"theme-default",customLinkHref:r=>r},t),n=e.themeLinkTagId||w.themeLinkTagId;let a=document.getElementById(n);const o=e.customLinkHref(`${se.replace(/\/$/,"")}${`/${de}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(a){a.id=`${n}_old`;const r=F({id:n,href:o});a.nextSibling?a.parentNode.insertBefore(r,a.nextSibling):a.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{a.parentNode.removeChild(a),a=null},60),R(e)};return}a=F({id:n,href:o}),R(e),document[(e.themeLinkTagInjectTo||w.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(a)};function _e(){var p,T;const{layoutTheme:t,layout:e}=re(),n=k([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:a}=O(),o=k((p=a==null?void 0:a.layout)==null?void 0:p.darkMode),r=k((T=a==null?void 0:a.layout)==null?void 0:T.overallStyle),g=document.documentElement;function i(l,u,d){const m=d||document.body;let{className:s}=m;s=s.replace(u,"").trim(),m.className=l?`${s} ${u}`:s}function c(l=(d=>(d=x().Theme)!=null?d:"light")(),u=!0){var s,b;t.value.theme=l,me({scopeName:`layout-theme-${l}`});const m=a.layout.themeColor;if(a.layout={layout:e.value,theme:l,darkMode:o.value,sidebarStatus:(s=a.layout)==null?void 0:s.sidebarStatus,epThemeColor:(b=a.layout)==null?void 0:b.epThemeColor,themeColor:u?l:m,overallStyle:r.value},l==="default"||l==="light")f(x().EpThemeColor);else{const M=n.value.find(V=>V.themeColor===l);f(M.color)}}function h(l,u,d){document.documentElement.style.setProperty(`--el-color-primary-${l}-${u}`,o.value?fe(d,u/10):ce(d,u/10))}const f=l=>{H().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let u=1;u<=2;u++)h("dark",u,l);for(let u=1;u<=9;u++)h("light",u,l)};function $(l){r.value=l,H().epTheme==="light"&&o.value?c("default",!1):c(H().epTheme,!1),o.value?document.documentElement.classList.add("dark"):(a.layout.themeColor==="light"&&c("light",!1),document.documentElement.classList.remove("dark"))}function C(){U(),X().clear();const{Grey:l,Weak:u,MultiTagsCache:d,EpThemeColor:m,Layout:s}=x();le().setLayout(s),f(m),z().multiTagsCacheChange(d),i(l,"html-grey",document.querySelector("html")),i(u,"html-weakness",document.querySelector("html")),Y.push("/login"),z().handleTags("equal",[...j]),Z()}return{body:g,dataTheme:o,overallStyle:r,layoutTheme:t,themeColors:n,onReset:C,toggleClass:i,dataThemeChange:$,setEpThemeColor:f,setLayoutThemeColor:c}}function Se(t,e){const n=/^IF-/;if(n.test(t)){const a=t.split(n)[1],o=a.slice(0,a.indexOf(" ")==-1?a.length:a.indexOf(" ")),r=a.slice(a.indexOf(" ")+1,a.length);return L({name:"FontIcon",render(){return B(ee,v({icon:o,iconType:r},e))}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?e?B(t,v({},e)):t:typeof t=="object"?L({name:"OfflineIcon",render(){return B(E,v({icon:t},e))}}):L({name:"Icon",render(){const a=t&&t.includes(":")?te:E;return B(a,v({icon:t},e))}})}function Ae(t){const{$storage:e,changeTitle:n,handleResize:a}=ue(),{locale:o,t:r}=D(),g=ae();function i(){e.locale={locale:"zh"},o.value="zh",t&&a(t.value)}function c(){e.locale={locale:"en"},o.value="en",t&&a(t.value)}return ne(()=>o.value,()=>{n(g.meta)}),oe(()=>{var h,f;o.value=(f=(h=e.locale)==null?void 0:h.locale)!=null?f:"zh"}),{t:r,route:g,locale:o,translationCh:i,translationEn:c}}const ie={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},he=y("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ge=[he];function ve(t,e){return _(),S("svg",ie,[...ge])}const Ie={render:ve},Ne={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},pe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Te=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),be=y("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),ye=[Te,be];function $e(t,e){return _(),S("svg",pe,[...ye])}const ze={render:$e},Ce={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Me=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Be=y("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),ke=[Me,Be];function xe(t,e){return _(),S("svg",Ce,[...ke])}const Ee={render:xe};export{Ae as a,_e as b,ze as c,Ne as d,Ee as e,re as f,Ie as g,me as t,Se as u};
