"use strict";(self.webpackChunkinstawp_docs=self.webpackChunkinstawp_docs||[]).push([[677],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_label:"Connect to Template",sidebar_position:1},c="Templates + Git Integration",l={unversionedId:"deployments/connect-to-template",id:"deployments/connect-to-template",title:"Templates + Git Integration",description:"After you have completed adding a deployment, you can connect it to an existing template. The logic behind this step is this - a template is a snapshot of a site or a point in time backup.",source:"@site/docs/deployments/connect-to-template.md",sourceDirName:"deployments",slug:"/deployments/connect-to-template",permalink:"/docs/deployments/connect-to-template",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connect to Template",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Add Deployment",permalink:"/docs/deployments/add-deployment"},next:{title:"Run Deployments",permalink:"/docs/deployments/run-deployment"}},s={},m=[{value:"Connecting a Deployment with Template",id:"connecting-a-deployment-with-template",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"templates--git-integration"},"Templates + Git Integration"),(0,a.kt)("p",null,"After you have completed ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployments/add-deployment"},"adding a deployment"),", you can connect it to an existing template. The logic behind this step is this - a template is a snapshot of a site or a point in time backup. "),(0,a.kt)("p",null,"Once a deployment is connected to a template, every time you have a new change in your Git branch you can create a new site off of the template and we will automatically pull the latest changes to your Git repo onto the new site. "),(0,a.kt)("h3",{id:"connecting-a-deployment-with-template"},"Connecting a Deployment with Template"),(0,a.kt)("p",null,"Go to Templates screen, and click on the Deployment button to connect it to a deployment. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-deploy-connect-template_2x_nxaY7iLDf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105942104",alt:"connect to template"})),(0,a.kt)("p",null,"You will then see a modal popup with a list of connected Deployments, choose the correct one. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-deploy-connect-2_2x_XcckHVCAu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655105941870",alt:"deployment connect to template modal"})),(0,a.kt)("p",null,"Once this is complete, you can save and close the modal box."))}d.isMDXComponent=!0}}]);