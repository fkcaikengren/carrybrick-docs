import{d as y,p as d,c as v,o as f,j as a,G as l,k as t,_ as B,q as w,w as r,C as g,ae as C,af as b,ag as x,a as X}from"./chunks/framework.d1ikmuyC.js";import{g as u,i as N,d as _,f as V}from"./chunks/index.C2pdwt3j.js";import{c as W}from"./chunks/theme.CDaA6osb.js";const D=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const text1 = ref('')
  const text2 = ref('')
  const text3 = ref('')

<\/script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="text1"
          size="small"
          :style="{width: '140px'}"
        />
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text2"
          :style="{width: '140px'}"
        />
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text3"
          size="large"
          :style="{width: '140px'}"
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

</style>`,Y={class:"row"},Z={class:"col"},L={class:"col"},k={class:"col"},A=y({__name:"size",setup(h){const n=d(""),i=d(""),e=d("");return(o,s)=>(f(),v("main",null,[a("div",Y,[a("div",Z,[l(t(u),{placeholder:"请输入",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=c=>n.value=c),size:"small",style:{width:"140px"}},null,8,["modelValue"])]),a("div",L,[l(t(u),{placeholder:"请输入",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=c=>i.value=c),style:{width:"140px"}},null,8,["modelValue"])]),a("div",k,[l(t(u),{placeholder:"请输入",modelValue:e.value,"onUpdate:modelValue":s[2]||(s[2]=c=>e.value=c),size:"large",style:{width:"140px"}},null,8,["modelValue"])])])]))}}),T=B(A,[["__scopeId","data-v-a9c58b4c"]]),I=`<script setup lang="ts">
  import { ref, watch } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const search = ref('')
  
  watch(()=>search.value, ()=>{
    console.log('username', search.value);
  })

<\/script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput  placeholder="搜索内容" suffixIcon="Search" v-model="search" disabled
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

</style>`,M={class:"row"},J={class:"col"},S=y({__name:"disabled",setup(h){const n=d("");return w(()=>n.value,()=>{console.log("username",n.value)}),(i,e)=>(f(),v("main",null,[a("div",M,[a("div",J,[l(t(u),{placeholder:"搜索内容",suffixIcon:"Search",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),disabled:"",style:{width:"200px"}},null,8,["modelValue"])])])]))}}),j=B(S,[["__scopeId","data-v-b8d9758f"]]),G=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const text1 = ref('')
  const text2 = ref('')

<\/script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput placeholder="搜索1" v-model="text1" prefix-icon='Search' clearable />
      </div>
      <div class="col">
        <CBInput placeholder="搜索2" v-model="text2" suffix-icon='Search' clearable />
      </div>
    </div>



  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
h3 {
  margin-bottom:10px;
}
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 20px;
}


</style>`,E={class:"row"},R={class:"col"},q={class:"col"},P=y({__name:"clearable",setup(h){const n=d(""),i=d("");return(e,o)=>(f(),v("main",null,[a("div",E,[a("div",R,[l(t(u),{placeholder:"搜索1",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"prefix-icon":"Search",clearable:""},null,8,["modelValue"])]),a("div",q,[l(t(u),{placeholder:"搜索2",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=s=>i.value=s),"suffix-icon":"Search",clearable:""},null,8,["modelValue"])])])]))}}),$=B(P,[["__scopeId","data-v-59d2d03d"]]),U=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBInput, CBIcon} from '@carrybrick/vue'
  import { CirclePlus } from '@element-plus/icons-vue'

  const text1 = ref('')
  const text2 = ref('')

  const text3 = ref('')
  const text4 = ref('')

  const handlePlusClick = ()=>{
    alert('点击icon')
  }



<\/script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <CBInput placeholder="搜索1" v-model="text1" prefix-icon='Search' />
      </div>
      <div class="col">
        <CBInput placeholder="搜索2" v-model="text2" suffix-icon='Search' />
      </div>
    </div>


    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="text3" >
          <template v-slot:prefix>
            <span class="prefix-icon">🚀</span>
          </template>
        </CBInput>
      </div>
      <div class="col">
        <CBInput placeholder="请输入" v-model="text4"  >
          <template v-slot:suffix>
            <CBIcon class="suffix-icon" @click="handlePlusClick">
              <CirclePlus /> 
            </CBIcon>
          </template>
        </CBInput>
      </div>
    </div>

  </main>
</template>

<style scoped>
main{
  background-color: #fff;
}
h3 {
  margin-bottom:10px;
}
.row{
  display: flex;
  align-items: center; 
  padding: 10px;
}
.row > .col {
  display: flex;
  align-items: center;
  width: 200px;
  margin-right: 20px;
}

.prefix-icon {
  padding-right: 8px;
}
.suffix-icon {
  cursor: pointer;
  padding-left: 8px;
}

