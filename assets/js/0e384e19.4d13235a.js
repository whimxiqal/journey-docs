"use strict";(self.webpackChunkjourney_docs=self.webpackChunkjourney_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o=r.p+"assets/images/path-to-nether-0bc70aaec5c1a12af7d0cc9e394c8067.png",i=r.p+"assets/images/gui-75434103ce565b7ba709057b0e23cd7c.png",s={sidebar_position:1},p="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Journey is a server-side navigation tool for for Minecraft Java Edition, versions 1.17+. It allows players to submit requests to find and display the fastest paths to various destinations. These paths may traverse multiple worlds and may prompt the user to use any methods of travel available, including walking, swimming, boating, and even teleporting, either with portals or commands. In general, if it possible for a player to get to a certain destination, Journey will take them there.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/journey-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Commands",permalink:"/docs/commands"}},u={},d=[{value:"Supported Server Types",id:"supported-server-types",level:2},{value:"About Journey",id:"about-journey",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Journey is a server-side navigation tool for for Minecraft Java Edition, versions 1.17+. It allows players to submit requests to find and display the fastest paths to various destinations. These paths may traverse multiple worlds and may prompt the user to use any methods of travel available, including walking, swimming, boating, and even teleporting, either with portals or commands. In general, if it possible for a player to get to a certain destination, Journey will take them there."),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/developers"},"Journey API"),", developers can add their own custom transportation mechanisms, like custom portals and teleportation commands, and their own custom location to which players may travel. ",(0,a.kt)("a",{parentName:"p",href:"/docs/admin/integration"},"Here")," are some in-house utility plugins that perform such integration for some of the most popular plugins used today. If you use any of those plugins, it is recommended that you use the integration plugin to enhance your experience."),(0,a.kt)("h2",{id:"supported-server-types"},"Supported Server Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Server Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bukkit (Paper, Purpur, etc)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sponge (API 8+)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Not yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Fabric"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Not yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bukkit (CraftBukkit, Spigot)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Never (",(0,a.kt)("a",{parentName:"td",href:"/docs/faq#why-are-some-server-types-not-supported"},"why?"),")")))),(0,a.kt)("h2",{id:"about-journey"},"About Journey"),(0,a.kt)("p",null,"Players submit requests to create ",(0,a.kt)("strong",{parentName:"p"},"paths")," to destinations. Journey natively supports setting custom destinations called ",(0,a.kt)("strong",{parentName:"p"},"waypoints"),". Each player may set ",(0,a.kt)("strong",{parentName:"p"},"personal waypoints")," and administrators may set ",(0,a.kt)("strong",{parentName:"p"},"server waypoints"),", which are available to all players. Other available destinations include the player's ",(0,a.kt)("strong",{parentName:"p"},"last known death location"),", ",(0,a.kt)("strong",{parentName:"p"},"other players' locations"),", and ",(0,a.kt)("strong",{parentName:"p"},"other players' public personal waypoints"),"."),(0,a.kt)("p",null,"For example, if your Nether world is called ",(0,a.kt)("inlineCode",{parentName:"p"},"the_nether"),", you may type the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/jt the_nether")," and Journey will present the quickest path to get there."),(0,a.kt)("img",{src:o,style:{margin:"0 10%",width:"80%",borderRadius:10}}),(0,a.kt)("p",null,"Alternatively, you may use the inventory interface with simply ",(0,a.kt)("inlineCode",{parentName:"p"},"/jt")),(0,a.kt)("img",{src:i,style:{margin:"0 10%",width:"80%",borderRadius:10}}))}m.isMDXComponent=!0}}]);