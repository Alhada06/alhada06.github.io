import{a as ue,r as g,e as B,o as d,f as m,i as s,h as ce,u as l,t as p,w as O,v as V,j as x,k as C,l as y,m as de,p as me,q as $,s as fe,x as ve,y as A,F as j,z as G,A as pe,B as ge,T as be,C as he,D as ke,E as _e}from"./entry.3b10b5af.js";import ae from"./Icon.5801e0f1.js";import{i as D}from"./IntersectingSection.afd2020e.js";import{_ as xe}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.3dcc9c17.js";const Se={class:"container flex items-center flex-row"},ye={class:"w-full bg-transparent border-bgbluelighter rounded-sm border-b-2 border-r-2 h-5 overflow-hidden"},we=s("div",{class:"absolute bg-gradient-to-l from-white animate-ripple ease-linear"},null,-1),qe=[we],Ee={class:"pl-2 justify-center"},$e=ue({__name:"TheProgressBar",props:{limit:{type:Number,required:!0}},setup(e){const i=e,t=g(0),n=B(()=>t.value.toFixed());let u=setInterval(()=>{t.value<i.limit?t.value+=.1:clearInterval(u)},10);return(o,f)=>(d(),m("div",Se,[s("div",ye,[s("div",{class:"h-5 z-10 relative bg-blue-700 overflow-hidden",style:ce({width:l(t)+"%"})},qe,4)]),s("div",Ee,p(l(n))+"%",1)]))}}),De=["onSubmit"],Ce={class:"md:flex md:items-center md:justify-center"},Fe={class:"text-center capitalize text-blue-800 pb-4 mb-3 dark:text-white font-bold"},Ne={class:"flex flex-wrap -mx-3 mb-6"},Te={class:"w-full px-3 mb-6 md:mb-0"},Re={class:"block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2",for:"grid-first-name"},Ie={class:"flex flex-wrap -mx-3 mb-6"},Qe={class:"w-full px-3"},ze=s("label",{class:"block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2",for:"grid-password"}," E-mail ",-1),Oe={class:"flex flex-wrap -mx-3 mb-6"},Ve={class:"w-full px-3"},Ae={class:"block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2",for:"grid-password"},je={class:"md:flex md:items-center md:justify-center"},Ge={class:"shadow bg-blue-900 w-1/2 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"submit"},Le={key:0},Me={key:1},Pe={class:"md:flex md:items-center md:justify-center py-3 mt-2"},Ue={key:0,class:"text-white rounded p-2 bg-green-600 flex-row items-center"},Be={__name:"TheContactForm",setup(e){const i=g({name:"",email:"",message:"",from_name:"alhada06.github.io",subject:B(()=>"Contact from "+i.value.name),access_key:"6214d9b4-c46f-4e98-9501-6e52ec230c79"}),t=g(!1),n=g(!1),u=a=>{a&&(n.value=a,i.value.name="",i.value.email="",i.value.message="",setTimeout(()=>{n.value=!1},3e3))},o=async()=>{var v;console.log(i.value),t.value=!0;const{data:a,error:r,pending:c}=await me("mail",()=>$fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:i.value}));t.value=c.value,u((v=a.value)==null?void 0:v.success),console.log(c.value),console.log(a.value),console.log(r.value)},f=g(null);return g(null),(a,r)=>{const c=ae;return d(),m("form",{ref_key:"forms",ref:f,id:"forms",onSubmit:de(o,["prevent"]),class:"w-full max-w-lg"},[s("div",Ce,[s("div",Fe,p(a.$t("contact-me")),1)]),s("div",Ne,[s("div",Te,[s("label",Re,p(a.$t("name")),1),O(s("input",{"onUpdate:modelValue":r[0]||(r[0]=v=>l(i).name=v),class:"appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800",id:"grid-first-name",type:"text",name:"name",placeholder:"Jane",required:""},null,512),[[V,l(i).name]])])]),s("div",Ie,[s("div",Qe,[ze,O(s("input",{"onUpdate:modelValue":r[1]||(r[1]=v=>l(i).email=v),class:"appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800",id:"email",type:"email",name:"email",required:""},null,512),[[V,l(i).email]])])]),s("div",Oe,[s("div",Ve,[s("label",Ae,p(a.$t("message")),1),O(s("textarea",{"onUpdate:modelValue":r[2]||(r[2]=v=>l(i).message=v),class:"no-resize appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800 h-48 resize-none",id:"message",name:"message",required:""},null,512),[[V,l(i).message]])])]),s("div",je,[s("button",Ge,[l(t)?(d(),m("span",Le,[x(c,{size:"32px",name:"svg-spinners:3-dots-scale"})])):(d(),m("span",Me,p(a.$t("send")),1))])]),s("div",Pe,[l(n)?(d(),m("span",Ue,[x(c,{name:"material-symbols:check-circle-outline",size:"24px"}),C(" Email sent successfully!")])):y("",!0)])],40,De)}}};var I={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Skill"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Skill"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"iconSize"},arguments:[],directives:[]}]}}],loc:{start:0,end:72}};I.loc.source={body:`fragment Skill on Skill {
  sys {
    id
  }
  name
  icon
  iconSize
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function F(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){F(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){F(n,i)}),e.definitions&&e.definitions.forEach(function(n){F(n,i)})}var L={};(function(){I.definitions.forEach(function(i){if(i.name){var t=new Set;F(i,t),L[i.name.value]=t}})})();function Z(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function We(e,i){var t={kind:e.kind,definitions:[Z(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=L[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=L[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=Z(e,a);r&&t.definitions.push(r)}),t}We(I,"Skill");var S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"skillCollectionQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"skillCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Skill"},directives:[]}]}}]}}]}}],loc:{start:0,end:141}};S.loc.source={body:`#import "../fragments/skill.fragment.gql"

query skillCollectionQuery {
  skillCollection {
    total
    items {
      ...Skill
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ee={};function Je(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return ee[t]?!1:(ee[t]=!0,!0)})}S.definitions=S.definitions.concat(Je(I.definitions));function N(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){N(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){N(n,i)}),e.definitions&&e.definitions.forEach(function(n){N(n,i)})}var M={};(function(){S.definitions.forEach(function(i){if(i.name){var t=new Set;N(i,t),M[i.name.value]=t}})})();function ie(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function He(e,i){var t={kind:e.kind,definitions:[ie(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=M[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=M[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=ie(e,a);r&&t.definitions.push(r)}),t}He(S,"skillCollectionQuery");var Q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"experienceEntryQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"experienceCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"precentage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:116}};Q.loc.source={body:`query experienceEntryQuery {
  experienceCollection {
    total
    items {
      name
      precentage
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function T(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){T(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){T(n,i)}),e.definitions&&e.definitions.forEach(function(n){T(n,i)})}var P={};(function(){Q.definitions.forEach(function(i){if(i.name){var t=new Set;T(i,t),P[i.name.value]=t}})})();function te(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Ke(e,i){var t={kind:e.kind,definitions:[te(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=P[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=P[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=te(e,a);r&&t.definitions.push(r)}),t}Ke(Q,"experienceEntryQuery");var w={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"menuCollectionQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"menuCollection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:157}};w.loc.source={body:`query menuCollectionQuery($locale: String) {
  menuCollection(locale: $locale) {
    total
    items {
      name
      sys {
        id
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function R(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&i.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(n){R(n,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(n){R(n,i)}),e.definitions&&e.definitions.forEach(function(n){R(n,i)})}var U={};(function(){w.definitions.forEach(function(i){if(i.name){var t=new Set;R(i,t),U[i.name.value]=t}})})();function ne(e,i){for(var t=0;t<e.definitions.length;t++){var n=e.definitions[t];if(n.name&&n.name.value==i)return n}}function Xe(e,i){var t={kind:e.kind,definitions:[ne(e,i)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var n=U[i]||new Set,u=new Set,o=new Set;for(n.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!u.has(a)){u.add(a);var r=U[a]||new Set;r.forEach(function(c){o.add(c)})}})}return u.forEach(function(a){var r=ne(e,a);r&&t.definitions.push(r)}),t}Xe(w,"menuCollectionQuery");const h=e=>(he("data-v-25368ac7"),e=e(),ke(),e),Ye={class:"mb-[500px] ml-6 scroll-pt-16"},Ze=h(()=>s("div",null,null,-1)),ei=h(()=>s("h2",{id:"0",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 1 ",-1)),ii=h(()=>s("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),ti=[ei,ii],ni=h(()=>s("h2",{id:"1",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 2 ",-1)),ai=h(()=>s("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),si=[ni,ai],ri=h(()=>s("h2",{id:"2",class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 3 ",-1)),oi=h(()=>s("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),li=[ri,oi],ui=h(()=>s("h2",{class:"py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900"}," Section 4 ",-1)),ci=h(()=>s("p",{class:"dark:text-white text-blue-800 text-justify"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),di=[ui,ci],mi={key:0,class:"w-1/2 m-4 p-8"},fi={class:"flex justify-center"},vi={key:0},pi={key:1},gi={__name:"index",async setup(e){let i,t;const n=_e(),u=g(null),o=g(null);$(o,([{isIntersecting:k}],_)=>{D.value.Section1=k},{rootMargin:"0px 0px -80% 0px"});const f=g(null);$(f,([{isIntersecting:k}],_)=>{D.value.Section2=k},{rootMargin:"0px 0px -80% 0px"});const a=g(null);$(a,([{isIntersecting:k}],_)=>{D.value.Section3=k},{rootMargin:"0px 0px -80% 0px"});const r=g(null);$(r,([{isIntersecting:k}],_)=>{D.value.Section4=k},{rootMargin:"0px 0px -80% 0px"});const{locale:c}=fe(),{data:v,refresh:W}=([i,t]=ve(()=>pe(w,{locale:c.value})),i=await i,t(),i),{result:se}=A(w,()=>({locale:c.value}),{prefetch:!1}),{result:q}=A(Q,null,{prefetch:!1});B(()=>v);const{result:z}=A(S,null,{prefetch:!1});return(k,_)=>{var J,H,K,X,Y;const re=$e,oe=Be,le=ae;return d(),m("div",{ref_key:"root",ref:u},[s("article",Ye,[s("h1",{ref:"head",onClick:_[0]||(_[0]=(...b)=>l(W)&&l(W)(...b)),class:"py-4 pl-8 ml-4 text-4xl dark:text-white text-blue-800"}," My article - "+p(l(n).myVar),513),Ze,s("section",{ref_key:"section1",ref:o,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},ti,512),s("section",{ref_key:"section2",ref:f,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},si,512),s("section",{ref_key:"section3",ref:a,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},li,512),s("section",{id:"3",ref_key:"section4",ref:r,class:"m-4 p-8 backdrop-blur-sm rounded-lg"},di,512),l(q)?(d(),m("div",mi,[(d(!0),m(j,null,G((J=l(q))==null?void 0:J.experienceCollection.items,(b,E)=>(d(),m("div",{key:b.name},[x(be,{name:"fade",mode:"out-in",appear:""},{default:ge(()=>[x(re,{limit:b.precentage},null,8,["limit"])]),_:2},1024)]))),128))])):y("",!0),s("div",fi,[x(oe)])]),l(v)?(d(),m("div",vi,[C(" async: "+p(l(v))+"---- ",1),(d(!0),m(j,null,G((K=(H=l(se))==null?void 0:H.menuCollection)==null?void 0:K.items,(b,E)=>(d(),m("div",{key:E},p(b.name),1))),128))])):y("",!0),l(q)?(d(),m("div",pi,"--- experience data:"+p(l(q)),1)):y("",!0),C(" "+p(l(z))+"---- ",1),l(z)?(d(!0),m(j,{key:2},G((Y=(X=l(z))==null?void 0:X.skillCollection)==null?void 0:Y.items,(b,E)=>(d(),m("div",{key:E},[x(le,{name:b.icon,size:b.iconSize},null,8,["name","size"]),C("--- "+p(b.sys.id),1)]))),128)):y("",!0)],512)}}},Si=xe(gi,[["__scopeId","data-v-25368ac7"]]);export{Si as default};
