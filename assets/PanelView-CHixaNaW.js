import{_ as r}from"./icon_facebook-ByNki_3x.js";import{d as h,a as w,A as C,b as _,o as f,c as g,f as e,e as s,w as c,g as v,B as d,l as I,C as N,p as S,m as L,_ as x,t as b}from"./index-Bkgo-1iK.js";const R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",a=l=>(S("data-v-c3d3dc97"),l=l(),L(),l),V={class:"container"},k=a(()=>e("div",{class:"avater-container"},[e("img",{src:R})],-1)),T={class:"greeting-container"},B=a(()=>e("br",null,null,-1)),E={class:"mt-3"},H={class:"dashboard-text"},A=a(()=>e("img",{src:r,class:"icon"},null,-1)),D=a(()=>e("a",null,"Students",-1)),M=[A,D],P=a(()=>e("img",{src:r,class:"icon"},null,-1)),$=a(()=>e("a",null,"Candidates",-1)),z=[P,$],O=a(()=>e("img",{src:r,class:"icon"},null,-1)),Y=a(()=>e("a",null,"Change Password",-1)),y=[O,Y],K=a(()=>e("img",{src:r,class:"icon"},null,-1)),U=a(()=>e("a",null,"Log Out",-1)),j=[K,U],q=h({__name:"LeftNavComponent",setup(l){const t=w(0),u=I(),m=N();C(()=>m.path,n=>{n.includes("studentsList")?t.value=1:n.includes("candidatesList")?t.value=2:n.includes("changePassword")?t.value=3:n.includes("logOut")?t.value=4:t.value=0},{immediate:!0});const i=n=>{const o=n.currentTarget.getAttribute("index");switch(t.value=Number(o),t.value){case 1:u.push("/admin/panel/studentsList");break}};return(n,p)=>{const o=_("el-text");return f(),g("div",V,[k,e("div",T,[s(o,{class:"greeting"},{default:c(()=>[v("Kia ora,")]),_:1}),B,s(o,{class:"name"},{default:c(()=>[v("Sue Pearson")]),_:1})]),e("div",E,[e("div",H,[s(o,null,{default:c(()=>[v("Dashboards")]),_:1})]),e("nav",null,[e("div",{class:d(["nav-item",{active:t.value===1}]),index:1,onClick:i},M,2),e("div",{class:d(["nav-item",{active:t.value===2}]),index:2,onClick:i},z,2),e("div",{class:d(["nav-item",{active:t.value===3}]),index:3,onClick:i},y,2),e("div",{class:d(["nav-item",{active:t.value===4}]),index:4,onClick:i},j,2)])])])}}}),F=x(q,[["__scopeId","data-v-c3d3dc97"]]),G={class:"container"},J=h({__name:"PanelHeaderComponent",props:{title:{}},setup(l){return(t,u)=>(f(),g("div",G,[e("p",null,b(t.title),1)]))}}),Q=x(J,[["__scopeId","data-v-d2472ea7"]]),W={class:"container"},X=h({__name:"PanelView",setup(l){return(t,u)=>{const m=_("el-aside"),i=_("el-header"),n=_("RouterView"),p=_("el-main"),o=_("el-container");return f(),g("div",W,[s(o,null,{default:c(()=>[s(m,null,{default:c(()=>[s(F)]),_:1}),s(o,null,{default:c(()=>[s(i,null,{default:c(()=>[s(Q,{title:"INDUSTRY INTERNSHIP SYSTEM ADMINISTRATION"})]),_:1}),s(p,null,{default:c(()=>[s(n)]),_:1})]),_:1})]),_:1})])}}}),te=x(X,[["__scopeId","data-v-1a4aca83"]]);export{te as default};
