!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("@material-ui/core/Box"),require("@material-ui/core/Grid"),require("@material-ui/core/Popover"),require("@material-ui/core/Typography"),require("react"));else if("function"==typeof define&&define.amd)define(["@material-ui/core/Box","@material-ui/core/Grid","@material-ui/core/Popover","@material-ui/core/Typography","react"],t);else{var r="object"==typeof exports?t(require("@material-ui/core/Box"),require("@material-ui/core/Grid"),require("@material-ui/core/Popover"),require("@material-ui/core/Typography"),require("react")):t(e["@material-ui/core/Box"],e["@material-ui/core/Grid"],e["@material-ui/core/Popover"],e["@material-ui/core/Typography"],e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(e,t,r,n,o){return(()=>{"use strict";var i={299:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpContextProviderComponent=t.HelpContext=void 0;const a=i(r(297));t.HelpContext=a.createContext({}),t.HelpContextProviderComponent=function({host:e,path:r,lexicon:n,children:o}){return a.default.createElement(t.HelpContext.Provider,{value:{getHelpInfo:function(e){return n[e]?n[e]:{title:"unknown",link:"unknown",text:"unknown"}},baseUrl:e+r}},o)}},244:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=a(r(658)),l=a(r(720)),c=a(r(280)),f=a(r(740)),p=i(r(297)),d=r(299);t.default=function({helpId:e,children:t}){const[r,n]=p.useState(),[o,i]=p.useState(),[a,s]=p.useState(),[m,x]=p.useState(null),{getHelpInfo:h,baseUrl:v}=p.useContext(d.HelpContext);return p.useEffect((()=>{const{title:t,text:r,link:o}=h(e);n(t),i(r),s(v+o)})),p.default.createElement(p.default.Fragment,null,p.default.createElement("span",{onClick:function(e){x(e.currentTarget)},style:{textDecoration:"underline",textDecorationStyle:"dashed",cursor:"help",alignItems:"center"}},t),p.default.createElement(c.default,{open:!!m,onClose:function(){x(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:m},p.default.createElement(l.default,{container:!0,component:u.default,p:2,maxWidth:"300px"},p.default.createElement(l.default,{item:!0,xs:12,style:{marginBottom:"10px"}},p.default.createElement(f.default,{variant:"h5"},r)),p.default.createElement(l.default,{item:!0,xs:12},o),p.default.createElement(l.default,{item:!0,xs:12},p.default.createElement("a",{href:a,target:"_blank"},"View in manual")))))}},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineHelp=t.HelpContextProviderComponent=void 0;const o=r(299);Object.defineProperty(t,"HelpContextProviderComponent",{enumerable:!0,get:function(){return o.HelpContextProviderComponent}});const i=n(r(244));t.InlineHelp=i.default},658:t=>{t.exports=e},720:e=>{e.exports=t},280:e=>{e.exports=r},740:e=>{e.exports=n},297:e=>{e.exports=o}},a={};return function e(t){if(a[t])return a[t].exports;var r=a[t]={exports:{}};return i[t].call(r.exports,r,r.exports,e),r.exports}(607)})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0lubGluZUhlbHAvSW5saW5lSGVscC50c3giLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJzZWxmIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183MjBfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI4MF9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX18iLCJfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXyIsIkhlbHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImhvc3QiLCJwYXRoIiwibGV4aWNvbiIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImdldEhlbHBJbmZvIiwiaWQiLCJ0aXRsZSIsImxpbmsiLCJ0ZXh0IiwiYmFzZVVybCIsImhlbHBJZCIsInNldFRpdGxlIiwidXNlU3RhdGUiLCJzZXRUZXh0Iiwic2V0TGluayIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0Iiwib25DbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0RGVjb3JhdGlvblN0eWxlIiwiY3Vyc29yIiwiYWxpZ25JdGVtcyIsIm9wZW4iLCJvbkNsb3NlIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNmb3JtT3JpZ2luIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwicCIsIm1heFdpZHRoIiwiaXRlbSIsInhzIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImhyZWYiLCJ0YXJnZXQiLCJIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IiwiSW5saW5lSGVscCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDaEQsR0FBc0IsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsRUFBUUcsUUFBUSx5QkFBMEJBLFFBQVEsMEJBQTJCQSxRQUFRLDZCQUE4QkEsUUFBUSxnQ0FBaUNBLFFBQVEsZUFDakwsR0FBcUIsbUJBQVhDLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxDQUFDLHdCQUF5Qix5QkFBMEIsNEJBQTZCLCtCQUFnQyxTQUFVSixPQUM5SCxDQUNKLElBQUlNLEVBQXVCLGlCQUFaTCxRQUF1QkQsRUFBUUcsUUFBUSx5QkFBMEJBLFFBQVEsMEJBQTJCQSxRQUFRLDZCQUE4QkEsUUFBUSxnQ0FBaUNBLFFBQVEsVUFBWUgsRUFBUUQsRUFBSyx5QkFBMEJBLEVBQUssMEJBQTJCQSxFQUFLLDZCQUE4QkEsRUFBSyxnQ0FBaUNBLEVBQVksT0FDbFgsSUFBSSxJQUFJUSxLQUFLRCxHQUF1QixpQkFBWkwsUUFBdUJBLFFBQVVGLEdBQU1RLEdBQUtELEVBQUVDLElBUHhFLENBU0dDLE1BQU0sU0FBU0MsRUFBa0NDLEVBQWtDQyxFQUFrQ0MsRUFBa0NDLEdBQzFKLE0sZ3JCQ1ZBLGtCQUlhLEVBQUFDLFlBQWMsRUFBQUMsY0FBNEIsSUFFdkQseUNBQTZDLEtBQzNDQyxFQUFJLEtBQ0pDLEVBQUksUUFDSkMsRUFBTyxTQUNQQyxJQWVBLE9BQ0Usd0JBQUMsRUFBQUwsWUFBWU0sU0FBUSxDQUFDQyxNQUFPLENBQUNDLFlBVGhDLFNBQXFCQyxHQUNuQixPQUFJTCxFQUFRSyxHQUNITCxFQUFRSyxHQUVSLENBQUNDLE1BQU8sVUFBV0MsS0FBTSxVQUFXQyxLQUFNLFlBS1JDLFFBQVNYLEVBQU9DLElBQ3hERSxLLGtyQkMzQlAsa0JBQ0EsWUFDQSxZQUVBLFlBQ0EsWUFDQSxTQUVBLG9CQUFtQyxPQUNqQ1MsRUFBTSxTQUNOVCxJQUtBLE1BQU9LLEVBQU9LLEdBQVksRUFBQUMsWUFDbkJKLEVBQU1LLEdBQVcsRUFBQUQsWUFDakJMLEVBQU1PLEdBQVcsRUFBQUYsWUFDakJHLEVBQVVDLEdBQWUsRUFBQUosU0FBbUMsT0FFN0QsWUFBQ1IsRUFBVyxRQUFFSyxHQUFXLEVBQUFRLFdBQVcsRUFBQXJCLGFBd0IxQyxPQXRCQSxFQUFBc0IsV0FBVSxLQUNSLE1BQU0sTUFBQ1osRUFBSyxLQUFFRSxFQUFJLEtBQUVELEdBQVFILEVBQVlNLEdBQ3hDQyxFQUFTTCxHQUNUTyxFQUFRTCxHQUNSTSxFQUFRTCxFQUFVRixNQW1CbEIsZ0RBQ0UsZ0NBQU1ZLFFBakJWLFNBQXFCQyxHQUNuQkosRUFBWUksRUFBTUMsZ0JBZ0JZQyxNQVRILENBQzNCQyxlQUFnQixZQUNoQkMsb0JBQXFCLFNBQ3JCQyxPQUFRLE9BQ1JDLFdBQVksV0FNUHpCLEdBRUgsd0JBQUMsVUFBTyxDQUNOMEIsT0FBUVosRUFDUmEsUUFsQk4sV0FDRVosRUFBWSxPQWtCUmEsYUFBYyxDQUFDQyxTQUFVLFNBQVVDLFdBQVksVUFDL0NDLGdCQUFpQixDQUNmRixTQUFVLE1BQ1ZDLFdBQVksVUFFZGhCLFNBQVVBLEdBRVYsd0JBQUMsVUFBSSxDQUFDa0IsV0FBUyxFQUFDQyxVQUFXLFVBQUtDLEVBQUcsRUFBR0MsU0FBUyxTQUM3Qyx3QkFBQyxVQUFJLENBQUNDLE1BQUksRUFBQ0MsR0FBSSxHQUFJaEIsTUFBTyxDQUFDaUIsYUFBYyxTQUN2Qyx3QkFBQyxVQUFVLENBQUNDLFFBQVEsTUFBTWxDLElBRTVCLHdCQUFDLFVBQUksQ0FBQytCLE1BQUksRUFBQ0MsR0FBSSxJQUNaOUIsR0FFSCx3QkFBQyxVQUFJLENBQUM2QixNQUFJLEVBQUNDLEdBQUksSUFDYiw2QkFBR0csS0FBTWxDLEVBQU1tQyxPQUFPLFVBQVEsd0IsNE1DbkUxQyxlQUlRLDRGQUpBLEVBQUFDLGdDQUNSLGtCQUdzQyxFQUFBQyxXQUgvQixXLFFDRFA1RCxFQUFPRCxRQUFVUSxHLFFDQWpCUCxFQUFPRCxRQUFVUyxHLFFDQWpCUixFQUFPRCxRQUFVVSxHLFFDQWpCVCxFQUFPRCxRQUFVVyxHLFFDQWpCVixFQUFPRCxRQUFVWSxJQ0Nia0QsRUFBMkIsRyxPQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsR0FBR0YsRUFBeUJFLEdBQzNCLE9BQU9GLEVBQXlCRSxHQUFVaEUsUUFHM0MsSUFBSUMsRUFBUzZELEVBQXlCRSxHQUFZLENBR2pEaEUsUUFBUyxJQU9WLE9BSEFpRSxFQUFvQkQsR0FBVUUsS0FBS2pFLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVMrRCxHQUdwRTlELEVBQU9ELFFDakJXK0QsQ0FBb0IsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiwgXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCJdLCByb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzcyMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yODBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI5N19fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElIZWxwQ29udGV4dCBmcm9tICcuLi9JbnRlcmZhY2VzL0lIZWxwQ29udGV4dCc7XG5pbXBvcnQgSUhlbHBJbmZvIGZyb20gJy4uL0ludGVyZmFjZXMvSUhlbHBJbmZvJztcblxuZXhwb3J0IGNvbnN0IEhlbHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJSGVscENvbnRleHQ+KHt9IGFzIElIZWxwQ29udGV4dCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50KHtcbiAgaG9zdCxcbiAgcGF0aCxcbiAgbGV4aWNvbixcbiAgY2hpbGRyZW5cbn06IHtcbiAgaG9zdDogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG4gIGxleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGZ1bmN0aW9uIGdldEhlbHBJbmZvKGlkOiBzdHJpbmcpOiBJSGVscEluZm8ge1xuICAgIGlmIChsZXhpY29uW2lkXSkge1xuICAgICAgcmV0dXJuIGxleGljb25baWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge3RpdGxlOiAndW5rbm93bicsIGxpbms6ICd1bmtub3duJywgdGV4dDogJ3Vua25vd24nfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWxwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2dldEhlbHBJbmZvLCBiYXNlVXJsOiBob3N0ICsgcGF0aH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVscENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0IHtDU1NQcm9wZXJ0aWVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCwge01vdXNlRXZlbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SGVscENvbnRleHR9IGZyb20gJy4uL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5saW5lSGVscCh7XG4gIGhlbHBJZCxcbiAgY2hpbGRyZW5cbn06IHtcbiAgaGVscElkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHtnZXRIZWxwSW5mbywgYmFzZVVybH0gPSB1c2VDb250ZXh0KEhlbHBDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHt0aXRsZSwgdGV4dCwgbGlua30gPSBnZXRIZWxwSW5mbyhoZWxwSWQpO1xuICAgIHNldFRpdGxlKHRpdGxlKTtcbiAgICBzZXRUZXh0KHRleHQpO1xuICAgIHNldExpbmsoYmFzZVVybCArIGxpbmspO1xuICB9KTtcblxuICBmdW5jdGlvbiBvcGVuUG9wb3ZlcihldmVudDogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0ge1xuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlOiAnZGFzaGVkJyxcbiAgICBjdXJzb3I6ICdoZWxwJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5Qb3BvdmVyfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3NwYW4+XG4gICAgICA8UG9wb3ZlclxuICAgICAgICBvcGVuPXshIWFuY2hvckVsfVxuICAgICAgICBvbkNsb3NlPXtjbG9zZVBvcG92ZXJ9XG4gICAgICAgIGFuY2hvck9yaWdpbj17e3ZlcnRpY2FsOiAnY2VudGVyJywgaG9yaXpvbnRhbDogJ2NlbnRlcid9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcidcbiAgICAgICAgfX1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PXtCb3h9IHA9ezJ9IG1heFdpZHRoPVwiMzAwcHhcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxMHB4J319PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBWaWV3IGluIG1hbnVhbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHtIZWxwQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50fSBmcm9tICcuL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0JztcbmltcG9ydCBJbmxpbmVIZWxwIGZyb20gJy4vSW5saW5lSGVscC9JbmxpbmVIZWxwJztcbmltcG9ydCBJSGVscEluZm8gZnJvbSAnLi9JbnRlcmZhY2VzL0lIZWxwSW5mbyc7XG5cbmV4cG9ydCB7SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudCwgSW5saW5lSGVscCwgSUhlbHBJbmZvfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjU4X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183MjBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI4MF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzQwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yOTdfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==