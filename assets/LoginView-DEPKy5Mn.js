import{_ as V}from"./Industry Internship System Logo-DqGK1Jny.js";import{f as y,g as p,h as v,o as x,c as I,b as e,w as t,l as N,r as o,d as i,a as d,p as T,e as k,_ as S}from"./index-Cx34uRMX.js";const E=a=>(T("data-v-703a94d8"),a=a(),k(),a),L={class:"container"},q=E(()=>d("div",{style:{display:"flex","justify-content":"center"}},[d("img",{src:V,class:"industry-internship-system-logo"})],-1)),B={style:{"text-align":"center"}},C=y({__name:"LoginView",setup(a){const m=N("$router"),s=p({email:"",username:"",password:""}),u=p({email:[{required:!0,message:"This field is required",trigger:"blur"},{type:"email",message:"Invalid email address",trigger:"blur"}],password:[{required:!0,message:"This field is requried",trigger:"blur"}]}),_=v("top"),f=()=>{localStorage.setItem("authToken","TESTJSONWEBTOKEN123"),m.push("/student/home")};return(R,l)=>{const c=o("el-input"),r=o("el-form-item"),g=o("el-button"),w=o("RouterLink"),h=o("el-text"),b=o("el-form");return x(),I("div",L,[e(b,{model:s,rules:u,"label-width":"auto",class:"form","label-position":_.value,"status-icon":""},{default:t(()=>[q,e(r,{label:"Email / Username",class:"mt-2",prop:"email"},{default:t(()=>[e(c,{modelValue:s.email,"onUpdate:modelValue":l[0]||(l[0]=n=>s.email=n),clearable:"",placeholder:"id@student.wintec.ac.nz"},null,8,["modelValue"])]),_:1}),e(r,{label:"Password",prop:"password"},{default:t(()=>[e(c,{modelValue:s.password,"onUpdate:modelValue":l[1]||(l[1]=n=>s.password=n),type:"password",clearable:"",placeholder:"******","show-password":""},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(g,{type:"primary",onClick:f},{default:t(()=>[i("Log In")]),_:1})]),_:1}),d("div",B,[e(h,{size:"small"},{default:t(()=>[i("No account? "),e(w,{to:"/registration"},{default:t(()=>[i("Register Now ")]),_:1})]),_:1})])]),_:1},8,["model","rules","label-position"])])}}}),z=S(C,[["__scopeId","data-v-703a94d8"]]);export{z as default};
