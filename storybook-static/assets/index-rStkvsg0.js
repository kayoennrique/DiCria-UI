import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as i,Y as c}from"./styled-components.browser.esm-DDAiM4bh.js";const p=i.div`
  display: flex;
  align-items: center;
  width: ${e=>e.width||"100%"};
`,s=i.div`
  flex:50%;
  height: ${e=>e.height||"1px"};
  background-color: ${e=>e.bgcolor==="light"?"#eee":e.bgcolor==="dark"?"#555":e.bgcolor==="black"?"#000":e.bgcolor||"#000"};
`,g=i.div`
  font-family: Poppins, Helvetica, "sans-serif";
  padding: 0 10px; 
  color: ${e=>e.color||"inherit"}; 
  white-space: nowrap;
`,m=({width:e,height:a,bgcolor:o,children:n,contentcolor:l,...t})=>r.jsx(c,{shouldForwardProp:d=>d!=="bgcolor",children:r.jsxs(p,{width:e,children:[r.jsx(s,{height:a,bgcolor:o,...t}),n&&r.jsx(g,{color:l,...t,children:n}),r.jsx(s,{height:a,bgcolor:o,...t})]})});m.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'black' | string",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'black'"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentcolor:{required:!1,tsType:{name:"string"},description:""}}};export{m as S};
