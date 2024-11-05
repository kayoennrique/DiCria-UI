import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";import{d as o,Y as k}from"./styled-components.browser.esm-WJtJfqrr.js";import{I as R,a as z}from"./index-CQ6NM2Dv.js";const H=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>e.bgcolor};
  width: 100%;
`,E=o.div`
  width: ${e=>e.width};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`,L=o.div`
  background-color: ${e=>e.bgcolorheader};
  color: ${e=>e.textcolorheader};
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: ${e=>e.fontsizeheader};
  font-weight: ${e=>e.fontweightheader};
  font-family: ${e=>e.fontfamilyheader};
  cursor: pointer;

  &:hover {
    background: ${e=>e.bgcolorheaderhover};
    transition: 0.5s linear;
    color: ${e=>e.textcolorheaderhover};
  }
`,M=o.div`
  background: ${e=>e.bgcolorcontent};
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: ${e=>e.fontweightcontent};
  font-size: ${e=>e.fontsizecontent};
  font-family: ${e=>e.fontfamilycontent};
  color: ${e=>e.textcolorcontent};
`,N=({data:e,multiple:d,activeIndex:i,width:l,fontfamilyheader:f,fontfamilycontent:m,bgcolor:p,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:h,textcolorheaderhover:y,bgcolorcontent:b,fontsizecontent:T,fontsizeheader:q,fontweightheader:w,fontweightcontent:v,textcolorcontent:x,...A})=>{const[s,a]=c.useState([]),$=t=>{a(r=>d?r.includes(t)?r.filter(j=>j!==t):[...r,t]:r.includes(t)?[]:[t])};return c.useEffect(()=>{i!==void 0&&a([i])},[i]),n.jsx(k,{shouldForwardProp:t=>!["bgcolor","bgcolorheader","textcolorheader","fontsizeheader","fontweightheader","bgcolorcontent","fontfamilycontent","textcolorcontent","fontfamilyheader"].includes(t),children:n.jsx(H,{bgcolor:p,...A,children:e==null?void 0:e.map((t,r)=>n.jsxs(E,{width:l,children:[n.jsxs(L,{onClick:()=>$(r),fontfamilyheader:f,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:h,textcolorheaderhover:y,fontsizeheader:q,fontweightheader:w,children:[t.title,s.includes(r)?n.jsx(R,{}):n.jsx(z,{})]}),s.includes(r)&&n.jsx(M,{fontfamilycontent:m,bgcolorcontent:b,fontsizecontent:T,fontweightcontent:v,textcolorcontent:x,children:t.children})]},r))})})};N.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  id?: number;
  title: string;
  children: React.ReactNode;
  fontfamily?: string;
  fontfamilycontent?: string;
} & HTMLAttributes<HTMLDivElement>`,elements:[{name:"signature",type:"object",raw:`{
  id?: number;
  title: string;
  children: React.ReactNode;
  fontfamily?: string;
  fontfamilycontent?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"fontfamily",value:{name:"string",required:!1}},{key:"fontfamilycontent",value:{name:"string",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}]}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontfamilyheader:{required:!1,tsType:{name:"string"},description:""},fontfamilycontent:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},bgcolorheader:{required:!1,tsType:{name:"string"},description:""},textcolorheader:{required:!1,tsType:{name:"string"},description:""},bgcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},textcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},textcolorcontent:{required:!1,tsType:{name:"string"},description:""},bgcolorcontent:{required:!1,tsType:{name:"string"},description:""},fontsizecontent:{required:!1,tsType:{name:"string"},description:""},fontsizeheader:{required:!1,tsType:{name:"string"},description:""},fontweightheader:{required:!1,tsType:{name:"string"},description:""},fontweightcontent:{required:!1,tsType:{name:"string"},description:""}}};export{N as A};
