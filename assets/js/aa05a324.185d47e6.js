"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[45187],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),f=d(a),k=n,c=f["".concat(s,".").concat(k)]||f[k]||m[k]||i;return a?r.createElement(c,l(l({ref:e},p),{},{components:a})):r.createElement(c,l({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},97119:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",image:"https://i.imgur.com/ieBupT2.png",sidebar_label:"Pie Chart",sidebar_position:4},l=void 0,o={unversionedId:"data-visualization/pie-chart",id:"data-visualization/pie-chart",title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",source:"@site/docs/06-data-visualization/pie-chart.md",sourceDirName:"06-data-visualization",slug:"/data-visualization/pie-chart",permalink:"/docs/data-visualization/pie-chart",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/06-data-visualization/pie-chart.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",image:"https://i.imgur.com/ieBupT2.png",sidebar_label:"Pie Chart",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Line Chart",permalink:"/docs/data-visualization/line-chart"},next:{title:"Modal Service",permalink:"/docs/services/modal"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"ChartData Members",id:"chartdata-members",level:2},{value:"PieChartDataset Members",id:"piechartdataset-members",level:2},{value:"PieChartOptions Members",id:"piechartoptions-members",level:2},{value:"Examples",id:"examples",level:2},{value:"How it works",id:"how-it-works",level:3}],p={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories."),(0,n.kt)("img",{src:"https://i.imgur.com/ieBupT2.png",alt:"Blazor Chart Component - Blazor Pie Chart"}),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Height"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets chart height."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Width"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets chart width."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Return type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Descritpion"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AddDataAsync"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds data to bar chart."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AddDatasetAsync"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adds dataset to bar chart."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"InitializeAsync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initialize Bar Chart."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UpdateAsync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update Bar Chart."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,n.kt)("h2",{id:"chartdata-members"},"ChartData Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Labels"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Labels."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Datasets"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<IChartDataset>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Datasets."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,n.kt)("h2",{id:"piechartdataset-members"},"PieChartDataset Members"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"PieChartDataset")," implements ",(0,n.kt)("strong",{parentName:"p"},"IChartDataset"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BackgroundColor."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderColor."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderWidth."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Clip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the Data."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBackgroundColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBackgroundColor."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBorderColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderColor."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HoverBorderWidth"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderWidth."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Get or sets the chart type."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,n.kt)("h2",{id:"piechartoptions-members"},"PieChartOptions Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Responsive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Responsive."),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"In the following example, a categorical 12-color palette is used."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For data visualization, you can use the predefined palettes ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalTwelveColors")," for a 12-color palette and ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalSixColors")," for a 6-color palette.\nThese palettes offer a range of distinct and visually appealing colors that can be applied to represent different categories or data elements in your visualizations.")),(0,n.kt)("img",{src:"https://i.imgur.com/ieBupT2.png",alt:"Blazor Bootstrap: Pie Chart Component - How it works"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<PieChart @ref="pieChart" Width="500" Class="mb-5" />\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await RandomizeAsync()"> Randomize </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDatasetAsync()"> Add Dataset </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDataAsync()">Add Data</Button>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private PieChart pieChart = default!;\n    private PieChartOptions pieChartOptions = default!;\n    private ChartData chartData = default!;\n    private string[]? backgroundColors;\n\n    private int datasetsCount = 0;\n    private int dataLabelsCount = 0;\n\n    private Random random = new();\n\n    protected override void OnInitialized()\n    {\n        backgroundColors = ColorBuilder.CategoricalTwelveColors;\n        chartData = new ChartData { Labels = GetDefaultDataLabels(4), Datasets = GetDefaultDataSets(1) };\n\n        pieChartOptions = new();\n        pieChartOptions.Responsive = true;\n        pieChartOptions.Plugins.Title.Text = "2022 - Sales";\n        pieChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            await pieChart.InitializeAsync(chartData, pieChartOptions);\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n\n    private async Task RandomizeAsync()\n    {\n        if (chartData is null || chartData.Datasets is null || !chartData.Datasets.Any()) return;\n\n        var newDatasets = new List<IChartDataset>();\n\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset\n                && pieChartDataset is not null\n                && pieChartDataset.Data is not null)\n            {\n                var count = pieChartDataset.Data.Count;\n\n                var newData = new List<double>();\n                for (var i = 0; i < count; i++)\n                {\n                    newData.Add(random.Next(0, 100));\n                }\n\n                pieChartDataset.Data = newData;\n                newDatasets.Add(pieChartDataset);\n            }\n        }\n\n        chartData.Datasets = newDatasets;\n\n        await pieChart.UpdateAsync(chartData, pieChartOptions);\n    }\n\n    private async Task AddDatasetAsync()\n    {\n        if (chartData is null || chartData.Datasets is null) return;\n\n        var chartDataset = GetRandomPieChartDataset();\n        chartData = await pieChart.AddDatasetAsync(chartData, chartDataset, pieChartOptions);\n    }\n\n    private async Task AddDataAsync()\n    {\n        if (dataLabelsCount >= 12)\n            return;\n\n        if (chartData is null || chartData.Datasets is null)\n            return;\n\n        var data = new List<IChartDatasetData>();\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset)\n                data.Add(new PieChartDatasetData(pieChartDataset.Label, random.Next(0, 100), backgroundColors![dataLabelsCount]));\n        }\n\n        chartData = await pieChart.AddDataAsync(chartData, GetNextDataLabel(), data);\n\n        dataLabelsCount += 1;\n    }\n\n    #region Data Preparation\n\n    private List<IChartDataset> GetDefaultDataSets(int numberOfDatasets)\n    {\n        var datasets = new List<IChartDataset>();\n\n        for (var index = 0; index < numberOfDatasets; index++)\n        {\n            datasets.Add(GetRandomPieChartDataset());\n        }\n\n        return datasets;\n    }\n\n    private PieChartDataset GetRandomPieChartDataset()\n    {\n        datasetsCount += 1;\n        return new() { Label = $"Team {datasetsCount}", Data = GetRandomData(), BackgroundColor = GetRandomBackgroundColors() };\n    }\n\n    private List<double> GetRandomData()\n    {\n        var data = new List<double>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            data.Add(random.Next(0, 100));\n        }\n\n        return data;\n    }\n\n    private List<string> GetRandomBackgroundColors()\n    {\n        var colors = new List<string>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            colors.Add(backgroundColors![index]);\n        }\n\n        return colors;\n    }\n\n    private List<string> GetDefaultDataLabels(int numberOfLabels)\n    {\n        var labels = new List<string>();\n        for (var index = 0; index < numberOfLabels; index++)\n        {\n            labels.Add(GetNextDataLabel());\n            dataLabelsCount += 1;\n        }\n\n        return labels;\n    }\n\n    private string GetNextDataLabel() => $"Product {dataLabelsCount + 1}";\n\n    private string GetNextDataBackgrounfColor() => backgroundColors![dataLabelsCount];\n\n    #endregion  Data Preparation\n}\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/pie-chart#how-it-works"},"See the demo here.")))}m.isMDXComponent=!0}}]);