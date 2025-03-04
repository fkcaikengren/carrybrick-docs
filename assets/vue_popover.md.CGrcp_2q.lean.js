import{e as u,_ as r,c as h,Q as f}from"./chunks/index.Vh-FGnur.js";import{d as B,p as _,C as c,c as p,o as m,G as l,j as n,k as o,w as t,a as i,_ as C,ae as y}from"./chunks/framework.QLlebzOX.js";import"./chunks/theme.Bzs1QGvG.js";const N=`<script setup lang="ts">
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

</style>`,P=B({__name:"content",setup(v){const d=_(null),e=()=>{var s;(s=d.value)==null||s.hide()};return(s,a)=>{const b=c("Delete");return m(),p("main",null,[l(o(u),{trigger:"click",ref_key:"popoverRef",ref:d},{reference:t(()=>[l(o(r),null,{default:t(()=>a[0]||(a[0]=[i("点击触发")])),_:1})]),default:t(()=>[n("div",null,[n("div",null,[l(o(r),{icon:"Plus",onClick:e},{default:t(()=>a[1]||(a[1]=[i("按钮1")])),_:1})]),n("div",null,[l(o(r),{icon:"Minus",onClick:e},{default:t(()=>a[2]||(a[2]=[i("按钮2")])),_:1})]),n("div",null,[l(o(r),{icon:"Refresh",onClick:e},{default:t(()=>a[3]||(a[3]=[i("按钮3")])),_:1})])])]),_:1},512),a[5]||(a[5]=n("div",{class:"ml-2"},null,-1)),l(o(u),{placement:"top"},{reference:t(()=>[l(o(r),null,{default:t(()=>[l(o(h),null,{default:t(()=>[l(b)]),_:1})]),_:1})]),default:t(()=>a[4]||(a[4]=[n("div",{style:{"background-color":"--cb-color-warning"}},[n("h5",null,"确定删除"),n("p",null,"这将删除你的内容")],-1)])),_:1})])}}}),V=C(P,[["__scopeId","data-v-88cc6c2c"]]),X=`<script setup lang="ts">
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

</style>`,k=B({__name:"basic",setup(v){return(d,e)=>(m(),p("main",null,[l(o(u),null,{reference:t(()=>[l(o(r),null,{default:t(()=>e[0]||(e[0]=[i("下面")])),_:1})]),default:t(()=>e[1]||(e[1]=[n("div",null,[n("h5",null,"title"),n("p",null,"this is content")],-1)])),_:1}),e[8]||(e[8]=n("div",{class:"ml-2"},null,-1)),l(o(u),{placement:"top"},{reference:t(()=>[l(o(r),null,{default:t(()=>e[2]||(e[2]=[i("上面")])),_:1})]),default:t(()=>e[3]||(e[3]=[n("div",null,[n("h5",null,"title"),n("p",null,"this is content")],-1)])),_:1}),e[9]||(e[9]=n("div",{class:"ml-2"},null,-1)),l(o(u),{placement:"left"},{reference:t(()=>[l(o(r),null,{default:t(()=>e[4]||(e[4]=[i("左面")])),_:1})]),default:t(()=>e[5]||(e[5]=[n("div",null,[n("h5",null,"title"),n("p",null,"this is content")],-1)])),_:1}),e[10]||(e[10]=n("div",{class:"ml-2"},null,-1)),l(o(u),{placement:"right"},{reference:t(()=>[l(o(r),null,{default:t(()=>e[6]||(e[6]=[i("右面")])),_:1})]),default:t(()=>e[7]||(e[7]=[n("div",null,[n("h5",null,"title"),n("p",null,"this is content")],-1)])),_:1})]))}}),W=C(k,[["__scopeId","data-v-819ae8a4"]]),R=JSON.parse('{"title":"Popover 弹出框","description":"","frontmatter":{},"headers":[],"relativePath":"vue/popover.md","filePath":"vue/popover.md"}'),D={name:"vue/popover.md"},T=Object.assign(D,{setup(v){return(d,e)=>{const s=c("ClientOnly");return m(),p("div",null,[e[0]||(e[0]=y("",3)),l(s,null,{default:t(()=>[l(o(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(X)},{vue:t(()=>[l(W)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=n("h3",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),n("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),l(s,null,{default:t(()=>[l(o(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(N)},{vue:t(()=>[l(V)]),_:1},8,["vueCode"])]),_:1}),e[2]||(e[2]=n("h2",{id:"实现功能",tabindex:"-1"},[i("实现功能 "),n("a",{class:"header-anchor",href:"#实现功能","aria-label":'Permalink to "实现功能"'},"​")],-1)),e[3]||(e[3]=n("ol",null,[n("li",null,"支持12个方向的弹出"),n("li",null,"支持不同的触发方式 hover | click"),n("li",null,"支持自定义内容")],-1))])}}});export{R as __pageData,T as default};
