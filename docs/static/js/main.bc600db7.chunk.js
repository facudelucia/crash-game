(this["webpackJsonpcrash-game"]=this["webpackJsonpcrash-game"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(10),i=a.n(n),r=(a(16),a(2)),l=a(6),j=a(3),b=a(5),o=(a(17),a(0)),u=function(e){var t=e.credits;return Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("img",{src:"./assets/money.png",className:"money-icon"}),t]})})},d=function(e){var t=e.bet,a=e.handleSubmit,c=e.handleChange,s=e.handleCashout,n=e.isPlacedBet,i=e.lastBets;return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsxs)("div",{className:"sidebar-top",children:[Object(o.jsx)("form",{children:Object(o.jsx)("input",{value:t,name:"bet",onChange:c,type:"number"})}),n?Object(o.jsx)("button",{onClick:s,children:"Cash out"}):Object(o.jsx)("button",{onClick:a,type:"submit",children:"Place bet"})]}),Object(o.jsx)("div",{className:"last-bets-list",children:i.map((function(e,t){return Object(o.jsx)("div",{className:"last-bets-item",children:e.lost?Object(o.jsxs)("span",{className:"last-bets-item-lost",children:["- $",e.profit]}):Object(o.jsxs)("span",{className:"last-bets-item-won",children:["+ $",e.profit]})},t)}))})]})},O=function(e){var t=e.lastMultipliers;return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"last-multipliers-list",children:[Object(o.jsx)("span",{children:"Lasts:"}),t.map((function(e,t){return Object(o.jsxs)("div",{className:"last-multipliers-item",children:[e,"X"]},t)}))]})})},h=a(4),m=a(11);h.d.register(h.c,h.h,h.j,h.g);var p=function(e){var t={labels:[1,1,1],datasets:[{label:"Dataset 1",data:[0,.3,e.multiplier],borderColor:"#716998",backgroundColor:"#716998",lineTension:.8}]};return Object(o.jsx)("div",{className:"chart-container",children:Object(o.jsx)(m.a,{options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{display:!1,grid:{display:!1}}},elements:{point:{radius:0}}},data:t})})};var x=function(){var e=Object(c.useState)(1),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(b.a)(n,2),h=i[0],m=i[1],x=Object(c.useState)(1e4),f=Object(b.a)(x,2),v=f[0],g=f[1],S=Object(c.useState)((1*(18.99*Math.random()+1).toFixed(2)).toString()),N=Object(b.a)(S,2),C=N[0],F=N[1],y=Object(c.useState)(5),I=Object(b.a)(y,2),P=I[0],B=I[1],k=P,M=Object(c.useState)(!1),T=Object(b.a)(M,2),w=T[0],E=T[1],L=Object(c.useState)(!1),D=Object(b.a)(L,2),J=D[0],X=D[1],$=Object(c.useState)(!1),A=Object(b.a)($,2),R=A[0],q=A[1],z=Object(c.useState)(!1),G=Object(b.a)(z,2),H=G[0],K=G[1],Q=Object(c.useState)({bet:""}),U=Object(b.a)(Q,2),V=U[0],W=U[1],Y=V.bet,Z=Object(c.useState)([]),_=Object(b.a)(Z,2),ee=_[0],te=_[1],ae=Object(c.useState)([]),ce=Object(b.a)(ae,2),se=ce[0],ne=ce[1],ie=Object(c.useState)(""),re=Object(b.a)(ie,2),le=re[0],je=re[1],be=function(){m(h+1),h>99&&(s(a+1),m(0))};return Object(c.useEffect)((function(){var e=setInterval(be),t="".concat(a,".").concat(h);return E(!1),Number(C).toFixed(1)===Number(t).toFixed(1)&&(te([C].concat(Object(j.a)(ee))),E(!0),setTimeout((function(){K(!0);var e=setInterval((function(){k--,B(k),0===k&&(clearInterval(e),F((1*(18.99*Math.random()+1).toFixed(2)).toString()),K(!1),s(1),m(0),B(5))}),1e3)}),2e3),clearInterval(e)),function(){return clearInterval(e)}}),[h]),Object(c.useEffect)((function(){var e=Y*le;console.log("profit",e);var t={};w&&R&&!J&&(t.profit=Y,t.betProp=Y,t.lost=!0,ne([t].concat(Object(j.a)(se))),q(!1),je("")),w&&R&&J&&(t.profit=e.toFixed(2),t.betProp=Y,t.lost=!1,ne([t].concat(Object(j.a)(se))),g(v+e),X(!1),q(!1),je(""))}),[w,J,le]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{credits:v}),Object(o.jsx)("div",{className:"multiplier",children:H?Object(o.jsx)("h1",{children:P}):Object(o.jsxs)("h1",{children:[a,".",h,"X"]})}),Object(o.jsx)(p,{multiplier:a}),Object(o.jsx)(d,{bet:Y,handleChange:function(e){W(Object(l.a)(Object(l.a)({},V),{},Object(r.a)({},e.target.name,e.target.value)))},handleSubmit:function(){w&&Y&&(g(v-Y),q(!0))},handleCashout:function(){if(!w&&Y){var e="".concat(a,".").concat(h);console.log(e),je(e),X(!0)}},isPlacedBet:R,lastBets:se}),Object(o.jsx)(O,{lastMultipliers:ee})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.bc600db7.chunk.js.map