(()=>{"use strict";var e,t,n,r={5605:(e,t,n)=>{var r=n(7294),a=n(3935),i=n(4345),o=n(4298),c=n(5974),l=n(5810),u=n(4942),s=n(5861),p=n(8152),f=n(7757),v=n.n(f),d=n(4065),h=n(1508),m=n(2658),b=n(7425),g=n(9062),y=n(8426),O=n(9602),Z=n(6914),E=n(5092),x=n(7851),j=(0,O.ZP)(x.Z)((function(e){var t=e.theme;return function(e){return{background:"invitation"===e.type?t.palette.common.invitationPink:t.palette.common.invitationGrey}}})),w=(0,O.ZP)(E.Z)((function(){return{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",textAlign:"center",height:"80vh"}})),k=(0,O.ZP)(Z.Z)((function(e){var t=e.theme;return{borderColor:t.palette.common.invitationRed,color:t.palette.common.invitationRed,borderRadius:"10px"}})),P=(0,O.ZP)("img")((function(){return{width:"100%",height:"150px",objectFit:"contain"}})),S=n(3144),_=n(5671),C=n(9669),G=n.n(C)().create({baseURL:"".concat("https://invitation-backend-rest.herokuapp.com","/api/guests")});const D=new((0,S.Z)((function e(){var t=this;(0,_.Z)(this,e),(0,u.Z)(this,"client",G),(0,u.Z)(this,"getGuest",(function(e){return t.client.get("/guest?id=".concat(e))})),(0,u.Z)(this,"updateGuest",(function(e){return t.client.patch("/updateGuest",e)}))})));function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const R=function(){var e=(0,r.useState)("invitation"),t=(0,p.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(!1),o=(0,p.Z)(i,2),c=o[0],l=o[1],u=(0,r.useState)(null),f=(0,p.Z)(u,2),O=f[0],Z=f[1],E=(0,r.useState)(!1),x=(0,p.Z)(E,2),S=x[0],_=x[1],C=(0,r.useState)(""),G=(0,p.Z)(C,2),M=G[0],R=G[1],T=(0,r.useMemo)((function(){return new URLSearchParams(window.location.search)}),[]),B=(0,r.useCallback)(function(){var e=(0,s.Z)(v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,D.getGuest(t);case 4:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===n;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=n.data;case 13:(r=e.t2)&&Z(r),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(0),_(!0);case 20:return e.prev=20,l(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),[]),A=(0,r.useCallback)(function(){var e=(0,s.Z)(v().mark((function e(t){var n,r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l(!0),!t){e.next=16;break}return e.next=5,D.updateGuest(t);case 5:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=9;break}e.t0=void 0===n;case 9:if(!e.t0){e.next=13;break}e.t2=void 0,e.next=14;break;case 13:e.t2=null===(r=n.data)||void 0===r?void 0:r.message;case 14:(a=e.t2)&&R(a);case 16:e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),_(!0);case 21:return e.prev=21,l(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,r.useEffect)((function(){var e=T.get("id");e&&B(e)}),[B,T]);var I=(0,r.useCallback)((function(){A({guest:F(F({},O),{},{accept:!0})})}),[A,O]),L=function(e){return function(t,n){a(n?e:"")}};return r.createElement(d.Z,{disableGutters:!0},(null==O?void 0:O.name)&&r.createElement(h.Z,{display:"flex",height:"100vh",flexDirection:"column",justifyContent:"flex-end"},r.createElement(j,{expanded:"video"===n,onChange:L("video"),disableGutters:!0},r.createElement(b.Z,{"aria-controls":"videobh-content",id:"videobh-header"}),r.createElement(w,null,r.createElement(m.Z,null,"Здесь будет видео"))),r.createElement(j,{expanded:"invitation"===n,onChange:L("invitation"),disableGutters:!0,type:"invitation"},r.createElement(b.Z,{"aria-controls":"invitationbh-content",id:"invitationbh-header"}),r.createElement(w,null,r.createElement(m.Z,{variant:"h3"},null==O?void 0:O.name),r.createElement(m.Z,{dangerouslySetInnerHTML:{__html:null==O?void 0:O.invitation}}),r.createElement(h.Z,{height:"150px"},r.createElement(P,{src:y,alt:"palette"})),M&&r.createElement("p",null,M),null!=O&&O.accept?r.createElement(m.Z,null,"Вы подвердили приглашение"):r.createElement(r.Fragment,null,r.createElement(m.Z,{variant:"caption"},"Просим подтвердить приглашение, нажатием на кнопку:"),r.createElement(k,{onClick:I,variant:"outlined"},"Подвердить приглашение"),r.createElement(m.Z,{variant:"caption"},"В обратном случае, сообщите, пожалуйста, нам до 10.05.2022"))))),(S||c)&&r.createElement(h.Z,{display:"flex",height:"100vh",flexDirection:"column",justifyContent:"center",textAlign:"center"},S&&r.createElement(m.Z,{variant:"h4"},"Ой, что-то пошло не так"),c&&r.createElement(g.Z,null)))};var T=(0,i.Z)({palette:{common:{invitationPink:"#EFBFBF",invitationRed:"#c86a53",invitationGrey:"#d4ddde",invitationBlue:"#6195a3",invitationGreen:"#2f5a5b"}}});T=(0,o.Z)(T);const B=function(){return r.createElement(r.StrictMode,null,r.createElement(c.Z,{theme:T},r.createElement(l.ZP,null),r.createElement(R,null)))};a.render(r.createElement(B,null),document.getElementById("root"))},8426:(e,t,n)=>{e.exports=n.p+"assets/palette.1eeeb56811b9d20c1561.png"}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=(t,n,r,a)=>{if(!n){var o=1/0;for(s=0;s<e.length;s++){for(var[n,r,a]=e[s],c=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(c=!1,a<o&&(o=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(a,o),a},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"})(),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[o,c,l]=n,u=0;if(o.some((t=>0!==e[t]))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(l)var s=l(i)}for(t&&t(n);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(s)},n=self.webpackChunkinvitation_frontend=self.webpackChunkinvitation_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[987],(()=>i(5605)));o=i.O(o)})();