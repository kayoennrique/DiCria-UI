import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as n,Y as s}from"./styled-components.browser.esm-DDAiM4bh.js";const d=n.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`,o=n.div`
  position: relative;
  ${({size:t})=>{switch(t){case"sm":return"width: 50px; height: 18px; &:before{ width: 18px; height: 18px; left: 4px;}";case"md":return"width: 60px; height: 24px; &:before{ width: 24px; height: 24px; left: 6px;}";case"lg":return"width: 70px; height: 34px; &:before{ width: 34px; height: 34px; left: 8px;}";default:return"width: 60px; height: 24px; &:before{ width: 24px; height: 24px; left: 6px;}"}}}
  background: #0f172a;
  border-radius: 32px;
  padding: 5px;
  transition: 300ms all;
  &:before {
    padding: 1px;
    background-color: #e2e8f0;
    transition: 300ms all;
    content: "";
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    position: absolute;
    border-radius: 35px;
    top: 50%;
    transform: translate(0, -50%);
  }
`,l=n.input`
  opacity: 0;
  position: absolute;
  display: none;
  &:checked + ${o} {
    background: #e2e8f0;
    &:before {
      padding: 1px;
      background-color: #0f172a;
      background-position: center;
      background-size: 60%;
      background-repeat: no-repeat;
      transform: translate(30px, -50%);
    }
  }
`,c=({checked:t,icon:r,size:a,onToggle:i})=>e.jsx(s,{shouldForwardProp:p=>p!=="icon",children:e.jsxs(d,{children:[e.jsx(l,{checked:t,icon:r,type:"checkbox",size:a,onChange:i}),e.jsx(o,{size:a,icon:r})]})});c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!0,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}};export{c as T};
