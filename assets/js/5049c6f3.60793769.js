"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[83622],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=m(a),d=o,b=c["".concat(i,".").concat(d)]||c[d]||u[d]||n;return a?r.createElement(b,l(l({ref:e},s),{},{components:a})):r.createElement(b,l({ref:e},s))}));function d(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,l=new Array(n);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,l[1]=p;for(var m=2;m<n;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58424:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={title:"Blazor Bootstrap v1.10.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.10.0","blazor","bootstrap","bootstrap5","blazorbootstrap","grid","blazorgrid"]},l=void 0,p={permalink:"/blog/2023/08/13/blazorbootstrap-1.10.0",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/blog/blog/2023-08-13-blazorbootstrap-1.10.0.md",source:"@site/blog/2023-08-13-blazorbootstrap-1.10.0.md",title:"Blazor Bootstrap v1.10.0",description:"We are excited to release 1.10.0 with new Card and Dropdown component. Charts, Grid, Button, Tooltip, and Switch component updates!!!",date:"2023-08-13T00:00:00.000Z",formattedDate:"August 13, 2023",tags:[{label:"v1.10.0",permalink:"/blog/tags/v-1-10-0"},{label:"blazor",permalink:"/blog/tags/blazor"},{label:"bootstrap",permalink:"/blog/tags/bootstrap"},{label:"bootstrap5",permalink:"/blog/tags/bootstrap-5"},{label:"blazorbootstrap",permalink:"/blog/tags/blazorbootstrap"},{label:"grid",permalink:"/blog/tags/grid"},{label:"blazorgrid",permalink:"/blog/tags/blazorgrid"}],readingTime:1.22,hasTruncateMarker:!0,authors:[{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"}],frontMatter:{title:"Blazor Bootstrap v1.10.0",authors:{name:"Vikram Reddy",title:"Creator",url:"https://github.com/gvreddy04",image_url:"https://avatars.githubusercontent.com/u/2337067",imageURL:"https://avatars.githubusercontent.com/u/2337067"},tags:["v1.10.0","blazor","bootstrap","bootstrap5","blazorbootstrap","grid","blazorgrid"]},nextItem:{title:"Blazor Bootstrap v1.9.5",permalink:"/blog/2023/07/16/blazorbootstrap-1.9.5"}},i={authorsImageUrls:[void 0]},m=[{value:"What&#39;s New",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2},{value:"Links",id:"links",level:2}],s={toc:m};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are excited to release 1.10.0 with new Card and Dropdown component. Charts, Grid, Button, Tooltip, and Switch component updates!!!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/qH7G1ZT.png",alt:"image",title:"Blazor Bootstrap: Grid Component"})),(0,o.kt)("h2",{id:"whats-new"},"What's New"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Dropdown")," Component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Single button"),(0,o.kt)("li",{parentName:"ul"},"Multiple colors"),(0,o.kt)("li",{parentName:"ul"},"Split button"),(0,o.kt)("li",{parentName:"ul"},"Sizing"),(0,o.kt)("li",{parentName:"ul"},"Directions (Dropup, Dropup centered, Dropend, and Dropstart)"),(0,o.kt)("li",{parentName:"ul"},"Active"),(0,o.kt)("li",{parentName:"ul"},"Disabled"),(0,o.kt)("li",{parentName:"ul"},"Menu content (Header, Dividers, Text, and Forms)"),(0,o.kt)("li",{parentName:"ul"},"Auto close behavior"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Card")," Component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Content types (Body, Titles, text, and links)"),(0,o.kt)("li",{parentName:"ul"},"Images"),(0,o.kt)("li",{parentName:"ul"},"List groups"),(0,o.kt)("li",{parentName:"ul"},"Header and footer"),(0,o.kt)("li",{parentName:"ul"},"Sizing"),(0,o.kt)("li",{parentName:"ul"},"Text alignment"),(0,o.kt)("li",{parentName:"ul"},"Background and color"),(0,o.kt)("li",{parentName:"ul"},"Card groups"),(0,o.kt)("li",{parentName:"ul"},"Card groups with footer")))),(0,o.kt)("h2",{id:"whats-changed"},"What's changed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Bar Chart")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New AddDataSetAsync and AddAsync methods"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Doughnut Chart")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New AddDataSetAsync and AddAsync methods"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Line Chart")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New AddDataSetAsync and AddAsync methods"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Pie Chart")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New AddDataSetAsync and AddAsync methods"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Grid")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Grid: Filters translation support ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/issues/292"},"#292")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Button")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tooltip color support added"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tooltip color support added"),(0,o.kt)("li",{parentName:"ul"},"Tooltip on button problem ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/issues/296"},"#296")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Switch")," component"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Switch is invoking EditContext OnFieldChanged even the change was not from UI ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vikramlearning/blazorbootstrap/issues/297"},"#297"))))),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.blazorbootstrap.com/"},"Demo Website - Blazor Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demos.getblazorbootstrap.com/"},"Demo Website - Blazor WebAssembly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/card"},"Blazor Card Component Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/dropdown"},"Blazor Dropdown Component Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/charts"},"Blazor Chart Components Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/components/grid"},"Blazor Grid Component Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/buttons"},"Blazor Button Component Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/tooltips"},"Blazor Tooltip Component Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://getblazorbootstrap.com/docs/forms/switch"},"Blazor Switch Component Documentation"))))}u.isMDXComponent=!0}}]);