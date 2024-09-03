import{j as t}from"./jsx-runtime-DEdD30eg.js";import{d as f,Y as x}from"./styled-components.browser.esm-DDAiM4bh.js";const h=f.button`
  text-decoration: ${e=>e.textdecoration};
  box-shadow: ${e=>e.boxshadowbutton};
  background-color: ${e=>e.bgcolor};
  padding: ${e=>e.paddingbutton||"15px 30px"};
  border: ${e=>e.borderbutton||"none"};
  border-radius: 0.5rem;
  transition: 0.3s;
  font-weight: ${e=>e.fontweightbutton};
  font-size: 18px;
  cursor: pointer;
  color: ${e=>e.textcolor};
  width: ${e=>e.widthbutton};

  &:hover {
    background-color: ${e=>e.hoverbgcolor};
    color: ${e=>e.textcolorhover};
  }
`,y=({textbutton:e,onClick:o,bgcolor:n,hoverbgcolor:i,textcolor:s,icon:r,widthbutton:d,borderbutton:a,paddingbutton:p,fontweightbutton:c,boxshadowbutton:u,textdecoration:l,textcolorhover:b,...g})=>t.jsx(x,{shouldForwardProp:m=>m!=="bgcolor",children:t.jsxs(h,{onClick:o,textdecoration:l,textcolor:s,textcolorhover:b,bgcolor:n,hoverbgcolor:i,boxshadowbutton:u,borderbutton:a,widthbutton:d,paddingbutton:p,fontweightbutton:c,...g,children:[r&&t.jsx("span",{children:r}),e]})});y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{fontweightbutton:{required:!1,tsType:{name:"string"},description:""},textbutton:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},textcolorhover:{required:!1,tsType:{name:"string"},description:""},textdecoration:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},boxshadowbutton:{required:!1,tsType:{name:"string"},description:""},borderbutton:{required:!1,tsType:{name:"string"},description:""},paddingbutton:{required:!1,tsType:{name:"string"},description:""},widthbutton:{required:!1,tsType:{name:"string"},description:""},isblock:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{y as B};
