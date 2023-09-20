"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[6375],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>g});var n=o(67294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(o),d=l,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return o?n.createElement(g,r(r({ref:e},m),{},{components:o})):n.createElement(g,r({ref:e},m))}));function g(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=o.length,r=new Array(a);r[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:l,r[1]=i;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7053:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=o(87462),l=(o(67294),o(3905));const a={title:"Blazor Tooltip Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/uqvqb2i.jpg",sidebar_label:"Tooltips",sidebar_position:22},r="Blazor Tooltips",i={unversionedId:"components/tooltips",id:"components/tooltips",title:"Blazor Tooltip Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",source:"@site/docs/05-components/tooltips.md",sourceDirName:"05-components",slug:"/components/tooltips",permalink:"/components/tooltips",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/tooltips.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Blazor Tooltip Component",description:"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages.",image:"https://i.imgur.com/uqvqb2i.jpg",sidebar_label:"Tooltips",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Toasts",permalink:"/components/toasts"},next:{title:"Bar Chart",permalink:"/data-visualization/bar-chart"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Tooltips",id:"tooltips",level:3},{value:"Disabled button with tooltip",id:"disabled-button-with-tooltip",level:3},{value:"Tooltip icon with click event",id:"tooltip-icon-with-click-event",level:3},{value:"Dynamically update the tooltip text",id:"dynamically-update-the-tooltip-text",level:3}],m={toc:s},c="wrapper";function u(t){let{components:e,...o}=t;return(0,l.kt)(c,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blazor-tooltips"},"Blazor Tooltips"),(0,l.kt)("p",null,"Use Blazor Bootstrap tooltip component to add custom tooltips to your web pages."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Added Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TooltipColor")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the tooltip color."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TooltipColor.None")),(0,l.kt)("td",{parentName:"tr",align:null},"1.10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placement"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the tooltip placement. Default is top right."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TooltipPlacement.Top")),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Displays informative text when users hover, focus, or tap an element."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"tooltips"},"Tooltips"),(0,l.kt)("div",null,(0,l.kt)("img",{src:"https://i.imgur.com/uqvqb2i.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,l.kt)("div",null,(0,l.kt)("img",{src:"https://i.imgur.com/ZHLTCvX.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,l.kt)("div",null,(0,l.kt)("img",{src:"https://i.imgur.com/jwJUhkV.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,l.kt)("div",null,(0,l.kt)("img",{src:"https://i.imgur.com/T2YMw9p.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div>\n    <Tooltip Title="Tooltip Left" Placement="TooltipPlacement.Left">Tooltip Left</Tooltip>\n</div>\n<div>\n    <Tooltip Title="Tooltip Top">Tooltip Top</Tooltip>\n</div>\n<div>\n    <Tooltip Title="Tooltip Right" Placement="TooltipPlacement.Right">Tooltip Right</Tooltip>\n</div>\n<div>\n    <Tooltip Title="Tooltip Bottom" Placement="TooltipPlacement.Bottom">Tooltip Bottom</Tooltip>\n</div>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tooltips#examples"},"See tooltips demo here.")),(0,l.kt)("h3",{id:"disabled-button-with-tooltip"},"Disabled button with tooltip"),(0,l.kt)("img",{src:"https://i.imgur.com/PGlmZS3.jpg",alt:"Blazor Bootstrap: Tooltip Component"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tooltip Class="d-inline-block" Title="Disabled button"role="button">\n    <button class="btn btn-primary" type="button" disabled>Disabled button</button>\n</Tooltip>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tooltips#disabled-button-with-tootip"},"See disabled button with tooltip demo here.")),(0,l.kt)("h3",{id:"tooltip-icon-with-click-event"},"Tooltip icon with click event"),(0,l.kt)("img",{src:"https://i.imgur.com/D3FrZba.jpg",alt:"Blazor Bootstrap: Tooltip Component"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tooltip Title="Click here" @onclick="OnClick" role="button">\n    <i class="bi bi-arrow-repeat text-danger"></i>\n</Tooltip>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private void OnClick()\n    {\n        Console.WriteLine($"clicked");\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tooltips#icon-with-click-event"},"See icon with tooltip demo here.")),(0,l.kt)("h3",{id:"dynamically-update-the-tooltip-text"},"Dynamically update the tooltip text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="mb-3">\n    <Tooltip Title="@text" Placement="TooltipPlacement.Top">Tooltip Bottom</Tooltip>\n</div>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" @onclick="ChangeTooltip">Change Tooltip</Button>\n\n@code {\n    private string text = "Tooltip text";\n\n    private void ChangeTooltip() => text = $"Updated {DateTime.Now.ToLongTimeString()}";\n}\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/tooltips#dynamically-update-the-tooltip-text"},"see demo here")))}u.isMDXComponent=!0}}]);