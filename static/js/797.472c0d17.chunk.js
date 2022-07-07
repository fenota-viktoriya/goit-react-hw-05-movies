"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{4897:function(n,r,e){e.d(r,{e:function(){return d}});var t,a,u=e(168),i=e(9958),o=e(3504),c=(0,i.Z)(o.rU)(t||(t=(0,u.Z)(["\n  font-size: 20px;\n  color: darkslategray;\n  transition: 0.3s ease-in;\n\n  &:hover {\n    background: rgb(163, 226, 255);\n    background: linear-gradient(\n      90deg,\n      rgba(163, 226, 255, 0.8281687675070029) 36%,\n      rgba(245, 250, 148, 0.6152836134453781) 69%\n    );\n  }\n"]))),s=i.Z.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),p=e(6871),f=e(184),d=function(n){var r=n.movies,e=(0,p.TH)();return(0,f.jsx)(s,{children:r&&r.map((function(n){var r=n.id,t=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(c,{to:"/movies/".concat(r),state:{from:e},children:t})},r)}))})}},4797:function(n,r,e){e.r(r),e.d(r,{MoviePage:function(){return d}});var t=e(885),a=e(2791),u=e(3504),i=e(8479),o=e(9e3),c=e(4897),s=e(9364),p=e(5558),f=e(184),d=function(){var n=(0,a.useState)(""),r=(0,t.Z)(n,2),e=r[0],d=r[1],l=(0,a.useState)([]),h=(0,t.Z)(l,2),g=h[0],x=h[1],b=(0,u.lr)(),m=(0,t.Z)(b,2),v=m[0],y=m[1],Z=v.get("query");(0,a.useEffect)((function(){Z&&(0,s.IT)(Z).then((function(n){if(0===n.length)return i.ZP.error("No found"),void y({});x(n)})).catch((function(n){return console.error(n)}))}),[Z,y]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(p.l0,{onSubmit:function(n){n.preventDefault(),""!==e.trim()?y({query:e.trim()}):i.ZP.error("Enter the text")},children:[(0,f.jsx)(p.II,{type:"search",name:e,onChange:function(n){var r=n.currentTarget.value.toLowerCase();d(r)}}),(0,f.jsx)(p.un,{type:"submit",children:(0,f.jsx)(o.Vph,{})})]}),(0,f.jsx)(c.e,{movies:g})]})}},5558:function(n,r,e){e.d(r,{II:function(){return g},aV:function(){return d},l0:function(){return l},un:function(){return h},yX:function(){return f}});var t,a,u,i,o,c=e(168),s=e(9958),p=e(3504),f=(0,s.Z)(p.rU)(t||(t=(0,c.Z)(["\n  background: rgb(163, 226, 255);\n  background: linear-gradient(\n    90deg,\n    rgba(163, 226, 255, 0.8281687675070029) 36%,\n    rgba(245, 250, 148, 0.6152836134453781) 69%\n  );\n  border: 2px solid #eee;\n  height: 22px;\n  width: 100px;\n  padding: 3px;\n  overflow: hidden;\n  display: block;\n  transition: All 0.5s ease;\n  border-radius: 5px;\n  &:hover {\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2);\n    background: rgb(43, 188, 255);\n    background: linear-gradient(\n      90deg,\n      rgba(43, 188, 255, 0.8281687675070029) 36%,\n      rgba(246, 232, 84, 0.6152836134453781) 69%\n    );\n  }\n"]))),d=s.Z.ul(a||(a=(0,c.Z)(["\ndisplay:flex;\n flex-direction: column;\n padding:  10px ;s\n gap:10px;"]))),l=s.Z.form(u||(u=(0,c.Z)(["\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),h=s.Z.button(i||(i=(0,c.Z)(["\nmargin-left:10px;\nfont-size:16px;\npadding:3px;"]))),g=s.Z.input(o||(o=(0,c.Z)(["\n  height: 28px;\n"])))},9364:function(n,r,e){e.d(r,{IT:function(){return p},_c:function(){return h},eH:function(){return x},eM:function(){return c},oy:function(){return d}});var t=e(5861),a=e(7757),u=e.n(a),i=e(4569),o=e.n(i);function c(){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(u().mark((function n(){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/trending/movie/day");case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/search/movie?query=".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/3/movie/".concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("3/movie/".concat(r,"/credits"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(u().mark((function n(r){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("3/movie/".concat(r,"/reviews"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o().defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o().defaults.baseURL="https://api.themoviedb.org",o().defaults.params={api_key:"079f315d1c0a92bbce195275b13a313a"}}}]);
//# sourceMappingURL=797.472c0d17.chunk.js.map