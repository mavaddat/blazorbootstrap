"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[4094],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Blazor Switch Component",description:"Use the Blazor Bootstrap `Switch` component to show the consistent cross-browser and cross-device custom checkboxes.",image:"https://i.imgur.com/ALKzreq.png",sidebar_label:"Switch",sidebar_position:5},o="Blazor Switch",i={unversionedId:"forms/switch",id:"forms/switch",title:"Blazor Switch Component",description:"Use the Blazor Bootstrap `Switch` component to show the consistent cross-browser and cross-device custom checkboxes.",source:"@site/docs/04-forms/switch.md",sourceDirName:"04-forms",slug:"/forms/switch",permalink:"/forms/switch",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/04-forms/switch.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Blazor Switch Component",description:"Use the Blazor Bootstrap `Switch` component to show the consistent cross-browser and cross-device custom checkboxes.",image:"https://i.imgur.com/ALKzreq.png",sidebar_label:"Switch",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Number Input",permalink:"/forms/number-input"},next:{title:"Time Input",permalink:"/forms/time-input"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Disable",id:"disable",level:3},{value:"Disable",id:"disable-1",level:3},{value:"Reverse",id:"reverse",level:3},{value:"Events: ValueChanged",id:"events-valuechanged",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blazor-switch"},"Blazor Switch"),(0,n.kt)("p",null,"Use the Blazor Bootstrap ",(0,n.kt)("inlineCode",{parentName:"p"},"Switch")," component to show the consistent cross-browser and cross-device custom checkboxes."),(0,n.kt)("img",{src:"https://i.imgur.com/ALKzreq.png",alt:"Blazor Bootstrap: Switch Component"}),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the disabled."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the label."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Determines whether to put the switch on the opposite side."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the value."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Return Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disable()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"void"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disables switch."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable()"),(0,n.kt)("td",{parentName:"tr",align:"left"},"void"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enables switch."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")))),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ValueChanged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This event fired when the switch selection changed."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.3.0")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,n.kt)("img",{src:"https://i.imgur.com/ALKzreq.png",alt:"Blazor Bootstrap: Switch Component - Basic usage"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Switch @bind-Value="agree1" Label="Default switch checkbox input" />\n<Switch @bind-Value="agree2" Label="Checked switch checkbox input" />\n\n<div class="mt-3">Switch 1 Status: <b>@agree1</b></div>\n<div>Switch 2 Status: <b>@agree2</b></div>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    bool agree1;\n    bool agree2 = true;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/switch#basic-usage"},"See demo here")),(0,n.kt)("h3",{id:"disable"},"Disable"),(0,n.kt)("h3",{id:"disable-1"},"Disable"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("b",null,"Disabled")," parameter to disable the Switch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,5-7} showLineNumbers","{2,5-7}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <Switch @bind-Value="agree" Disabled="@disabled" Label="Disabled switch checkbox input" />\n</div>\n\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Warning" @onclick="Toggle"> Toggle </Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5,7,9} showLineNumbers","{3,5,7,9}":!0,showLineNumbers:!0},"@code {\n    private bool agree = true;\n    private bool disabled = true;\n\n    private void Enable() => disabled = false;\n\n    private void Disable() => disabled = true;\n\n    private void Toggle() => disabled = !disabled;\n}\n")),(0,n.kt)("p",null,"Also, use ",(0,n.kt)("strong",{parentName:"p"},"Enable()")," and ",(0,n.kt)("strong",{parentName:"p"},"Disable()")," methods to enable and disable the Switch."),(0,n.kt)("admonition",{title:"NOTE",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not use both the ",(0,n.kt)("strong",{parentName:"p"},"Disabled")," parameter and ",(0,n.kt)("strong",{parentName:"p"},"Enable()")," & ",(0,n.kt)("strong",{parentName:"p"},"Disable()")," methods.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,5-6} showLineNumbers","{2,5-6}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <Switch @ref="switch1" @bind-Value="agree" Label="Disabled switch checkbox input" />\n</div>\n\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,5,7} showLineNumbers","{2,5,7}":!0,showLineNumbers:!0},"@code {\n    private Switch switch1 = default!;\n    private bool agree = true;\n\n    private void Disable() => switch1.Disable();\n\n    private void Enable() => switch1.Enable();\n}\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/autocomplete#disable"},"See demo here")),(0,n.kt)("h3",{id:"reverse"},"Reverse"),(0,n.kt)("p",null,"Put your switches on the opposite side by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Reverse")," parameter."),(0,n.kt)("img",{src:"https://i.imgur.com/Eo7kY1f.png",alt:"Blazor Bootstrap: Switch Component - Reverse"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Switch @bind-Value="agree" Label="Reverse switch checkbox input" Reverse="true" />\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    bool agree;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/switch#reverse"},"See demo here")),(0,n.kt)("h3",{id:"events-valuechanged"},"Events: ValueChanged"),(0,n.kt)("p",null,"This event fired when the ",(0,n.kt)("inlineCode",{parentName:"p"},"Switch")," selection changed."),(0,n.kt)("img",{src:"https://i.imgur.com/MZe3u1z.png",alt:"Blazor Bootstrap: Switch Component - Events: ValueChanged"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Switch Value="agree" Label="Default switch checkbox input" ValueExpression="() => agree" ValueChanged="SwitchChanged" />\n<div class="mt-3">@displaySwitchStatus</div>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private bool agree;\n    private string displaySwitchStatus;\n\n    private void SwitchChanged(bool value)\n    {\n        agree = value; // this is mandatory\n        displaySwitchStatus = $"Switch Status: {value}, changed at {DateTime.Now.ToLocalTime()}.";\n    }\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/switch#events-value-changed"},"See demo here")))}d.isMDXComponent=!0}}]);