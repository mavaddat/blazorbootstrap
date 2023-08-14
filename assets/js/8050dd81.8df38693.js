"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[17765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(r),b=s,u=d["".concat(p,".").concat(b)]||d[b]||c[b]||n;return r?a.createElement(u,o(o({ref:t},m),{},{components:r})):a.createElement(u,o({ref:t},m))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<n;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(87462),s=(r(67294),r(3905));const n={id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},o="Getting started - Blazor WebAssembly",l={unversionedId:"getting-started/blazor-webassembly",id:"getting-started/blazor-webassembly",title:"Blazor WebAssembly",description:"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework.",source:"@site/docs/01-getting-started/getting-started-webassembly.md",sourceDirName:"01-getting-started",slug:"/getting-started/blazor-webassembly",permalink:"/docs/getting-started/blazor-webassembly",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/01-getting-started/getting-started-webassembly.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"blazor-webassembly",sidebar_label:"Blazor WebAssembly",sidebar_position:1,title:"Blazor WebAssembly"},sidebar:"tutorialSidebar",next:{title:"Blazor Server",permalink:"/docs/getting-started/blazor-server"}},p={},i=[{value:"Install Nuget Package",id:"install-nuget-package",level:2},{value:"Add CSS references",id:"add-css-references",level:2},{value:"Add script references",id:"add-script-references",level:2},{value:"Register services",id:"register-services",level:2},{value:"Remove default references",id:"remove-default-references",level:2},{value:"Starter templates",id:"starter-templates",level:2},{value:".NET 6",id:"net-6",level:3},{value:".NET 7",id:"net-7",level:3}],m={toc:i};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started---blazor-webassembly"},"Getting started - Blazor WebAssembly"),(0,s.kt)("p",null,"Get started with the Enterprise-class Blazor Bootstrap Component library built on the Blazor and Bootstrap CSS framework."),(0,s.kt)("h2",{id:"install-nuget-package"},"Install Nuget Package"),(0,s.kt)("p",null,"Looking to quickly add ",(0,s.kt)("strong",{parentName:"p"},"Blazor Bootstrap")," to your project? Use NuGet package manager."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Blazor.Bootstrap -Version 1.10.0\n")),(0,s.kt)("h2",{id:"add-css-references"},"Add CSS references"),(0,s.kt)("p",null,"Add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />\n<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" rel="stylesheet" />\n<link href="_content/Blazor.Bootstrap/blazor.bootstrap.css" rel="stylesheet" />\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you use the ",(0,s.kt)("strong",{parentName:"p"},"Blazor WebAssembly App Empty*")," template (without demonstration code and Bootstrap), add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html"),".\nThere is a known GitHub issue ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/43975"},"Blazor empty template doesn't load scoped CSS"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="_content/Blazor.Bootstrap/Blazor.Bootstrap.bundle.scp.css" rel="stylesheet" />\n')),(0,s.kt)("h2",{id:"add-script-references"},"Add script references"),(0,s.kt)("p",null,"Add the following references to the ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," section in the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html")," after the ",(0,s.kt)("strong",{parentName:"p"},"_framework/blazor.webassembly.js")," reference."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.0.1/chart.umd.js" integrity="sha512-gQhCDsnnnUfaRzD8k1L5llCCV6O9HN09zClIzzeJ8OJ9MpGmIlCxm+pdCkqTwqJ4JcjbojFr79rl2F1mzcoLMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> \x3c!-- Add chart.js reference if Chart components are used in the application. --\x3e\n<script src="_content/Blazor.Bootstrap/blazor.bootstrap.js"><\/script>\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"chart.js")," reference is optional. Add when the ",(0,s.kt)("strong",{parentName:"p"},"Chart")," components are used in the application.")),(0,s.kt)("h2",{id:"register-services"},"Register services"),(0,s.kt)("p",null,"Add Blazor Bootstrap service in the ",(0,s.kt)("strong",{parentName:"p"},"Program.cs")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"using BlazorBootstrap; // Add this line\n\n...\n         \nbuilder.Services.AddBlazorBootstrap(); // Add this line\n")),(0,s.kt)("p",null,"Register tag helpers in ",(0,s.kt)("strong",{parentName:"p"},"_Imports.razor")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-razor",metastring:"showLineNumbers",showLineNumbers:!0},"@using BlazorBootstrap;\n")),(0,s.kt)("h2",{id:"remove-default-references"},"Remove default references"),(0,s.kt)("p",null,"In the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot/index.html")," file, the default blazor template includes demonstration code, icons, and Bootstrap.\nThese files are no longer needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />\n<link href="css/app.css" rel="stylesheet" />\n')),(0,s.kt)("p",null,"Delete the default ",(0,s.kt)("strong",{parentName:"p"},"bootstrap")," and ",(0,s.kt)("strong",{parentName:"p"},"open-iconic")," folders from the ",(0,s.kt)("strong",{parentName:"p"},"wwwroot")," folder."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"wwwroot/css/bootstrap"),(0,s.kt)("li",{parentName:"ol"},"wwwroot/css/open-iconic")),(0,s.kt)("p",null,"Either remove or keep the ",(0,s.kt)("strong",{parentName:"p"},"app.css")," file but make sure you clear it out of any content when the ",(0,s.kt)("a",{parentName:"p",href:"/docs/components/sidebar#full-layout-with-sidebar"},"Sidebar")," component with full layout is used."),(0,s.kt)("h2",{id:"starter-templates"},"Starter templates"),(0,s.kt)("h3",{id:"net-6"},".NET 6"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET6.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/aRV3rJm.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"}))),(0,s.kt)("h3",{id:"net-7"},".NET 7"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyApp"},"Blazor Bootstrap - Blazor WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/4P8u0HR.png",alt:"Blazor Bootstrap - Blazor WebAssembly App"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/vikramlearning/blazorbootstrap-starter-templates/tree/master/src/BlazorBootstrap.Templates.Starter/NET7.BlazorWebAssemblyAppEmpty"},"Blazor Bootstrap - Blazor Empty WebAssembly App")),(0,s.kt)("img",{src:"https://i.imgur.com/CBEoZ6P.png",alt:"Blazor Bootstrap - Blazor Empty WebAssembly App"}))))}c.isMDXComponent=!0}}]);