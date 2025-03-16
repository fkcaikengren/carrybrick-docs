import{d as b,p as h,C as _,c as p,o as v,G as l,j as e,k as o,w as t,a as r,_ as y,ae as P,af as f,ag as B}from"./chunks/framework.d1ikmuyC.js";import{j as d,_ as u,i as V,d as c,f as C}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const X=`<script setup lang="ts">
  // 更改
  import {CBPopover,CBButton, CBIcon} from '@carrybrick/vue'
  
  import { ref } from 'vue'
  const popoverRef = ref<typeof CBPopover | null>(null)
  const handleClose = ()=>{
    popoverRef.value?.hide()
  }
<\/script>

<template>
  <main>
    <CBPopover trigger="click" ref="popoverRef">
      <template #reference >
        <CBButton >点击触发</CBButton>
      </template>
      <template #default>
        <div>
          <div><CBButton icon="Plus" @click="handleClose">按钮1</CBButton></div>
          <div><CBButton icon="Minus"  @click="handleClose">按钮2</CBButton></div>
          <div><CBButton icon="Refresh"  @click="handleClose">按钮3</CBButton></div>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="top">
      <template #reference >
        <CBButton>
          <CBIcon>
            <Delete />
          </CBIcon>
        </CBButton>
      </template>
      <template #default>
        <div style="background-color: --cb-color-warning;">
          <h5>确定删除</h5>
          <p>这将删除你的内容</p>
        </div>
      </template>
    </CBPopover>
  
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.ml-2{
  margin-left: 20px;
}

</style>`,k=b({__name:"content",setup(m){const s=h(null),n=()=>{var a;(a=s.value)==null||a.hide()};return(a,i)=>{const N=_("Delete");return v(),p("main",null,[l(o(d),{trigger:"click",ref_key:"popoverRef",ref:s},{reference:t(()=>[l(o(u),null,{default:t(()=>i[0]||(i[0]=[r("点击触发")])),_:1})]),default:t(()=>[e("div",null,[e("div",null,[l(o(u),{icon:"Plus",onClick:n},{default:t(()=>i[1]||(i[1]=[r("按钮1")])),_:1})]),e("div",null,[l(o(u),{icon:"Minus",onClick:n},{default:t(()=>i[2]||(i[2]=[r("按钮2")])),_:1})]),e("div",null,[l(o(u),{icon:"Refresh",onClick:n},{default:t(()=>i[3]||(i[3]=[r("按钮3")])),_:1})])])]),_:1},512),i[5]||(i[5]=e("div",{class:"ml-2"},null,-1)),l(o(d),{placement:"top"},{reference:t(()=>[l(o(u),null,{default:t(()=>[l(o(V),null,{default:t(()=>[l(N)]),_:1})]),_:1})]),default:t(()=>i[4]||(i[4]=[e("div",{style:{"background-color":"--cb-color-warning"}},[e("h5",null,"确定删除"),e("p",null,"这将删除你的内容")],-1)])),_:1})])}}}),D=y(k,[["__scopeId","data-v-88cc6c2c"]]),W=`<script setup lang="ts">
    import {CBPopover, CBButton} from '@carrybrick/vue'
<\/script>

<template>
  <main>
    <CBPopover >
      <template #reference >
        <CBButton >下面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="top">
      <template #reference >
        <CBButton >上面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="left">
      <template #reference >
        <CBButton >左面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
    <div class="ml-2"></div>
    <CBPopover placement="right">
      <template #reference >
        <CBButton >右面</CBButton>
      </template>
      <template #default>
        <div>
          <h5>title</h5>
          <p>this is content</p>
        </div>
      </template>
    </CBPopover>
  
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.ml-2{
  margin-left: 20px;
}

</style>`,g=b({__name:"basic",setup(m){return(s,n)=>(v(),p("main",null,[l(o(d),null,{reference:t(()=>[l(o(u),null,{default:t(()=>n[0]||(n[0]=[r("下面")])),_:1})]),default:t(()=>n[1]||(n[1]=[e("div",null,[e("h5",null,"title"),e("p",null,"this is content")],-1)])),_:1}),n[8]||(n[8]=e("div",{class:"ml-2"},null,-1)),l(o(d),{placement:"top"},{reference:t(()=>[l(o(u),null,{default:t(()=>n[2]||(n[2]=[r("上面")])),_:1})]),default:t(()=>n[3]||(n[3]=[e("div",null,[e("h5",null,"title"),e("p",null,"this is content")],-1)])),_:1}),n[9]||(n[9]=e("div",{class:"ml-2"},null,-1)),l(o(d),{placement:"left"},{reference:t(()=>[l(o(u),null,{default:t(()=>n[4]||(n[4]=[r("左面")])),_:1})]),default:t(()=>n[5]||(n[5]=[e("div",null,[e("h5",null,"title"),e("p",null,"this is content")],-1)])),_:1}),n[10]||(n[10]=e("div",{class:"ml-2"},null,-1)),l(o(d),{placement:"right"},{reference:t(()=>[l(o(u),null,{default:t(()=>n[6]||(n[6]=[r("右面")])),_:1})]),default:t(()=>n[7]||(n[7]=[e("div",null,[e("h5",null,"title"),e("p",null,"this is content")],-1)])),_:1})]))}}),x=y(g,[["__scopeId","data-v-819ae8a4"]]),M=JSON.parse('{"title":"Popover 弹出框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/popover.md","filePath":"vue/popover.md"}'),L={name:"vue/popover.md"},Y=Object.assign(L,{setup(m){const s=h(!0);return(n,a)=>{const i=_("ClientOnly");return v(),p("div",null,[a[2]||(a[2]=P('<h1 id="popover-弹出框" tabindex="-1">Popover 弹出框 <a class="header-anchor" href="#popover-弹出框" aria-label="Permalink to &quot;Popover 弹出框&quot;">​</a></h1><h2 id="代码演示" tabindex="-1">代码演示 <a class="header-anchor" href="#代码演示" aria-label="Permalink to &quot;代码演示&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3>',3)),f(l(o(c),null,null,512),[[B,s.value]]),l(i,null,{default:t(()=>[l(o(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:o(W)},{vue:t(()=>[l(x)]),_:1},8,["vueCode"])]),_:1}),a[3]||(a[3]=e("h3",{id:"自定义内容",tabindex:"-1"},[r("自定义内容 "),e("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),f(l(o(c),null,null,512),[[B,s.value]]),l(i,null,{default:t(()=>[l(o(C),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:a[1]||(a[1]=()=>{s.value=!1}),vueCode:o(X)},{vue:t(()=>[l(D)]),_:1},8,["vueCode"])]),_:1}),a[4]||(a[4]=e("h2",{id:"实现功能",tabindex:"-1"},[r("实现功能 "),e("a",{class:"header-anchor",href:"#实现功能","aria-label":'Permalink to "实现功能"'},"​")],-1)),a[5]||(a[5]=e("ol",null,[e("li",null,"支持12个方向的弹出"),e("li",null,"支持不同的触发方式 hover | click"),e("li",null,"支持自定义内容")],-1))])}}});export{M as __pageData,Y as default};
