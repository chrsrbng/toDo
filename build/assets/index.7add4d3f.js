var z=Object.defineProperty,P=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var x=(s,t,e)=>t in s?z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,b=(s,t)=>{for(var e in t||(t={}))M.call(t,e)&&x(s,e,t[e]);if(w)for(var e of w(t))F.call(t,e)&&x(s,e,t[e]);return s},C=(s,t)=>P(s,j(t));var c=(s,t,e)=>(x(s,typeof t!="symbol"?t+"":t,e),e);import{s as l,W as G}from"./styled-components.ecd3496b.js";import{a as m}from"./axios.0f25f9a8.js";import{r as u,a as K,b as N}from"./vendor.177a7b82.js";import{j as a,l as h,S as W,E as H,F as q,H as _}from"./@mui/icons-material.b7230a8d.js";import{T as J,I as T}from"./@mui/material.8dfb4b97.js";import"./@emotion/babel-plugin.c4bc78a9.js";import"./@emotion/styled.cbdd7690.js";import"./@emotion/react.83fa317e.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&p(f)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}};Q();const V=l.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". list .";
`,X=l.div`
  grid-area: list;
  padding-top: 50px;
  padding-bottom: 50px;
`,Y=l.div`
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas: 
    "card-head"
    "card-body";
  width: 100%;
  min-height: 550px;
  max-height: 650px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px
`,Z=l.div`
  grid-area: card-head;
  align-self: center;
  justify-self: center;
  font-size: 30px;
`,tt=l.div`
  grid-area: card-body;
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: 
    "action-section"
    "list-section";
`,et=l.div`
  grid-area: action-section;
  display: grid;
  grid-template-columns: 1fr auto;
`,ot=l.div`
  align-self: center;
`,it=l.div`
  grid-area: list-section;
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-auto-rows: minmax(auto, 50px);
  grid-row-gap: 5px;
  max-height: 500px;
  overflow-y: auto;
`,st=l.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`,dt=l.div`
  cursor: pointer;
  height: 100%;
  line-height: 3;
`,E="http://16.162.22.150:8080";class at{constructor(){c(this,"todoUrl");c(this,"addToDo",t=>m({method:"POST",url:`${this.todoUrl}/api/v1/todos`,data:t}).catch(e=>(e==null?void 0:e.message)||e));c(this,"getAllToDo",t=>m({method:"GET",url:`${this.todoUrl}/api/v1/todos`,params:{userId:t}}));c(this,"deleteToDo",t=>m({method:"POST",url:`${this.todoUrl}/api/v1/todos/deleteById`,params:{id:t}}));c(this,"updateById",t=>m({method:"POST",url:`${this.todoUrl}/api/v1/todos/updateById`,data:t}));this.todoUrl=E}}const g=new at;class rt{constructor(){c(this,"todoUrl");c(this,"getIp",()=>m({method:"GET",url:`${this.todoUrl}/api/v1/users/getIp`}).catch(t=>(t==null?void 0:t.message)||t));c(this,"addUserIp",t=>m({method:"POST",url:`${this.todoUrl}/api/v1/users`,data:{ipAddress:t}}).catch(e=>(e==null?void 0:e.message)||e));c(this,"getUserId",t=>m({method:"GET",url:`${this.todoUrl}/api/v1/users`,params:{ipAddress:t}}).catch(e=>(e==null?void 0:e.message)||e));this.todoUrl=E}}const v=new rt,nt=()=>{const[s,t]=u.exports.useState([]),[e,p]=u.exports.useState(""),[o,r]=u.exports.useState(!1),[f,D]=u.exports.useState(0),[y,A]=u.exports.useState({id:0,ipAddress:""}),L=async()=>{const d=(await v.getIp()).data.result.ip.split(":")[3];let n=await v.getUserId(d);n.data.result||(n=await v.addUserIp(d)),A(n.data.result)},I=u.exports.useCallback(async()=>{const i=await g.getAllToDo(y.id);if(i.data.result.length){const d=i.data.result.map(n=>({id:n.id,description:n.description}));t(d)}},[y.id]);u.exports.useEffect(()=>{L(),I()},[I]);const R=async i=>{const d=s.filter(n=>n.id!==i);await g.deleteToDo(i),t(d)},B=i=>{r(!0),D(i);const[d]=s.filter(n=>n.id===i);p(d.description)},k=i=>i.map(d=>h(st,{children:[a(dt,{children:d.description}),a(T,{disabled:o,color:"primary",onClick:()=>B(d.id),children:a(q,{color:o?"disabled":"warning",sx:{fontSize:20}})}),a(T,{disabled:o,color:"primary",onClick:()=>R(d.id),children:a(_,{color:o?"disabled":"error",sx:{fontSize:20}})})]},d.id)),U=async()=>{if(e){const i=[...s],d=await g.addToDo({userId:y.id,description:e});i.push({id:d.data.result.id,description:e}),t(i),p(""),r(!1)}},S=async i=>{if(e){let d=[...s];await g.updateById({id:i,description:e}),d=d.map(n=>n.id===i?C(b({},n),{description:e}):n),t(d),p(""),r(!1),D(0)}},$=i=>{i.keyCode===13&&(o?S(f):U(),p(""))};return a(V,{children:a(X,{children:h(Y,{children:[a(Z,{children:"ToDo List"}),h(tt,{children:[h(et,{children:[a(ot,{children:a(J,{fullWidth:!0,variant:"standard",size:"medium",color:"info",sx:{input:{color:"#5a5a5a"}},value:e,onChange:i=>p(i.target.value),onKeyDown:i=>$(i)})}),a(T,{color:"primary",onClick:()=>o?S(f):U(),children:o?a(W,{color:"primary",sx:{fontSize:35}}):a(H,{color:"primary",sx:{fontSize:35}})})]}),a(it,{children:k(s)})]})]})})})},lt=l.div`
  height: 100vh;
  background: #1e1f29;
`,ct=()=>a(lt,{children:a(nt,{})});var O,pt=K.exports;O=pt.createRoot;const ut=G`
    body {
        margin: 0;
        padding: 0;
        color: #5a5a5a;
        font-family: Montserrat, sans-serif
    }
`,mt=document.getElementById("root");O(mt).render(h(N.StrictMode,{children:[a(ut,{}),a(ct,{})]}));
