"use strict";(self.webpackChunkinstawp_docs=self.webpackChunkinstawp_docs||[]).push([[5736],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5996:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var n=a(7462),i=a(3366),s=(a(7294),a(3905)),o=["components"],r={sidebar_position:1,sidebar_label:"Setup Product Demos"},l="Product Demos (Sandbox)",p={unversionedId:"guides/product-sandbox",id:"guides/product-sandbox",title:"Product Demos (Sandbox)",description:"Setting up a plugin/theme sandbox demo can be really painful, lot of folks try with WP multi-site or struggle setting up demos using in-house bash scripts, resulting in a frustrated experience for both - you and your users. Not to mention, you miss out on important usage insights too.",source:"@site/docs/guides/product-sandbox.md",sourceDirName:"guides",slug:"/guides/product-sandbox",permalink:"/docs/guides/product-sandbox",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Setup Product Demos"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd9 Guides",permalink:"/docs/category/-guides"}},u={},d=[{value:"Shared Templates",id:"shared-templates",level:2},{value:"Step 1 \u2013 Create a new site.",id:"step-1--create-a-new-site",level:3},{value:"Step 2 \u2013 Configure your site for the demo",id:"step-2--configure-your-site-for-the-demo",level:3},{value:"Step 3 \u2013 Save as Template",id:"step-3--save-as-template",level:3},{value:"Step 4 - Customize Template",id:"step-4---customize-template",level:3},{value:"FAQs",id:"faqs",level:2},{value:"How can I get the emails of users via the shared template?",id:"how-can-i-get-the-emails-of-users-via-the-shared-template",level:3},{value:"What are Advance Options?",id:"what-are-advance-options",level:3},{value:"What is an Instant Template?",id:"what-is-an-instant-template",level:3},{value:"Is there a limit of how many sites can be created by shared templates? And does this limit eat up my \u201cActive Sites\u201d limit?",id:"is-there-a-limit-of-how-many-sites-can-be-created-by-shared-templates-and-does-this-limit-eat-up-my-active-sites-limit",level:3},{value:"What if I make changes to the site, can I sync changes to the template?",id:"what-if-i-make-changes-to-the-site-can-i-sync-changes-to-the-template",level:3}],m={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"product-demos-sandbox"},"Product Demos (Sandbox)"),(0,s.kt)("p",null,"Setting up a plugin/theme sandbox demo can be really painful, lot of folks try with WP multi-site or struggle setting up demos using in-house bash scripts, resulting in a frustrated experience for both - you and your users. Not to mention, you miss out on important usage insights too. "),(0,s.kt)("p",null,"Well.. InstaWP has solved this problem and we already have some well known plugin authors like extendify.com and newsletterglue.com using this feature."),(0,s.kt)("h2",{id:"shared-templates"},"Shared Templates"),(0,s.kt)("p",null,'A template is a snapshot of an active InstaWP website. It is possible to re-use this template and create more identical sites from it. When you mark a template as "Shared" template, then it is possible for you to share it with a link to anyone around the internet, for them to create an copy of your saved site. The link will look something like this:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://app.instawp.com/launch?t=extendifydemo\n")),(0,s.kt)("p",null,"You can share this link to your potential customers, effectively creating a product sandbox / demo for your plugin , theme or SaaS business."),(0,s.kt)("p",null,"Now, lets dive deep into the process, step by step:"),(0,s.kt)("h3",{id:"step-1--create-a-new-site"},"Step 1 \u2013 Create a new site."),(0,s.kt)("p",null,"If you not a registered user, create a quick free account ",(0,s.kt)("a",{parentName:"p",href:"https://app.instawp.io/register"},"here"),". After your email is verified, you are now logged into your InstaWP Dashboard, which looks something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-dashboard_r6qbLyaEr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654685578413",alt:"dashboard"})),(0,s.kt)("p",null,'Click on \u201cAdd New +" to add a new site and provide a site name.'),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-create-new-site_X5Hh5jOMA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654685579395",alt:"new site dialog"})),(0,s.kt)("p",null,"Click on \u201cAccess Now\u201d and it should open a new tab in order to automagically take you to the \u201cwp-admin\u201d panel."),(0,s.kt)("h3",{id:"step-2--configure-your-site-for-the-demo"},"Step 2 \u2013 Configure your site for the demo"),(0,s.kt)("p",null,"At this point, think like a customer. Install and configure the site in such a way that when a customer is presented with the wp-admin panel, it will be to clear on how to use your product."),(0,s.kt)("p",null,"Some tips authors:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install your product (free or pro \u2013 depending on whom you are targetting)."),(0,s.kt)("li",{parentName:"ul"},"Install a theme which works best with your demo."),(0,s.kt)("li",{parentName:"ul"},"Add some demo content, may be create a sample page."),(0,s.kt)("li",{parentName:"ul"},"Add a message on Dashboard on how to use your demo. (You can use a plugin like ",(0,s.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/ultimate-dashboard/"},"this")," or ",(0,s.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/wp-dashboard-messages/"},"this")," OR custom code inside the theme files).")),(0,s.kt)("p",null,"In this example, I am going to configure the demo for a ",(0,s.kt)("a",{parentName:"p",href:"https://quizandsurveymaster.com"},"wordpress quiz plugin"),", this is how it looks after I am done."),(0,s.kt)("p",null,"Front Page:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/front-page-2048x1273_N9_7KQMj1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655731822714",alt:"qsm demo front"})),(0,s.kt)("p",null,"Admin Page:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/admin-page-2048x1379_uk_lVEtYw5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655731822716",alt:"qsm demo admin"})),(0,s.kt)("p",null,"At this point, we are happy with the site's functionality and look/feel. Lets move on to the next step."),(0,s.kt)("h3",{id:"step-3--save-as-template"},"Step 3 \u2013 Save as Template"),(0,s.kt)("p",null,"On the InstaWP Dashboard, click on the Save as Template for your site. "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-save-template-modal_2x_Rxq04PEsl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655104093194",alt:"save as template modal"})),(0,s.kt)("p",null,'Provide a meaningful template name, description and mark the template as "Shared". '),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Instant Template")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you are on a paid plan which supports Instant Template, switch this ON. This will allow users to spinup a new instance within milliseconds as opposed to 4-5 seconds. "))),(0,s.kt)("h3",{id:"step-4---customize-template"},"Step 4 - Customize Template"),(0,s.kt)("p",null,"You can customize the look and feel of your template landing page. For this, go to the templates screen, and click on Edit button. "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-template-options-1_iZsnlKftOC.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655468458258",alt:"template edit"})),(0,s.kt)("p",null,"Full explaination of options are covered in ",(0,s.kt)("a",{parentName:"p",href:"/docs/templates/shared-templates/options"},"Template Options")," doc, however here are few notable ones:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Site Lifetime")," - Demo sites will be auto deleted after this. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Collect Email")," - Switch this off, if you want people to just try your product without an email address."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Auto Login")," - Automatically login to wp-admin panel, instead of showing credentials to users. ")),(0,s.kt)("p",null,"Alright! at this point your \u201cProduct Demo\u201d is all set and you can pass the template link to your users and post it on your website."),(0,s.kt)("p",null,"The template landing page should look something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/instawp/instawp-docs-template-landing_2x_-i_w0G3mE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655103965914",alt:"template landing page"})),(0,s.kt)("h2",{id:"faqs"},"FAQs"),(0,s.kt)("h3",{id:"how-can-i-get-the-emails-of-users-via-the-shared-template"},"How can I get the emails of users via the shared template?"),(0,s.kt)("p",null,"You can download a CSV OR connect to a CRM software using ",(0,s.kt)("a",{parentName:"p",href:"/docs/templates/shared-templates/webhooks"},"Webhooks"),". This is available only for paid members."),(0,s.kt)("h3",{id:"what-are-advance-options"},"What are Advance Options?"),(0,s.kt)("p",null,"Advance options allow you to customize the look and feel of the template landing page. This is available in the Professional plan and above."),(0,s.kt)("h3",{id:"what-is-an-instant-template"},"What is an Instant Template?"),(0,s.kt)("p",null,"You may notice that the demo instances are taking 2-4 seconds to create, Instant Template changes that. New instances will be launched, well, instantly!"),(0,s.kt)("h3",{id:"is-there-a-limit-of-how-many-sites-can-be-created-by-shared-templates-and-does-this-limit-eat-up-my-active-sites-limit"},"Is there a limit of how many sites can be created by shared templates? And does this limit eat up my \u201cActive Sites\u201d limit?"),(0,s.kt)("p",null,"We have seperate limit for this, its called \u201cTemplate Sites\u201d, if you click on the top of your account. You will find a separate line item in the Pricing Plans for this (when you scroll down). So, this doesn\u2019t eat up your \u201cActive Sites\u201d limit."),(0,s.kt)("h3",{id:"what-if-i-make-changes-to-the-site-can-i-sync-changes-to-the-template"},"What if I make changes to the site, can I sync changes to the template?"),(0,s.kt)("p",null,'Yes, you can sync your changes. We have made a simple "sync" icon under each template, you can also choose to auto sync changes based on a schedule (available in paid plans).'))}c.isMDXComponent=!0}}]);