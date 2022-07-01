"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{3034:function(n,e,t){t.r(e),t.d(e,{MovieDetailsPage:function(){return C}});var r,i,a,u,o,s=t(885),c=t(2791),p=t(6871),d=t(5558),l=t(9364),f=t(7762),h={28:{en:"Action",uk:"\u0411\u043e\u0439\u043e\u0432\u0438\u043a"},12:{en:"Adventure",uk:"\u041f\u0440\u0438\u0433\u043e\u0434\u0438"},16:{en:"Animation",uk:"\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f"},35:{en:"Comedy",uk:"\u041a\u043e\u043c\u0435\u0434\u0456\u044f"},80:{en:"Crime",uk:"\u041a\u0440\u0438\u043c\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0439"},99:{en:"Documentary",uk:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439"},18:{en:"Drama",uk:"\u0414\u0440\u0430\u043c\u0430"},10751:{en:"Family",uk:"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439"},14:{en:"Fantasy",uk:"\u0424\u0435\u043d\u0442\u0430\u0437\u0456"},36:{en:"History",uk:"\u0406\u0441\u0442\u043e\u0440\u0438\u0447\u043d\u0438\u0439"},27:{en:"Horror",uk:"\u0416\u0430\u0445\u0438"},10402:{en:"Music",uk:"\u041c\u044e\u0437\u0438\u043a\u043b"},9648:{en:"Mystery",uk:"\u041c\u0456\u0441\u0442\u0438\u0447\u043d\u0438\u0439"},10749:{en:"Romance",uk:"\u041c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430"},878:{en:"Science Fiction",uk:"\u041d\u0430\u0443\u043a\u043e\u0432\u0430 \u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430"},10770:{en:"TV Movie",uk:"\u0422\u0412 \u0444\u0456\u043b\u044c\u043c"},53:{en:"Thriller",uk:"\u0422\u0440\u0438\u043b\u0435\u0440"},10752:{en:"War",uk:"\u0412\u043e\u0454\u043d\u043d\u0438\u0439"},37:{en:"Western",uk:"\u0412\u0435\u0441\u0442\u0435\u0440\u043d"}},x=function(n){if(!n)return"";var e,t=window.location.hash.substring(1),r=[],i=(0,f.Z)(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(2===r.length){r.push("...");break}"object"!==typeof a?h[a]&&r.push(h[a][t]):r.push(a.name)}}catch(u){i.e(u)}finally{i.f()}return r.map((function(n){return"".concat(n)})).join(", ")},g=t(6053),m=t(3504),v=t(184),b=function(){var n,e,t=(0,p.TH)();return(0,v.jsx)(m.rU,{to:null!==(n=null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,v.jsx)(g.BDM,{})})},k=t(168),y=t(9958),w=y.Z.div(r||(r=(0,k.Z)(["\n  display: flex;\n  width: 1200;\n  margin: 0 auto;\n  padding: 10px;\n  border: 2px solid #f5f5f5;\n  background: white;\n  font-family: 'Open Sans';\n  transition: 0.3s ease-in;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n"]))),Z=y.Z.img(i||(i=(0,k.Z)(["\n  display: block;\n  width: 300px;\n  height: 100%;\n  margin-right: 30px;\n"]))),j=y.Z.div(a||(a=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  width: 600px;\n"]))),F=y.Z.p(u||(u=(0,k.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  border-bottom: 2px solid #f5f5f5;\n"]))),M=y.Z.p(o||(o=(0,k.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  font-style: italic;\n"]))),_=function(){var n=(0,c.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,p.UO)().movieId,a=t.title,u=t.poster_path,o=t.popularity,f=t.overview,h=t.genres,g=(0,c.useState)(!1),m=(0,s.Z)(g,2),k=m[0],y=m[1];return(0,c.useEffect)((function(){(0,l.oy)(i).then((function(n){if(0!==n.length)return r(n)})).catch((function(n){console.error(n),y(!0)}))}),[i]),(0,v.jsxs)(v.Fragment,{children:[k&&(0,v.jsx)(p.Fg,{to:"/",replace:!0}),(0,v.jsx)(b,{}),0!==t.length&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(w,{children:[(0,v.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:a}),(0,v.jsxs)(j,{children:[(0,v.jsx)("h1",{children:a}),(0,v.jsx)(F,{children:"User score:"}),(0,v.jsxs)(M,{children:[" ",Math.floor(o),"%"]}),(0,v.jsx)(F,{children:"Overview: "}),(0,v.jsx)(M,{children:f}),(0,v.jsx)(F,{children:"Ganres:"}),(0,v.jsxs)(M,{children:[" ",x(h)]})]})]}),(0,v.jsxs)(d.aV,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(d.yX,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(d.yX,{to:"reviews",children:" Reviews"})})]}),(0,v.jsx)(p.j3,{})]})]})},C=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(_,{})})}},5558:function(n,e,t){t.d(e,{II:function(){return x},aV:function(){return l},l0:function(){return f},un:function(){return h},yX:function(){return d}});var r,i,a,u,o,s=t(168),c=t(9958),p=t(3504),d=(0,c.Z)(p.rU)(r||(r=(0,s.Z)(["\n  background: rgb(163, 226, 255);\n  background: linear-gradient(\n    90deg,\n    rgba(163, 226, 255, 0.8281687675070029) 36%,\n    rgba(245, 250, 148, 0.6152836134453781) 69%\n  );\n  border: 2px solid #eee;\n  height: 22px;\n  width: 100px;\n  padding: 3px;\n  overflow: hidden;\n  display: block;\n  transition: All 0.5s ease;\n  border-radius: 5px;\n  &:hover {\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);\n    background: rgb(43, 188, 255);\n    background: linear-gradient(\n      90deg,\n      rgba(43, 188, 255, 0.8281687675070029) 36%,\n      rgba(246, 232, 84, 0.6152836134453781) 69%\n    );\n  }\n"]))),l=c.Z.ul(i||(i=(0,s.Z)(["\ndisplay:flex;\n flex-direction: column;\n padding:  10px ;s\n gap:10px;"]))),f=c.Z.form(a||(a=(0,s.Z)(["\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),h=c.Z.button(u||(u=(0,s.Z)(["\nmargin-left:10px;\nfont-size:16px;\npadding:3px;"]))),x=c.Z.input(o||(o=(0,s.Z)(["\n  height: 28px;\n"])))},9364:function(n,e,t){t.d(e,{IT:function(){return p},_c:function(){return h},eH:function(){return g},eM:function(){return s},oy:function(){return l}});var r=t(5861),i=t(7757),a=t.n(i),u=t(4569),o=t.n(u);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/search/movie?query=".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("3/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("3/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o().defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o().defaults.baseURL="https://api.themoviedb.org",o().defaults.params={api_key:"079f315d1c0a92bbce195275b13a313a"}}}]);
//# sourceMappingURL=34.9225a1b0.chunk.js.map