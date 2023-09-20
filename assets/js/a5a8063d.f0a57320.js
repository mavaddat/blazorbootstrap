"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[42084],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var o=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=o.createContext({}),i=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},m=function(t){var e=i(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=i(r),b=a,g=c["".concat(p,".").concat(b)]||c[b]||u[b]||n;return r?o.createElement(g,s(s({ref:e},m),{},{components:r})):o.createElement(g,s({ref:e},m))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,s=new Array(n);s[0]=b;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:a,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99413:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var o=r(87462),a=(r(67294),r(3905));const n={title:"Blazor Bootstrap v0.6.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.6.0","blazorbootstrap","blazor-toasts","blazor-progress","blazor-progress-bar","toasts","progress","progress-bar"]},s=void 0,l={permalink:"/blog/2022/10/30/blazorbootstrap-0.6.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2022-10-30-blazorbootstrap-0.6.0.md",source:"@site/blog/2022-10-30-blazorbootstrap-0.6.0.md",title:"Blazor Bootstrap v0.6.0",description:"We are excited to release 0.6.0 with the new blazor progress component and enhancements to the blazor toasts component.",date:"2022-10-30T00:00:00.000Z",formattedDate:"October 30, 2022",tags:[{label:"v0.6.0",permalink:"/blog/tags/v-0-6-0"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"blazor-toasts",permalink:"/blog/tags/blazor-toasts"},{label:"blazor-progress",permalink:"/blog/tags/blazor-progress"},{label:"blazor-progress-bar",permalink:"/blog/tags/blazor-progress-bar"},{label:"toasts",permalink:"/blog/tags/toasts"},{label:"progress",permalink:"/blog/tags/progress"},{label:"progress-bar",permalink:"/blog/tags/progress-bar"}],readingTime:.455,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v0.6.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v0.6.0","blazorbootstrap","blazor-toasts","blazor-progress","blazor-progress-bar","toasts","progress","progress-bar"]},prevItem:{title:"Blazor Bootstrap v1.0.0",permalink:"/blog/2022/11/18/blazorbootstrap-1.0.0"},nextItem:{title:"Blazor Bootstrap v0.5.1",permalink:"/blog/2022/10/22/blazorbootstrap-0.5.1"}},p={authorsImageUrls:[void 0]},i=[{value:"New Components",id:"new-components",level:3},{value:"Progress component features",id:"progress-component-features",level:3},{value:"Toasts component features",id:"toasts-component-features",level:3},{value:"Links",id:"links",level:3}],m={toc:i},c="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,o.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are excited to release ",(0,a.kt)("inlineCode",{parentName:"p"},"0.6.0")," with the new blazor progress component and enhancements to the blazor toasts component."),(0,a.kt)("img",{src:"https://i.imgur.com/MK142lQ.png",alt:"Blazor Progress component"}),(0,a.kt)("h3",{id:"new-components"},"New Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Progress")," component")),(0,a.kt)("h3",{id:"progress-component-features"},"Progress component features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Labels"),(0,a.kt)("li",{parentName:"ul"},"Backgrounds"),(0,a.kt)("li",{parentName:"ul"},"Multiple bars"),(0,a.kt)("li",{parentName:"ul"},"Striped"),(0,a.kt)("li",{parentName:"ul"},"Animated stripes")),(0,a.kt)("img",{src:"https://i.imgur.com/MK142lQ.png",alt:"Blazor Progress component"}),(0,a.kt)("h3",{id:"toasts-component-features"},"Toasts component features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toasts with/without title"),(0,a.kt)("li",{parentName:"ul"},"Auto hide"),(0,a.kt)("li",{parentName:"ul"},"Placement"),(0,a.kt)("li",{parentName:"ul"},"Stack Length")),(0,a.kt)("img",{src:"https://i.imgur.com/W1YkmJH.png",alt:"Blazor Toasts component"}),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/charts"},"Demo Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/progress"},"Blazor Progress Component Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/toasts"},"Blazor Toasts Component Documentation"))))}u.isMDXComponent=!0}}]);