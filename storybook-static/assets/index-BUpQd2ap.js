import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as a,R as A}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-DDAiM4bh.js";import{T as E}from"./index-CHCaRuU-.js";import{B as _}from"./index-Do_UZMKO.js";const F=n.div`
  position: relative;
`,H=n(_)`
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
`,M=n.ul`
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
  font-family: Poppins, Helvetica, "sans-serif";
  font-size: 14px;
  z-index: 9999;
`,P=n.li`
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
`,G=n(E)`
  font-weight: ${e=>e.fontweightsection||"bold"};
`,J=({sections:e,onSelect:d,titledropdown:p,icon:l,bgcolor:c,hoverbgcolor:u,textcolor:m,widthbutton:g,borderbutton:f,paddingbutton:b,fontweightbutton:y,bgcolormenu:h,bordermenu:w,borderradiusmenu:q,borderradiusitem:x,fontweightsection:T,hoverbgcoloritem:v,widthmenu:$,paddingitem:D,paddingmenu:j,marginmenu:k,boxshadowbutton:S,...R})=>{const[o,z]=a.useState(!1),[O,B]=a.useState(""),i=()=>{z(!o)},C=r=>{B(r),d(r),i()};return t.jsxs(F,{...R,children:[t.jsx(H,{widthbutton:g,boxshadowbutton:S,fontweightbutton:y,paddingbutton:b,borderbutton:f,bgcolor:c,hoverbgcolor:u,textcolor:m,onClick:i,textbutton:O||p,icon:l}),o&&t.jsx(M,{onSelect:r=>console.log(r),bgcolormenu:h,borderradiusmenu:q,bordermenu:w,widthmenu:$,paddingmenu:j,marginmenu:k,children:e==null?void 0:e.map((r,I)=>t.jsxs(A.Fragment,{children:[t.jsx(G,{onSelect:()=>console.log(),fontweightsection:T,children:r.titlelabel}),r.options.map((s,N)=>t.jsx(P,{onSelect:()=>console.log(),borderradiusitem:x,hoverbgcoloritem:v,paddingitem:D,onClick:()=>C(s.value),children:s.label},N))]},I))})]})};J.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{sections:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  titlelabel?: string;\r
  options: Option[];\r
}`,signature:{properties:[{key:"titlelabel",value:{name:"string",required:!1}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]",required:!0}}]}}],raw:"Section[]"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},titledropdown:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},widthbutton:{required:!1,tsType:{name:"string"},description:""},borderbutton:{required:!1,tsType:{name:"string"},description:""},paddingbutton:{required:!1,tsType:{name:"string"},description:""},fontweightbutton:{required:!1,tsType:{name:"string"},description:""},fontweightsection:{required:!1,tsType:{name:"string"},description:""},bgcolormenu:{required:!1,tsType:{name:"string"},description:""},bordermenu:{required:!1,tsType:{name:"string"},description:""},marginmenu:{required:!1,tsType:{name:"string"},description:""},borderradiusmenu:{required:!1,tsType:{name:"string"},description:""},widthmenu:{required:!1,tsType:{name:"string"},description:""},paddingmenu:{required:!1,tsType:{name:"string"},description:""},borderradiusitem:{required:!1,tsType:{name:"string"},description:""},hoverbgcoloritem:{required:!1,tsType:{name:"string"},description:""},paddingitem:{required:!1,tsType:{name:"string"},description:""},boxshadowbutton:{required:!1,tsType:{name:"string"},description:""}}};export{J as D};
