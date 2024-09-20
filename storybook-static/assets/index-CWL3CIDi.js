import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";import{d as i}from"./styled-components.browser.esm-DDAiM4bh.js";import{I as x,a as j}from"./index-ts0_E7E4.js";const R=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${e=>e.bgcolor};
  width: 100%;
`,H=i.div`
  width: ${e=>e.width};
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`,z=i.div`
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
`,E=i.div`
  background: ${e=>e.bgcolorcontent};
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  font-weight: ${e=>e.fontweightcontent};
  font-size: ${e=>e.fontsizecontent};
  font-family: ${e=>e.fontfamilycontent};
`,L=({data:e,multiple:c,activeIndex:o,width:l,fontfamilyheader:f,fontfamilycontent:m,bgcolor:p,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:h,textcolorheaderhover:y,bgcolorcontent:b,fontsizecontent:T,fontsizeheader:q,fontweightheader:v,fontweightcontent:w,...A})=>{const[s,a]=d.useState([]),$=t=>{a(r=>c?r.includes(t)?r.filter(k=>k!==t):[...r,t]:r.includes(t)?[]:[t])};return d.useEffect(()=>{o!==void 0&&a([o])},[o]),n.jsx(R,{bgcolor:p,...A,children:e==null?void 0:e.map((t,r)=>n.jsxs(H,{width:l,children:[n.jsxs(z,{onClick:()=>$(r),fontfamilyheader:f,bgcolorheader:u,textcolorheader:g,bgcolorheaderhover:h,textcolorheaderhover:y,fontsizeheader:q,fontweightheader:v,children:[t.title,s.includes(r)?n.jsx(x,{}):n.jsx(j,{})]}),s.includes(r)&&n.jsx(E,{fontfamilycontent:m,bgcolorcontent:b,fontsizecontent:T,fontweightcontent:w,children:t.children})]},r))})};L.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
  fontfamily?: string;\r
  fontfamilycontent?: string;\r
} & HTMLAttributes<HTMLDivElement>`,elements:[{name:"signature",type:"object",raw:`{\r
  id?: number;\r
  title: string;\r
  children: React.ReactNode;\r
  fontfamily?: string;\r
  fontfamilycontent?: string;\r
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"fontfamily",value:{name:"string",required:!1}},{key:"fontfamilycontent",value:{name:"string",required:!1}}]}},{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"}]}],raw:"AccordionItem[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},activeIndex:{required:!1,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"string"},description:""},fontfamilyheader:{required:!1,tsType:{name:"string"},description:""},fontfamilycontent:{required:!1,tsType:{name:"string"},description:""},bgcolor:{required:!1,tsType:{name:"string"},description:""},bgcolorheader:{required:!1,tsType:{name:"string"},description:""},textcolorheader:{required:!1,tsType:{name:"string"},description:""},bgcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},textcolorheaderhover:{required:!1,tsType:{name:"string"},description:""},bgcolorcontent:{required:!1,tsType:{name:"string"},description:""},fontsizecontent:{required:!1,tsType:{name:"string"},description:""},fontsizeheader:{required:!1,tsType:{name:"string"},description:""},fontweightheader:{required:!1,tsType:{name:"string"},description:""},fontweightcontent:{required:!1,tsType:{name:"string"},description:""}}};export{L as A};
