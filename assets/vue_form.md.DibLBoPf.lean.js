import{d as _,p as u,ah as g,c as C,o as v,G as e,k as t,w as r,a as d,C as F,ae as I,af as y,j as o,ag as h}from"./chunks/framework.d1ikmuyC.js";import{c as V,e as s,g as c,h as x,_ as B,d as k,f as T}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const q=`<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import {CBForm, CBFormItem, CBInput, CBTextarea, CBButton } from '@carrybrick/vue'
  import type { FormRules, FormInstance } from '@carrybrick/vue'
  
  interface FormModel {
    name: string
    email: string
    desc: string
    
  }
  const model = ref<FormModel>({
    name: '',
    email: '',
    desc: ''
  })
  const rules = reactive<FormRules<FormModel>>({
    name: [
      {type:'string', required:true, message:'必填', trigger: 'blur'},
      {min: 3, max: 5, message:'长度在3到5之间', trigger: 'blur'}
    ],
    email: [
      {type:'string', required:true, message:'必填'},
      {min: 3, max: 5, message:'长度在3到5之间'}
    ],
    desc: [
    {type:'string', required:true, message:'必填', trigger: 'blur'},
    ]
  })

  const formEl = ref<FormInstance>()

  const onSubmit = async ()=>{
    if(!formEl.value)
      return;
    const {valid} = await formEl.value!.validate()
    if(valid){
      console.log('start');
    }
  }
<\/script>

<template>
  <main>
    <CBForm :model="model" :rules="rules" label-positon="left" ref="formEl">
      <CBFormItem label="姓名" prop="name">
        <CBInput v-model="model.name"></CBInput>
      </CBFormItem>
      <CBFormItem label="邮箱" prop="email">
        <CBInput v-model="model.email"></CBInput>
      </CBFormItem>
      <CBFormItem label="描述" prop="desc">
        <CBTextarea v-model="model.desc"></CBTextarea>
      </CBFormItem>
      
      <CBFormItem >
        <CBButton type="primary" @click="onSubmit">提交</CBButton>
        <CBButton native-type="reset">重置</CBButton>
      </CBFormItem>
    </CBForm>


    <!-- <CBForm :model="model" :rules="rules" label-positon="top">
      <CBFormItem label="填写1">
        <CBInput></CBInput>
      </CBFormItem>
      <CBFormItem label="填写2">
        <CBInput></CBInput>
      </CBFormItem>
    </CBForm> -->


  </main>
</template>`,N=_({__name:"basic",setup(b){const a=u({name:"",email:"",desc:""}),p=g({name:[{type:"string",required:!0,message:"必填",trigger:"blur"},{min:3,max:5,message:"长度在3到5之间",trigger:"blur"}],email:[{type:"string",required:!0,message:"必填"},{min:3,max:5,message:"长度在3到5之间"}],desc:[{type:"string",required:!0,message:"必填",trigger:"blur"}]}),n=u(),i=async()=>{if(!n.value)return;const{valid:f}=await n.value.validate();f&&console.log("start")};return(f,l)=>(v(),C("main",null,[e(t(V),{model:a.value,rules:p,"label-positon":"left",ref_key:"formEl",ref:n},{default:r(()=>[e(t(s),{label:"姓名",prop:"name"},{default:r(()=>[e(t(c),{modelValue:a.value.name,"onUpdate:modelValue":l[0]||(l[0]=m=>a.value.name=m)},null,8,["modelValue"])]),_:1}),e(t(s),{label:"邮箱",prop:"email"},{default:r(()=>[e(t(c),{modelValue:a.value.email,"onUpdate:modelValue":l[1]||(l[1]=m=>a.value.email=m)},null,8,["modelValue"])]),_:1}),e(t(s),{label:"描述",prop:"desc"},{default:r(()=>[e(t(x),{modelValue:a.value.desc,"onUpdate:modelValue":l[2]||(l[2]=m=>a.value.desc=m)},null,8,["modelValue"])]),_:1}),e(t(s),null,{default:r(()=>[e(t(B),{type:"primary",onClick:i},{default:r(()=>l[3]||(l[3]=[d("提交")])),_:1}),e(t(B),{"native-type":"reset"},{default:r(()=>l[4]||(l[4]=[d("重置")])),_:1})]),_:1})]),_:1},8,["model","rules"])]))}}),w=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"vue/form.md","filePath":"vue/form.md"}'),A={name:"vue/form.md"},E=Object.assign(A,{setup(b){const a=u(!0);return(p,n)=>{const i=F("ClientOnly");return v(),C("div",null,[n[1]||(n[1]=I("",3)),y(e(t(k),null,null,512),[[h,a.value]]),e(i,null,{default:r(()=>[e(t(T),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),vueCode:t(q)},{vue:r(()=>[e(N)]),_:1},8,["vueCode"])]),_:1}),n[2]||(n[2]=o("h2",{id:"api",tabindex:"-1"},[d("API "),o("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1)),n[3]||(n[3]=o("ol",null,[o("li",null,"支持Form和FormItem两个组件"),o("li",null,"FormItem提了label、排版以及校验功能"),o("li",null,"Form提供了校验、重置、获取数据等功能")],-1))])}}});export{w as __pageData,E as default};
