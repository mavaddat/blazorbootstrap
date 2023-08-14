"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[33587],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(a),h=n,C=c["".concat(o,".").concat(h)]||c[h]||p[h]||l;return a?r.createElement(C,d(d({ref:e},m),{},{components:a})):r.createElement(C,d({ref:e},m))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,d=new Array(l);d[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,d[1]=i;for(var s=2;s<l;s++)d[s]=a[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27618:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Blazor Card Component",description:"BootstrapBootstrap's cards provide a flexible and extensible content container with multiple variants and options.",image:"https://i.imgur.com/RhytwPa.png",sidebar_label:"Card",sidebar_position:7},d="Blazor Card",i={unversionedId:"components/card",id:"components/card",title:"Blazor Card Component",description:"BootstrapBootstrap's cards provide a flexible and extensible content container with multiple variants and options.",source:"@site/docs/05-components/card.md",sourceDirName:"05-components",slug:"/components/card",permalink:"/docs/components/card",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/card.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Blazor Card Component",description:"BootstrapBootstrap's cards provide a flexible and extensible content container with multiple variants and options.",image:"https://i.imgur.com/RhytwPa.png",sidebar_label:"Card",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Callout",permalink:"/docs/components/callout"},next:{title:"Charts",permalink:"/docs/components/charts"}},o={},s=[{value:"About",id:"about",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Card Parameters",id:"card-parameters",level:3},{value:"CardBody Parameters",id:"cardbody-parameters",level:3},{value:"CardFooter Parameters",id:"cardfooter-parameters",level:3},{value:"CardGroup Parameters",id:"cardgroup-parameters",level:3},{value:"CardHeader Parameters",id:"cardheader-parameters",level:3},{value:"CardLink Parameters",id:"cardlink-parameters",level:3},{value:"CardSubTitle Parameters",id:"cardsubtitle-parameters",level:3},{value:"CardText Parameters",id:"cardtext-parameters",level:3},{value:"CardTitle Parameters",id:"cardtitle-parameters",level:3},{value:"Examples",id:"examples",level:2},{value:"Card",id:"card",level:3},{value:"Content types",id:"content-types",level:3},{value:"Body",id:"body",level:3},{value:"Titles, text, and links",id:"titles-text-and-links",level:3},{value:"Images",id:"images",level:3},{value:"List groups",id:"list-groups",level:3},{value:"Kitchen sink",id:"kitchen-sink",level:3},{value:"Header and footer",id:"header-and-footer",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Text alignment",id:"text-alignment",level:3},{value:"Background and color",id:"background-and-color",level:3},{value:"Card groups",id:"card-groups",level:3},{value:"Card groups with footer",id:"card-groups-with-footer",level:3}],m={toc:s};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blazor-card"},"Blazor Card"),(0,n.kt)("p",null,"BootstrapBootstrap's cards provide a flexible and extensible content container with multiple variants and options."),(0,n.kt)("img",{src:"https://i.imgur.com/RhytwPa.png",alt:"Blazor Bootstrap: Card component"}),(0,n.kt)("h2",{id:"about"},"About"),(0,n.kt)("p",null,"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"card-parameters"},"Card Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Color"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CardColor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the card color."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CardColor.None")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TextAlignment"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Alignment")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the text alignment of the card."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Alignment.None")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardbody-parameters"},"CardBody Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardfooter-parameters"},"CardFooter Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardgroup-parameters"},"CardGroup Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardheader-parameters"},"CardHeader Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardlink-parameters"},"CardLink Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When set to 'true', disables the component's functionality and places it in a disabled state."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"To"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the target route."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Target"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Target")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The target attribute specifies where to open the linked document."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Target.None")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TabIndex"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int?")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If defined, indicates that its element can be focused and can participates in sequential keyboard navigation."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardsubtitle-parameters"},"CardSubTitle Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HeadingSize")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the heading size."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HeadingSize.H6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardtext-parameters"},"CardText Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h3",{id:"cardtitle-parameters"},"CardTitle Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ChildContent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RenderFragment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the content to be rendered inside this."),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HeadingSize")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the heading size."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HeadingSize.H5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"card"},"Card"),(0,n.kt)("p",null,"Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element."),(0,n.kt)("img",{src:"https://i.imgur.com/wT0LXMG.png",alt:"Blazor Bootstrap: Card Component - Examples"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#examples"},"See the demo here.")),(0,n.kt)("h3",{id:"content-types"},"Content types"),(0,n.kt)("p",null,"Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what\u2019s supported."),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("p",null,"The building block of a card is the CardBody. Use it whenever you need a padded section within a card."),(0,n.kt)("img",{src:"https://i.imgur.com/jkWQdNr.png",alt:"Blazor Bootstrap: Card Component - Body"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"<Card>\n    <CardBody>\n        This is some text within a card body.\n    </CardBody>\n</Card>\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#body"},"See the demo here.")),(0,n.kt)("h3",{id:"titles-text-and-links"},"Titles, text, and links"),(0,n.kt)("img",{src:"https://i.imgur.com/9ezoKyR.png",alt:"Blazor Bootstrap: Card Component - Titles, text, and links"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Card title</CardTitle>\n        <CardSubTitle Class="mb-2 text-muted">Card subtitle</CardSubTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n        <CardLink To="#">Card link</CardLink>\n        <CardLink To="#">Another link</CardLink>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#titles-text-and-links"},"See the demo here.")),(0,n.kt)("h3",{id:"images"},"Images"),(0,n.kt)("img",{src:"https://i.imgur.com/LpUuK6C.png",alt:"Blazor Bootstrap: Card Component - Images"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Class="mb-4" Style="width:18rem;">\n    <img class="rounded-top" src="/images/placeholder.png" alt="placeholder" />\n    <CardBody>\n        <CardTitle>Card title</CardTitle>\n        <CardSubTitle Class="mb-2 text-muted">Card subtitle</CardSubTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n\n<Card Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Card title</CardTitle>\n        <CardSubTitle Class="mb-2 text-muted">Card subtitle</CardSubTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n    <img class="rounded-bottom" src="/images/placeholder.png" alt="placeholder" />\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#images"},"See the demo here.")),(0,n.kt)("h3",{id:"list-groups"},"List groups"),(0,n.kt)("p",null,"Create lists of content in a card with a flush list group."),(0,n.kt)("img",{src:"https://i.imgur.com/cxLiBhE.png",alt:"Blazor Bootstrap: Card Component - List groups"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Style="width:18rem;">\n    <ul class="list-group list-group-flush">\n        <li class="list-group-item">An item</li>\n        <li class="list-group-item">A second item</li>\n        <li class="list-group-item">A third item</li>\n    </ul>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#list-groups"},"See the demo here.")),(0,n.kt)("h3",{id:"kitchen-sink"},"Kitchen sink"),(0,n.kt)("p",null,"Mix and match multiple content types to create the card you need, or throw everything in there.\nShown below are image styles, blocks, text styles, and a list group\u2014all wrapped in a fixed-width card."),(0,n.kt)("img",{src:"https://i.imgur.com/zsfdUnC.png",alt:"Blazor Bootstrap: Card Component - Kitchen sink"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Style="width:18rem;">\n    <img class="rounded-top" src="/images/placeholder.png" alt="placeholder" />\n    <CardBody>\n        <CardTitle>Card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n    <ul class="list-group list-group-flush">\n        <li class="list-group-item">An item</li>\n        <li class="list-group-item">A second item</li>\n        <li class="list-group-item">A third item</li>\n    </ul>\n    <CardBody>\n        <CardLink To="#">Card link</CardLink>\n        <CardLink To="#">Another link</CardLink>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#kitchen-sink"},"See the demo here.")),(0,n.kt)("h3",{id:"header-and-footer"},"Header and footer"),(0,n.kt)("p",null,"Add an optional header and/or footer within a card."),(0,n.kt)("img",{src:"https://i.imgur.com/lNWvitv.png",alt:"Blazor Bootstrap: Card Component - Header and footer"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Style="width:18rem;">\n    <CardHeader>\n        Featured\n    </CardHeader>\n    <CardBody>\n        <CardTitle>Special title treatment</CardTitle>\n        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#header-and-footer"},"See the demo here.")),(0,n.kt)("h3",{id:"sizing"},"Sizing"),(0,n.kt)("p",null,"Cards assume no specific width to start, so they\u2019ll be 100% wide unless otherwise stated.\nYou can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities."),(0,n.kt)("img",{src:"https://i.imgur.com/AszIQT5.png",alt:"Blazor Bootstrap: Card Component - Sizing"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<div class="row">\n    <div class="col-sm-6">\n        <Card>\n            <CardBody>\n                <CardTitle>Special title treatment</CardTitle>\n                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n            </CardBody>\n        </Card>\n    </div>\n    <div class="col-sm-6">\n        <Card>\n            <CardBody>\n                <CardTitle>Special title treatment</CardTitle>\n                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n            </CardBody>\n        </Card>\n    </div>\n</div>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#sizing"},"See the demo here.")),(0,n.kt)("h3",{id:"text-alignment"},"Text alignment"),(0,n.kt)("p",null,"You can quickly change the text alignment of any card\u2014in its entirety or specific parts\u2014with our TextAlignment parameter."),(0,n.kt)("img",{src:"https://i.imgur.com/tJdeAKt.png",alt:"Blazor Bootstrap: Card Component - Text alignment"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Class="mb-4" Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Special title treatment</CardTitle>\n        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n\n<Card TextAlignment="Alignment.Center" Class="mb-4" Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Special title treatment</CardTitle>\n        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n\n<Card TextAlignment="Alignment.End" Class="mb-4" Style="width:18rem;">\n    <CardBody>\n        <CardTitle>Special title treatment</CardTitle>\n        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n        <Button Color="ButtonColor.Primary" To="#" Type="ButtonType.Link">Go somewhere</Button>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#text-alignment"},"See the demo here.")),(0,n.kt)("h3",{id:"background-and-color"},"Background and color"),(0,n.kt)("img",{src:"https://i.imgur.com/FH7aQPS.png",alt:"Blazor Bootstrap: Card Component - Background and color - Primary, Secondary, Success"}),(0,n.kt)("img",{src:"https://i.imgur.com/1ukTnup.png",alt:"Blazor Bootstrap: Card Component - Background and color - Danger, Warning, Info"}),(0,n.kt)("img",{src:"https://i.imgur.com/uCvHXXp.png",alt:"Blazor Bootstrap: Card Component - Background and color - Light, Dark"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<Card Color="CardColor.Primary" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Primary card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Secondary" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Secondary card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Success" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Success card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Danger" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Danger card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Warning" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Warning card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Info" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Info card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Light" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Light card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n\n<Card Color="CardColor.Dark" Class="mb-4" Style="width:18rem;">\n    <CardHeader>Header</CardHeader>\n    <CardBody>\n        <CardTitle>Dark card title</CardTitle>\n        <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    </CardBody>\n</Card>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#background-and-color"},"See the demo here.")),(0,n.kt)("h3",{id:"card-groups"},"Card groups"),(0,n.kt)("p",null,"Use card groups to render cards as a single, attached element with equal width and height columns.\nCard groups start off stacked and use display: flex; to become attached with uniform dimensions starting at the sm breakpoint."),(0,n.kt)("img",{src:"https://i.imgur.com/dtYEkBB.png",alt:"Blazor Bootstrap: Card Component - Card groups"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<CardGroup>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>\n            <CardText Class="text-muted">Last updated 3 mins ago</CardText>\n        </CardBody>\n    </Card>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>\n            <CardText Class="text-muted">Last updated 3 mins ago</CardText>\n        </CardBody>\n    </Card>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>\n            <CardText Class="text-muted">Last updated 3 mins ago</CardText>\n        </CardBody>\n    </Card>\n</CardGroup>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#card-groups"},"See the demo here.")),(0,n.kt)("h3",{id:"card-groups-with-footer"},"Card groups with footer"),(0,n.kt)("p",null,"When using card groups with footers, their content will automatically line up."),(0,n.kt)("img",{src:"https://i.imgur.com/URxKosx.png",alt:"Blazor Bootstrap: Card Component - Card groups with footer"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<CardGroup>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>\n        </CardBody>\n        <CardFooter>\n            <small class="text-muted">Last updated 3 mins ago</small>\n        </CardFooter>\n    </Card>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>\n        </CardBody>\n        <CardFooter>\n            <small class="text-muted">Last updated 3 mins ago</small>\n        </CardFooter>\n    </Card>\n    <Card Class="mb-4" Style="width:18rem;">\n        <img src="/images/placeholder.png" alt="placeholder" />\n        <CardBody>\n            <CardTitle>Card title</CardTitle>\n            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>\n        </CardBody>\n        <CardFooter>\n            <small class="text-muted">Last updated 3 mins ago</small>\n        </CardFooter>\n    </Card>\n</CardGroup>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/card#card-groups-with-footer"},"See the demo here.")))}p.isMDXComponent=!0}}]);