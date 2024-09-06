import{j as c}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{I as io,a as co}from"./index-ts0_E7E4.js";import{I as ao}from"./index-CKR8oQ-q.js";import{T as so}from"./index-DuTtDqR-.js";import{F as mo}from"./index-BFmb1hA7.js";import{d as a}from"./styled-components.browser.esm-DDAiM4bh.js";const fo=a.div`
  width: ${r=>r.containerwidth||"12.5rem"};
  background-color: ${r=>r.containebgcolor};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,lo=a.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  gap: 0.25rem;

  &:hover {
    border: 0.0775rem solid #333333;
    border-radius: 0.5rem;
  }

  input {
    padding-left: ${r=>r.paddingleft||"1rem"};
  }
`,to=a(ao)`
  background-color: ${r=>r.backgroundcolor||"transparent"};
  color: ${r=>r.color};
  border-radius: ${r=>r.borderradius||"0.5rem"};
  padding: ${r=>r.padding||"0.5rem 1rem"};
  padding-left: 4rem;
  border: ${r=>r.border||"none"};
  width: ${r=>r.width||"100%"};
  outline: ${r=>r.outlineinput||"none"};

  &:focus {
    outline: ${r=>r.outlinefocus||"none"};
  }
`,bo=a(so)`
  justify-content: center;
  align-items: center;
  display: ${r=>r.display||"flex"};
  font-weight: ${r=>r.fontweight};
  font-size: ${r=>r.fontsizetag||"12px"};
  font-family: ${r=>r.fontfamily};
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  width: ${r=>r.width||"6rem"};
  height: ${r=>r.height||"1.5rem"};
  padding: ${r=>r.padding};
  background-color: ${r=>r.bgcolor||"#000"};
  color: ${r=>r.textcolor||"#333333"};
  margin-left: 0.5rem;
  padding-left: 0.5rem;

  &:hover {
    border: none;
  }

  .remove-button {
    display: flex;
    font-size: 13px;
    margin-left: ${r=>r.marginleftremovebutton||"auto"};
    margin-right: 0.25rem;
    color: #333333;

    &:hover {
      background-color: ${r=>r.hoverbgcolorremovebutton||"red"};
      color: white;
      border-radius: 0.25rem;
    }
  }
`,uo=a.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  cursor: default;
  display: flex;
  align-items: center;
  color: #cccccc;
  font-size: ${r=>r.fontsizeclearall||"16px"};
`,ho=a(mo)`
  margin-right: 2.65rem;
  transition: 0.2s;

  &:hover {
    color: #2774b3;
  }
`,po=a.div`
  position: absolute;
  right: 1.875rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 90%;
  background-color: #ccc;
