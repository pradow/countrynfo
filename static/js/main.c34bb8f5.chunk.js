(this.webpackJsonpcountrynfo=this.webpackJsonpcountrynfo||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(15),s=c.n(a),l=(c(23),c(10)),i=c(2),j=c(9),o=c(1);var u=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(i.f)();return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.replace(/ /g,"")?a.push("/search?q=".concat(c.replace(/ /g,"+"))):r("")},className:"search-form",children:[Object(o.jsx)("label",{htmlFor:"",className:"search-label",children:"Search for a country"}),Object(o.jsx)("input",{className:"search-input",type:"text",onChange:function(e){console.log(e.currentTarget.value),r(e.currentTarget.value)},value:c,required:!0}),Object(o.jsx)("button",{className:"submit-button",type:"submit",children:"Search"})]})},h=c.p+"static/media/world.0adde017.jpg";function b(){return Object(o.jsxs)("div",{className:"home-hero",style:{backgroundImage:"url(".concat(h,")")},children:[Object(o.jsx)("h1",{className:"hero-title",children:"Countrinfo"}),Object(o.jsx)(u,{})]})}function d(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"CountryPage"})})}var O=c(14),x=c.n(O),m=c(18);function p(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(j.a)(a,2),l=s[0],u=s[1],h=new URLSearchParams(Object(i.g)().search).get("q"),b=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/name/"+h);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(!1),u(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),console.log(l),c?Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"...Loading"})}):l.length?Object(o.jsx)("div",{className:"search-results",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"grid-container transparent-background",children:l.map((function(e){return Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsxs)("div",{className:"result-country",children:[Object(o.jsx)("div",{className:"result-flag",style:{backgroundImage:"url(".concat(e.flags[0],")")}}),Object(o.jsx)("h4",{className:"result-title",children:e.name})]})},e.alpha2Code)}))})})}):Object(o.jsx)("h3",{children:"No Results"})}var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(b,{})}),Object(o.jsx)(i.a,{path:"/search",children:Object(o.jsx)(p,{})}),Object(o.jsx)(i.a,{path:"/country",children:Object(o.jsx)(d,{})})]})})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c34bb8f5.chunk.js.map