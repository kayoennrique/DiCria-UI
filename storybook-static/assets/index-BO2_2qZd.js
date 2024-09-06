import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{d as r,Y as w}from"./styled-components.browser.esm-DDAiM4bh.js";import{T as m}from"./index-BtBhN9iG.js";import{a as R}from"./index-BFmb1hA7.js";import{S as C}from"./index-B62WqSMJ.js";const $=r.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${e=>e.bgcolor};
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 300px;
    height: auto;
    max-height: 125px;
`,k=r.div`
    margin-right: 0.5rem;
    color: ${e=>e.coloricon};
`,p=r(m)`
    color: ${e=>e.colortext};
`,E=r.div`
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;

    &:hover {
        color: gray;
    }
`,S=r(R)`
    width: 20px;
    height: 20px;
    color: ${e=>e.colorcloseicon};

    &:hover {
        color: ${e=>e.hovercolorcloseicon};
    }
`,I=r(m)`
    display: flex;
    align-items: center;
    color: ${e=>e.colortitle};
`,N=r(C)`
    background-color: ${e=>e.colorseparator};
`,F=({title:e,message:u,bgcolor:f,icon:n,color:a,coloricon:g,colortext:c,colortitle:x,colorcloseicon:h,hovercolorcloseicon:y,colorseparator:T,showTitle:b,showSeparator:v})=>{const[j,l]=i.useState(!0),t=i.useRef(null),q=()=>{l(!1)},d=s=>{t.current&&!t.current.contains(s.target)&&l(!1)};return i.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]),j?o.jsx(w,{shouldForwardProp:s=>!["bgcolor"].includes(s),children:o.jsxs($,{ref:t,bgcolor:f,children:[o.jsxs(I,{colortitle:x,children:[b&&o.jsxs(o.Fragment,{children:[n&&o.jsx(k,{coloricon:g,children:n}),e,o.jsx(p,{colortext:c,color:a})]}),o.jsxs(E,{onClick:q,children:[o.jsx(S,{hovercolorcloseicon:y,colorcloseicon:h})," "]})]}),v&&o.jsx(N,{colorseparator:T}),o.jsx(p,{colortext:c,color:a,children:u})]})}):null};F.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{bgcolor:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},coloricon:{required:!1,tsType:{name:"string"},description:""},colortext:{required:!1,tsType:{name:"string"},description:""},colortitle:{required:!1,tsType:{name:"string"},description:""},colorcloseicon:{required:!1,tsType:{name:"string"},description:""},hovercolorcloseicon:{required:!1,tsType:{name:"string"},description:""},colorseparator:{required:!1,tsType:{name:"string"},description:""},showTitle:{required:!1,tsType:{name:"boolean"},description:""},showSeparator:{required:!1,tsType:{name:"boolean"},description:""}}};export{F as T};
