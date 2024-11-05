import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as a}from"./styled-components.browser.esm-WJtJfqrr.js";import{T as o}from"./index-BByzK5B4.js";const m=a.table`
  width: 100%;
  border-collapse: ${e=>e.$bordercollapse||"collapse"};
  background-color: ${e=>e.$bgcolor||"#F8FAFC"};

  tr:nth-child(even) {
    background-color: ${e=>e.$bgzebracolor};
  };

  th, td {  
    padding: ${e=>e.$paddingrows||"10px"};
  };

`,h=a.th`
    width: ${e=>e.$widthpercentage};
    text-align: ${e=>e.$aligncolumn};
    font-size: ${e=>e.$fontsizecolumn};
    background-color: ${e=>e.$bgcolorcolumn};
  
    span {
      color:  ${e=>e.$textcolorcolumn};
    };
`,w=a.td`
    text-align: ${e=>e.$alignrow};
    font-size: ${e=>e.$fontsizerow||".9em"};
    border-top: 1px solid #ebedf3;
`,f=({data:e,columns:i,bgzebracolor:s,bordercollapse:l,bgcolor:d,paddingrows:c,fontsizecolumn:g,fontsizerow:p,className:$,...u})=>t.jsxs(m,{$bgzebracolor:s,$bordercollapse:l,$bgcolor:d,$paddingrows:c,className:`internal-table ${$||""}`,...u,children:[t.jsx("thead",{children:t.jsx("tr",{children:i.map(r=>t.jsx(h,{$bgcolorcolumn:r==null?void 0:r.bgcolumncolor,$textcolorcolumn:r==null?void 0:r.textcolumncolor,$widthpercentage:r==null?void 0:r.widthpercentage,$aligncolumn:r==null?void 0:r.aligncolumn,$fontsizecolumn:g,children:t.jsx(o,{as:"span",children:r.header})},r.key))})}),t.jsx("tbody",{children:e.map((r,b)=>t.jsx("tr",{children:i.map((n,y)=>t.jsx(w,{$alignrow:n==null?void 0:n.alignrow,$fontsizerow:p,children:t.jsx(o,{as:"span",children:r[n.key]})},y))},b))})]});f.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  [key: string]: React.ReactNode;
}`,signature:{properties:[{key:{name:"string"},value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:`{
  [key: string]: React.ReactNode;
}[]`},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  header: React.ReactNode;
  bgcolumncolor?: string;
  textcolumncolor?: string;
  widthpercentage?: string;
  aligncolumn?: string;
  alignrow?: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"bgcolumncolor",value:{name:"string",required:!1}},{key:"textcolumncolor",value:{name:"string",required:!1}},{key:"widthpercentage",value:{name:"string",required:!1}},{key:"aligncolumn",value:{name:"string",required:!1}},{key:"alignrow",value:{name:"string",required:!1}}]}}],raw:`{
  key: string;
  header: React.ReactNode;
  bgcolumncolor?: string;
  textcolumncolor?: string;
  widthpercentage?: string;
  aligncolumn?: string;
  alignrow?: string;
}[]`},description:""},bgzebracolor:{required:!1,tsType:{name:"string"},description:""},bordercollapse:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},paddingrows:{required:!1,tsType:{name:"string"},description:""},fontsizecolumn:{required:!1,tsType:{name:"string"},description:""},fontsizerow:{required:!1,tsType:{name:"string"},description:""}}};export{f as T};
