"use strict";(self.webpackChunkinstawp_docs=self.webpackChunkinstawp_docs||[]).push([[50],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,sidebar_label:"Create Site",title:"Create Site"},l=void 0,c={unversionedId:"sites/create",id:"sites/create",title:"Create Site",description:"Creating a new WordPress is really easy with InstaWP. In this document, you will learn about how to create a site as a registered user. For guest users, refer to the Getting Started guide.",source:"@site/docs/sites/create.md",sourceDirName:"sites",slug:"/sites/create",permalink:"/docs/sites/create",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create Site",title:"Create Site"},sidebar:"tutorialSidebar",previous:{title:"Sites",permalink:"/docs/category/sites"},next:{title:"Site Tools",permalink:"/docs/sites/tools"}},u={},p=[{value:"Access Now or Key Icon",id:"access-now-or-key-icon",level:3},{value:"Manual Login",id:"manual-login",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creating a new WordPress is really easy with InstaWP. In this document, you will learn about how to create a site as a registered user. For guest users, refer to the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started"},"Getting Started")," guide."),(0,a.kt)("h1",{id:"create-new-site"},"Create New Site"),(0,a.kt)("p",null,'To create a site, click on "Add New" button. '),(0,a.kt)("p",null,"[","[screenshot-addnew modal]","]"),(0,a.kt)("p",null,"You will notice various options while creating the site, like:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. WordPress Version")),(0,a.kt)("p",null,"Choose from the stable, old or beta/RC releases. You can also choose the nightly release which will automatically pull the latest nightly version. "),(0,a.kt)("p",null,"[","[screenshot-wp version dropdown]","]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. PHP Version")),(0,a.kt)("p",null,"Choose from 7.x to 8.x PHP version, depending on your current use case. "),(0,a.kt)("p",null,"[","[screenshot-php version dropdown]","]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Configuration")),(0,a.kt)("p",null,'You can create "presets" of configurations and choose a particular config to automatically set PHP values and WordPress options. With configurations, you can provide a list of plugin slugs, theme slugs and remote URL too. '),(0,a.kt)("p",null,"[","[screenshot-configuration dropdown]","]"),(0,a.kt)("p",null,"Go to ","[Configurations]"," to know more about it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Custom Name")),(0,a.kt)("p",null,"By default, InstaWP chooses a random name for your site, but you can choose to provide a meaningful name to it. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Temporary or Reserved")),(0,a.kt)("p",null,'By default, a site has a limited life time on InstaWP. You can select "Reserved" tab which will mark the site as reserved and will not let it expire at any point. '),(0,a.kt)("p",null,"[","[screenshot-reserve tab]","]"),(0,a.kt)("h1",{id:"accessing-wp-admin-panel"},"Accessing WP Admin Panel"),(0,a.kt)("p",null,"Once the site is created, you can access the wp-admin admin panel in following ways. "),(0,a.kt)("h3",{id:"access-now-or-key-icon"},"Access Now or Key Icon"),(0,a.kt)("p",null,'Click on the Access now button to automaticall login to the backend, but since this message is temporary you can also click the "key" icon in the sites table. '),(0,a.kt)("p",null,"[","[screenshot-access now and key]","]"),(0,a.kt)("h3",{id:"manual-login"},"Manual Login"),(0,a.kt)("p",null,"You can also do a manual login via the credentials and URL provided at the time of site creation or access it later via the dropdown menu."),(0,a.kt)("p",null,"[","[screenshot-manual login]","]"))}f.isMDXComponent=!0}}]);