"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{9937:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(3504),u=r(6871),o=r(184),i=function(e){var t=e.movies,r=(0,u.TH)();return(0,o.jsx)("ul",{children:t&&t.map((function(e){var t=e.id,u=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:r},children:u})},t)}))})}},4797:function(e,t,r){r.r(t),r.d(t,{MoviePage:function(){return f}});var n=r(885),u=r(2791),o=r(8485),i=r(3504),c=r(8479),a=r(9937),s=r(184),f=function(){var e=(0,u.useState)(""),t=(0,n.Z)(e,2),r=t[0],f=t[1],l=(0,u.useState)([]),h=(0,n.Z)(l,2),m=h[0],v=h[1],p=(0,i.lr)(),d=(0,n.Z)(p,2),j=d[0],x=d[1],Z=j.get("query");(0,u.useEffect)((function(){Z&&(0,o.IT)(Z).then((function(e){0!==e.length?v(e):c.ZP.error("\u043d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445")}))}),[Z]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?x({query:r}):c.ZP.error("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ")},children:[(0,s.jsx)("input",{type:"search",name:r,onChange:function(e){var t=e.currentTarget.value.toLowerCase();f(t)}}),(0,s.jsx)("button",{type:"submit",children:"search"})]}),(0,s.jsx)(a.Z,{movies:m})]})}}}]);
//# sourceMappingURL=797.ba9265da.chunk.js.map