"use strict";(self.webpackChunkjourney_docs=self.webpackChunkjourney_docs||[]).push([[981],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=p(a),g=n,c=s["".concat(d,".").concat(g)]||s[g]||f[g]||o;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},497:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,description:"Configure Journey to work how you want"},i="Configuration",l={unversionedId:"admin/config",id:"admin/config",title:"Configuration",description:"Configure Journey to work how you want",source:"@site/docs/admin/config.md",sourceDirName:"admin",slug:"/admin/config",permalink:"/docs/admin/config",draft:!1,editUrl:"https://github.com/journey-docs/docs/admin/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Configure Journey to work how you want"},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/admin/permissions"},next:{title:"Journey Integration Plugins",permalink:"/docs/admin/integration"}},d={},p=[{value:"Search Behavior",id:"search-behavior",level:2},{value:"Server Optimization",id:"server-optimization",level:2},{value:"Storage",id:"storage",level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Journey may be configured using the settings in the generated ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," file. This page contains those settings and their purposes."),(0,n.kt)("h2",{id:"search-behavior"},"Search Behavior"),(0,n.kt)("p",null,"These settings change the way path searches behave."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.flag.default-timeout")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default value of the ",(0,n.kt)("a",{parentName:"td",href:"/docs/commands#timeout-flag"},"timeout flag"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.flag.default-fly")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default value of the ",(0,n.kt)("a",{parentName:"td",href:"/docs/commands#fly-flag"},"fly flag"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.flag.default-door")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default value of the ",(0,n.kt)("a",{parentName:"td",href:"/docs/commands#door-flag"},"door flag"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.flag.default-dig")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The default value of the ",(0,n.kt)("a",{parentName:"td",href:"/docs/commands#dig-flag"},"dig flag"))))),(0,n.kt)("h2",{id:"server-optimization"},"Server Optimization"),(0,n.kt)("p",null,"These settings can be tuned to improve server optimization in exchange for performance of Journey's algorithms."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.max-path-block-count")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of blocks to be considered in the algorithm for a single-world path search.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"search.max-searches")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of searches allowed on the server at once")))),(0,n.kt)("h2",{id:"storage"},"Storage"),(0,n.kt)("p",null,"There are two ways of storing your data for Journey: ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLite"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.auth.address")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The address of your database server, like the IP or host name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.auth.database")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of your database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.auth.username")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The username of the user of your database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.auth.password")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The password of the user of your database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.type")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of storage you want to use; The options are ",(0,n.kt)("inlineCode",{parentName:"td"},"[MySQL, SQLite]"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"storage.cache.max_cells")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum number of cells (blocks) Journey is allowed to store as part of cached paths")))))}s.isMDXComponent=!0}}]);