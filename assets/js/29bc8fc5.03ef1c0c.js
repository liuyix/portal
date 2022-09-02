"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[2258],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3792:function(e,n,t){t.r(n),t.d(n,{default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},c={unversionedId:"develop/coding-spec",id:"develop/coding-spec",isDocsHomePage:!1,title:"Coding Rules",description:"import",source:"@site/docs/develop/coding-spec.md",sourceDirName:"develop",slug:"/develop/coding-spec",permalink:"/docs/develop/coding-spec",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/develop/coding-spec.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Naming Rules",permalink:"/docs/develop/naming-spec"},next:{title:"API Configuration",permalink:"/docs/configuration/api"}},p=[{value:"import",id:"import",children:[]},{value:"Function returns",id:"function-returns",children:[]},{value:"Error handling",id:"error-handling",children:[]},{value:"Function body coding",id:"function-body-coding",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"import"},"import"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Single-line import is not recommended being wrapped in parentheses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Introduce in the order of ",(0,i.kt)("inlineCode",{parentName:"p"},"Official Package"),", NEW LINE, ",(0,i.kt)("inlineCode",{parentName:"p"},"Project Package"),", NEW LINE, ",(0,i.kt)("inlineCode",{parentName:"p"},"Third Party Dependent Package")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "string"\n\n    "greet/user/internal/config"\n\n    "google.golang.org/grpc"\n)\n')))),(0,i.kt)("h2",{id:"function-returns"},"Function returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Object avoids non-pointer return"),(0,i.kt)("li",{parentName:"ul"},"Follow the principle that if there is a normal value return, there must be no error, and if there is an error, there must be no normal value return.")),(0,i.kt)("h2",{id:"error-handling"},"Error handling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An error must be handled, if it cannot be handled, it must be thrown."),(0,i.kt)("li",{parentName:"ul"},"Avoid underscore (_) receiving error")),(0,i.kt)("h2",{id:"function-body-coding"},"Function body coding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is recommended that a block end with a blank line, such as if, for, etc."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main (){\n    if x==1{\n        // do something\n    }\n\n    fmt.println("xxx")\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Blank line before return"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func getUser(id string)(string,error){\n    ....\n\n    return "xx",nil\n}\n')))))}d.isMDXComponent=!0}}]);