`,xo=a.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.25rem;
  cursor: default;
  transition: 0.5s;
  color: #cccccc;

  &:hover {
    color: #2774b3;
  }
`,wo=a.ul`
  position: absolute;
  width: 100%;
  max-height: 9.375rem;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 9999;
  border-radius: 0.5rem;

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 0.5rem; /* Largura da barra de rolagem */
  }

  /* Estilizando o polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #bbb; /* Cor do polegar */
    border-radius: 0.5rem; /* Bordas arredondadas do polegar */
  }

  /* Mudando a cor da barra de rolagem quando o mouse está sobre ela */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999; /* Cor do polegar quando hover */
  }

  /* Estilizando a borda da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
  }
`,G=a.li`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
    color: #2774b3;
    font-weight: bold;
    font-size: 16px;
  }
`,go=({options:r,placeholder:H,containerwidth:J,containebgcolor:K,icon:Q,inputstyled:e,tagstyled:o,hideinputonselect:V,fontsizeclearall:X,...Z})=>{var k,$,C,T,I,j,z,q,S,L;const[h,w]=l.useState(""),[b,u]=l.useState(r),[s,p]=l.useState([]),[g,t]=l.useState(!1),d=l.useRef(null),x=r,y=n=>{const i=n.target.value;w(i),u(x.filter(m=>m.toLowerCase().includes(i.toLowerCase())))},oo=n=>{s.includes(n)||p([...s,n]),w(""),t(!1),u(b.filter(i=>i!==n))},ro=n=>{p(s.filter(f=>f!==n));const i=[...b],m=x.indexOf(n);i.splice(m,0,n),u(i.filter(f=>f.toLowerCase().includes(h.toLowerCase()))),t(!1)},eo=()=>{p([]),u(x.filter(n=>n.toLowerCase().includes(h.toLowerCase())))},no=n=>{n.stopPropagation(),t(i=>!i)},v=n=>{n.stopPropagation(),t(i=>!i)};return l.useEffect(()=>{const n=i=>{d.current&&!d.current.contains(i.target)&&t(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),c.jsxs(fo,{icon:Q,containerwidth:J,containebgcolor:K,options:r,onClick:v,ref:d,...Z,children:[c.jsxs(lo,{children:[s.map(n=>{var i,m,f,E,R,A,D,O,F,N,P,Y,M,W,_,B,U;return c.jsx(bo,{onRemove:()=>ro(n),text:n,active:!0,removable:!0,className:"remove-button",bgcolor:(i=o==null?void 0:o.tag)==null?void 0:i.bgcolor,color:(m=o==null?void 0:o.tag)==null?void 0:m.color,activebgcolor:(f=o==null?void 0:o.tag)==null?void 0:f.activebgcolor,hoverbgcolor:(E=o==null?void 0:o.tag)==null?void 0:E.hoverbgcolor,textcolor:(R=o==null?void 0:o.tag)==null?void 0:R.textcolor,activetextcolor:(A=o==null?void 0:o.tag)==null?void 0:A.activetextcolor,outlinecolor:(D=o==null?void 0:o.tag)==null?void 0:D.outlinecolor,activeoutlinecolor:(O=o==null?void 0:o.tag)==null?void 0:O.activeoutlinecolor,display:(F=o==null?void 0:o.tag)==null?void 0:F.display,width:(N=o==null?void 0:o.tag)==null?void 0:N.width,height:(P=o==null?void 0:o.tag)==null?void 0:P.height,padding:(Y=o==null?void 0:o.tag)==null?void 0:Y.padding,fontsizetag:(M=o==null?void 0:o.tag)==null?void 0:M.fontsizetag,fontweight:(W=o==null?void 0:o.tag)==null?void 0:W.fontweight,marginleftremovebutton:(_=o==null?void 0:o.tag)==null?void 0:_.marginleftremovebutton,hoverbgcolorremovebutton:(B=o==null?void 0:o.tag)==null?void 0:B.hoverbgcolorremovebutton,fontfamily:(U=o==null?void 0:o.tag)==null?void 0:U.fontfamily},n)}),s.length>0&&c.jsx(uo,{options:r,fontsizeclearall:X,onClick:eo,children:c.jsx(ho,{})}),(!V||s.length===0)&&c.jsx(to,{type:"text",value:h,onChange:y,onClick:no,placeholder:H,id:(k=e==null?void 0:e.input)==null?void 0:k.id,placeholdercolor:($=e==null?void 0:e.input)==null?void 0:$.placeholdercolor,backgroundcolor:(C=e==null?void 0:e.input)==null?void 0:C.backgroundcolor,color:(T=e==null?void 0:e.input)==null?void 0:T.color,borderradius:(I=e==null?void 0:e.input)==null?void 0:I.borderradius,border:(j=e==null?void 0:e.input)==null?void 0:j.border,width:(z=e==null?void 0:e.input)==null?void 0:z.width,outlineinput:(q=e==null?void 0:e.input)==null?void 0:q.outlineinput,outlinefocus:(S=e==null?void 0:e.input)==null?void 0:S.outlinefocus,paddingleft:(L=e==null?void 0:e.input)==null?void 0:L.paddingleft}),c.jsx(xo,{onClick:v,children:g?c.jsx(io,{size:18}):c.jsx(co,{size:18})}),c.jsx(po,{})]}),g&&c.jsx(wo,{children:b.length>0?b.map((n,i)=>c.jsx(G,{onMouseDown:()=>oo(n),children:n},i)):c.jsx(G,{children:"Não encontrado"})})]})};go.__docgenInfo={description:"",methods:[],displayName:"DropdownSearch",props:{inputstyled:{required:!1,tsType:{name:"DropdownSearchInputTagProps"},description:""},tagstyled:{required:!1,tsType:{name:"DropdownSearchInputTagProps"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},containerwidth:{required:!1,tsType:{name:"string"},description:""},containebgcolor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hideinputonselect:{required:!1,tsType:{name:"boolean"},description:""},fontsizeclearall:{required:!1,tsType:{name:"string"},description:""},fontfamily:{required:!1,tsType:{name:"string"},description:""}}};export{go as D};
