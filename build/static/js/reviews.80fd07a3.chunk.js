(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[8],{35:function(t,e,n){"use strict";var o,r=n(0),c=(o=r)&&"object"===typeof o&&"default"in o?o.default:o,s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var i="styles_scroll-to-top__2A70v";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".styles_scroll-to-top__2A70v {\n    background-color: white;\n    right: 40px;\n    bottom: 40px;\n    position: fixed;\n    z-index: 2;\n    cursor: pointer;\n    border-radius: 7px;\n    width: 40px;\n    height: 40px;\n    transition: opacity 1s ease-in-out;\n    box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);\n    border: none;\n    outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n    transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var e=t.top,n=void 0===e?20:e,o=t.className,l=void 0===o?i:o,a=t.color,u=void 0===a?"black":a,d=t.smooth,p=void 0!==d&&d,h=t.component,m=void 0===h?"":h,f=t.viewBox,v=void 0===f?"0 0 256 256":f,b=t.svgPath,j=void 0===b?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":b,x=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(t,["top","className","color","smooth","component","viewBox","svgPath"]),O=r.useState(!1),y=O[0],g=O[1];r.useEffect((function(){return document.addEventListener("scroll",w),function(){return document.removeEventListener("scroll",w)}}),[]);var w=function(){g(document.documentElement.scrollTop>n)};return c.createElement(c.Fragment,null,y&&c.createElement("button",s({className:l,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(p)}},x),m||c.createElement("svg",{fill:u,viewBox:v},c.createElement("path",{d:j}))))}},84:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(1),c=n(0),s=n(30),i=n(34),l=n.n(i),a=n(35),u=n.n(a),d=n(2);e.default=function(){var t=Object(r.h)().movieId,e=Object(c.useState)([]),n=Object(o.a)(e,2),i=n[0],a=n[1],p=Object(c.useState)(0),h=Object(o.a)(p,2),m=h[0],f=h[1];return Object(c.useEffect)((function(){Object(s.d)(t).then((function(t){a(t.data.results),f(t.status),window.scrollTo(0,600)}))}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{smooth:!0}),!m&&Object(d.jsx)(l.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:0}),i.length?Object(d.jsx)("ul",{children:i.map((function(t,e){return Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{children:["Author Username: ",t.author,"."]}),Object(d.jsx)("p",{children:t.content})]},e)}))}):Object(d.jsx)("p",{children:"This movie not have reviews"})]})}}}]);
//# sourceMappingURL=reviews.80fd07a3.chunk.js.map