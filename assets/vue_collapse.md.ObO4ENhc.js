import{d as f,p as d,c as b,o as u,G as l,k as a,w as i,j as t,C as _,ae as V,af as m,ag as p,a as c}from"./chunks/framework.d1ikmuyC.js";import{a as B,b as o,d as h,f as C}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const T=`<script setup lang="ts">
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
</template>`,A=f({__name:"accordion",setup(r){const n=d("a");return(v,e)=>(u(),b("main",null,[l(a(B),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),accordion:""},{default:i(()=>[l(a(o),{name:"a",title:"Title A"},{default:i(()=>e[1]||(e[1]=[t("h1",null,"headline title",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1)])),_:1}),l(a(o),{name:"b",title:"Title B"},{default:i(()=>e[2]||(e[2]=[t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1)])),_:1}),l(a(o),{name:"c",title:"Title C"},{default:i(()=>e[3]||(e[3]=[t("div",null," this is ccccc test ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),N=`<script setup lang="ts">
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
</template>`,D=f({__name:"basic",setup(r){const n=d(["a"]);return(v,e)=>(u(),b("main",null,[l(a(B),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),accordion:""},{default:i(()=>[l(a(o),{name:"a",title:"Title A"},{default:i(()=>e[1]||(e[1]=[t("h1",null,"headline title",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1),t("div",null," this is content a aaa ",-1)])),_:1}),l(a(o),{name:"b",title:"Title B"},{default:i(()=>e[2]||(e[2]=[t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1),t("div",null," this is bbbbb test ",-1)])),_:1}),l(a(o),{name:"c",title:"Title C"},{default:i(()=>e[3]||(e[3]=[t("div",null," this is ccccc test ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),y=JSON.parse('{"title":"Collapse 折叠板","description":"","frontmatter":{},"headers":[],"relativePath":"vue/collapse.md","filePath":"vue/collapse.md"}'),I={name:"vue/collapse.md"},Y=Object.assign(I,{setup(r){const n=d(!0);return(v,e)=>{const s=_("ClientOnly");return u(),b("div",null,[e[2]||(e[2]=V('<h1 id="collapse-折叠板" tabindex="-1">Collapse 折叠板 <a class="header-anchor" href="#collapse-折叠板" aria-label="Permalink to &quot;Collapse 折叠板&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',3)),m(l(a(h),null,null,512),[[p,n.value]]),l(s,null,{default:i(()=>[l(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:a(N)},{vue:i(()=>[l(D)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h3",{id:"手风琴模式",tabindex:"-1"},[c("手风琴模式 "),t("a",{class:"header-anchor",href:"#手风琴模式","aria-label":'Permalink to "手风琴模式"'},"​")],-1)),m(l(a(h),null,null,512),[[p,n.value]]),l(s,null,{default:i(()=>[l(a(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:a(T)},{vue:i(()=>[l(A)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"api",tabindex:"-1"},[c("API "),t("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1)),e[5]||(e[5]=t("ol",null,[t("li",null,"支持双向绑定 展开状态"),t("li",null,"展开动画效果"),t("li",null,"支持自定义标题"),t("li",null,"支持自定义内容"),t("li",null,"支持 手风琴模式")],-1))])}}});export{y as __pageData,Y as default};
