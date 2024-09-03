import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as n}from"./index-RYns6xqu.js";import{d as r,Y as y}from"./styled-components.browser.esm-DDAiM4bh.js";const h=r.div`
  display: flex;
  flex-direction: column;
  font-family: Poppins, Helvetica, "sans-serif";
  align-items: ${e=>e.alignitems};
  color: ${e=>e.containertextcolor};
`,T=r.ul`
  display: flex;
  list-style: none;
  padding: 5px;
`,q=r.li`
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  cursor: pointer;
  background-color: ${e=>e.active?e.activebgcolor||"#2774b3":e.bgcolor||"#d6e0f7"};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid transparent;
  width: ${e=>e.width};
  height: ${e=>e.height};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.37);
  margin-left: 10px;
  margin-right: 10px;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;
  color: ${e=>e.active?"#FFF":e.textcolor||"#000"};

  &:hover {
    background-color: ${e=>e.active?e.activebgcolor||"#2774b3":e.hoverbgcolor||e.bgcolor||"#d6e0f7"};
    color: ${e=>e.active?"#FFF":e.textcolor||"#000"};
  }
`,j=r.div`
  padding: 1.875rem;
`,w=({tabs:e,bgcolor:s,activebgcolor:c,hoverbgcolor:l,containertextcolor:d,listitemtextcolor:p,width:g,height:u,alignitems:m,active:f=!0,...x})=>{const[a,b]=n.useState(0),[v,$]=n.useState(f);return t.jsx(y,{shouldForwardProp:i=>i!=="active",children:t.jsxs(h,{tabs:e,containertextcolor:d,alignitems:m,...x,children:[t.jsx(T,{children:e.map((i,o)=>t.jsx(q,{tabs:e,active:a===o&&v,bgcolor:s,activebgcolor:c,hoverbgcolor:l,textcolor:p,height:u,width:g,onClick:()=>b(o),children:i.title},o))}),t.jsx(j,{children:e[a].content})]})})};w.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  title: string;\r
  content: React.ReactNode;\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"Tab[]"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},activebgcolor:{required:!1,tsType:{name:"string"},description:""},hoverbgcolor:{required:!1,tsType:{name:"string"},description:""},containertextcolor:{required:!1,tsType:{name:"string"},description:""},listitemtextcolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},alignitems:{required:!1,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{w as T};
