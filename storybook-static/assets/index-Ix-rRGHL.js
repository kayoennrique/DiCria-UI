import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as t}from"./index-RYns6xqu.js";import{d as n}from"./styled-components.browser.esm-DDAiM4bh.js";const l=n.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
`,o=n.span`
  margin: 0 5px;
`,d=n.li`
  margin-right: 5px;
  font-family:  Poppins, Helvetica, "sans-serif";

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`,m=({items:a,...s})=>r.jsx(l,{children:r.jsx("ul",{...s,children:a.map((e,i)=>r.jsxs(t.Fragment,{children:[r.jsx(d,{children:e.link?r.jsx("a",{href:e.link,children:e.label}):e.label}),i<a.length-1&&r.jsx(o,{children:">"})]},i))})});m.__docgenInfo={description:"",methods:[],displayName:"BreadCrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label?: string; link?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"link",value:{name:"string",required:!1}}]}}],raw:"{ label?: string; link?: string }[]"},description:""}}};export{m as B};
