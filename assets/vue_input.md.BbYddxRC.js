import{d as r,c as X,Q as b}from"./chunks/index.Vh-FGnur.js";import{d as x,p as d,c as v,o as h,j as n,G as e,k as t,_,q as y,w as i,C,ae as B,a as V}from"./chunks/framework.QLlebzOX.js";import{c as w}from"./chunks/theme.Bzs1QGvG.js";const N=`<script setup lang="ts">
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

</style>`,g={class:"row"},W={class:"col"},D={class:"col"},Y={class:"col"},Z=x({__name:"size",setup(f){const a=d(""),l=d(""),o=d("");return(c,s)=>(h(),v("main",null,[n("div",g,[n("div",W,[e(t(r),{placeholder:"请输入",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=u=>a.value=u),size:"small",style:{width:"140px"}},null,8,["modelValue"])]),n("div",D,[e(t(r),{placeholder:"请输入",modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=u=>l.value=u),style:{width:"140px"}},null,8,["modelValue"])]),n("div",Y,[e(t(r),{placeholder:"请输入",modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=u=>o.value=u),size:"large",style:{width:"140px"}},null,8,["modelValue"])])])]))}}),L=_(Z,[["__scopeId","data-v-a9c58b4c"]]),k=`<script setup lang="ts">
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

</style>`,A={class:"row"},T={class:"col"},I=x({__name:"disabled",setup(f){const a=d("");return y(()=>a.value,()=>{console.log("username",a.value)}),(l,o)=>(h(),v("main",null,[n("div",A,[n("div",T,[e(t(r),{placeholder:"搜索内容",suffixIcon:"Search",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=c=>a.value=c),disabled:"",style:{width:"200px"}},null,8,["modelValue"])])])]))}}),J=_(I,[["__scopeId","data-v-b8d9758f"]]),M=`<script setup lang="ts">
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


</style>`,S={class:"row"},j={class:"col"},G={class:"col"},E=x({__name:"clearable",setup(f){const a=d(""),l=d("");return(o,c)=>(h(),v("main",null,[n("div",S,[n("div",j,[e(t(r),{placeholder:"搜索1",modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=s=>a.value=s),"prefix-icon":"Search",clearable:""},null,8,["modelValue"])]),n("div",G,[e(t(r),{placeholder:"搜索2",modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=s=>l.value=s),"suffix-icon":"Search",clearable:""},null,8,["modelValue"])])])]))}}),R=_(E,[["__scopeId","data-v-59d2d03d"]]),q=`<script setup lang="ts">
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

</style>`,P={class:"row"},$={class:"col"},U={class:"col"},z={class:"row"},F={class:"col"},H={class:"col"},O=x({__name:"prefix-suffix",setup(f){const a=d(""),l=d(""),o=d(""),c=d(""),s=()=>{alert("点击icon")};return(u,p)=>(h(),v("main",null,[n("div",P,[n("div",$,[e(t(r),{placeholder:"搜索1",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=m=>a.value=m),"prefix-icon":"Search"},null,8,["modelValue"])]),n("div",U,[e(t(r),{placeholder:"搜索2",modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=m=>l.value=m),"suffix-icon":"Search"},null,8,["modelValue"])])]),n("div",z,[n("div",F,[e(t(r),{placeholder:"请输入",modelValue:o.value,"onUpdate:modelValue":p[2]||(p[2]=m=>o.value=m)},{prefix:i(()=>p[4]||(p[4]=[n("span",{class:"prefix-icon"},"🚀",-1)])),_:1},8,["modelValue"])]),n("div",H,[e(t(r),{placeholder:"请输入",modelValue:c.value,"onUpdate:modelValue":p[3]||(p[3]=m=>c.value=m)},{suffix:i(()=>[e(t(X),{class:"suffix-icon",onClick:s},{default:i(()=>[e(t(w))]),_:1})]),_:1},8,["modelValue"])])])]))}}),Q=_(O,[["__scopeId","data-v-f97510bd"]]),K=`<script setup lang="ts">
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

</style>`,ee={class:"row"},le={class:"col"},ne={class:"col"},te=x({__name:"basic",setup(f){const a=d(""),l=d(""),o=d("");return y(()=>a.value,()=>{console.log("username",a.value)}),y(()=>l.value,()=>{console.log("username",l.value)}),y(()=>o.value,()=>{console.log("username",o.value)}),(c,s)=>(h(),v("main",null,[n("div",ee,[n("div",le,[e(t(r),{placeholder:"请输入",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=u=>a.value=u),style:{width:"200px"}},null,8,["modelValue"])]),n("div",ne,[e(t(r),{placeholder:"请输入密码",type:"password",modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=u=>l.value=u),style:{width:"200px"}},null,8,["modelValue"])])])]))}}),ae=_(te,[["__scopeId","data-v-6886c8d9"]]),re=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/input.md","filePath":"vue/input.md"}'),oe={name:"vue/input.md"},ce=Object.assign(oe,{setup(f){return(a,l)=>{const o=C("ClientOnly");return h(),v("div",null,[l[0]||(l[0]=B('<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3>',3)),e(o,null,{default:i(()=>[e(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(K)},{vue:i(()=>[e(ae)]),_:1},8,["vueCode"])]),_:1}),l[1]||(l[1]=n("h3",{id:"前缀-后缀",tabindex:"-1"},[V("前缀 后缀 "),n("a",{class:"header-anchor",href:"#前缀-后缀","aria-label":'Permalink to "前缀 后缀"'},"​")],-1)),e(o,null,{default:i(()=>[e(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(q)},{vue:i(()=>[e(Q)]),_:1},8,["vueCode"])]),_:1}),l[2]||(l[2]=n("h3",{id:"可清空",tabindex:"-1"},[V("可清空 "),n("a",{class:"header-anchor",href:"#可清空","aria-label":'Permalink to "可清空"'},"​")],-1)),e(o,null,{default:i(()=>[e(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(M)},{vue:i(()=>[e(R)]),_:1},8,["vueCode"])]),_:1}),l[3]||(l[3]=n("h3",{id:"禁用状态",tabindex:"-1"},[V("禁用状态 "),n("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e(o,null,{default:i(()=>[e(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(k)},{vue:i(()=>[e(J)]),_:1},8,["vueCode"])]),_:1}),l[4]||(l[4]=n("h3",{id:"尺寸大小",tabindex:"-1"},[V("尺寸大小 "),n("a",{class:"header-anchor",href:"#尺寸大小","aria-label":'Permalink to "尺寸大小"'},"​")],-1)),e(o,null,{default:i(()=>[e(t(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(N)},{vue:i(()=>[e(L)]),_:1},8,["vueCode"])]),_:1}),l[5]||(l[5]=B('<h2 id="功能实现" tabindex="-1">功能实现 <a class="header-anchor" href="#功能实现" aria-label="Permalink to &quot;功能实现&quot;">​</a></h2><ol><li>双向绑定，数据输入，placeholder占位符</li><li>尺寸大小</li><li>禁用</li><li>清空</li><li>支持前缀和后缀</li><li>样式：支持hover、focus高亮</li><li>支持type: text password</li><li>只读</li></ol>',2))])}}});export{re as __pageData,ce as default};
