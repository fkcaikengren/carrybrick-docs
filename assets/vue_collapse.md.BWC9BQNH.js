import{a as v,b as o,Q as m}from"./chunks/index.Vh-FGnur.js";import{d as c,p as h,c as b,o as u,G as l,k as a,w as i,j as e,C,ae as f,a as p}from"./chunks/framework.QLlebzOX.js";import"./chunks/theme.Bzs1QGvG.js";const B=`<script setup lang="ts">
  import { ref } from 'vue'
  import {CBCollapse, CBCollapseItem} from '@carrybrick/vue'
  
  const openValue = ref('a')

<\/script>

<template>
  <main>
    <CBCollapse v-model="openValue" accordion>
      <CBCollapseItem name="a" title="Title A" >
        <h1>headline title</h1>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
      </CBCollapseItem>
      <CBCollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
      </CBCollapseItem>
      <CBCollapseItem name="c" title="Title C">
        <div> this is ccccc test </div>
      </CBCollapseItem>
    </CBCollapse>

  </main>
</template>`,_=c({__name:"accordion",setup(r){const s=h("a");return(n,t)=>(u(),b("main",null,[l(a(v),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),accordion:""},{default:i(()=>[l(a(o),{name:"a",title:"Title A"},{default:i(()=>t[1]||(t[1]=[e("h1",null,"headline title",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1)])),_:1}),l(a(o),{name:"b",title:"Title B"},{default:i(()=>t[2]||(t[2]=[e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1)])),_:1}),l(a(o),{name:"c",title:"Title C"},{default:i(()=>t[3]||(t[3]=[e("div",null," this is ccccc test ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),V=`<script setup lang="ts">
  import { ref } from 'vue'
  import {CBCollapse, CBCollapseItem} from '@carrybrick/vue'
  const openValue = ref(['a'])

<\/script>

<template>
  <main>
    <CBCollapse v-model="openValue" accordion>
      <CBCollapseItem name="a" title="Title A" >
        <h1>headline title</h1>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
        <div> this is content a aaa </div>
      </CBCollapseItem>
      <CBCollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
        <div> this is bbbbb test </div>
      </CBCollapseItem>
      <CBCollapseItem name="c" title="Title C">
        <div> this is ccccc test </div>
      </CBCollapseItem>
    </CBCollapse>

  </main>
</template>`,T=c({__name:"basic",setup(r){const s=h(["a"]);return(n,t)=>(u(),b("main",null,[l(a(v),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),accordion:""},{default:i(()=>[l(a(o),{name:"a",title:"Title A"},{default:i(()=>t[1]||(t[1]=[e("h1",null,"headline title",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1),e("div",null," this is content a aaa ",-1)])),_:1}),l(a(o),{name:"b",title:"Title B"},{default:i(()=>t[2]||(t[2]=[e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1),e("div",null," this is bbbbb test ",-1)])),_:1}),l(a(o),{name:"c",title:"Title C"},{default:i(()=>t[3]||(t[3]=[e("div",null," this is ccccc test ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),x=JSON.parse('{"title":"Collapse 折叠板","description":"","frontmatter":{},"headers":[],"relativePath":"vue/collapse.md","filePath":"vue/collapse.md"}'),A={name:"vue/collapse.md"},X=Object.assign(A,{setup(r){return(s,n)=>{const t=C("ClientOnly");return u(),b("div",null,[n[0]||(n[0]=f('<h1 id="collapse-折叠板" tabindex="-1">Collapse 折叠板 <a class="header-anchor" href="#collapse-折叠板" aria-label="Permalink to &quot;Collapse 折叠板&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',3)),l(t,null,{default:i(()=>[l(a(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(V)},{vue:i(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),n[1]||(n[1]=e("h3",{id:"手风琴模式",tabindex:"-1"},[p("手风琴模式 "),e("a",{class:"header-anchor",href:"#手风琴模式","aria-label":'Permalink to "手风琴模式"'},"​")],-1)),l(t,null,{default:i(()=>[l(a(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(B)},{vue:i(()=>[l(_)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=e("h2",{id:"api",tabindex:"-1"},[p("API "),e("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1)),n[3]||(n[3]=e("ol",null,[e("li",null,"支持双向绑定 展开状态"),e("li",null,"展开动画效果"),e("li",null,"支持自定义标题"),e("li",null,"支持自定义内容"),e("li",null,"支持 手风琴模式")],-1))])}}});export{x as __pageData,X as default};
