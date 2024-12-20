import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import"./index-B4P8K4zL.js";import"./index-CTFWXYT3.js";import{B}from"./index-D9A3qrMb.js";import"./index-ClPUcq58.js";import"./index-C_6hxVWn.js";import"./index-DpSpddRp.js";import"./index-in3YRIMZ.js";import"./index-ClYpoYib.js";import"./index-B1QGnRxa.js";import"./index-DD01P3jY.js";import"./index-Da-YRj8H.js";import"./index-csVoqfOK.js";import"./index-DTPbWT_0.js";import"./index-BQpVgevU.js";import"./index-CK7-9uwa.js";import{S as re}from"./index-CnQs79DV.js";import"./index-B28x1dX0.js";import"./index-Btswmu1E.js";import"./index-D_l-ituu.js";import"./index-CxT8UupT.js";import"./index-CENlFXLk.js";import"./index-B_8KnD8k.js";import{T as S}from"./index-BYyzhH01.js";import{d as n,Y as ie}from"./styled-components.browser.esm-WJtJfqrr.js";import"./index-DJO9vBfz.js";import"./index-CQ6NM2Dv.js";import"./iconBase-DNSKKw1X.js";import"./index-CcZkhzg9.js";const te=n.div`
  display: flex;
  flex-direction: column;
  width: ${r=>r.width};
  height: ${r=>r.height};
  padding: ${r=>r.padding};
  background-color: ${r=>r.backgroundcolor};
  border-radius: ${r=>r.borderradius};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.178);
  font-family: ${r=>r.fontfamily};
`,oe=n.div`
  display: flex;
  margin-top: ${r=>r.margintop};
  justify-content: ${r=>r.justifycontent};
  flex-direction: ${r=>r.flexdirection};
  gap: ${r=>r.gap};
  align-items: ${r=>r.alignitems};
`,ne=n.div`
  margin: 0.5rem 0 0.5rem 0;
`,z=({maintext:r,title:A,backgroundcolor:_,borderradius:F,height:Y,padding:H,width:I,buttons:e,sizetext:N,sizetitle:O,textcolorcontainer:R,titlecolor:G,separatorcolor:J,separatorheight:K,separatorwidth:L,flexdirection:M,alignitems:Q,fontfamily:U,gap:V,onClose:W,justifycontent:X,margintop:Z,...ee})=>{var a,d,l,c,g,s,p,m,f,u,x,y,h,v,q,k,w,b,T,j,C,$;return i.jsx(ie,{shouldForwardProp:t=>!["backgroundcolor","borderradius","height","padding","width"].includes(t),children:i.jsxs(te,{backgroundcolor:_,borderradius:F,height:Y,fontfamily:U,padding:H,width:I,onClose:W,...ee,children:[i.jsxs(ne,{children:[i.jsx(S,{as:"h1",size:O,color:G,children:A}),i.jsx(re,{bgcolor:J,height:K,width:L}),i.jsx(S,{as:"p",size:N,color:R,children:r})]}),i.jsxs(oe,{flexdirection:M,alignitems:Q,gap:V,justifycontent:X,margintop:Z,children:[i.jsx(B,{textbutton:(a=e==null?void 0:e.confirmbutton)==null?void 0:a.textbutton,onClick:()=>{var t;return(t=e==null?void 0:e.confirmbutton)==null?void 0:t.onClick()},textdecoration:(d=e==null?void 0:e.confirmbutton)==null?void 0:d.textdecoration,textcolor:(l=e==null?void 0:e.confirmbutton)==null?void 0:l.textcolor,bgcolor:(c=e==null?void 0:e.confirmbutton)==null?void 0:c.bgcolor,hoverbgcolor:(g=e==null?void 0:e.confirmbutton)==null?void 0:g.hoverbgcolor,boxshadowbutton:(s=e==null?void 0:e.confirmbutton)==null?void 0:s.boxshadowbutton,widthbutton:(p=e==null?void 0:e.confirmbutton)==null?void 0:p.widthbutton,paddingbutton:(m=e==null?void 0:e.confirmbutton)==null?void 0:m.paddingbutton,borderbutton:(f=e==null?void 0:e.confirmbutton)==null?void 0:f.borderbutton,textcolorhover:(u=e==null?void 0:e.confirmbutton)==null?void 0:u.textcolorhover,fontweightbutton:(x=e==null?void 0:e.confirmbutton)==null?void 0:x.fontweightbutton}),i.jsx(B,{textbutton:(y=e==null?void 0:e.cancelbutton)==null?void 0:y.textbutton,onClick:()=>{var t;return(t=e==null?void 0:e.cancelbutton)==null?void 0:t.onClick()},textdecoration:(h=e==null?void 0:e.cancelbutton)==null?void 0:h.textdecoration,textcolor:(v=e==null?void 0:e.cancelbutton)==null?void 0:v.textcolor,bgcolor:(q=e==null?void 0:e.cancelbutton)==null?void 0:q.bgcolor,hoverbgcolor:(k=e==null?void 0:e.cancelbutton)==null?void 0:k.hoverbgcolor,boxshadowbutton:(w=e==null?void 0:e.cancelbutton)==null?void 0:w.boxshadowbutton,widthbutton:(b=e==null?void 0:e.cancelbutton)==null?void 0:b.widthbutton,paddingbutton:(T=e==null?void 0:e.cancelbutton)==null?void 0:T.paddingbutton,borderbutton:(j=e==null?void 0:e.cancelbutton)==null?void 0:j.borderbutton,textcolorhover:(C=e==null?void 0:e.cancelbutton)==null?void 0:C.textcolorhover,fontweightbutton:($=e==null?void 0:e.cancelbutton)==null?void 0:$.fontweightbutton})]})]})})};z.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{maintext:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  confirmbutton?: ButtonProps;
  cancelbutton?: ButtonProps;
}`,signature:{properties:[{key:"confirmbutton",value:{name:"signature",type:"object",raw:`{
  textdecoration?: string;
  textcolor?: string;
  textcolorhover?: string;
  bgcolor?: string;
  hoverbgcolor?: string;
  boxshadowbutton?: string;
  textbutton: string;
  widthbutton?: string;
  borderbutton?: string;
  fontweightbutton?: string;
  paddingbutton?: string;
  onClick: () => void;
}`,signature:{properties:[{key:"textdecoration",value:{name:"string",required:!1}},{key:"textcolor",value:{name:"string",required:!1}},{key:"textcolorhover",value:{name:"string",required:!1}},{key:"bgcolor",value:{name:"string",required:!1}},{key:"hoverbgcolor",value:{name:"string",required:!1}},{key:"boxshadowbutton",value:{name:"string",required:!1}},{key:"textbutton",value:{name:"string",required:!0}},{key:"widthbutton",value:{name:"string",required:!1}},{key:"borderbutton",value:{name:"string",required:!1}},{key:"fontweightbutton",value:{name:"string",required:!1}},{key:"paddingbutton",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}},{key:"cancelbutton",value:{name:"signature",type:"object",raw:`{
  textdecoration?: string;
  textcolor?: string;
  textcolorhover?: string;
  bgcolor?: string;
  hoverbgcolor?: string;
  boxshadowbutton?: string;
  textbutton: string;
  widthbutton?: string;
  borderbutton?: string;
  fontweightbutton?: string;
  paddingbutton?: string;
  onClick: () => void;
}`,signature:{properties:[{key:"textdecoration",value:{name:"string",required:!1}},{key:"textcolor",value:{name:"string",required:!1}},{key:"textcolorhover",value:{name:"string",required:!1}},{key:"bgcolor",value:{name:"string",required:!1}},{key:"hoverbgcolor",value:{name:"string",required:!1}},{key:"boxshadowbutton",value:{name:"string",required:!1}},{key:"textbutton",value:{name:"string",required:!0}},{key:"widthbutton",value:{name:"string",required:!1}},{key:"borderbutton",value:{name:"string",required:!1}},{key:"fontweightbutton",value:{name:"string",required:!1}},{key:"paddingbutton",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}}]}},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},backgroundcolor:{required:!1,tsType:{name:"string"},description:""},sizetitle:{required:!1,tsType:{name:"string"},description:""},sizetext:{required:!1,tsType:{name:"string"},description:""},titlecolor:{required:!1,tsType:{name:"string"},description:""},textcolorcontainer:{required:!1,tsType:{name:"string"},description:""},separatorcolor:{required:!1,tsType:{name:"string"},description:""},separatorheight:{required:!1,tsType:{name:"string"},description:""},separatorwidth:{required:!1,tsType:{name:"string"},description:""},flexdirection:{required:!1,tsType:{name:"string"},description:""},alignitems:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},gap:{required:!1,tsType:{name:"string"},description:""},justifycontent:{required:!1,tsType:{name:"string"},description:""},margintop:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""}}};const Fe={title:"Design System/AlertDialog",component:z,argTypes:{maintext:{type:"string"},title:{type:"string"},textcolorcontainer:{control:"color"},flexdirection:{type:"string"},gap:{type:"string"},alignitems:{type:"string"},onClose:{action:"closed"},justifycontent:{type:"string"},margintop:{type:"string"},fontfamily:{type:"string"}},tags:["autodocs"]},ae={confirmbutton:{bgcolor:"#2774b3",textbutton:"Confirmar",textdecoration:"none",textcolor:"#fff",hoverbgcolor:"#fff",textcolorhover:"#2774b3",boxshadowbutton:"0px 2px 5px rgba(0, 0, 0, 0.37)",onClick:()=>console.log("Confirm Button")},cancelbutton:{bgcolor:"transparent",textbutton:"Cancelar",textdecoration:"underline",textcolor:"#000",textcolorhover:"#2774b3",boxshadowbutton:"none",hoverbgcolor:"none",onClick:()=>console.log("Cancel Button")}},o={args:{buttons:ae,backgroundcolor:"#E2E8F0",height:"180px",width:"50%",padding:"20px",borderradius:".5rem",margintop:"1rem",gap:".5rem",justifycontent:"flex-end"}};var D,E,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    buttons: buttonsConfig,
    backgroundcolor: "#E2E8F0",
    height: "180px",
    width: "50%",
    padding: "20px",
    borderradius: ".5rem",
    margintop: "1rem",
    gap: ".5rem",
    justifycontent: "flex-end"
  }
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const Ye=["Primary"];export{o as Primary,Ye as __namedExportsOrder,Fe as default};
