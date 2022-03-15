"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[2521],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,u=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return n?a.createElement(u,l(l({ref:e},m),{},{components:n})):a.createElement(u,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4449:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_label:"Pagination",sidebar_position:9},s="Pagination",p={unversionedId:"components/pagination",id:"components/pagination",isDocsHomePage:!1,title:"Pagination",description:"Use BlazorBootstrap's pagination component to indicate a series of related content exists across multiple pages.",source:"@site/docs/components/pagination.md",sourceDirName:"components",slug:"/components/pagination",permalink:"/docs/components/pagination",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/pagination.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Pagination",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Offcanvas",permalink:"/docs/components/offcanvas"},next:{title:"Placeholders",permalink:"/docs/components/placeholders"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Callback Events",id:"callback-events",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Pagination",id:"pagination-1",children:[],level:3},{value:"Working with icons",id:"working-with-icons",children:[],level:3},{value:"Disabled and active states",id:"disabled-and-active-states",children:[],level:3},{value:"Sizing",id:"sizing",children:[],level:3},{value:"Alignment",id:"alignment",children:[],level:3},{value:"Callback Events",id:"callback-events-1",children:[],level:3}],level:2}],g={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Use BlazorBootstrap's pagination component to indicate a series of related content exists across multiple pages."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivePageNumber"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Active page number. Starts with 1."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Alignment")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the pagination alignment."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Alignment.None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DisplayPages"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the maximum page links to be displayed."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FirstLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets first link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FirstLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets first link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"FirstLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"FirstLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"First")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LastLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets last link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LastLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets last link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"LastLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"LastLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Last")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NextLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets next link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NextLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets next link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"NextLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"NextLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Next")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PreviousLinkIcon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IconName")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets previous link icon."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PreviousLinkText"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets previous link text. ",(0,i.kt)("inlineCode",{parentName:"td"},"PreviousLinkText")," is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"PreviousLinkIcon")," is specified."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Previous")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PaginationSize")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the pagination size."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TotalPages"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Total pages of data items."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"callback-events"},"Callback Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PageChanged"),(0,i.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the page number is changed.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"pagination-1"},"Pagination"),(0,i.kt)("p",null,"We use a large block of connected links for our pagination, making links hard to miss and easily scalable - all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links."),(0,i.kt)("img",{src:"https://i.imgur.com/6wDZ4zP.jpg",alt:"Pagination - Examples"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination TotalPages="8" />\n<Pagination TotalPages="10" />\n<Pagination TotalPages="13" />\n<Pagination TotalPages="25" />\n<Pagination TotalPages="100" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#examples"},"See demo here.")),(0,i.kt)("h3",{id:"working-with-icons"},"Working with icons"),(0,i.kt)("img",{src:"https://i.imgur.com/nhfGHfy.jpg",alt:"Pagination - Working with icons"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination ActivePageNumber="1"\n            TotalPages="15"\n            DisplayPages="5"\n            FirstLinkIcon="IconName.ChevronDoubleLeft"\n            PreviousLinkIcon="IconName.ChevronLeft"\n            NextLinkIcon="IconName.ChevronRight"\n            LastLinkIcon="IconName.ChevronDoubleRight" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#working-with-icons"},"See demo here.")),(0,i.kt)("h3",{id:"disabled-and-active-states"},"Disabled and active states"),(0,i.kt)("img",{src:"https://i.imgur.com/SCbZVd4.jpg",alt:"Pagination - Disabled and active states"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination ActivePageNumber="1" TotalPages="10" />\n<Pagination ActivePageNumber="3" TotalPages="10" />\n<Pagination ActivePageNumber="5" TotalPages="10" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#disabled-and-active-states"},"See demo here.")),(0,i.kt)("h3",{id:"sizing"},"Sizing"),(0,i.kt)("p",null,"Fancy larger or smaller pagination? Add ",(0,i.kt)("inlineCode",{parentName:"p"},'Size="PaginationSize.Small"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'Size="PaginationSize.Large"')," for additional sizes."),(0,i.kt)("img",{src:"https://i.imgur.com/2kMVncQ.jpg",alt:"Pagination - Sizing"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination ActivePageNumber="5" TotalPages="5" Size="PaginationSize.Small" />\n<Pagination ActivePageNumber="5" TotalPages="5" />\n<Pagination ActivePageNumber="5" TotalPages="5" Size="PaginationSize.Large" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#sizing"},"See demo here.")),(0,i.kt)("h3",{id:"alignment"},"Alignment"),(0,i.kt)("img",{src:"https://i.imgur.com/RkpUdJu.jpg",alt:"Pagination - Alignment"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination ActivePageNumber="2" TotalPages="5" />\n<Pagination ActivePageNumber="2" TotalPages="5" Alignment="Alignment.Center" />\n<Pagination ActivePageNumber="2" TotalPages="5" Alignment="Alignment.End" />\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#alignment"},"See demo here.")),(0,i.kt)("h3",{id:"callback-events-1"},"Callback Events"),(0,i.kt)("img",{src:"https://i.imgur.com/VsB3ZYW.jpg",alt:"Pagination - Callback Events"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Pagination ActivePageNumber="@currentPageNumber"\n            TotalPages="10"\n            PageChanged="OnPageChangedAsync" />\n\n<text>Current Page Number: @currentPageNumber</text>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"@code {\n    int currentPageNumber = 2;\n\n    private async Task OnPageChangedAsync(int newPageNumber)\n    {\n        await Task.Run(() => { currentPageNumber = newPageNumber; });\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/pagination#events"},"See demo here.")))}d.isMDXComponent=!0}}]);