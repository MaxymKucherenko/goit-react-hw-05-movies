(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{35:function(t,e,o){"use strict";var n,c=o(0),r=(n=c)&&"object"===typeof n&&"default"in n?n.default:n,s=function(){return(s=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var c in e=arguments[o])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)};var i="styles_scroll-to-top__2A70v";!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===o&&n.firstChild?n.insertBefore(c,n.firstChild):n.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t))}}(".styles_scroll-to-top__2A70v {\n    background-color: white;\n    right: 40px;\n    bottom: 40px;\n    position: fixed;\n    z-index: 2;\n    cursor: pointer;\n    border-radius: 7px;\n    width: 40px;\n    height: 40px;\n    transition: opacity 1s ease-in-out;\n    box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);\n    border: none;\n    outline: none;\n}\n\n.styles_scroll-to-top__2A70v:active {\n    transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");t.exports=function(t){var e=t.top,o=void 0===e?20:e,n=t.className,a=void 0===n?i:n,l=t.color,d=void 0===l?"black":l,u=t.smooth,p=void 0!==u&&u,h=t.component,m=void 0===h?"":h,f=t.viewBox,v=void 0===f?"0 0 256 256":f,b=t.svgPath,j=void 0===b?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":b,x=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(o[n[c]]=t[n[c]])}return o}(t,["top","className","color","smooth","component","viewBox","svgPath"]),O=c.useState(!1),g=O[0],y=O[1];c.useEffect((function(){return document.addEventListener("scroll",w),function(){return document.removeEventListener("scroll",w)}}),[]);var w=function(){y(document.documentElement.scrollTop>o)};return r.createElement(r.Fragment,null,g&&r.createElement("button",s({className:a,onClick:function(){return function(t){void 0===t&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(p)}},x),m||r.createElement("svg",{fill:d,viewBox:v},r.createElement("path",{d:j}))))}},87:function(t,e,o){"use strict";o.r(e);var n=o(31),c=o.p+"static/media/foto.7eea344e.jpg",r=o(30),s=o(1),i=o(0),a=o(34),l=o.n(a),d=o(35),u=o.n(d),p=o(2);e.default=function(){var t=Object(s.h)().movieId,e=Object(i.useState)([]),o=Object(n.a)(e,2),a=o[0],d=o[1],h=Object(i.useState)(0),m=Object(n.a)(h,2),f=m[0],v=m[1];return Object(i.useEffect)((function(){Object(r.b)(t).then((function(t){d(t.data.cast),v(t.status),window.scrollTo(0,700)}))}),[t]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{smooth:!0}),!f&&Object(p.jsx)(l.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:0}),a.length?Object(p.jsx)("ul",{id:"cast",children:a.map((function(t){var e=t.profile_path,o=t.cast_id,n=t.name,r=t.character;return Object(p.jsxs)("li",{children:[Object(p.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):c,alt:n}),Object(p.jsxs)("p",{children:[n,"."]}),r&&Object(p.jsxs)("p",{children:["Character: ",r]})]},o)}))}):Object(p.jsx)("p",{children:"This movie not have cast"})]})}}}]);
//# sourceMappingURL=cast.03fc1b24.chunk.js.map