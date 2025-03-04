import{f as u,Q as f}from"./chunks/index.Vh-FGnur.js";import{d as h,p as d,c as v,o as p,G as l,k as n,_ as V,j as t,t as N,C as X,ae as x,w as c,a as r}from"./chunks/framework.QLlebzOX.js";import"./chunks/theme.Bzs1QGvG.js";const y=`<script setup lang="ts">
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

</style>`,w=h({__name:"disabled",setup(b){const o=d(!0),e=d(!1);return(i,s)=>(p(),v("main",null,[l(n(u),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),disabled:""},null,8,["modelValue"]),l(n(u),{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value=a),class:"ml-2"},null,8,["modelValue"])]))}}),Y=V(w,[["__scopeId","data-v-f446910b"]]),B=`<script setup lang="ts">
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

</style>`,_=h({__name:"size",setup(b){const o=d(!1),e=d("yes"),i=d("yes");return(s,a)=>(p(),v("main",null,[l(n(u),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=m=>o.value=m),"active-text":"Y","inactive-text":"N",size:"small",class:"ml-2"},null,8,["modelValue"]),l(n(u),{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=m=>e.value=m),"active-text":"Y","inactive-text":"N",class:"ml-2"},null,8,["modelValue"]),l(n(u),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=m=>i.value=m),"active-text":"Y","inactive-text":"N",size:"large",class:"ml-2"},null,8,["modelValue"])]))}}),W=V(_,[["__scopeId","data-v-c265d2e7"]]),C=`<script setup lang="ts">
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
</style>`,Z={class:"mt-2"},D=h({__name:"custom-value",setup(b){const o=d(!1),e=d("yes");return(i,s)=>(p(),v("main",null,[t("div",null,[l(n(u),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a),"active-text":"Y","inactive-text":"N"},null,8,["modelValue"]),t("p",null,"value："+N(o.value),1)]),t("div",Z,[l(n(u),{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value=a),style:{"--cb-switch-on-color":"#13ce66","--cb-switch-off-color":"#ff4949"},"active-text":"是","inactive-text":"否","active-value":"yes","inactive-value":"no"},null,8,["modelValue"]),t("p",null,"value："+N(e.value),1)])]))}}),S=V(D,[["__scopeId","data-v-91bf1a0e"]]),g=`<script setup lang="ts">
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

</style>`,L=h({__name:"basic",setup(b){const o=d(!1),e=d(!1);return(i,s)=>(p(),v("main",null,[l(n(u),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=a=>o.value=a)},null,8,["modelValue"]),l(n(u),{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=a=>e.value=a),class:"ml-2",style:{"--cb-switch-on-color":"#13ce66","--cb-switch-off-color":"#ff4949"}},null,8,["modelValue"])]))}}),k=V(L,[["__scopeId","data-v-b85c5947"]]),z=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"vue/switch.md","filePath":"vue/switch.md"}'),T={name:"vue/switch.md"},G=Object.assign(T,{setup(b){return(o,e)=>{const i=X("ClientOnly");return p(),v("div",null,[e[0]||(e[0]=x('<h1 id="switch-开关" tabindex="-1">Switch 开关 <a class="header-anchor" href="#switch-开关" aria-label="Permalink to &quot;Switch 开关&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3><p>使用css变量<code>--cb-switch-on-color</code>和<code>--cb-switch-off-color</code>控制Switch的颜色</p>',4)),l(i,null,{default:c(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(g)},{vue:c(()=>[l(k)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=t("h3",{id:"拓展value",tabindex:"-1"},[r("拓展value "),t("a",{class:"header-anchor",href:"#拓展value","aria-label":'Permalink to "拓展value"'},"​")],-1)),e[2]||(e[2]=t("p",null,[r("通过"),t("code",null,"activeValue"),r("和"),t("code",null,"inactiveValue"),r("来设置Switch的值")],-1)),l(i,null,{default:c(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(C)},{vue:c(()=>[l(S)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h3",{id:"尺寸",tabindex:"-1"},[r("尺寸 "),t("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),l(i,null,{default:c(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(B)},{vue:c(()=>[l(W)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h3",{id:"禁用",tabindex:"-1"},[r("禁用 "),t("a",{class:"header-anchor",href:"#禁用","aria-label":'Permalink to "禁用"'},"​")],-1)),l(i,null,{default:c(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(y)},{vue:c(()=>[l(Y)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=t("h2",{id:"功能实现",tabindex:"-1"},[r("功能实现 "),t("a",{class:"header-anchor",href:"#功能实现","aria-label":'Permalink to "功能实现"'},"​")],-1)),e[6]||(e[6]=t("ol",null,[t("li",null,"双向绑定数据，modelValue支持boolean、number和string"),t("li",null,"activeText, inactiveText 文字描述"),t("li",null,"size 大小"),t("li",null,"通过css变量控制颜色"),t("li",null,"disabled")],-1))])}}});export{z as __pageData,G as default};
