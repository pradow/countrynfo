(this.webpackJsonpcountrynfo=this.webpackJsonpcountrynfo||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(16),r=c.n(n),l=(c(23),c(8)),j=c(2),i=c(7),o=c(0);var u=function(e){var t=e.placeholder,c=Object(a.useState)(""),s=Object(i.a)(c,2),n=s[0],r=s[1],l=Object(j.f)();return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.replace(/ /g,"")?(l.push("/search?q=".concat(n.replace(/ /g,"+"))),r("")):r("")},className:"search-form",children:[Object(o.jsx)("label",{htmlFor:"",className:"search-label",children:"Search for a country"}),Object(o.jsx)("input",{className:"search-input",type:"text",onChange:function(e){console.log(e.currentTarget.value),r(e.currentTarget.value)},value:n,placeholder:t||null,required:!0}),Object(o.jsx)("button",{className:"submit-button",type:"submit",children:Object(o.jsx)("span",{className:"button-text",children:"search"})})]})};var d=function(){return"/"===Object(j.g)().pathname?null:Object(o.jsxs)("header",{className:"main-header",children:[Object(o.jsx)(l.b,{to:"/",className:"header-logo",title:"home",children:Object(o.jsx)("span",{className:"logo-placeholder",children:"logo"})}),Object(o.jsx)("div",{className:"header-search",children:Object(o.jsx)(u,{placeholder:"Search For A Country"})})]})},b=c.p+"static/media/world.0adde017.jpg";function h(){return Object(o.jsxs)("div",{className:"home-hero",style:{backgroundImage:"url(".concat(b,")")},children:[Object(o.jsx)("h1",{className:"hero-title",children:"Countrinfo"}),Object(o.jsx)(u,{})]})}var O=c(10),m=c.n(O),x=c(12);function p(){return new URLSearchParams(Object(j.g)().search)}var f=c.p+"static/media/compass.aefe07cc.png";var v=function(){return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"loader-inner",children:[Object(o.jsx)("img",{src:f,alt:"compass",className:"loader-image"}),Object(o.jsx)("h4",{className:"loader-title",children:"Loading..."})]})})})};function g(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(i.a)(n,2),l=r[0],j=r[1],u=p().get("alpha"),d=function(){var e=Object(x.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/alpha/"+u);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(!1),j(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),console.log(l),c?Object(o.jsx)(v,{}):l.length||Object.keys(l).length?Object(o.jsx)("div",{className:"country-page",children:Object(o.jsxs)("div",{className:"country-content",children:[Object(o.jsxs)("div",{className:"country-side-bar",children:[Object(o.jsx)("div",{className:"country-flag",children:Object(o.jsx)("img",{src:l.flag,alt:"",className:"country-flag-image"})}),Object(o.jsx)("h4",{className:"country-name",children:l.name})]}),Object(o.jsx)("div",{className:"country-info",children:Object(o.jsx)("table",{className:"table-fill",children:Object(o.jsx)("tbody",{className:"table-hover",children:Object.keys(l).map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"text-left",children:e}),Object(o.jsx)("td",{className:"text-left",children:Array.isArray(l[e])?l[e].map((function(e){return e instanceof Object?Object.keys(e).map((function(t){return Object(o.jsxs)("div",{children:[t,": ",e[t]]},t)})):Object(o.jsx)("div",{children:e},e)})):l[e]instanceof Object?Object.keys(l[e]).map((function(t){return Object(o.jsxs)("div",{children:[t,": ",l[e][t]]},t)})):l[e].toString()})]},"".concat(e).concat(l[e]))}))})})})]})}):Object(o.jsx)("h3",{children:"No Results"})}function N(){var e=p(),t=Object(a.useState)(!0),c=Object(i.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)([]),l=Object(i.a)(r,2),u=l[0],d=l[1],b=Object(a.useState)(e.get("q")),h=Object(i.a)(b,2),O=h[0],f=h[1],g=Object(j.f)(),N=function(){var e=Object(x.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/name/"+O);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(!1),d(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=e.currentTarget.dataset.country;g.push("/country?alpha=".concat(t))};return Object(a.useEffect)((function(){O!==e.get("q")&&f(e.get("q"))}),[O,e]),Object(a.useEffect)((function(){N()}),[O]),s?Object(o.jsx)(v,{}):u.length?Object(o.jsx)("div",{className:"search-results",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"grid-container transparent-background",children:u.map((function(e){return Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsxs)("div",{className:"result-country",onClick:y,"data-country":e.alpha2Code,children:[Object(o.jsx)("div",{className:"result-flag",style:{backgroundImage:"url(".concat(e.flag,")")}}),Object(o.jsx)("h4",{className:"result-title",children:e.name})]})},e.alpha2Code)}))})})}):Object(o.jsx)("h3",{children:"No Results"})}var y=c.p+"static/media/world.0ec2a5ce.png";var k=function(){return Object(o.jsx)("div",{className:"error-page",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"inner-error",children:[Object(o.jsx)("h4",{class:"error-title",children:"Page Not Found"}),Object(o.jsx)("img",{src:y,alt:"world map",className:"error-image"})]})})})};var S=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(j.a,{path:"/search",children:Object(o.jsx)(N,{})}),Object(o.jsx)(j.a,{path:"/country",children:Object(o.jsx)(g,{})}),Object(o.jsx)(j.a,{path:"*",children:Object(o.jsx)(k,{})})]})]})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4ba33947.chunk.js.map