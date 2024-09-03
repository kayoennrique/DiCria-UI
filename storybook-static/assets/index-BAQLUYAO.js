import{j as r}from"./jsx-runtime-DEdD30eg.js";import{d as a}from"./styled-components.browser.esm-DDAiM4bh.js";const l=a.div`
    width: ${e=>e.width};
    background-color: ${e=>e.mode==="light"?"#f0f0f0":"#333"};
    border-radius: ${e=>e.borderradius};
    overflow: hidden;
`,u=a.div`
    height: ${e=>e.height};
    background-color: ${e=>e.backgroundcolor};
    width: ${e=>e.progress}%;
    transition: width 0.5s ease-in-out;
`,n=({progress:e=50,backgroundcolor:s="",width:t="",height:d="",borderradius:i="",mode:o="light"})=>r.jsx(l,{width:t,mode:o,borderradius:i,children:r.jsx(u,{height:d,backgroundcolor:s,progress:e})});n.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{progress:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},backgroundcolor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},borderradius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:'"light"',computed:!1}}}};export{n as P};
