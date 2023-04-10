import{a as me,r as v,e as fe,o as d,f as m,i as r,h as Se,u as c,t as p,w as M,v as P,j as k,k as y,l as w,m as we,p as xe,q as ye,s as qe,x as F,y as $e,z as Ee,A as D,F as B,B as U,C as Ce,D as Fe,T as De,E as Ne,G as Te,H as Re}from"./entry.47410a11.js";import ve from"./Icon.e84ebbc1.js";import{i as N}from"./IntersectingSection.c1302449.js";import{_ as Qe}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.6a371dcb.js";const Oe={class:"container flex flex-row items-center"},ze={class:"h-5 w-full overflow-hidden rounded-sm border-b-2 border-r-2 border-bgbluelighter bg-transparent"},Ie=r("div",{class:"absolute animate-ripple bg-gradient-to-l from-white ease-linear"},null,-1),Ve=[Ie],Ge={class:"justify-center pl-2"},Ae=me({__name:"TheProgressBar",props:{limit:{type:Number,required:!0}},setup(e){const i=e,n=v(0),t=fe(()=>n.value.toFixed()),l=setInterval(()=>{n.value<i.limit?n.value+=.1:clearInterval(l)},10);return(o,f)=>(d(),m("div",Oe,[r("div",ze,[r("div",{class:"relative z-10 h-5 overflow-hidden bg-blue-700",style:Se({width:c(n)+"%"})},Ve,4)]),r("div",Ge,p(c(t))+"%",1)]))}}),je=["onSubmit"],Le={class:"md:flex md:items-center md:justify-center"},Me={class:"mb-3 pb-4 text-center font-bold capitalize text-blue-800 dark:text-white"},Pe={class:"-mx-3 mb-6 flex flex-wrap"},Be={class:"mb-6 w-full px-3 md:mb-0"},Ue={class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-first-name"},We={class:"-mx-3 mb-6 flex flex-wrap"},He={class:"w-full px-3"},Je=r("label",{class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-password"}," E-mail ",-1),Ke={class:"-mx-3 mb-6 flex flex-wrap"},Xe={class:"w-full px-3"},Ye={class:"mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white",for:"grid-password"},Ze={class:"md:flex md:items-center md:justify-center"},ei={class:"focus:shadow-outline w-1/2 rounded-sm bg-blue-900 px-4 py-2 font-bold text-white shadow hover:bg-blue-800 focus:outline-none",type:"submit"},ii={key:0},ni={key:1},ti={class:"mt-2 py-3 text-left tracking-tighter md:flex md:items-center md:justify-center"},ai={key:0,class:"inline-flex flex-row items-center rounded-sm bg-green-600 p-2 text-white"},si={class:"pr-1"},ri={key:1,class:"inline-flex flex-row items-center rounded-sm bg-red-600 p-2 text-white"},oi={class:"pr-1"},li={__name:"TheContactForm",setup(e){const i=v({name:"",email:"",message:"",from_name:"alhada06.github.io",subject:fe(()=>"Contact from "+i.value.name),access_key:"6214d9b4-c46f-4e98-9501-6e52ec230c79"}),n=v(!1),t=v(!1),l=v(!1),o=s=>{s&&(t.value=s,i.value.name="",i.value.email="",i.value.message="",setTimeout(()=>{t.value=!1},3e3))},f=async()=>{var g;console.log(i.value),n.value=!0;const{data:s,error:u,pending:_}=await xe("mail",()=>$fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:i.value}));n.value=_.value,o((g=s.value)==null?void 0:g.success),u.value&&(l.value=!0)},a=v(null);return v(null),(s,u)=>{const _=ve;return d(),m("form",{id:"forms",ref_key:"forms",ref:a,class:"w-full max-w-lg",onSubmit:we(f,["prevent"])},[r("div",Le,[r("div",Me,p(s.$t("contact-me")),1)]),r("div",Pe,[r("div",Be,[r("label",Ue,p(s.$t("name")),1),M(r("input",{id:"grid-first-name","onUpdate:modelValue":u[0]||(u[0]=g=>c(i).name=g),class:"mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 px-4 py-3 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",type:"text",name:"name",placeholder:"Jane",required:""},null,512),[[P,c(i).name]])])]),r("div",We,[r("div",He,[Je,M(r("input",{id:"email","onUpdate:modelValue":u[1]||(u[1]=g=>c(i).email=g),class:"mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 px-4 py-3 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",type:"email",name:"email",required:""},null,512),[[P,c(i).email]])])]),r("div",Ke,[r("div",Xe,[r("label",Ye,p(s.$t("message")),1),M(r("textarea",{id:"message","onUpdate:modelValue":u[2]||(u[2]=g=>c(i).message=g),class:"no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-blue-800/30 bg-white/70 px-4 py-3 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90",name:"message",required:""},null,512),[[P,c(i).message]])])]),r("div",Ze,[r("button",ei,[c(n)?(d(),m("span",ii,[k(_,{size:"32px",name:"svg-spinners:3-dots-scale"})])):(d(),m("span",ni,p(s.$t("send")),1))])]),r("div",ti,[c(t)?(d(),m("span",ai,[r("span",si,[k(_,{name:"material-symbols:check-circle-outline",size:"24px"})]),y(" "+p(s.$t("successMessage")),1)])):w("",!0),c(l)?(d(),m("span",ri,[r("span",oi,[k(_,{name:"material-symbols:cancel-outline",size:"24px"})]),y(" "+p(s.$t("errorMessage")),1)])):w("",!0)])],40,je)}}},ci={key:0,class:"bg-bgbluelighter text-red-300"},ui=me({__name:"TheIcon",setup(e){const i=v(!1),n=ye(i);return(t,l)=>(d(),m("div",{class:"mt-1 bg-blue-800 py-4 text-white backdrop-grayscale hover:text-green-800",onClick:l[0]||(l[0]=o=>c(n)())},[y(" teste sds "),c(i)?(d(),m("div",ci,"testting")):w("",!0)]))}}),di=r("div",{class:"grid w-4/5 grid-cols-2 gap-2 overflow-y-auto border border-black p-5"}," contentds dsfsdfsdf fsdf sdf dfsdf sdfs df sdf sdf ds ",-1),mi=[di],fi={__name:"TheModal",props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0}},setup(e){const i=e;return(n,t)=>(d(),m("div",{class:"fixed left-0 top-24 z-50 hidden h-full w-full overflow-auto bg-black/40 pt-7",onClick:t[0]||(t[0]=(...l)=>i.onClose&&i.onClose(...l))},mi))}},vi={class:"m-2 flex flex-wrap p-3"},pi=qe('<div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div><div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>',9),gi={__name:"TheCerts",setup(e){const i=v(!0);return(n,t)=>{const l=fi;return d(),m("div",vi,[r("div",{class:"m-2 h-48 w-48 bg-slate-200 p-1",onClick:t[0]||(t[0]=()=>i.value=!0)}),pi,k(l,{"on-close":()=>i.value=!1,show:c(i)},null,8,["on-close","show"])])}}};var V={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Skill"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Skill"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"iconSize"},arguments:[],directives:[]}]}}],loc:{start:0,end:72}};V.loc.source={body:`fragment Skill on Skill {
  sys {
    id
  }
  name
  icon
  iconSize
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function T(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){T(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){T(t,i)}),e.definitions&&e.definitions.forEach(function(t){T(t,i)})}var W={};(function(){V.definitions.forEach(function(i){if(i.name){var n=new Set;T(i,n),W[i.name.value]=n}})})();function ae(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function hi(e,i){var n={kind:e.kind,definitions:[ae(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=W[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=W[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=ae(e,a);s&&n.definitions.push(s)}),n}hi(V,"Skill");var q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"skillCollectionQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"skillCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Skill"},directives:[]}]}}]}}]}}],loc:{start:0,end:141}};q.loc.source={body:`#import "../fragments/skill.fragment.gql"

query skillCollectionQuery {
  skillCollection {
    total
    items {
      ...Skill
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var se={};function ki(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return se[n]?!1:(se[n]=!0,!0)})}q.definitions=q.definitions.concat(ki(V.definitions));function R(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){R(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){R(t,i)}),e.definitions&&e.definitions.forEach(function(t){R(t,i)})}var H={};(function(){q.definitions.forEach(function(i){if(i.name){var n=new Set;R(i,n),H[i.name.value]=n}})})();function re(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function bi(e,i){var n={kind:e.kind,definitions:[re(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=H[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=H[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=re(e,a);s&&n.definitions.push(s)}),n}bi(q,"skillCollectionQuery");var G={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"experienceEntryQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"experienceCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"precentage"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:116}};G.loc.source={body:`query experienceEntryQuery {
  experienceCollection {
    total
    items {
      name
      precentage
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function Q(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){Q(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){Q(t,i)}),e.definitions&&e.definitions.forEach(function(t){Q(t,i)})}var J={};(function(){G.definitions.forEach(function(i){if(i.name){var n=new Set;Q(i,n),J[i.name.value]=n}})})();function oe(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function _i(e,i){var n={kind:e.kind,definitions:[oe(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=J[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=J[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=oe(e,a);s&&n.definitions.push(s)}),n}_i(G,"experienceEntryQuery");var E={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"menuCollectionQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"menuCollection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:157}};E.loc.source={body:`query menuCollectionQuery($locale: String) {
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function O(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){O(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){O(t,i)}),e.definitions&&e.definitions.forEach(function(t){O(t,i)})}var K={};(function(){E.definitions.forEach(function(i){if(i.name){var n=new Set;O(i,n),K[i.name.value]=n}})})();function le(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function Si(e,i){var n={kind:e.kind,definitions:[le(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=K[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=K[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=le(e,a);s&&n.definitions.push(s)}),n}Si(E,"menuCollectionQuery");var A={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Certificate"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Certificate"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fileName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:136}};A.loc.source={body:`fragment Certificate on Certificate {
  sys {
    id
  }
  name
  image {
    sys {
      id
    }
    title
    fileName
    url
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function z(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){z(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){z(t,i)}),e.definitions&&e.definitions.forEach(function(t){z(t,i)})}var X={};(function(){A.definitions.forEach(function(i){if(i.name){var n=new Set;z(i,n),X[i.name.value]=n}})})();function ce(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function wi(e,i){var n={kind:e.kind,definitions:[ce(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=X[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=X[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=ce(e,a);s&&n.definitions.push(s)}),n}wi(A,"Certificate");var $={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"certificateCollectionQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"certificateCollection"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Certificate"},directives:[]}]}}]}}]}}],loc:{start:0,end:206}};$.loc.source={body:`#import "../fragments/certificate.fragment.gql"

query certificateCollectionQuery {
  certificateCollection {
    total
    items {
      ...Certificate
      # add the fields you want to query
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var ue={};function xi(e){return e.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return ue[n]?!1:(ue[n]=!0,!0)})}$.definitions=$.definitions.concat(xi(A.definitions));function I(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){I(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){I(t,i)}),e.definitions&&e.definitions.forEach(function(t){I(t,i)})}var Y={};(function(){$.definitions.forEach(function(i){if(i.name){var n=new Set;I(i,n),Y[i.name.value]=n}})})();function de(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function yi(e,i){var n={kind:e.kind,definitions:[de(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=Y[i]||new Set,l=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!l.has(a)){l.add(a);var s=Y[a]||new Set;s.forEach(function(u){o.add(u)})}})}return l.forEach(function(a){var s=de(e,a);s&&n.definitions.push(s)}),n}yi($,"certificateCollectionQuery");const b=e=>(Ne("data-v-31aea7f3"),e=e(),Te(),e),qi={class:"mb-[500px] ml-6 scroll-pt-16"},$i=b(()=>r("div",null,null,-1)),Ei=b(()=>r("h2",{id:"0",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 1 ",-1)),Ci=b(()=>r("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Fi=[Ei,Ci],Di=b(()=>r("h2",{id:"1",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 2 ",-1)),Ni=b(()=>r("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Ti=[Di,Ni],Ri=b(()=>r("h2",{id:"2",class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 3 ",-1)),Qi=b(()=>r("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Oi=[Ri,Qi],zi=b(()=>r("h2",{class:"py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"}," Section 4 ",-1)),Ii=b(()=>r("p",{class:"text-justify text-blue-800 dark:text-white"}," W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor neque. ",-1)),Vi=[zi,Ii],Gi={key:0,class:"m-4 w-1/2 p-8"},Ai={class:"flex justify-center"},ji={key:0},Li={key:1},Mi={key:2},Pi={__name:"index",async setup(e){let i,n;const t=Re(),l=v(null),o=v(null);F(o,([{isIntersecting:S}],x)=>{N.value.Section1=S},{rootMargin:"0px 0px -80% 0px"});const f=v(null);F(f,([{isIntersecting:S}],x)=>{N.value.Section2=S},{rootMargin:"0px 0px -80% 0px"});const a=v(null);F(a,([{isIntersecting:S}],x)=>{N.value.Section3=S},{rootMargin:"0px 0px -80% 0px"});const s=v(null);F(s,([{isIntersecting:S}],x)=>{N.value.Section4=S},{rootMargin:"0px 0px -80% 0px"});const{locale:u}=$e(),{data:_,refresh:g}=([i,n]=Ee(()=>Ce(E,{locale:u.value})),i=await i,n(),i),{result:pe}=D(E,()=>({locale:u.value}),{prefetch:!1}),{result:C}=D(G,null,{prefetch:!1}),{result:j}=D(q,null,{prefetch:!1});return D($,null,{prefetch:!1}),(S,x)=>{var Z,ee,ie,ne,te;const ge=Ae,he=li,ke=ve,be=ui,_e=gi;return d(),m("div",{ref_key:"root",ref:l},[r("article",qi,[r("h1",{ref:"head",class:"ml-4 py-4 pl-8 text-4xl text-blue-800 dark:text-white",onClick:x[0]||(x[0]=(...h)=>c(g)&&c(g)(...h))}," My article - "+p(c(t).myVar),513),$i,r("section",{ref_key:"section1",ref:o,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},Fi,512),r("section",{ref_key:"section2",ref:f,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},Ti,512),r("section",{ref_key:"section3",ref:a,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},Oi,512),r("section",{id:"3",ref_key:"section4",ref:s,class:"m-4 rounded-lg p-8 backdrop-blur-sm"},Vi,512),c(C)?(d(),m("div",Gi,[(d(!0),m(B,null,U((Z=c(C))==null?void 0:Z.experienceCollection.items,h=>(d(),m("div",{key:h.name},[k(De,{name:"fade",mode:"out-in",appear:""},{default:Fe(()=>[k(ge,{limit:h.precentage},null,8,["limit"])]),_:2},1024)]))),128))])):w("",!0),r("div",Ai,[k(he)])]),c(_)?(d(),m("div",ji,[y(" async: "+p(c(_))+"---- ",1),(d(!0),m(B,null,U((ie=(ee=c(pe))==null?void 0:ee.menuCollection)==null?void 0:ie.items,(h,L)=>(d(),m("div",{key:L},p(h.name),1))),128))])):w("",!0),c(C)?(d(),m("div",Li,"--- experience data:"+p(c(C)),1)):w("",!0),y(" "+p(c(j))+"---- ",1),c(j)?(d(),m("div",Mi,[(d(!0),m(B,null,U((te=(ne=c(j))==null?void 0:ne.skillCollection)==null?void 0:te.items,(h,L)=>(d(),m("div",{key:L},[r("div",null,[k(ke,{name:h.icon,size:h.iconSize},null,8,["name","size"])]),y(" --- "+p(h.sys.id),1)]))),128))])):w("",!0),k(be),r("div",null,[k(_e)])],512)}}},Ki=Qe(Pi,[["__scopeId","data-v-31aea7f3"]]);export{Ki as default};
