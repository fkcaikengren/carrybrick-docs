import{d as _,p as r,c as d,o as u,j as l,G as a,k as n,_ as b,C as X,ae as y,af as m,ag as v,w as s,a as h}from"./chunks/framework.d1ikmuyC.js";import{h as i,d as f,f as x}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const V=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBTextarea} from '@carrybrick/vue'
  const text = ref('')


<\/script>

<template>
  <main>
    <div class="row">
      
      <div class="col">
        <p>不限制高度:</p>
        <CBTextarea placeholder="请输入" v-model="text"
          :style="{width: '200px'}"
          autosize
        />
      </div>

      
      <div class="col">
        <p>限制高度:</p>
        <CBTextarea placeholder="请输入" v-model="text"
          :style="{width: '200px'}"
          :autosize="{maxRows:5, minRows:2}"
        />
      </div>
      
    </div>

  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
.row{
  display: flex;
  align-items: flex-start;
  padding: 10px;
}
.row > .col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
}

</style>`,N={class:"row"},w={class:"col"},Y={class:"col"},B=_({__name:"autosize",setup(p){const t=r("");return(c,e)=>(u(),d("main",null,[l("div",N,[l("div",w,[e[2]||(e[2]=l("p",null,"不限制高度:",-1)),a(n(i),{placeholder:"请输入",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),style:{width:"200px"},autosize:""},null,8,["modelValue"])]),l("div",Y,[e[3]||(e[3]=l("p",null,"限制高度:",-1)),a(n(i),{placeholder:"请输入",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value=o),style:{width:"200px"},autosize:{maxRows:5,minRows:2}},null,8,["modelValue"])])])]))}}),T=b(B,[["__scopeId","data-v-10578e45"]]),C=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBTextarea} from '@carrybrick/vue'
  const input1 = ref('')

<\/script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBTextarea placeholder="请输入" v-model="input1"
          :style="{width: '200px'}"
        />
      </div>
      
    </div>
  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
}

</style>`,g={class:"row"},Z={class:"col"},D=_({__name:"basic",setup(p){const t=r("");return(c,e)=>(u(),d("main",null,[l("div",g,[l("div",Z,[a(n(i),{placeholder:"请输入",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),style:{width:"200px"}},null,8,["modelValue"])])])]))}}),W=b(D,[["__scopeId","data-v-088d88dc"]]),R=JSON.parse('{"title":"Textarea 多行文本输入框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/textarea.md","filePath":"vue/textarea.md"}'),k={name:"vue/textarea.md"},q=Object.assign(k,{setup(p){const t=r(!0);return(c,e)=>{const o=X("ClientOnly");return u(),d("div",null,[e[2]||(e[2]=y('<h1 id="textarea-多行文本输入框" tabindex="-1">Textarea 多行文本输入框 <a class="header-anchor" href="#textarea-多行文本输入框" aria-label="Permalink to &quot;Textarea 多行文本输入框&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3>',3)),m(a(n(f),null,null,512),[[v,t.value]]),a(o,null,{default:s(()=>[a(n(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(C)},{vue:s(()=>[a(W)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=l("h3",{id:"高度自适应",tabindex:"-1"},[h("高度自适应 "),l("a",{class:"header-anchor",href:"#高度自适应","aria-label":'Permalink to "高度自适应"'},"​")],-1)),m(a(n(f),null,null,512),[[v,t.value]]),a(o,null,{default:s(()=>[a(n(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:n(V)},{vue:s(()=>[a(T)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=l("h2",{id:"功能实现",tabindex:"-1"},[h("功能实现 "),l("a",{class:"header-anchor",href:"#功能实现","aria-label":'Permalink to "功能实现"'},"​")],-1)),e[5]||(e[5]=l("ol",null,[l("li",null,"双向绑定，数据输入"),l("li",null,"禁用"),l("li",null,"hover,focus高亮"),l("li",null,"行数限制，高度自适应")],-1))])}}});export{R as __pageData,q as default};
