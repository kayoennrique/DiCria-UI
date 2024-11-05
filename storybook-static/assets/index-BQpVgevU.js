import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as P}from"./index-DJO9vBfz.js";import{d as g,Y as k}from"./styled-components.browser.esm-WJtJfqrr.js";const C=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,v=g.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  border-radius: ${e=>e.borderradius};
  background-color: ${e=>e.active?e.bgcolor:e.disablebgcolor};
  color: ${e=>e.active?e.activecolor:e.disablecolor};
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${e=>e.active?e.hoverbgcolor:e.disablehovercolor};
  }
`,V=({currentpage:e,totalpages:i,onpagechange:s,active:x,borderradius:r="",bgcolor:d="",activecolor:u="",hoverbgcolor:l="",disablebgcolor:c="",disablecolor:o="",disablehovercolor:m="",...f})=>{const[p,n]=P.useState(e);P.useEffect(()=>{n(e)},[e]);const q=t=>{n(t),s(t)},T=()=>{if(p>1){const t=p-1;n(t),s(t)}},h=()=>{if(p<i){const t=p+1;n(t),s(t)}},b=()=>{n(1),s(1)},j=()=>{n(i),s(i)};return a.jsx(k,{shouldForwardProp:t=>!["active","borderradius","bgcolor","activecolor","hoverbgcolor","disablecolor","disablebgcolor","disablehovercolor"].includes(t),children:a.jsxs(C,{children:[a.jsx(v,{onClick:b,disabled:e===1,active:!1,borderradius:r,bgcolor:d,activecolor:u,hoverbgcolor:l,disablecolor:o,disablebgcolor:c,disablehovercolor:m,...f,children:"<<"}),a.jsx(v,{onClick:T,disabled:e===1,active:!1,borderradius:r,bgcolor:d,activecolor:u,hoverbgcolor:l,disablecolor:o,disablebgcolor:c,disablehovercolor:m,...f,children:"<"}),[...Array(i)].map((t,y)=>a.jsx(v,{onClick:()=>q(y+1),active:p===y+1&&x,borderradius:r,bgcolor:d,activecolor:u,hoverbgcolor:l,disablecolor:o,disablebgcolor:c,disablehovercolor:m,...f,children:y+1},y)),a.jsx(v,{onClick:h,disabled:e===i,active:!1,borderradius:r,bgcolor:d,activecolor:u,hoverbgcolor:l,disablecolor:o,disablebgcolor:c,disablehovercolor:m,...f,children:">"}),a.jsx(v,{onClick:j,disabled:e===i,active:!1,borderradius:r,bgcolor:d,activecolor:u,hoverbgcolor:l,disablecolor:o,disablebgcolor:c,disablehovercolor:m,...f,children:">>"})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentpage:{required:!0,tsType:{name:"number"},description:""},totalpages:{required:!0,tsType:{name:"number"},description:""},onpagechange:{required:!0,tsType:{name:"signature",type:"function",raw:"(newPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"newPage"}],return:{name:"void"}}},description:""},updatecurrentpage:{required:!1,tsType:{name:"number"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},hoverbgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},activecolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disablecolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disablebgcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disablehovercolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},borderradius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{V as P};
