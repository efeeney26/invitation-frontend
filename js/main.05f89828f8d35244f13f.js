(()=>{"use strict";var e,t,n,r={3146:(e,t,n)=>{var r=n(7294),a=n(3935),o=n(9617),i=n(4298),c=n(5974),l=n(5810),u=n(4942),s=n(5861),p=n(8152),m=n(7757),f=n.n(m),d=n(1508),v=n(2658),h=n(9062),g=n(6310),b=n(9602),y=n(2116),x=(0,b.ZP)(d.Z)((function(e){var t,n=e.theme;return t={height:"5rem"},(0,u.Z)(t,n.breakpoints.up("sm"),{height:"15rem"}),(0,u.Z)(t,n.breakpoints.up("md"),{height:"25rem"}),t})),E=(0,b.ZP)("img")((function(){return{width:"100%",height:"100%",objectFit:"cover"}})),Z=(0,b.ZP)(y.Z)((function(e){return{background:e.theme.palette.common.invitationGold}})),O=n(3984),w=function(e){var t=e.invitation;return r.createElement(r.Fragment,null,t?r.createElement(v.Z,{dangerouslySetInnerHTML:{__html:t}}):r.createElement(r.Fragment,null,r.createElement(d.Z,{mt:1,mb:1,width:"100%",height:"16rem"},r.createElement(g.Z,{width:"100%",height:"100%",url:""})),r.createElement(Z,null),r.createElement(d.Z,{mt:1,mb:1},r.createElement(v.Z,{variant:"caption",gutterBottom:!0,paragraph:!0},"МЕСТО: Академия Кавказкой Кухни"),r.createElement(v.Z,{variant:"caption",gutterBottom:!0,paragraph:!0},"АДРЕС: слобода Талица, ул.Янтарная Слобода, 14в, зал Эльбрус"),r.createElement(v.Z,{variant:"caption",paragraph:!0},"СБОР ГОСТЕЙ: 16:00")),r.createElement(Z,null)),r.createElement(d.Z,{mt:1},r.createElement(v.Z,{variant:"caption"},"РЕКОМЕНДОВАННЫЕ ОТТЕНКИ:"),r.createElement(x,null,r.createElement(E,{src:O,alt:"palette"}))))};w.defaultProps={invitation:""};const j=w;var k=n(3144),P=n(5671),S=n(9669),G=n.n(S)().create({baseURL:"".concat("https://invitation-backend-rest.herokuapp.com","/api/guests")});const _=new((0,k.Z)((function e(){var t=this;(0,P.Z)(this,e),(0,u.Z)(this,"client",G),(0,u.Z)(this,"getGuest",(function(e){return t.client.get("/guest?id=".concat(e))})),(0,u.Z)(this,"updateGuest",(function(e){return t.client.patch("/updateGuest",e)}))})));var C=n(1551),F=(0,b.ZP)(C.Z)((function(e){var t=e.theme;return{borderColor:t.palette.common.invitationGold,color:t.palette.common.invitationGold,borderRadius:"10px","&:hover":{borderColor:t.palette.common.invitationGold,color:t.palette.common.invitationGold}}}));function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=function(){var e=(0,r.useState)(!1),t=(0,p.Z)(e,2),n=t[0],a=t[1],o=(0,r.useState)(null),i=(0,p.Z)(o,2),c=i[0],l=i[1],u=(0,r.useState)(!1),m=(0,p.Z)(u,2),g=m[0],b=m[1],y=(0,r.useState)(""),x=(0,p.Z)(y,2),E=x[0],Z=x[1],O=(0,r.useMemo)((function(){return new URLSearchParams(window.location.search)}),[]),w=(0,r.useCallback)(function(){var e=(0,s.Z)(f().mark((function e(t){var n,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,_.getGuest(t);case 4:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===n;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=n.data;case 13:(r=e.t2)&&l(r),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(0),b(!0);case 20:return e.prev=20,a(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),[]),k=(0,r.useCallback)(function(){var e=(0,s.Z)(f().mark((function e(t){var n,r,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a(!0),!t){e.next=16;break}return e.next=5,_.updateGuest(t);case 5:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=9;break}e.t0=void 0===n;case 9:if(!e.t0){e.next=13;break}e.t2=void 0,e.next=14;break;case 13:e.t2=null===(r=n.data)||void 0===r?void 0:r.message;case 14:(o=e.t2)&&Z(o);case 16:e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),b(!0);case 21:return e.prev=21,a(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,r.useEffect)((function(){var e=O.get("id");e&&w(e)}),[w,O,E]);(0,r.useCallback)((function(){k({guest:T(T({},c),{},{accept:!0})})}),[k,c]);return r.createElement(r.Fragment,null,(null==c?void 0:c.name)&&r.createElement(d.Z,{display:"flex",minHeight:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center",bgcolor:"common.invitationGreyLight",padding:"40px 40px 10px 40px"},r.createElement(d.Z,{textAlign:"center",width:"100%"},r.createElement(v.Z,{variant:"body1",color:"common.invitationGold"},c.name.toUpperCase()),r.createElement(v.Z,{variant:"body1",color:"common.invitationGold"},"РАЗДЕЛИТЕ С НАМИ"," ",r.createElement("br",null),"РОЖДЕНИЕ НАШЕЙ СЕМЬИ")),r.createElement(d.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",width:"100%",flexGrow:1},r.createElement(d.Z,{width:"100%",bgcolor:"common.invitationPinkLight",textAlign:"center",padding:"30px 30px 5px 30px",mb:3},r.createElement(j,{invitation:null==c?void 0:c.invitation})),c.accept?r.createElement(v.Z,{variant:"caption",color:"common.invitationGold"},"ВЫ ПОДТВЕРДИЛИ ПРИГЛАШЕНИЕ"):r.createElement(r.Fragment,null,r.createElement(F,{variant:"outlined",sx:{marginBottom:"10px"}},"Подвердить присутствие"),r.createElement(v.Z,{variant:"caption",color:"common.invitationGold",textAlign:"center"},"В ОБРАТНОМ СЛУЧАЕ, СООБЩИТЕ НАМ ДО",r.createElement("br",null),"10.05.2022 ЛЮБЫМ УДОБНЫМ СПОСОБОМ")))),(g||n)&&r.createElement(d.Z,{display:"flex",height:"100vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},g&&r.createElement(v.Z,{variant:"h4"},"Ой, что-то пошло не так"),n&&r.createElement(h.Z,null)))};var R=n(8027);const D="\n  @font-face {\n    font-family: 'TenorSansRegular';\n    src: url(".concat(R,") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n  }\n");const L=function(){return"\n    ".concat(D,"\n    html {\n      height: 100%;\n      overflow-x: hidden;\n    }\n\n   html,\n   body {\n     position: relative;\n   }\n\n   body {\n     font-family: 'SourceSansProRegular', sans-serif;\n     min-height: 100%;\n   }\n\n  * {\n    vertical-align: baseline;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    border: 0;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n")};var A=(0,o.Z)({palette:{common:{invitationPink:"#EFBFBF",invitationPinkLight:"#faf6f2",invitationRed:"#c86a53",invitationGrey:"#d4ddde",invitationGreyLight:"#d3d9db",invitationGold:"#ab7836",invitationBlue:"#6195a3",invitationGreen:"#2f5a5b"}},typography:{fontFamily:"TenorSansRegular, sans-serif"},components:{MuiCssBaseline:{styleOverrides:L()}}});A=(0,i.Z)(A);const I=function(){return r.createElement(r.StrictMode,null,r.createElement(c.Z,{theme:A},r.createElement(l.ZP,null),r.createElement(M,null)))};a.render(r.createElement(I,null),document.getElementById("root"))},8027:(e,t,n)=>{e.exports=n.p+"assets/TenorSans-Regular.0d22289d38b3d37f95b6.ttf"},3984:(e,t,n)=>{e.exports=n.p+"assets/palette.985304918bfeea253a42.png"}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){for(var[n,r,a]=e[s],c=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.e=()=>Promise.resolve(),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,l]=n,u=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var s=l(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=self.webpackChunkinvitation_frontend=self.webpackChunkinvitation_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[987],(()=>o(3146)));i=o.O(i)})();