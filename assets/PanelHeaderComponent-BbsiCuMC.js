import{_ as l}from"./icon_facebook-ByNki_3x.js";import{d as v,a as x,D as C,b as w,o as m,c as p,f as e,e as d,w as _,g as r,E as i,l as L,G as b,p as k,m as N,_ as h,t as S}from"./index-BQEcpNoL.js";const H="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",t=n=>(k("data-v-2d95434e"),n=n(),N(),n),I={class:"container"},B=t(()=>e("div",{class:"avater-container"},[e("img",{src:H})],-1)),E={class:"greeting-container"},V=t(()=>e("br",null,null,-1)),z={class:"mt-3"},D={class:"dashboard-text"},R=t(()=>e("img",{src:l,class:"icon"},null,-1)),A=t(()=>e("a",null,"Students",-1)),M=[R,A],O=t(()=>e("img",{src:l,class:"icon"},null,-1)),P=t(()=>e("a",null,"Candidates",-1)),T=[O,P],$=t(()=>e("img",{src:l,class:"icon"},null,-1)),y=t(()=>e("a",null,"Change Password",-1)),G=[$,y],K=t(()=>e("img",{src:l,class:"icon"},null,-1)),j=t(()=>e("a",null,"Log Out",-1)),q=[K,j],F=v({__name:"AdminPanelLeftNavComponent",setup(n){const s=x(0),u=L(),g=b();C(()=>g.path,a=>{a.includes("studentsList")?s.value=1:a.includes("candidatesList")?s.value=2:a.includes("changePassword")?s.value=3:a.includes("logOut")?s.value=4:s.value=0},{immediate:!0});const c=a=>{const o=a.currentTarget.getAttribute("index");switch(s.value=Number(o),s.value){case 1:u.push("/admin/panel/studentsList");break}};return(a,f)=>{const o=w("el-text");return m(),p("div",I,[B,e("div",E,[d(o,{class:"greeting"},{default:_(()=>[r("Kia ora,")]),_:1}),V,d(o,{class:"name"},{default:_(()=>[r("Sue Pearson")]),_:1})]),e("div",z,[e("div",D,[d(o,null,{default:_(()=>[r("Dashboards")]),_:1})]),e("nav",null,[e("div",{class:i(["nav-item",{active:s.value===1}]),index:1,onClick:c},M,2),e("div",{class:i(["nav-item",{active:s.value===2}]),index:2,onClick:c},T,2),e("div",{class:i(["nav-item",{active:s.value===3}]),index:3,onClick:c},G,2),e("div",{class:i(["nav-item",{active:s.value===4}]),index:4,onClick:c},q,2)])])])}}}),X=h(F,[["__scopeId","data-v-2d95434e"]]),J={class:"container"},Q=v({__name:"PanelHeaderComponent",props:{title:{}},setup(n){return(s,u)=>(m(),p("div",J,[e("p",null,S(s.title),1)]))}}),Y=h(Q,[["__scopeId","data-v-d2472ea7"]]);export{Y as H,X as N};
