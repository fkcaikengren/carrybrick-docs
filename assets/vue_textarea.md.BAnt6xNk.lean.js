import{g as r,Q as p}from"./chunks/index.Vh-FGnur.js";import{d as h,p as v,c as d,o as u,j as e,G as a,k as o,_ as x,C as f,ae as _,w as i,a as m}from"./chunks/framework.QLlebzOX.js";import"./chunks/theme.Bzs1QGvG.js";const b=`<script setup lang="ts">
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

</style>`,X={class:"row"},y={class:"col"},V={class:"col"},N=h({__name:"autosize",setup(c){const n=v("");return(l,t)=>(u(),d("main",null,[e("div",X,[e("div",y,[t[2]||(t[2]=e("p",null,"不限制高度:",-1)),a(o(r),{placeholder:"请输入",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),style:{width:"200px"},autosize:""},null,8,["modelValue"])]),e("div",V,[t[3]||(t[3]=e("p",null,"限制高度:",-1)),a(o(r),{placeholder:"请输入",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=s=>n.value=s),style:{width:"200px"},autosize:{maxRows:5,minRows:2}},null,8,["modelValue"])])])]))}}),w=x(N,[["__scopeId","data-v-10578e45"]]),Y=`<script setup lang="ts">
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

</style>`,B={class:"row"},T={class:"col"},C=h({__name:"basic",setup(c){const n=v("");return(l,t)=>(u(),d("main",null,[e("div",B,[e("div",T,[a(o(r),{placeholder:"请输入",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),style:{width:"200px"}},null,8,["modelValue"])])])]))}}),g=x(C,[["__scopeId","data-v-088d88dc"]]),k=JSON.parse('{"title":"Textarea 多行文本输入框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/textarea.md","filePath":"vue/textarea.md"}'),Z={name:"vue/textarea.md"},L=Object.assign(Z,{setup(c){return(n,l)=>{const t=f("ClientOnly");return u(),d("div",null,[l[0]||(l[0]=_("",3)),a(t,null,{default:i(()=>[a(o(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(Y)},{vue:i(()=>[a(g)]),_:1},8,["vueCode"])]),_:1}),l[1]||(l[1]=e("h3",{id:"高度自适应",tabindex:"-1"},[m("高度自适应 "),e("a",{class:"header-anchor",href:"#高度自适应","aria-label":'Permalink to "高度自适应"'},"​")],-1)),a(t,null,{default:i(()=>[a(o(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(b)},{vue:i(()=>[a(w)]),_:1},8,["vueCode"])]),_:1}),l[2]||(l[2]=e("h2",{id:"功能实现",tabindex:"-1"},[m("功能实现 "),e("a",{class:"header-anchor",href:"#功能实现","aria-label":'Permalink to "功能实现"'},"​")],-1)),l[3]||(l[3]=e("ol",null,[e("li",null,"双向绑定，数据输入"),e("li",null,"禁用"),e("li",null,"hover,focus高亮"),e("li",null,"行数限制，高度自适应")],-1))])}}});export{k as __pageData,L as default};
