"use strict";(self.webpackChunkalphacrm=self.webpackChunkalphacrm||[]).push([[320],{320:(e,s,l)=>{l.r(s),l.d(s,{default:()=>r});var a=l(43),c=l(3),n=l(460);const i=()=>async e=>{try{const s=await fetch("https://crmapi-657550777490.us-central1.run.app/Api/Client/Clients"),l=await s.json();console.log(l),e((0,n.xL)(l))}catch(s){console.error("Error fetching clients:",s)}};var t=l(579);function r(e){let{onClose:s,setUserInfo:l}=e;const n=(0,c.wA)(),r=(0,c.d4)((e=>e.clients.data)),o=(0,c.d4)((e=>e.clients.isLoading)),d=(0,c.d4)((e=>e.clients.error));return(0,a.useEffect)((()=>{n(i())}),[n]),o?(0,t.jsx)("p",{children:"Loading clients..."}):d?(0,t.jsxs)("p",{children:["Error loading clients: ",d]}):(0,t.jsxs)("div",{className:"email-catalog",children:[(0,t.jsxs)("div",{className:"email-catalog-header",children:[(0,t.jsx)("h2",{children:"Client Emails"}),(0,t.jsx)("button",{onClick:s,className:"close-button",children:"X"})]}),(0,t.jsx)("div",{className:"email-list",children:r.map((e=>(0,t.jsx)("button",{className:"email-item",onClick:()=>{console.log(e),l(e),s()},children:e.email},e.id)))})]})}}}]);
//# sourceMappingURL=320.86d4630d.chunk.js.map