"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[1682],{3905:function(e,t,l){l.d(t,{Zo:function(){return h},kt:function(){return s}});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},h=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=c(l),s=a,u=m["".concat(d,".").concat(s)]||m[s]||p[s]||n;return l?r.createElement(u,o(o({ref:t},h),{},{components:l})):r.createElement(u,o({ref:t},h))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,o=new Array(n);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<n;c++)o[c]=l[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8936:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return h},default:function(){return m}});var r=l(7462),a=l(3366),n=(l(7294),l(3905)),o=["components"],i={sidebar_label:"Placeholders",sidebar_position:10},d="Placeholders",c={unversionedId:"components/placeholders",id:"components/placeholders",isDocsHomePage:!1,title:"Placeholders",description:"Use BlazorBootstrap's loading placeholders for your components or pages to indicate something may still be loading.",source:"@site/docs/components/placeholders.md",sourceDirName:"components",slug:"/components/placeholders",permalink:"/docs/components/placeholders",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/placeholders.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Placeholders",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/components/pagination"},next:{title:"Preload",permalink:"/docs/components/preload"}},h=[{value:"PlaceholderContainer Parameters",id:"placeholdercontainer-parameters",children:[],level:2},{value:"Placeholder Parameters",id:"placeholder-parameters",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Placeholders",id:"placeholders-1",children:[],level:3},{value:"Width",id:"width",children:[],level:3},{value:"Color",id:"color",children:[],level:3},{value:"Sizing",id:"sizing",children:[],level:3},{value:"Animation",id:"animation",children:[],level:3}],level:2}],p={toc:h};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"placeholders"},"Placeholders"),(0,n.kt)("p",null,"Use BlazorBootstrap's loading placeholders for your components or pages to indicate something may still be loading."),(0,n.kt)("h2",{id:"placeholdercontainer-parameters"},"PlaceholderContainer Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Animation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceholderAnimation")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder animation."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceholderAnimation.Glow"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"RenderFragment")),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"placeholder-parameters"},"Placeholder Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Width"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceholderWidth")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder width."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"PlaceholderWidth.Col1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Color"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceholderColor")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder color."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"PlaceholderColor.None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"PlaceholderSize")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets or sets the placeholder size."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"PlaceholderSize.None")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"placeholders-1"},"Placeholders"),(0,n.kt)("img",{src:"https://i.imgur.com/Mw13qfX.png",alt:"Placeholders - Example"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml"},'<PlaceholderContainer Animation="PlaceholderAnimation.Glow">\n    <Placeholder Width="PlaceholderWidth.Col7" />\n    <Placeholder Width="PlaceholderWidth.Col9" />\n    <Placeholder Width="PlaceholderWidth.Col6" />\n    <Placeholder Width="PlaceholderWidth.Col7" />\n</PlaceholderContainer>\n')),(0,n.kt)("h3",{id:"width"},"Width"),(0,n.kt)("p",null,"You can change the width through ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceholderWidth"),", width utilities, or inline styles."),(0,n.kt)("img",{src:"https://i.imgur.com/JcLisSd.png",alt:"Placeholders - Width Example"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Placeholder Width="PlaceholderWidth.Col6" />\n<Placeholder Class="w-75" />\n<Placeholder Style="width: 25%;" />\n')),(0,n.kt)("h3",{id:"color"},"Color"),(0,n.kt)("p",null,"By default, the placeholder uses currentColor. This can be overridden with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Color")," property of type enum."),(0,n.kt)("img",{src:"https://i.imgur.com/g8m05MQ.png",alt:"Placeholders - Color Example"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Placeholder Width="PlaceholderWidth.Col12" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Primary" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Secondary" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Success" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Danger" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Warning" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Info" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Light" />\n<Placeholder Width="PlaceholderWidth.Col12" Color="PlaceholderColor.Dark" />\n')),(0,n.kt)("h3",{id:"sizing"},"Sizing"),(0,n.kt)("p",null,"The size of placeholders are based on the typographic style of the parent element. Customize them with ",(0,n.kt)("inlineCode",{parentName:"p"},"Size")," property of type enum."),(0,n.kt)("img",{src:"https://i.imgur.com/udkkloE.png",alt:"Placeholders - Sizing Example"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Placeholder Width="PlaceholderWidth.Col12" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n<Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n')),(0,n.kt)("h3",{id:"animation"},"Animation"),(0,n.kt)("p",null,"Animate placeholders with ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceholderAnimation.Glow")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaceholderAnimation.Wave")," to better convey the perception of something being actively loaded."),(0,n.kt)("img",{src:"https://i.imgur.com/loMuJzD.png",alt:"Placeholders - Animation Example"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml"},'<PlaceholderContainer Animation="PlaceholderAnimation.Glow">\n    <Placeholder Width="PlaceholderWidth.Col12" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n</PlaceholderContainer>\n\n<br />\n<br />\n\n<PlaceholderContainer Animation="PlaceholderAnimation.Wave">\n    <Placeholder Width="PlaceholderWidth.Col12" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Large" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.Small" />\n    <Placeholder Width="PlaceholderWidth.Col12" Size="PlaceholderSize.ExtraSmall" />\n</PlaceholderContainer>\n')))}m.isMDXComponent=!0}}]);