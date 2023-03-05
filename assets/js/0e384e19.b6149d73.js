"use strict";(self.webpackChunkjourney_docs=self.webpackChunkjourney_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Journey is a server-side navigation tool for for Minecraft Java Edition, versions 1.17+. It allows players to submit requests to find and display the fastest paths to various destinations. These paths may traverse multiple worlds and may prompt the user to use any methods of travel available, including walking, swimming, boating, and even teleporting, either with portals or commands. In general, if it possible for a player to get to a certain destination, Journey will take them there.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/journey-docs/docs/intro",draft:!1,editUrl:"https://github.com/journey-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Commands",permalink:"/journey-docs/docs/commands"}},l={},p=[{value:"Supported Server Types",id:"supported-server-types",level:2},{value:"About Journey",id:"about-journey",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Journey is a server-side navigation tool for for Minecraft Java Edition, versions 1.17+. It allows players to submit requests to find and display the fastest paths to various destinations. These paths may traverse multiple worlds and may prompt the user to use any methods of travel available, including walking, swimming, boating, and even teleporting, either with portals or commands. In general, if it possible for a player to get to a certain destination, Journey will take them there."),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/developers"},"Journey API"),", developers can add their own custom transportation mechanisms, like custom portals and teleportation commands, and their own custom location to which players may travel. ",(0,a.kt)("a",{parentName:"p",href:"/journey-docs/docs/admin/integration"},"Here")," are some in-house utility plugins that perform such integration for some of the most popular plugins used today. If you use any of those plugins, it is recommended that you use the integration plugin to enhance your experience."),(0,a.kt)("h2",{id:"supported-server-types"},"Supported Server Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Server Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bukkit (Paper, Purpur, etc)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sponge (API 8+)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Not yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Fabric"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Not yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Bukkit (CraftBukkit, Spigot)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Never (",(0,a.kt)("a",{parentName:"td",href:"/journey-docs/docs/faq#why-are-some-server-types-not-supported"},"why?"),")")))),(0,a.kt)("h2",{id:"about-journey"},"About Journey"),(0,a.kt)("p",null,"Players submit requests to create ",(0,a.kt)("strong",{parentName:"p"},"paths")," to destinations. Journey natively supports setting custom destinations called ",(0,a.kt)("strong",{parentName:"p"},"waypoints"),". Each player may set ",(0,a.kt)("strong",{parentName:"p"},"personal waypoints")," and administrators may set ",(0,a.kt)("strong",{parentName:"p"},"server waypoints"),", which are available to all players. Other available destinations include the player's last known death location, other players' locations, and other players' ",(0,a.kt)("strong",{parentName:"p"},"public personal waypoints"),"."))}d.isMDXComponent=!0}}]);