import{d as X,p as u,c as v,o as p,G as t,k as n,_ as w,j as a,t as y,C as x,ae as Y,af as b,ag as h,w as r,a as c}from"./chunks/framework.d1ikmuyC.js";import{k as d,d as V,f as N}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const B=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const state1 = ref(true)
  const state2 = ref(false)

<\/script>

<template>
  <main>
    <CBSwitch v-model="state1" disabled />
    <CBSwitch v-model="state2" 
      class="ml-2"
    />
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>`,_=X({__name:"disabled",setup(f){const l=u(!0),i=u(!1);return(e,s)=>(p(),v("main",null,[t(n(d),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o),disabled:""},null,8,["modelValue"]),t(n(d),{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),class:"ml-2"},null,8,["modelValue"])]))}}),W=w(_,[["__scopeId","data-v-f446910b"]]),C=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const state1 = ref(false)
  const state2 = ref('yes')
  const state3 = ref('yes')

<\/script>

<template>
  <main>
    <CBSwitch v-model="state1" 
      active-text='Y' 
      inactive-text='N'
      size="small"
      class="ml-2"
    />
    <CBSwitch v-model="state2" 
      active-text='Y' 
      inactive-text='N'
      class="ml-2"
    />
    <CBSwitch v-model="state3" 
      active-text='Y' 
      inactive-text='N'
      size="large"
      class="ml-2"
    />
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>`,D=X({__name:"size",setup(f){const l=u(!1),i=u("yes"),e=u("yes");return(s,o)=>(p(),v("main",null,[t(n(d),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=m=>l.value=m),"active-text":"Y","inactive-text":"N",size:"small",class:"ml-2"},null,8,["modelValue"]),t(n(d),{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=m=>i.value=m),"active-text":"Y","inactive-text":"N",class:"ml-2"},null,8,["modelValue"]),t(n(d),{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=m=>e.value=m),"active-text":"Y","inactive-text":"N",size:"large",class:"ml-2"},null,8,["modelValue"])]))}}),S=w(D,[["__scopeId","data-v-c265d2e7"]]),Z=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const switchState = ref(false)
  const ok = ref('yes')

<\/script>

<template>
  <main>
    <div>
      <CBSwitch v-model="switchState" 
        active-text='Y' 
        inactive-text='N'
      />
      <p>value：{{ switchState }}</p>
    </div>
    <div class="mt-2">
      <CBSwitch v-model="ok" 
        style="--cb-switch-on-color: #13ce66; --cb-switch-off-color: #ff4949"
        active-text='是' 
        inactive-text='否'
        active-value='yes'
        inactive-value='no'
      />
      <p>value：{{ ok }}</p>
    </div>
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}
mt-2{
  margin-top: 20px;
}
</style>`,g={class:"mt-2"},L=X({__name:"custom-value",setup(f){const l=u(!1),i=u("yes");return(e,s)=>(p(),v("main",null,[a("div",null,[t(n(d),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o),"active-text":"Y","inactive-text":"N"},null,8,["modelValue"]),a("p",null,"value："+y(l.value),1)]),a("div",g,[t(n(d),{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),style:{"--cb-switch-on-color":"#13ce66","--cb-switch-off-color":"#ff4949"},"active-text":"是","inactive-text":"否","active-value":"yes","inactive-value":"no"},null,8,["modelValue"]),a("p",null,"value："+y(i.value),1)])]))}}),k=w(L,[["__scopeId","data-v-91bf1a0e"]]),M=`<script setup lang="ts">
  import { ref } from 'vue';
  import {CBSwitch} from '@carrybrick/vue'
  const switchState = ref(false)
  const ok = ref(false)

<\/script>

<template>
  <main>
    <CBSwitch v-model="switchState" />
    <CBSwitch v-model="ok" 
    class="ml-2"
    style="--cb-switch-on-color: #13ce66; --cb-switch-off-color: #ff4949"/>
  </main>
</template>

<style scoped>
.ml-2{
  margin-left: 20px;
}

</style>`,T=X({__name:"basic",setup(f){const l=u(!1),i=u(!1);return(e,s)=>(p(),v("main",null,[t(n(d),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=o=>l.value=o)},null,8,["modelValue"]),t(n(d),{modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=o=>i.value=o),class:"ml-2",style:{"--cb-switch-on-color":"#13ce66","--cb-switch-off-color":"#ff4949"}},null,8,["modelValue"])]))}}),A=w(T,[["__scopeId","data-v-b85c5947"]]),E=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"vue/switch.md","filePath":"vue/switch.md"}'),J={name:"vue/switch.md"},R=Object.assign(J,{setup(f){const l=u(!0);return(i,e)=>{const s=x("ClientOnly");return p(),v("div",null,[e[4]||(e[4]=Y('<h1 id="switch-开关" tabindex="-1">Switch 开关 <a class="header-anchor" href="#switch-开关" aria-label="Permalink to &quot;Switch 开关&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3><p>使用css变量<code>--cb-switch-on-color</code>和<code>--cb-switch-off-color</code>控制Switch的颜色</p>',4)),b(t(n(V),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(n(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(M)},{vue:r(()=>[t(A)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=a("h3",{id:"拓展value",tabindex:"-1"},[c("拓展value "),a("a",{class:"header-anchor",href:"#拓展value","aria-label":'Permalink to "拓展value"'},"​")],-1)),e[6]||(e[6]=a("p",null,[c("通过"),a("code",null,"activeValue"),c("和"),a("code",null,"inactiveValue"),c("来设置Switch的值")],-1)),b(t(n(V),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(n(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:n(Z)},{vue:r(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h3",{id:"尺寸",tabindex:"-1"},[c("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),b(t(n(V),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(n(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:n(C)},{vue:r(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=a("h3",{id:"禁用",tabindex:"-1"},[c("禁用 "),a("a",{class:"header-anchor",href:"#禁用","aria-label":'Permalink to "禁用"'},"​")],-1)),b(t(n(V),null,null,512),[[h,l.value]]),t(s,null,{default:r(()=>[t(n(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:n(B)},{vue:r(()=>[t(W)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=a("h2",{id:"功能实现",tabindex:"-1"},[c("功能实现 "),a("a",{class:"header-anchor",href:"#功能实现","aria-label":'Permalink to "功能实现"'},"​")],-1)),e[10]||(e[10]=a("ol",null,[a("li",null,"双向绑定数据，modelValue支持boolean、number和string"),a("li",null,"activeText, inactiveText 文字描述"),a("li",null,"size 大小"),a("li",null,"通过css变量控制颜色"),a("li",null,"disabled")],-1))])}}});export{E as __pageData,R as default};
