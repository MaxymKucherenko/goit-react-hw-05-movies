(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{30:function(e,t,c){"use strict";c.d(t,"e",(function(){return o})),c.d(t,"c",(function(){return r})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return l})),c.d(t,"a",(function(){return u}));var n=c(32),i=c.n(n);i.a.defaults.baseURL="https://api.themoviedb.org/3";var a="api_key=d31dc209da92a25c5da2bd6eebb5b4e2",o=function(){return i.a.get("/trending/movie/day?".concat(a))},r=function(e){return i.a.get("/movie/".concat(e,"?").concat(a))},s=function(e){return i.a.get("/movie/".concat(e,"/reviews?").concat(a,"&page=1"))},l=function(e){return i.a.get("/movie/".concat(e,"/credits?").concat(a))},u=function(e){return i.a.get("/search/movie?".concat(a,"&query=").concat(e,"&page=1&include_adult=false"))}},86:function(e,t,c){"use strict";c.r(t);var n=c(31),i=c.p+"static/media/foto.7eea344e.jpg",a=c(1),o=c(9),r=c(0),s=c(30),l=c(34),u=c.n(l),d=c(2),j=Object(r.lazy)((function(){return c.e(1).then(c.bind(null,87))})),b=Object(r.lazy)((function(){return c.e(8).then(c.bind(null,84))}));t.default=function(){var e,t,c,l=Object(r.useState)({}),h=Object(n.a)(l,2),v=h[0],O=h[1],f=Object(r.useState)(!0),m=Object(n.a)(f,2),p=m[0],x=m[1],g=Object(a.h)().movieId,w=Object(a.i)().url,y=Object(a.g)(),k=Object(a.f)();Object(r.useEffect)((function(){Object(s.c)(g).then((function(e){O(e.data),x(!1)})).catch((function(e){return console.log(e)}))}),[g]);var N=v.backdrop_path,I=v.alt,R=v.title,F=v.score,_=v.overview,S=v.genres,z=v.original_title,A=v.name;return Object(d.jsx)("div",{className:"container",children:p?Object(d.jsx)(u.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:0}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",onClick:function(){var e,t;k.push(null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.from.location)&&void 0!==e?e:"/")},children:null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t||null===(c=t.from)||void 0===c?void 0:c.label)&&void 0!==e?e:"Return"}),Object(d.jsxs)("div",{className:"Info",children:[Object(d.jsx)("img",{src:N?"https://image.tmdb.org/t/p/w500".concat(N):i,alt:I}),Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h2",{children:R||z||A}),Object(d.jsx)("p",{children:F}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:_}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("ul",{className:"genres",children:S.map((function(e,t){return Object(d.jsx)("li",{children:e.name},t)}))})]})]}),Object(d.jsxs)("div",{className:"add",children:[Object(d.jsx)("p",{children:"Additional information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:{pathname:"".concat(w,"/reviews"),state:{from:{location:y,label:"Return to previous page"}}},children:"Reviews"})}),Object(d.jsxs)("li",{children:[" ",Object(d.jsxs)(o.c,{to:{pathname:"".concat(w,"/cast"),state:{from:{location:y,hash:"#cast",label:"Return to previous page"}}},children:[" ","Cast"]})]})]})]}),Object(d.jsxs)(r.Suspense,{allback:Object(d.jsx)("h1",{children:"LOADING"}),children:[Object(d.jsx)(a.a,{path:"/movies/:movieId/cast",children:Object(d.jsx)(j,{})}),Object(d.jsx)(a.a,{path:"/movies/:movieId/reviews",children:Object(d.jsx)(b,{})})]})]})})}}}]);
//# sourceMappingURL=movie-details-page.cf60465a.chunk.js.map