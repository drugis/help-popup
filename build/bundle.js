!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("@material-ui/core"),require("@material-ui/core/Box"),require("@material-ui/core/Grid"),require("@material-ui/core/Popover"),require("@material-ui/core/Typography"),require("@material-ui/icons/Help"),require("react"));else if("function"==typeof define&&define.amd)define(["@material-ui/core","@material-ui/core/Box","@material-ui/core/Grid","@material-ui/core/Popover","@material-ui/core/Typography","@material-ui/icons/Help","react"],t);else{var r="object"==typeof exports?t(require("@material-ui/core"),require("@material-ui/core/Box"),require("@material-ui/core/Grid"),require("@material-ui/core/Popover"),require("@material-ui/core/Typography"),require("@material-ui/icons/Help"),require("react")):t(e["@material-ui/core"],e["@material-ui/core/Box"],e["@material-ui/core/Grid"],e["@material-ui/core/Popover"],e["@material-ui/core/Typography"],e["@material-ui/icons/Help"],e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(e,t,r,n,o,i,a){return(()=>{"use strict";var l={299:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpContextProviderComponent=t.HelpContext=void 0;const a=i(r(297));t.HelpContext=a.createContext({}),t.HelpContextProviderComponent=function({host:e,path:r,lexicon:n,children:o}){return a.default.createElement(t.HelpContext.Provider,{value:{getHelpInfo:function(e){return n[e]?n[e]:{title:"unknown",link:"unknown",text:"unknown"}},baseUrl:e+r}},o)}},244:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(731),u=a(r(658)),c=a(r(720)),f=a(r(280)),d=a(r(740)),s=i(r(297)),p=r(299);t.default=function({helpId:e,omitQuestionMark:t,children:r}){const[n,o]=s.useState(),[i,a]=s.useState(),[m,x]=s.useState(),[h,v]=s.useState(null),{getHelpInfo:_,baseUrl:y}=s.useContext(p.HelpContext);return s.useEffect((()=>{const{title:t,text:r,link:n}=_(e);o(t),a(r),x(y+n)})),m?s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{onClick:function(e){v(e.currentTarget)},style:{textDecoration:"underline",textDecorationStyle:"dashed",textDecorationThickness:"1px",textDecorationColor:"darkgray",cursor:"help",alignItems:"center"}},r),t?s.default.createElement(s.default.Fragment,null):s.default.createElement("sup",{style:{color:"darkgray"}},"?"),s.default.createElement(f.default,{open:!!h,onClose:function(){v(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:h},s.default.createElement(c.default,{container:!0,component:u.default,p:2,maxWidth:"300px"},s.default.createElement(c.default,{item:!0,xs:12,style:{marginBottom:"10px"}},s.default.createElement(d.default,{variant:"h5"},n)),s.default.createElement(c.default,{item:!0,xs:12},s.default.createElement(d.default,null,i)),s.default.createElement(c.default,{item:!0,xs:12},s.default.createElement(l.Link,{href:m,target:"_blank"},s.default.createElement(d.default,null,"View in manual")))))):s.default.createElement("span",null,r)}},784:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(191)),i=n(r(297)),a=n(r(244));t.default=function({helpId:e}){return i.default.createElement(a.default,{helpId:e,omitQuestionMark:!0},i.default.createElement(o.default,{fontSize:"small",style:{marginTop:"5px"}}))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineQuestionMark=t.InlineHelp=t.HelpContextProviderComponent=void 0;const o=r(299);Object.defineProperty(t,"HelpContextProviderComponent",{enumerable:!0,get:function(){return o.HelpContextProviderComponent}});const i=n(r(244));t.InlineHelp=i.default;const a=n(r(784));t.InlineQuestionMark=a.default},731:t=>{t.exports=e},658:e=>{e.exports=t},720:e=>{e.exports=r},280:e=>{e.exports=n},740:e=>{e.exports=o},191:e=>{e.exports=i},297:e=>{e.exports=a}},u={};return function e(t){if(u[t])return u[t].exports;var r=u[t]={exports:{}};return l[t].call(r.exports,r,r.exports,e),r.exports}(607)})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0lubGluZUhlbHAvSW5saW5lSGVscC50c3giLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC8uL3NyYy9JbmxpbmVRdWVzdGlvbk1hcmsvSW5saW5lUXVlc3Rpb25NYXJrLnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlbHAtcG9wdXAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJhIiwiaSIsInNlbGYiLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183MzFfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY1OF9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzIwX18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yODBfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzc0MF9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMTkxX18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXyIsIkhlbHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImhvc3QiLCJwYXRoIiwibGV4aWNvbiIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImdldEhlbHBJbmZvIiwiaWQiLCJ0aXRsZSIsImxpbmsiLCJ0ZXh0IiwiYmFzZVVybCIsImhlbHBJZCIsIm9taXRRdWVzdGlvbk1hcmsiLCJzZXRUaXRsZSIsInVzZVN0YXRlIiwic2V0VGV4dCIsInNldExpbmsiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwidGV4dERlY29yYXRpb25TdHlsZSIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwidGV4dERlY29yYXRpb25Db2xvciIsImN1cnNvciIsImFsaWduSXRlbXMiLCJjb2xvciIsIm9wZW4iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNmb3JtT3JpZ2luIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwicCIsIm1heFdpZHRoIiwiaXRlbSIsInhzIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IiwiSW5saW5lSGVscCIsIklubGluZVF1ZXN0aW9uTWFyayIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDaEQsR0FBc0IsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsRUFBUUcsUUFBUSxxQkFBc0JBLFFBQVEseUJBQTBCQSxRQUFRLDBCQUEyQkEsUUFBUSw2QkFBOEJBLFFBQVEsZ0NBQWlDQSxRQUFRLDJCQUE0QkEsUUFBUSxlQUNuUCxHQUFxQixtQkFBWEMsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLENBQUMsb0JBQXFCLHdCQUF5Qix5QkFBMEIsNEJBQTZCLCtCQUFnQywwQkFBMkIsU0FBVUosT0FDOUssQ0FDSixJQUFJTSxFQUF1QixpQkFBWkwsUUFBdUJELEVBQVFHLFFBQVEscUJBQXNCQSxRQUFRLHlCQUEwQkEsUUFBUSwwQkFBMkJBLFFBQVEsNkJBQThCQSxRQUFRLGdDQUFpQ0EsUUFBUSwyQkFBNEJBLFFBQVEsVUFBWUgsRUFBUUQsRUFBSyxxQkFBc0JBLEVBQUsseUJBQTBCQSxFQUFLLDBCQUEyQkEsRUFBSyw2QkFBOEJBLEVBQUssZ0NBQWlDQSxFQUFLLDJCQUE0QkEsRUFBWSxPQUNoZixJQUFJLElBQUlRLEtBQUtELEdBQXVCLGlCQUFaTCxRQUF1QkEsUUFBVUYsR0FBTVEsR0FBS0QsRUFBRUMsSUFQeEUsQ0FTR0MsTUFBTSxTQUFTQyxFQUFrQ0MsRUFBa0NDLEVBQWtDQyxFQUFrQ0MsRUFBa0NDLEVBQWtDQyxHQUM5TixNLGdyQkNWQSxrQkFJYSxFQUFBQyxZQUFjLEVBQUFDLGNBQTRCLElBRXZELHlDQUE2QyxLQUMzQ0MsRUFBSSxLQUNKQyxFQUFJLFFBQ0pDLEVBQU8sU0FDUEMsSUFlQSxPQUNFLHdCQUFDLEVBQUFMLFlBQVlNLFNBQVEsQ0FBQ0MsTUFBTyxDQUFDQyxZQVRoQyxTQUFxQkMsR0FDbkIsT0FBSUwsRUFBUUssR0FDSEwsRUFBUUssR0FFUixDQUFDQyxNQUFPLFVBQVdDLEtBQU0sVUFBV0MsS0FBTSxZQUtSQyxRQUFTWCxFQUFPQyxJQUN4REUsSyxrckJDM0JQLGVBQ0EsWUFDQSxZQUNBLFlBRUEsWUFDQSxZQUNBLFNBRUEsb0JBQW1DLE9BQ2pDUyxFQUFNLGlCQUNOQyxFQUFnQixTQUNoQlYsSUFNQSxNQUFPSyxFQUFPTSxHQUFZLEVBQUFDLFlBQ25CTCxFQUFNTSxHQUFXLEVBQUFELFlBQ2pCTixFQUFNUSxHQUFXLEVBQUFGLFlBQ2pCRyxFQUFVQyxHQUFlLEVBQUFKLFNBQW1DLE9BRTdELFlBQUNULEVBQVcsUUFBRUssR0FBVyxFQUFBUyxXQUFXLEVBQUF0QixhQWtDMUMsT0FoQ0EsRUFBQXVCLFdBQVUsS0FDUixNQUFNLE1BQUNiLEVBQUssS0FBRUUsRUFBSSxLQUFFRCxHQUFRSCxFQUFZTSxHQUN4Q0UsRUFBU04sR0FDVFEsRUFBUU4sR0FDUk8sRUFBUU4sRUFBVUYsTUE0QlpBLEVBR04sZ0RBQ0UsZ0NBQU1hLFFBcEJWLFNBQXFCQyxHQUNuQkosRUFBWUksRUFBTUMsZ0JBbUJZQyxNQTdCSCxDQUMzQkMsZUFBZ0IsWUFDaEJDLG9CQUFxQixTQUNyQkMsd0JBQXlCLE1BQ3pCQyxvQkFBcUIsV0FDckJDLE9BQVEsT0FDUkMsV0FBWSxXQXdCUDVCLEdBWkRVLEVBQ0ssaURBRUEsK0JBQUtZLE1BQU8sQ0FBQ08sTUFBTyxhQUFXLEtBWXRDLHdCQUFDLFVBQU8sQ0FDTkMsT0FBUWYsRUFDUmdCLFFBdEJOLFdBQ0VmLEVBQVksT0FzQlJnQixhQUFjLENBQUNDLFNBQVUsU0FBVUMsV0FBWSxVQUMvQ0MsZ0JBQWlCLENBQ2ZGLFNBQVUsTUFDVkMsV0FBWSxVQUVkbkIsU0FBVUEsR0FFVix3QkFBQyxVQUFJLENBQUNxQixXQUFTLEVBQUNDLFVBQVcsVUFBS0MsRUFBRyxFQUFHQyxTQUFTLFNBQzdDLHdCQUFDLFVBQUksQ0FBQ0MsTUFBSSxFQUFDQyxHQUFJLEdBQUluQixNQUFPLENBQUNvQixhQUFjLFNBQ3ZDLHdCQUFDLFVBQVUsQ0FBQ0MsUUFBUSxNQUFNdEMsSUFFNUIsd0JBQUMsVUFBSSxDQUFDbUMsTUFBSSxFQUFDQyxHQUFJLElBQ2Isd0JBQUMsVUFBVSxLQUFFbEMsSUFFZix3QkFBQyxVQUFJLENBQUNpQyxNQUFJLEVBQUNDLEdBQUksSUFDYix3QkFBQyxFQUFBRyxLQUFJLENBQUNDLEtBQU12QyxFQUFNd0MsT0FBTyxVQUN2Qix3QkFBQyxVQUFVLDRCQTFCckIsb0NBQU85QyxLLHlKQzFEWCxrQkFDQSxZQUNBLFlBRUEsb0JBQTJDLE9BQUNTLElBQzFDLE9BQ0Usd0JBQUMsVUFBVSxDQUFDQSxPQUFRQSxFQUFRQyxrQkFBa0IsR0FDNUMsd0JBQUMsVUFBSSxDQUFDcUMsU0FBUyxRQUFRekIsTUFBTyxDQUFDMEIsVUFBVyxZLGlPQ1BoRCxlQU1FLDRGQU5NLEVBQUFDLGdDQUNSLGtCQU1FLEVBQUFDLFdBTkssVUFDUCxrQkFPRSxFQUFBQyxtQkFQSyxXLFFDRlB0RSxFQUFPRCxRQUFVUSxHLFFDQWpCUCxFQUFPRCxRQUFVUyxHLFFDQWpCUixFQUFPRCxRQUFVVSxHLFFDQWpCVCxFQUFPRCxRQUFVVyxHLFFDQWpCVixFQUFPRCxRQUFVWSxHLFFDQWpCWCxFQUFPRCxRQUFVYSxHLFFDQWpCWixFQUFPRCxRQUFVYyxJQ0NiMEQsRUFBMkIsRyxPQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsR0FBR0YsRUFBeUJFLEdBQzNCLE9BQU9GLEVBQXlCRSxHQUFVMUUsUUFHM0MsSUFBSUMsRUFBU3VFLEVBQXlCRSxHQUFZLENBR2pEMUUsUUFBUyxJQU9WLE9BSEEyRSxFQUFvQkQsR0FBVUUsS0FBSzNFLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVN5RSxHQUdwRXhFLEVBQU9ELFFDakJXeUUsQ0FBb0IsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmVcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiLCBcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9IZWxwXCIpLCByZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmVcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscFwiXSwgcm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzczMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182NThfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzIwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI4MF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183NDBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMTkxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI5N19fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElIZWxwQ29udGV4dCBmcm9tICcuLi9JbnRlcmZhY2VzL0lIZWxwQ29udGV4dCc7XG5pbXBvcnQgSUhlbHBJbmZvIGZyb20gJy4uL0ludGVyZmFjZXMvSUhlbHBJbmZvJztcblxuZXhwb3J0IGNvbnN0IEhlbHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJSGVscENvbnRleHQ+KHt9IGFzIElIZWxwQ29udGV4dCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50KHtcbiAgaG9zdCxcbiAgcGF0aCxcbiAgbGV4aWNvbixcbiAgY2hpbGRyZW5cbn06IHtcbiAgaG9zdDogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIGxleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGZ1bmN0aW9uIGdldEhlbHBJbmZvKGlkOiBzdHJpbmcpOiBJSGVscEluZm8ge1xuICAgIGlmIChsZXhpY29uW2lkXSkge1xuICAgICAgcmV0dXJuIGxleGljb25baWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge3RpdGxlOiAndW5rbm93bicsIGxpbms6ICd1bmtub3duJywgdGV4dDogJ3Vua25vd24nfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWxwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2dldEhlbHBJbmZvLCBiYXNlVXJsOiBob3N0ICsgcGF0aH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVscENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQge0xpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQge0NTU1Byb3BlcnRpZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0LCB7TW91c2VFdmVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtIZWxwQ29udGV4dH0gZnJvbSAnLi4vSGVscENvbnRleHQvSGVscENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmxpbmVIZWxwKHtcbiAgaGVscElkLFxuICBvbWl0UXVlc3Rpb25NYXJrLFxuICBjaGlsZHJlblxufToge1xuICBoZWxwSWQ6IHN0cmluZztcbiAgb21pdFF1ZXN0aW9uTWFyaz86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHtnZXRIZWxwSW5mbywgYmFzZVVybH0gPSB1c2VDb250ZXh0KEhlbHBDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgbGlua30gPSBnZXRIZWxwSW5mbyhoZWxwSWQpO1xuICAgIHNldFRpdGxlKHRpdGxlKTtcbiAgICBzZXRUZXh0KHRleHQpO1xuICAgIHNldExpbmsoYmFzZVVybCArIGxpbmspO1xuICB9KTtcblxuICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgdGV4dERlY29yYXRpb25TdHlsZTogJ2Rhc2hlZCcsXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6ICcxcHgnLFxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICdkYXJrZ3JheScsXG4gICAgY3Vyc29yOiAnaGVscCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfTtcblxuICBmdW5jdGlvbiBvcGVuUG9wb3ZlcihldmVudDogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclF1ZXN0aW9uTWFyaygpOiBKU1guRWxlbWVudCB7XG4gICAgaWYgKG9taXRRdWVzdGlvbk1hcmspIHtcbiAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxzdXAgc3R5bGU9e3tjb2xvcjogJ2RhcmtncmF5J319Pj88L3N1cD47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICFsaW5rID8gKFxuICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICkgOiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5Qb3BvdmVyfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NwYW4+XG4gICAgICB7cmVuZGVyUXVlc3Rpb25NYXJrKCl9XG4gICAgICA8UG9wb3ZlclxuICAgICAgICBvcGVuPXshIWFuY2hvckVsfVxuICAgICAgICBvbkNsb3NlPXtjbG9zZVBvcG92ZXJ9XG4gICAgICAgIGFuY2hvck9yaWdpbj17e3ZlcnRpY2FsOiAnY2VudGVyJywgaG9yaXpvbnRhbDogJ2NlbnRlcid9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcidcbiAgICAgICAgfX1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IHA9ezJ9IG1heFdpZHRoPVwiMzAwcHhcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxMHB4J319PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3RleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+VmlldyBpbiBtYW51YWw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgSGVscCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElubGluZUhlbHAgZnJvbSAnc3JjL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElubGluZVF1ZXN0aW9uTWFyayh7aGVscElkfToge2hlbHBJZDogc3RyaW5nfSkge1xuICByZXR1cm4gKFxuICAgIDxJbmxpbmVIZWxwIGhlbHBJZD17aGVscElkfSBvbWl0UXVlc3Rpb25NYXJrPXt0cnVlfT5cbiAgICAgIDxIZWxwIGZvbnRTaXplPVwic21hbGxcIiBzdHlsZT17e21hcmdpblRvcDogJzVweCd9fSAvPlxuICAgIDwvSW5saW5lSGVscD5cbiAgKTtcbn1cbiIsImltcG9ydCB7SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi9IZWxwQ29udGV4dC9IZWxwQ29udGV4dCc7XG5pbXBvcnQgSW5saW5lSGVscCBmcm9tICcuL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5pbXBvcnQgSW5saW5lUXVlc3Rpb25NYXJrIGZyb20gJy4vSW5saW5lUXVlc3Rpb25NYXJrL0lubGluZVF1ZXN0aW9uTWFyayc7XG5pbXBvcnQgSUhlbHBJbmZvIGZyb20gJy4vSW50ZXJmYWNlcy9JSGVscEluZm8nO1xuXG5leHBvcnQge1xuICBIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50LFxuICBJbmxpbmVIZWxwLFxuICBJSGVscEluZm8sXG4gIElubGluZVF1ZXN0aW9uTWFya1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzMxX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182NThfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjgwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183NDBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzE5MV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjk3X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjA3KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=