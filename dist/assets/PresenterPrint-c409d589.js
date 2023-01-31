import{f as d,h as _,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as N,ap as P,aq as k,_ as w}from"./nav-f5713874.js";import{N as V}from"./NoteViewer-4d9c19ed.js";import{u as j}from"./index-6fa239c8.js";const S={class:"m-4"},C={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:v(s(k))},[t("div",S,[t("div",C,[t("h1",L,o(s(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",H,[t("div",z,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),W=w(M,[["__file","/home/elnaddar/myPC/myPresentations/we school/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
