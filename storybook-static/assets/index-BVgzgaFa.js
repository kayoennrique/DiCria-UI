import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as a,R as E}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-DDAiM4bh.js";import{T as _}from"./index-BtBhN9iG.js";import{B as F}from"./index-Do_UZMKO.js";const M=n.div`
  position: relative;
`,G=n(F)`
  display: flex;
  align-items: center;
  box-shadow: ${e=>e.boxshadowbutton||"none"};
  border: ${e=>e.borderbutton||"1px solid transparent"};
  background-color: ${e=>e.bgcolor||"#ececec"};
  color: ${e=>e.textcolor||"#000"};
  padding: ${e=>e.paddingbutton||".95rem"};
  font-weight: ${e=>e.fontweightbutton};
  font-size: 14px;
  width: ${e=>e.widthbutton||"31.5rem"};

  &:hover {
    background-color: ${e=>e.hoverbgcolor||"secondary"};
    color: ${e=>e.textcolor||"secondary"};
    font-weight: bold;
    font-size: 16px;
  }

  svg {
    padding-top: 0.375rem;
    padding-right: 1rem;
  }
`,H=n.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${e=>e.bgcolormenu||"#fff"};
  border: ${e=>e.bordermenu||"1px solid transparent"};
  list-style: none;
  padding: ${e=>e.paddingmenu||"0"};
  margin: ${e=>e.marginmenu||"0"};
  width: ${e=>e.widthmenu||"31rem"};
  border-radius: ${e=>e.borderradiusmenu||".5rem"};
  font-family: ${e=>e.fontfamily};
  font-size: 14px;
  z-index: 9999;
`,J=n.li`
  padding: ${e=>e.borderradiusitem||".95rem"};
  cursor: pointer;
  border-radius: ${e=>e.borderradiusitem||".5rem"};
  font-size: 14px;

  &:hover {
    background-color: ${e=>e.hoverbgcoloritem||"#f0f0f0"};
    color: #2774b3;
    font-weight: bold;
    font-size: 16px;
  }
`,K=n(_)`
  font-weight: ${e=>e.fontweightsection||"bold"};
`,L=({sections:e,onSelect:d,titledropdown:p,icon:l,bgcolor:c,hoverbgcolor:u,textcolor:m,widthbutton:g,borderbutton:f,paddingbutton:b,fontweightbutton:y,bgcolormenu:h,bordermenu:w,borderradiusmenu:q,borderradiusitem:x,fontweightsection:T,hoverbgcoloritem:$,widthmenu:v,paddingitem:D,paddingmenu:j,marginmenu:k,boxshadowbutton:S,fontfamily:R,...z})=>{const[o,O]=a.useState(!1),[B,C]=a.useState(""),i=()=>{O(!o)},I=r=>{C(r),d(r),i()};return t.jsxs(M,{...z,children:[t.jsx(G,{widthbutton:g,boxshadowbutton:S,fontweightbutton:y,paddingbutton:b,borderbutton:f,bgcolor:c,hoverbgcolor:u,textcolor:m,onClick:i,textbutton:B||p,icon:l}),o&&t.jsx(H,{onSelect:r=>console.log(r),bgcolormenu:h,borderradiusmenu:q,bordermenu:w,widthmenu:v,paddingmenu:j,marginmenu:k,fontfamily:R,children:e==null?void 0:e.map((r,N)=>t.jsxs(E.Fragment,{children:[t.jsx(K,{onSelect:()=>console.log(),fontweightsection:T,children:r.titlelabel}),r.options.map((s,A)=>t.jsx(J,{onSelect:()=>console.log(),borderradiusitem:x,hoverbgcoloritem:$,paddingitem:D,onClick:()=>I(s.value),children:s.label},A))]},N))})]})};L.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{sections:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  titlelabel?: string;\r
  options: Option[];\r
}`,signature:{properties:[{key:"titlelabel",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}}]}}],raw:"Section[]"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},titledropdown:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},widthbutton:{required:!1,tsType:{name:"string"},description:""},borderbutton:{required:!1,tsType:{name:"string"},description:""},paddingbutton:{required:!1,tsType:{name:"string"},description:""},fontweightbutton:{required:!1,tsType:{name:"string"},description:""},fontweightsection:{required:!1,tsType:{name:"string"},description:""},bgcolormenu:{required:!1,tsType:{name:"string"},description:""},bordermenu:{required:!1,tsType:{name:"string"},description:""},marginmenu:{required:!1,tsType:{name:"string"},description:""},borderradiusmenu:{required:!1,tsType:{name:"string"},description:""},widthmenu:{required:!1,tsType:{name:"string"},description:""},paddingmenu:{required:!1,tsType:{name:"string"},description:""},borderradiusitem:{required:!1,tsType:{name:"string"},description:""},hoverbgcoloritem:{required:!1,tsType:{name:"string"},description:""},paddingitem:{required:!1,tsType:{name:"string"},description:""},boxshadowbutton:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""}}};export{L as D};
