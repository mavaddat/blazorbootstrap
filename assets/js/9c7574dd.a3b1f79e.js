"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[59105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=u(a),d=i,f=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(f,s(s({ref:t},m),{},{components:a})):n.createElement(f,s({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const l={title:"Blazor Offcanvas Component",description:"Build hidden sidebars into your project for navigation, shopping carts, and more with Blazor Bootstrap offcanvas component.",image:"https://i.imgur.com/ev2Q8ON.jpg",sidebar_label:"Offcanvas",sidebar_position:14},s="Blazor Offcanvas",r={unversionedId:"components/offcanvas",id:"components/offcanvas",title:"Blazor Offcanvas Component",description:"Build hidden sidebars into your project for navigation, shopping carts, and more with Blazor Bootstrap offcanvas component.",source:"@site/docs/05-components/offcanvas.md",sourceDirName:"05-components",slug:"/components/offcanvas",permalink:"/docs/components/offcanvas",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/05-components/offcanvas.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Blazor Offcanvas Component",description:"Build hidden sidebars into your project for navigation, shopping carts, and more with Blazor Bootstrap offcanvas component.",image:"https://i.imgur.com/ev2Q8ON.jpg",sidebar_label:"Offcanvas",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Modal",permalink:"/docs/components/modal"},next:{title:"Pagination",permalink:"/docs/components/pagination"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Callback Events",id:"callback-events",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Examples",id:"examples",level:2},{value:"Offcanvas",id:"offcanvas",level:3},{value:"Dynamic component as offcanvas",id:"dynamic-component-as-offcanvas",level:3},{value:"Pass event callbacks to a dynamic component",id:"pass-event-callbacks-to-a-dynamic-component",level:3},{value:"Placement",id:"placement",level:3},{value:"Static backdrop",id:"static-backdrop",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Small Offcanvas",id:"small-offcanvas",level:4},{value:"Large Offcanvas",id:"large-offcanvas",level:4},{value:"Callback Events",id:"callback-events-1",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blazor-offcanvas"},"Blazor Offcanvas"),(0,i.kt)("p",null,"Build hidden sidebars into your project for navigation, shopping carts, and more with Blazor Bootstrap offcanvas component."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Added Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BodyCssClass"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional body CSS class."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BodyTemplate"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Body content."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CloseOnEscape"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the offcanvas closes when escape key is pressed."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FooterCssClass"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional footer CSS class."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FooterTemplate"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Footer content."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HeaderCssClass"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional header CSS class."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HeaderTemplate"),(0,i.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,i.kt)("td",{parentName:"tr",align:null},"Content for the header."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IsScrollable"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether body (page) scrolling is allowed while offcanvas is open."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Placement"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Placement")),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the offcanvas placement. By default, offcanvas is placed on the right of the viewport."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Placement.End")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ShowCloseButton"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the modal shows close button in header."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OffcanvasSize")),(0,i.kt)("td",{parentName:"tr",align:null},"Size of the offcanvas."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OffcanvasSize.Regular")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TabIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Gets or sets the tab index."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"-1"),(0,i.kt)("td",{parentName:"tr",align:null},"1.6.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Title"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Text for the title in header."),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UseStaticBackdrop"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"When ",(0,i.kt)("inlineCode",{parentName:"td"},"UseStaticBackdrop")," is set to true, the offcanvas will not close when clicking outside of it."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"1.8.0")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Added Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ShowAsync"),(0,i.kt)("td",{parentName:"tr",align:null},"Shows an offcanvas element. Returns to the caller before the offcanvas element has actually been shown (i.e. before the ",(0,i.kt)("inlineCode",{parentName:"td"},"OnShown")," event occurs)."),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HideAsync"),(0,i.kt)("td",{parentName:"tr",align:null},"Hides an offcanvas element. Returns to the caller before the offcanvas element has actually been hidden (i.e. before the ",(0,i.kt)("inlineCode",{parentName:"td"},"OnHidden")," event occurs)."),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("admonition",{title:"Asynchronous methods and transitions",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"All API methods are ",(0,i.kt)("strong",{parentName:"p"},"asynchronous")," and start a ",(0,i.kt)("strong",{parentName:"p"},"transition"),". They return to the caller as soon as the transition is started but ",(0,i.kt)("strong",{parentName:"p"},"before it ends"),". In addition, a method call on a ",(0,i.kt)("strong",{parentName:"p"},"transitioning component will be ignored"),".")),(0,i.kt)("h2",{id:"callback-events"},"Callback Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OnShowing"),(0,i.kt)("td",{parentName:"tr",align:null},"This event fires immediately when the show instance method is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OnShown"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OnHiding"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is fired immediately when the hide method has been called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OnHidden"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).")))),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Offcanvas is a sidebar component that can be toggled to appear from the left, right, or bottom edge of the viewport."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conceptually, they are quite similar to the Modal component, but they are separate components."),(0,i.kt)("li",{parentName:"ul"},"When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas."),(0,i.kt)("li",{parentName:"ul"},"Similar to modals, only one offcanvas can be shown at a time.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"offcanvas"},"Offcanvas"),(0,i.kt)("p",null,"Below is an offcanvas example that is shown by default."),(0,i.kt)("img",{src:"https://i.imgur.com/1vNz5Ci.jpg",alt:"Offcanvas - Example"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Button Color="ButtonColor.Primary" @onclick="(async () => { await ShowOffcanvasAsync(); })">Show Offcanvas</Button>\n\n<Offcanvas @ref="offcanvas">\n  ... design your header and body\n</Offcanvas>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,6,11} showLineNumbers","{2,6,11}":!0,showLineNumbers:!0},"@code {\n    private Offcanvas offcanvas;\n\n    private async Task ShowOffcanvasAsync()\n    {\n        await offcanvas?.ShowAsync();\n    }\n\n    private async Task HideOffcanvasAsync()\n    {\n        await offcanvas?.HideAsync();\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#examples"},"See demo here.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Default placement for the offcanvas component is right.")),(0,i.kt)("h3",{id:"dynamic-component-as-offcanvas"},"Dynamic component as offcanvas"),(0,i.kt)("p",null,"Render different components dynamically within the offcanvas without iterating through possible types or using conditional logic.\nIf dynamically-rendered components have component parameters, pass them as an ",(0,i.kt)("inlineCode",{parentName:"p"},"IDictionary"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is the parameter's name, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," is the parameter's value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowEmployeeComponent">Show Employee Component</Button>\n\n@code {\n    private Offcanvas offcanvas = default!;\n    private string? message;\n\n    private async Task ShowEmployeeComponent()\n    {\n        var parameters = new Dictionary<string, object>();\n        parameters.Add("EmployeeId", 321);\n        await offcanvas.ShowAsync<EmployeeDemoComponent1>(title: "Employee Details", parameters: parameters);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EmployeeDemoComponent1.razor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="row">\n    <div class="col-5 col-md-4 text-end">Employee Id :</div>\n    <div class="col-7 col-md-8">@EmployeeId</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-4 text-end">First Name :</div>\n    <div class="col-7 col-md-8">@employee.FirstName</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-4 text-end">Last Name :</div>\n    <div class="col-7 col-md-8">@employee.LastName</div>\n</div>\n\n@code {\n    private Employee employee = default!;\n\n    [Parameter] public int EmployeeId { get; set; }\n\n    protected override void OnInitialized()\n    {\n        // get employee with {EmployeeId} from DB\n\n        employee = new Employee { FirstName = "Vikram", LastName = "Reddy" };\n\n        base.OnInitialized();\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#dynamic-component-as-offcanvas"},"See demo here.")),(0,i.kt)("h3",{id:"pass-event-callbacks-to-a-dynamic-component"},"Pass event callbacks to a dynamic component"),(0,i.kt)("p",null,"Event callbacks can be passed in its parameter dictionary."),(0,i.kt)("p",null,"In the following parent component example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShowDTMessage")," method assigns a string with the current time to ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),", and the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," is rendered. The parent component passes the callback method, ShowDTMessage in the parameter dictionary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," key is the callback method's name, ",(0,i.kt)("inlineCode",{parentName:"li"},"OnClickCallback"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," value is created by ",(0,i.kt)("inlineCode",{parentName:"li"},"EventCallbackFactory.Create")," for the parent callback method, ",(0,i.kt)("inlineCode",{parentName:"li"},"ShowDTMessage"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" />\n\n<Button Color="ButtonColor.Primary" @onclick="ShowEmployeeComponent">Show Employee Component</Button>\n\n<div class="mt-3 bg-success text-white bg-opacity-75">\n    @message\n</div>\n\n@code {\n    private Offcanvas offcanvas = default!;\n    private string? message;\n\n    private async Task ShowEmployeeComponent()\n    {\n        var parameters = new Dictionary<string, object>();\n        parameters.Add("EmployeeId", 322);\n        parameters.Add("OnclickCallback", EventCallback.Factory.Create<MouseEventArgs>(this, ShowDTMessage));\n        await offcanvas.ShowAsync<EmployeeDemoComponent2>(title: "Employee Details", parameters: parameters);\n    }\n\n    private void ShowDTMessage(MouseEventArgs e) => message = $"The current date time is: {DateTime.Now}.";\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EmployeeDemoComponent2.razor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<div class="row">\n    <div class="col-5 col-md-4 text-end">Employee Id :</div>\n    <div class="col-7 col-md-8">@EmployeeId</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-4 text-end">First Name :</div>\n    <div class="col-7 col-md-8">@employee.FirstName</div>\n</div>\n<div class="row">\n    <div class="col-5 col-md-4 text-end">Last Name :</div>\n    <div class="col-7 col-md-8">@employee.LastName</div>\n</div>\n\n<Button class="mt-3" Color="ButtonColor.Success" Type="ButtonType.Button" @onclick="OnClickCallback">\n    Trigger a Parent component method\n</Button>\n\n@code {\n    private Employee employee = default!;\n\n    [Parameter] public int EmployeeId { get; set; }\n\n    [Parameter] public EventCallback<MouseEventArgs> OnClickCallback { get; set; }\n\n    protected override void OnInitialized()\n    {\n        // get employee with {EmployeeId} from DB\n\n        employee = new Employee { FirstName = "Sagar", LastName = "Reddy" };\n\n        base.OnInitialized();\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#pass-event-callbacks-to-a-dynamic-component"},"See demo here.")),(0,i.kt)("h3",{id:"placement"},"Placement"),(0,i.kt)("p",null,"Try the top, bottom, and left examples out below."),(0,i.kt)("img",{src:"https://i.imgur.com/dJpJYpX.jpg",alt:"Offcanvas - Top Placement"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" Title="Offcanvas top" Placement="Placement.Top">\n    <BodyTemplate>...</BodyTemplate>\n</Offcanvas>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowOffcanvasClick">Show top offcanvas</Button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Offcanvas offcanvas;\n\n    private async Task OnShowOffcanvasClick()\n    {\n        await offcanvas?.ShowAsync();\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#placement"},"See demo here.")),(0,i.kt)("h3",{id:"static-backdrop"},"Static backdrop"),(0,i.kt)("p",null,"When ",(0,i.kt)("strong",{parentName:"p"},"UseStaticBackdrop")," is set to ",(0,i.kt)("strong",{parentName:"p"},"true"),", the offcanvas will not close when clicking outside of it."),(0,i.kt)("img",{src:"https://i.imgur.com/J7g2eeA.png",alt:"Offcanvas - Static backdrop"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'<Offcanvas @ref="offcanvas" Title="Offcanvas title" UseStaticBackdrop="true">\n    <BodyTemplate>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit mauris. Aliquam sit amet lorem laoreet, laoreet elit ut, placerat tellus. In mollis ultricies elit, volutpat maximus ipsum sodales interdum. Suspendisse eget tellus mollis, rutrum mauris ac, vulputate enim. Cras porta neque vitae lacinia elementum. Nunc sit amet pulvinar nibh. Curabitur interdum eget odio in tempor. Nulla dictum orci quis ligula auctor fermentum. Pellentesque finibus tellus ac massa convallis malesuada. Nam id pharetra velit, sed eleifend mi. Sed sed justo lorem. Quisque et nulla ut dolor feugiat vestibulum. Nunc at porttitor orci, at dignissim metus. Donec vitae metus vitae felis semper placerat.</p>\n        <p>Proin quis congue enim, ut ultricies erat. Nulla facilisi. Fusce pretium, metus eget tempor vehicula, nisl lorem tincidunt metus, consectetur molestie lorem leo vel lectus. Vivamus pellentesque pharetra mattis. Aenean dignissim quam non velit ultrices rutrum. Aliquam lacinia faucibus sapien vel pretium. Nullam libero massa, ultricies id lacinia nec, scelerisque ut felis. Vivamus ac egestas urna, sit amet condimentum odio. Suspendisse ultrices, libero sed interdum pulvinar, lectus felis pellentesque enim, eu finibus magna massa id augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempor libero. Cras ut interdum purus. Donec eu pulvinar urna, ut porttitor purus. Suspendisse sed sodales nunc. Quisque posuere augue sed luctus placerat.</p>\n        <p>Morbi ullamcorper risus turpis, et ullamcorper nulla semper vitae. Proin pharetra dolor dui, non condimentum ex fermentum in. Vestibulum pharetra, risus et pulvinar eleifend, nulla tortor blandit risus, ac imperdiet elit massa quis leo. Vivamus urna lacus, luctus eget felis id, eleifend tristique nisl. Sed dignissim mollis ligula vitae laoreet. Vestibulum eget magna nisi. Aenean auctor elit et turpis blandit, eget porttitor felis suscipit. Duis placerat, sapien a sodales tempus, odio orci malesuada neque, ac molestie ipsum nisi vel eros. Integer sem lectus, luctus vitae sapien ut, efficitur aliquam sem. Praesent placerat est eros, vulputate rutrum nunc imperdiet vitae. Fusce sed felis eget purus aliquet convallis eu eget lacus. Sed finibus nec magna et accumsan. Donec vitae tellus eros. Nullam et ex vitae est sagittis malesuada. Vivamus molestie malesuada libero, a consequat magna dapibus pellentesque. Cras molestie tortor vitae congue pretium.</p>\n        <p>Pellentesque nec iaculis justo, sed pretium sem. Mauris finibus lacus at mollis fringilla. Etiam auctor in justo ac bibendum. Vestibulum at lorem accumsan, maximus erat suscipit, suscipit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim id quam sit amet varius. Etiam pretium ultrices dignissim. Cras at tortor hendrerit metus ultrices lobortis at ac est. Suspendisse consectetur pellentesque nunc sit amet scelerisque. Maecenas feugiat nunc laoreet, auctor erat eget, ultricies ex. Aliquam nisi nulla, cursus et ante ut, interdum volutpat leo. Phasellus laoreet aliquam maximus. Vestibulum eu neque porta, consectetur ipsum non, euismod enim. Vestibulum euismod purus elit, ultrices imperdiet nisl porttitor eget. Vivamus eros turpis, tincidunt a vulputate vel, malesuada tristique nulla.</p>\n        <p>Vestibulum sed aliquam urna. Ut ullamcorper erat vitae velit mattis commodo. Phasellus dignissim rhoncus dapibus. Quisque congue egestas tellus id finibus. Suspendisse nibh felis, mattis et finibus vel, tempor in lectus. Nullam eget eros dui. Mauris eget vestibulum nibh. Nullam mattis malesuada lorem vel condimentum. Mauris id odio ac est feugiat condimentum.</p>\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="() => offcanvas?.HideAsync()">Close</Button>\n    </FooterTemplate>\n</Offcanvas>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowOffcanvasClick">Show offcanvas</Button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private Offcanvas offcanvas;\n\n    private async Task OnShowOffcanvasClick()\n    {\n        await offcanvas?.ShowAsync();\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#static-backdrop"},"See demo here.")),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"Set the size of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Offcanvas")," with the Size parameter. The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"OffcanvasSize.Regular"),"."),(0,i.kt)("h4",{id:"small-offcanvas"},"Small Offcanvas"),(0,i.kt)("img",{src:"https://i.imgur.com/DJ09ngz.jpg",alt:"Offcanvas - Small Size"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" Title="Offcanvas title" Size="OffcanvasSize.Small">\n    <BodyTemplate>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit mauris. Aliquam sit amet lorem laoreet, laoreet elit ut, placerat tellus. In mollis ultricies elit, volutpat maximus ipsum sodales interdum. Suspendisse eget tellus mollis, rutrum mauris ac, vulputate enim. Cras porta neque vitae lacinia elementum. Nunc sit amet pulvinar nibh. Curabitur interdum eget odio in tempor. Nulla dictum orci quis ligula auctor fermentum. Pellentesque finibus tellus ac massa convallis malesuada. Nam id pharetra velit, sed eleifend mi. Sed sed justo lorem. Quisque et nulla ut dolor feugiat vestibulum. Nunc at porttitor orci, at dignissim metus. Donec vitae metus vitae felis semper placerat.</p>\n        <p>Proin quis congue enim, ut ultricies erat. Nulla facilisi. Fusce pretium, metus eget tempor vehicula, nisl lorem tincidunt metus, consectetur molestie lorem leo vel lectus. Vivamus pellentesque pharetra mattis. Aenean dignissim quam non velit ultrices rutrum. Aliquam lacinia faucibus sapien vel pretium. Nullam libero massa, ultricies id lacinia nec, scelerisque ut felis. Vivamus ac egestas urna, sit amet condimentum odio. Suspendisse ultrices, libero sed interdum pulvinar, lectus felis pellentesque enim, eu finibus magna massa id augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempor libero. Cras ut interdum purus. Donec eu pulvinar urna, ut porttitor purus. Suspendisse sed sodales nunc. Quisque posuere augue sed luctus placerat.</p>\n        <p>Morbi ullamcorper risus turpis, et ullamcorper nulla semper vitae. Proin pharetra dolor dui, non condimentum ex fermentum in. Vestibulum pharetra, risus et pulvinar eleifend, nulla tortor blandit risus, ac imperdiet elit massa quis leo. Vivamus urna lacus, luctus eget felis id, eleifend tristique nisl. Sed dignissim mollis ligula vitae laoreet. Vestibulum eget magna nisi. Aenean auctor elit et turpis blandit, eget porttitor felis suscipit. Duis placerat, sapien a sodales tempus, odio orci malesuada neque, ac molestie ipsum nisi vel eros. Integer sem lectus, luctus vitae sapien ut, efficitur aliquam sem. Praesent placerat est eros, vulputate rutrum nunc imperdiet vitae. Fusce sed felis eget purus aliquet convallis eu eget lacus. Sed finibus nec magna et accumsan. Donec vitae tellus eros. Nullam et ex vitae est sagittis malesuada. Vivamus molestie malesuada libero, a consequat magna dapibus pellentesque. Cras molestie tortor vitae congue pretium.</p>\n        <p>Pellentesque nec iaculis justo, sed pretium sem. Mauris finibus lacus at mollis fringilla. Etiam auctor in justo ac bibendum. Vestibulum at lorem accumsan, maximus erat suscipit, suscipit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim id quam sit amet varius. Etiam pretium ultrices dignissim. Cras at tortor hendrerit metus ultrices lobortis at ac est. Suspendisse consectetur pellentesque nunc sit amet scelerisque. Maecenas feugiat nunc laoreet, auctor erat eget, ultricies ex. Aliquam nisi nulla, cursus et ante ut, interdum volutpat leo. Phasellus laoreet aliquam maximus. Vestibulum eu neque porta, consectetur ipsum non, euismod enim. Vestibulum euismod purus elit, ultrices imperdiet nisl porttitor eget. Vivamus eros turpis, tincidunt a vulputate vel, malesuada tristique nulla.</p>\n        <p>Vestibulum sed aliquam urna. Ut ullamcorper erat vitae velit mattis commodo. Phasellus dignissim rhoncus dapibus. Quisque congue egestas tellus id finibus. Suspendisse nibh felis, mattis et finibus vel, tempor in lectus. Nullam eget eros dui. Mauris eget vestibulum nibh. Nullam mattis malesuada lorem vel condimentum. Mauris id odio ac est feugiat condimentum.</p>\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="() => offcanvas?.HideAsync()">Close</Button>\n    </FooterTemplate>\n</Offcanvas>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowOffcanvasClick">Show small offcanvas</Button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Offcanvas offcanvas;\n\n    private async Task OnShowOffcanvasClick()\n    {\n        await offcanvas?.ShowAsync();\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#sizes"},"See demo here.")),(0,i.kt)("h4",{id:"large-offcanvas"},"Large Offcanvas"),(0,i.kt)("img",{src:"https://i.imgur.com/MG0NFrU.jpg",alt:"Large Offcanvas"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" Title="Offcanvas title" Size="OffcanvasSize.Large">\n    <BodyTemplate>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt blandit mauris. Aliquam sit amet lorem laoreet, laoreet elit ut, placerat tellus. In mollis ultricies elit, volutpat maximus ipsum sodales interdum. Suspendisse eget tellus mollis, rutrum mauris ac, vulputate enim. Cras porta neque vitae lacinia elementum. Nunc sit amet pulvinar nibh. Curabitur interdum eget odio in tempor. Nulla dictum orci quis ligula auctor fermentum. Pellentesque finibus tellus ac massa convallis malesuada. Nam id pharetra velit, sed eleifend mi. Sed sed justo lorem. Quisque et nulla ut dolor feugiat vestibulum. Nunc at porttitor orci, at dignissim metus. Donec vitae metus vitae felis semper placerat.</p>\n        <p>Proin quis congue enim, ut ultricies erat. Nulla facilisi. Fusce pretium, metus eget tempor vehicula, nisl lorem tincidunt metus, consectetur molestie lorem leo vel lectus. Vivamus pellentesque pharetra mattis. Aenean dignissim quam non velit ultrices rutrum. Aliquam lacinia faucibus sapien vel pretium. Nullam libero massa, ultricies id lacinia nec, scelerisque ut felis. Vivamus ac egestas urna, sit amet condimentum odio. Suspendisse ultrices, libero sed interdum pulvinar, lectus felis pellentesque enim, eu finibus magna massa id augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tempor libero. Cras ut interdum purus. Donec eu pulvinar urna, ut porttitor purus. Suspendisse sed sodales nunc. Quisque posuere augue sed luctus placerat.</p>\n        <p>Morbi ullamcorper risus turpis, et ullamcorper nulla semper vitae. Proin pharetra dolor dui, non condimentum ex fermentum in. Vestibulum pharetra, risus et pulvinar eleifend, nulla tortor blandit risus, ac imperdiet elit massa quis leo. Vivamus urna lacus, luctus eget felis id, eleifend tristique nisl. Sed dignissim mollis ligula vitae laoreet. Vestibulum eget magna nisi. Aenean auctor elit et turpis blandit, eget porttitor felis suscipit. Duis placerat, sapien a sodales tempus, odio orci malesuada neque, ac molestie ipsum nisi vel eros. Integer sem lectus, luctus vitae sapien ut, efficitur aliquam sem. Praesent placerat est eros, vulputate rutrum nunc imperdiet vitae. Fusce sed felis eget purus aliquet convallis eu eget lacus. Sed finibus nec magna et accumsan. Donec vitae tellus eros. Nullam et ex vitae est sagittis malesuada. Vivamus molestie malesuada libero, a consequat magna dapibus pellentesque. Cras molestie tortor vitae congue pretium.</p>\n        <p>Pellentesque nec iaculis justo, sed pretium sem. Mauris finibus lacus at mollis fringilla. Etiam auctor in justo ac bibendum. Vestibulum at lorem accumsan, maximus erat suscipit, suscipit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim id quam sit amet varius. Etiam pretium ultrices dignissim. Cras at tortor hendrerit metus ultrices lobortis at ac est. Suspendisse consectetur pellentesque nunc sit amet scelerisque. Maecenas feugiat nunc laoreet, auctor erat eget, ultricies ex. Aliquam nisi nulla, cursus et ante ut, interdum volutpat leo. Phasellus laoreet aliquam maximus. Vestibulum eu neque porta, consectetur ipsum non, euismod enim. Vestibulum euismod purus elit, ultrices imperdiet nisl porttitor eget. Vivamus eros turpis, tincidunt a vulputate vel, malesuada tristique nulla.</p>\n        <p>Vestibulum sed aliquam urna. Ut ullamcorper erat vitae velit mattis commodo. Phasellus dignissim rhoncus dapibus. Quisque congue egestas tellus id finibus. Suspendisse nibh felis, mattis et finibus vel, tempor in lectus. Nullam eget eros dui. Mauris eget vestibulum nibh. Nullam mattis malesuada lorem vel condimentum. Mauris id odio ac est feugiat condimentum.</p>\n    </BodyTemplate>\n    <FooterTemplate>\n        <Button Color="ButtonColor.Secondary" @onclick="() => offcanvas?.HideAsync()">Close</Button>\n    </FooterTemplate>\n</Offcanvas>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowOffcanvasClick">Show large offcanvas</Button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private Offcanvas offcanvas;\n\n    private async Task OnShowOffcanvasClick()\n    {\n        await offcanvas?.ShowAsync();\n    }\n}\n")),(0,i.kt)("h3",{id:"callback-events-1"},"Callback Events"),(0,i.kt)("p",null,"BlazorBootstrap's offcanvas component exposes a few events for hooking into offcanvas functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"showLineNumbers",showLineNumbers:!0},'<Offcanvas @ref="offcanvas" \n           title="Offcanvas title"\n           OnShowing="OnOffcanvasShowingAsync"\n           OnShown="OnOffcanvasShownAsync"\n           OnHiding="OnOffcanvasHidingAsync"\n           OnHidden="OnOffcanvasHiddenAsync">\n\n   <BodyTemplate>\n      <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>\n   </BodyTemplate>\n\n   <FooterTemplate>\n       <Button Color="ButtonColor.Primary" @onclick="OnHideOffcanvasClick">Hide Offcanvas</Button>\n   </FooterTemplate>\n\n</Offcanvas>\n\n<Button Color="ButtonColor.Primary" @onclick="OnShowOffcanvasClick">Show offcanvas</Button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'@code {\n    private Offcanvas offcanvas;\n\n    private async Task OnShowOffcanvasClick()\n    {\n        await offcanvas?.ShowAsync();\n    }\n\n    private async Task OnHideOffcanvasClick()\n    {\n        await offcanvas?.HideAsync();\n    }\n\n    private async Task OnOffcanvasShowingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Showing"); });\n    }\n\n    private async Task OnOffcanvasShownAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Shown"); });\n    }\n\n    private async Task OnOffcanvasHidingAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hiding"); });\n    }\n\n    private async Task OnOffcanvasHiddenAsync()\n    {\n        await Task.Run(() => { Console.WriteLine("Event: Hidden"); });\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/offcanvas#events"},"See demo here.")))}c.isMDXComponent=!0}}]);