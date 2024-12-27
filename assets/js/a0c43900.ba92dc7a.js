"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[809],{3991:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"docker/debian-install","title":"Debian Installation","description":"Remove all conflicting packages","source":"@site/notes/03-docker/debian-install.mdx","sourceDirName":"03-docker","slug":"/docker/debian-install","permalink":"/notes/docker/debian-install","draft":false,"unlisted":false,"editUrl":"https://github.com/dkroderos/notes/tree/main/notes/03-docker/debian-install.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Debian Installation","sidebar_position":1},"sidebar":"default","previous":{"title":"Docker","permalink":"/notes/category/docker"},"next":{"title":"Cheatsheet","permalink":"/notes/docker/cheatsheet"}}');var c=o(4848),r=o(8453);const s={title:"Debian Installation",sidebar_position:1},d=void 0,l={},i=[{value:"Remove all conflicting packages",id:"remove-all-conflicting-packages",level:4},{value:"Setup docker apt",id:"setup-docker-apt",level:4},{value:"Install docker packages",id:"install-docker-packages",level:4},{value:"Create docker group",id:"create-docker-group",level:4},{value:"Add logged user to docker group (log back in to see changes)",id:"add-logged-user-to-docker-group-log-back-in-to-see-changes",level:4},{value:"Activate changes to groups",id:"activate-changes-to-groups",level:4},{value:"Verify installation",id:"verify-installation",level:4},{value:"Automaically start docker on boot",id:"automaically-start-docker-on-boot",level:4},{value:"References",id:"references",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h4,{id:"remove-all-conflicting-packages",children:"Remove all conflicting packages"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done\n"})}),"\n",(0,c.jsx)(n.h4,{id:"setup-docker-apt",children:"Setup docker apt"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'# Add Docker\'s official GPG key:\nsudo apt-get update\nsudo apt-get install ca-certificates curl\nsudo install -m 0755 -d /etc/apt/keyrings\nsudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc\nsudo chmod a+r /etc/apt/keyrings/docker.asc\n\n# Add the repository to Apt sources:\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\\n  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\\n  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\n'})}),"\n",(0,c.jsx)(n.h4,{id:"install-docker-packages",children:"Install docker packages"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"})}),"\n",(0,c.jsx)(n.h4,{id:"create-docker-group",children:"Create docker group"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo groupadd docker\n"})}),"\n",(0,c.jsx)(n.h4,{id:"add-logged-user-to-docker-group-log-back-in-to-see-changes",children:"Add logged user to docker group (log back in to see changes)"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,c.jsx)(n.h4,{id:"activate-changes-to-groups",children:"Activate changes to groups"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"newgrp docker\n"})}),"\n",(0,c.jsx)(n.h4,{id:"verify-installation",children:"Verify installation"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"docker run hello-world\n"})}),"\n",(0,c.jsx)(n.h4,{id:"automaically-start-docker-on-boot",children:"Automaically start docker on boot"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"sudo systemctl enable docker.service\nsudo systemctl enable containerd.service\n"})}),"\n",(0,c.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker install"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"docker install ubuntu"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"docker post install"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var t=o(6540);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);