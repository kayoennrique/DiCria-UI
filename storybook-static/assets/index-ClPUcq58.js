import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{S as p}from"./index-CnQs79DV.js";import{T as i}from"./index-BYyzhH01.js";import{d as t}from"./styled-components.browser.esm-WJtJfqrr.js";const C=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${e=>e.bgcolor};
    color: ${e=>e.color};
    width: ${e=>e.width};
    height: ${e=>e.height};
    border: ${e=>e.border};
    border-radius: ${e=>e.borderradius};
    box-shadow: ${e=>e.boxshadow};
    padding: ${e=>e.padding};
`,$=t.ul`
    list-style: none;
    margin: 12px 0 12px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`,R=t.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    line-height: 1.5;
    margin-bottom: 4px;

    p {
        margin-left: 16px;
    }
`,z=({cards:e,title:c,footer:l,bgcolor:g,titlecolor:s,textcolor:m,width:u,height:h,padding:f,borderradius:x,sizetitle:n,sizetext:y,serparatorheight:a,serparatorwidth:o,serparatorcolor:d,border:q,boxshadow:T,...b})=>r.jsxs(C,{width:u,height:h,borderradius:x,padding:f,bgcolor:g,cards:e,border:q,boxshadow:T,...b,children:[r.jsx(i,{as:"h1",size:n,color:s,children:c}),r.jsx(p,{bgcolor:d,height:a,width:o}),r.jsx($,{children:e.map((j,w)=>r.jsx(R,{children:r.jsx(i,{as:"p",size:y,color:m,children:j.text})},w))}),r.jsx(p,{bgcolor:d,height:a,width:o}),r.jsx(i,{as:"h1",size:n,color:s,children:l})]});z.__docgenInfo={description:"",methods:[],displayName:"Card",props:{cards:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    text: string;
    content: React.ReactNode;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"Card[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},titlecolor:{required:!1,tsType:{name:"string"},description:""},textcolor:{required:!1,tsType:{name:"string"},description:""},sizetitle:{required:!1,tsType:{name:"string"},description:""},sizetext:{required:!1,tsType:{name:"string"},description:""},serparatorheight:{required:!1,tsType:{name:"string"},description:""},serparatorwidth:{required:!1,tsType:{name:"string"},description:""},serparatorcolor:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""},boxshadow:{required:!1,tsType:{name:"string"},description:""}}};export{z as C};
