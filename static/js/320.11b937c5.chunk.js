"use strict";(self.webpackChunkalphacrm=self.webpackChunkalphacrm||[]).push([[320],{320:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var l=a(43),c=a(3),i=a(460);const n=()=>async e=>{try{const s=await fetch("https://crmapi-657550777490.us-central1.run.app/Api/Client/Clients"),a=await s.json();e((0,i.xL)(a))}catch(s){console.error("Error fetching clients:",s)}};var t=a(579);function r(e){let{onClose:s,setUserInfo:a}=e;const i=(0,c.wA)(),r=(0,c.d4)((e=>e.clients.data)),o=(0,c.d4)((e=>e.clients.isLoading)),d=(0,c.d4)((e=>e.clients.error));return(0,l.useEffect)((()=>{i(n())}),[i]),o?(0,t.jsx)("p",{children:"Loading clients..."}):d?(0,t.jsxs)("p",{children:["Error loading clients: ",d]}):(0,t.jsxs)("div",{className:"email-catalog",children:[(0,t.jsxs)("div",{className:"email-catalog-header",children:[(0,t.jsx)("h2",{children:"Client Emails"}),(0,t.jsx)("button",{onClick:s,className:"close-button",children:"X"})]}),(0,t.jsx)("div",{className:"email-list",children:r.map((e=>(0,t.jsx)("button",{className:"email-item",onClick:()=>{a(e),s()},children:e.email},e.id)))})]})}}}]);
//# sourceMappingURL=320.11b937c5.chunk.js.map