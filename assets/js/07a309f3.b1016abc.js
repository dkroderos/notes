"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[900],{1380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"k8s/cheatsheet","title":"Cheatsheet","description":"Start minikube","source":"@site/notes/04-k8s/cheatsheet.mdx","sourceDirName":"04-k8s","slug":"/k8s/cheatsheet","permalink":"/k8s/cheatsheet","draft":false,"unlisted":false,"editUrl":"https://github.com/dkroderos/notes/tree/main/notes/04-k8s/cheatsheet.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Cheatsheet","sidebar_position":2},"sidebar":"default","previous":{"title":"Installation","permalink":"/k8s/install"},"next":{"title":"Conda","permalink":"/category/conda"}}');var i=n(4848),r=n(8453);const o={title:"Cheatsheet",sidebar_position:2},c=void 0,d={},l=[{value:"Start minikube",id:"start-minikube",level:3},{value:"Get services",id:"get-services",level:3},{value:"Get pods",id:"get-pods",level:3},{value:"Create deployment",id:"create-deployment",level:3},{value:"Get deployments",id:"get-deployments",level:3}];function a(e){const t={code:"code",h3:"h3",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"start-minikube",children:"Start minikube"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"minikube start --extra-config=apiserver.authorization-mode=RBAC\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-services",children:"Get services"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl get services\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-pods",children:"Get pods"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl get pod\n"})}),"\n",(0,i.jsx)(t.h3,{id:"create-deployment",children:"Create deployment"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl create deployment nginx-depl --image=nginx\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-deployments",children:"Get deployments"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"kubectl get deployment\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);