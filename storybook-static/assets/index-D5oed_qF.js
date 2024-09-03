import{j as r}from"./jsx-runtime-DEdD30eg.js";import{S as p}from"./index-rStkvsg0.js";import{T as i}from"./index-CHCaRuU-.js";import{d as t}from"./styled-components.browser.esm-DDAiM4bh.js";const T=t.div`
    background-color: ${e=>e.bgcolor};
    color: ${e=>e.color};
    border-radius: ${e=>e.borderradius};
    border: 1px solid #6284FD;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: ${e=>e.padding};
    width: ${e=>e.width};
    display: flex;
    flex-direction: column;
    align-items: center;

    li {

        }

`,b=t.ul`
    list-style: none;
    margin: 12px 0 12px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`,j=t.li`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        line-height: 1.5;
        margin-bottom: 4px;

        p {
            margin-left: 16px;
        }
`,w=({cards:e,title:l,footer:c,bgcolor:m,titlecolor:s,textcolor:g,width:u,padding:x,borderradius:f,sizetitle:n,sizetext:y,serparatorheight:a,serparatorwidth:o,serparatorcolor:d})=>r.jsxs(T,{width:u,borderradius:f,padding:x,bgcolor:m,cards:e,children:[r.jsx(i,{as:"h1",size:n,color:s,children:l}),r.jsx(p,{bgcolor:d,height:a,width:o}),r.jsx(b,{children:e.map((h,q)=>r.jsx(j,{children:r.jsx(i,{as:"p",size:y,color:g,children:h.text})},q))}),r.jsx(p,{bgcolor:d,height:a,width:o}),r.jsx(i,{as:"h1",size:n,color:s,children:c})]});w.__docgenInfo={description:"",methods:[],displayName:"Card",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    text: string\r
    content: React.ReactNode;\r
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"Card[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},titlecolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},sizetitle:{required:!1,tsType:{name:"string"},description:""},sizetext:{required:!1,tsType:{name:"string"},description:""},serparatorheight:{required:!1,tsType:{name:"string"},description:""},serparatorwidth:{required:!1,tsType:{name:"string"},description:""},serparatorcolor:{required:!1,tsType:{name:"string"},description:""}}};export{w as C};
