"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[8351],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,m=r(t,["components","mdxType","originalType","parentName"]),c=p(n),d=l,h=c["".concat(s,".").concat(d)]||c[d]||b[d]||o;return n?a.createElement(h,i(i({ref:e},m),{},{components:n})):a.createElement(h,i({ref:e},m))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2227:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={title:"Blazor Tabs Component",description:"Documentation and examples for how to use BlazorBootstrap's Tabs components.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Tabs",sidebar_position:13},i="Tabs",r={unversionedId:"components/tabs",id:"components/tabs",title:"Blazor Tabs Component",description:"Documentation and examples for how to use BlazorBootstrap's Tabs components.",source:"@site/docs/components/tabs.md",sourceDirName:"components",slug:"/components/tabs",permalink:"/docs/components/tabs",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/tabs.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Blazor Tabs Component",description:"Documentation and examples for how to use BlazorBootstrap's Tabs components.",image:"https://getblazorbootstrap.com/img/logo.svg",sidebar_label:"Tabs",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Preload",permalink:"/docs/components/preload"},next:{title:"Toasts",permalink:"/docs/components/toasts"}},s={},p=[{value:"Tabs Parameters",id:"tabs-parameters",level:2},{value:"Tab Parameters",id:"tab-parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Tabs",id:"tabs-1",level:3},{value:"Fade effect",id:"fade-effect",level:3},{value:"Title with icon",id:"title-with-icon",level:3},{value:"Disable Tab",id:"disable-tab",level:3},{value:"Pills",id:"pills",level:3},{value:"Callback Events",id:"callback-events",level:3}],m={toc:p};function b(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"Documentation and examples for how to use BlazorBootstrap's ",(0,l.kt)("code",null,"Tabs")," components."),(0,l.kt)("h2",{id:"tabs-parameters"},"Tabs Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EnableFadeEffect"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the tabs fade effect."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NavStyle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NavStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Get or sets the nav style."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NavStyle.Tabs"))))),(0,l.kt)("h2",{id:"tab-parameters"},"Tab Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab title."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TitleTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab title template."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Content"),(0,l.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside the tab."),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsActive"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the active tab."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Gets or sets the disabled."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Title")," or ",(0,l.kt)("strong",{parentName:"p"},"TitleTemplate")," is required.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"tabs-1"},"Tabs"),(0,l.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Tabs - Examples"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Tabs>\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#examples"},"See demo here.")),(0,l.kt)("h3",{id:"fade-effect"},"Fade effect"),(0,l.kt)("p",null,"To make tabs fade in, add ",(0,l.kt)("inlineCode",{parentName:"p"},'EnableFadeEffect="true"'),". The first tab pane must also have ",(0,l.kt)("inlineCode",{parentName:"p"},'IsActive="true"')," to make the initial content visible."),(0,l.kt)("img",{src:"https://i.imgur.com/ranwriJ.png",alt:"Tabs - Fade effect"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1, 2} showLineNumbers","{1,":!0,"2}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#fade-effect"},"See demo here.")),(0,l.kt)("h3",{id:"title-with-icon"},"Title with icon"),(0,l.kt)("img",{src:"https://i.imgur.com/KelXx6Z.png",alt:"Tabs - Title with icon"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3-5,13-15,23-25} showLineNumbers","{3-5,13-15,23-25}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab IsActive="true">\n        <TitleTemplate>\n            <Icon Name="IconName.HouseFill" /> Home\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PersonFill" /> Profile\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab>\n        <TitleTemplate>\n            <Icon Name="IconName.PhoneFill" /> Contact\n        </TitleTemplate>\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#title-with-icon"},"See demo here.")),(0,l.kt)("h3",{id:"disable-tab"},"Disable Tab"),(0,l.kt)("img",{src:"https://i.imgur.com/TCG6gCz.png",alt:"Tabs - Disable Tab"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{16} showLineNumbers","{16}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Projects" Disabled="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Projects tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#disable-tab"},"See demo here.")),(0,l.kt)("h3",{id:"pills"},"Pills"),(0,l.kt)("img",{src:"https://i.imgur.com/IyRJ0PS.png",alt:"Tabs - Pills"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Tabs EnableFadeEffect="true" NavStyle="NavStyle.Pills">\n    <Tab Title="Home" IsActive="true">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Home tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Profile">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Profile tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n    <Tab Title="Contact">\n        <Content>\n            <p class="mt-2">\n                <b>This is some placeholder content the Contact tab\'s associated content.</b> Clicking another tab will toggle the visibility of this one for the next.\n            </p>\n        </Content>\n    </Tab>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#pills"},"See demo here.")),(0,l.kt)("h3",{id:"callback-events"},"Callback Events"),(0,l.kt)("p",null,"When showing a new tab, the events fire in the following order:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"OnHiding")," (on the current active tab)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"OnShowing")," (on the to-be-shown tab)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"OnHidden")," (on the previous active tab, the same one as for the ",(0,l.kt)("inlineCode",{parentName:"li"},"OnHiding")," event)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"OnShown")," (on the newly-active just-shown tab, the same one as for the ",(0,l.kt)("inlineCode",{parentName:"li"},"OnShowing")," event)")),(0,l.kt)("admonition",{title:"Note",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If no tab was already active, then the ",(0,l.kt)("inlineCode",{parentName:"p"},"OnHiding")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"OnHidden")," events will not be fired.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tabs#events"},"See demo here.")))}b.isMDXComponent=!0}}]);