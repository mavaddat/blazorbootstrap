"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[10485],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>d});var r=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},m=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=s(o),b=a,d=c["".concat(i,".").concat(b)]||c[b]||u[b]||n;return o?r.createElement(d,l(l({ref:e},m),{},{components:o})):r.createElement(d,l({ref:e},m))}));function d(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,l=new Array(n);l[0]=b;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[c]="string"==typeof t?t:a,l[1]=p;for(var s=2;s<n;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},31925:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=o(87462),a=(o(67294),o(3905));const n={title:"BlazorBootstrap v0.4.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.4.0","blazorbootstrap","autocomplete","docs"]},l=void 0,p={permalink:"/blog/2022/09/04/blazorbootstrap-0.4.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-09-04-blazorbootstrap-0.4.0.md",source:"@site/blog/2022-09-04-blazorbootstrap-0.4.0.md",title:"BlazorBootstrap v0.4.0",description:"We are excited to release 0.4.0 with new blazor autocomplete component.",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"v0.4.0",permalink:"/blog/tags/v-0-4-0"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"autocomplete",permalink:"/blog/tags/autocomplete"},{label:"docs",permalink:"/blog/tags/docs"}],readingTime:.42,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"BlazorBootstrap v0.4.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.4.0","blazorbootstrap","autocomplete","docs"]},prevItem:{title:"BlazorBootstrap v0.4.1",permalink:"/blog/2022/09/12/blazorbootstrap-0.4.1"},nextItem:{title:"BlazorBootstrap v0.3.0",permalink:"/blog/2022/08/31/blazorbootstrap-0.3.0"}},i={authorsImageUrls:[void 0]},s=[{value:"New Components",id:"new-components",level:3},{value:"AutoComplete component features",id:"autocomplete-component-features",level:3},{value:"Links",id:"links",level:3}],m={toc:s},c="wrapper";function u(t){let{components:e,...o}=t;return(0,a.kt)(c,(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are excited to release ",(0,a.kt)("inlineCode",{parentName:"p"},"0.4.0")," with new blazor autocomplete component."),(0,a.kt)("img",{src:"https://i.imgur.com/D5ox9um.png",alt:"Blazor Bootstrap AutoComplete Component - Server side data"}),(0,a.kt)("h3",{id:"new-components"},"New Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AutoComplete")," component")),(0,a.kt)("h3",{id:"autocomplete-component-features"},"AutoComplete component features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client side data filtering"),(0,a.kt)("li",{parentName:"ul"},"Server side data filtering"),(0,a.kt)("li",{parentName:"ul"},"Validations")),(0,a.kt)("img",{src:"https://i.imgur.com/sMQ7Uc6.png",alt:"Blazor Bootstrap AutoComplete Component - Validations - Data empty"}),(0,a.kt)("img",{src:"https://i.imgur.com/4IzNcdp.png",alt:"Blazor Bootstrap AutoComplete Component - Validations - Item selected"}),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/autocomplete"},"Blazor AutoComplete Component Demos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/autocomplete"},"Blazor AutoComplete Component Documentation"))))}u.isMDXComponent=!0}}]);