</style>`,z={class:"row"},F={class:"col"},H={class:"col"},O={class:"row"},K={class:"col"},Q={class:"col"},ee=y({__name:"prefix-suffix",setup(h){const n=d(""),i=d(""),e=d(""),o=d(""),s=()=>{alert("点击icon")};return(c,p)=>(f(),v("main",null,[a("div",z,[a("div",F,[l(t(u),{placeholder:"搜索1",modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=m=>n.value=m),"prefix-icon":"Search"},null,8,["modelValue"])]),a("div",H,[l(t(u),{placeholder:"搜索2",modelValue:i.value,"onUpdate:modelValue":p[1]||(p[1]=m=>i.value=m),"suffix-icon":"Search"},null,8,["modelValue"])])]),a("div",O,[a("div",K,[l(t(u),{placeholder:"请输入",modelValue:e.value,"onUpdate:modelValue":p[2]||(p[2]=m=>e.value=m)},{prefix:r(()=>p[4]||(p[4]=[a("span",{class:"prefix-icon"},"🚀",-1)])),_:1},8,["modelValue"])]),a("div",Q,[l(t(u),{placeholder:"请输入",modelValue:o.value,"onUpdate:modelValue":p[3]||(p[3]=m=>o.value=m)},{suffix:r(()=>[l(t(N),{class:"suffix-icon",onClick:s},{default:r(()=>[l(t(W))]),_:1})]),_:1},8,["modelValue"])])])]))}}),le=B(ee,[["__scopeId","data-v-f97510bd"]]),ne=`<script setup lang="ts">
  import { ref, watch } from 'vue';
  import {CBInput} from '@carrybrick/vue'
  const uesrname = ref('')
  const password = ref('')
  const search = ref('')

  watch(()=>uesrname.value, ()=>{
    console.log('username', uesrname.value);
  })
  watch(()=>password.value, ()=>{
    console.log('username', password.value);
  })
  watch(()=>search.value, ()=>{
    console.log('username', search.value);
  })

<\/script>

<template>
  <main>

    <div class="row">
      <div class="col">
        <CBInput placeholder="请输入" v-model="uesrname"
          :style="{width: '200px'}"
        />
      </div>
      <div class="col">
        <CBInput  placeholder="请输入密码" type="password" v-model="password" 
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

</style>`,te={class:"row"},ae={class:"col"},oe={class:"col"},se=y({__name:"basic",setup(h){const n=d(""),i=d(""),e=d("");return w(()=>n.value,()=>{console.log("username",n.value)}),w(()=>i.value,()=>{console.log("username",i.value)}),w(()=>e.value,()=>{console.log("username",e.value)}),(o,s)=>(f(),v("main",null,[a("div",te,[a("div",ae,[l(t(u),{placeholder:"请输入",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=c=>n.value=c),style:{width:"200px"}},null,8,["modelValue"])]),a("div",oe,[l(t(u),{placeholder:"请输入密码",type:"password",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=c=>i.value=c),style:{width:"200px"}},null,8,["modelValue"])])])]))}}),ie=B(se,[["__scopeId","data-v-6886c8d9"]]),pe=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/input.md","filePath":"vue/input.md"}'),de={name:"vue/input.md"},me=Object.assign(de,{setup(h){const n=d(!0);return(i,e)=>{const o=g("ClientOnly");return f(),v("div",null,[e[5]||(e[5]=C("",3)),b(l(t(_),null,null,512),[[x,n.value]]),l(o,null,{default:r(()=>[l(t(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:t(ne)},{vue:r(()=>[l(ie)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=a("h3",{id:"前缀-后缀",tabindex:"-1"},[X("前缀 后缀 "),a("a",{class:"header-anchor",href:"#前缀-后缀","aria-label":'Permalink to "前缀 后缀"'},"​")],-1)),b(l(t(_),null,null,512),[[x,n.value]]),l(o,null,{default:r(()=>[l(t(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:t(U)},{vue:r(()=>[l(le)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h3",{id:"可清空",tabindex:"-1"},[X("可清空 "),a("a",{class:"header-anchor",href:"#可清空","aria-label":'Permalink to "可清空"'},"​")],-1)),b(l(t(_),null,null,512),[[x,n.value]]),l(o,null,{default:r(()=>[l(t(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:t(G)},{vue:r(()=>[l($)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=a("h3",{id:"禁用状态",tabindex:"-1"},[X("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),b(l(t(_),null,null,512),[[x,n.value]]),l(o,null,{default:r(()=>[l(t(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:t(I)},{vue:r(()=>[l(j)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=a("h3",{id:"尺寸大小",tabindex:"-1"},[X("尺寸大小 "),a("a",{class:"header-anchor",href:"#尺寸大小","aria-label":'Permalink to "尺寸大小"'},"​")],-1)),b(l(t(_),null,null,512),[[x,n.value]]),l(o,null,{default:r(()=>[l(t(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{n.value=!1}),vueCode:t(D)},{vue:r(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=C("",2))])}}});export{pe as __pageData,me as default};
