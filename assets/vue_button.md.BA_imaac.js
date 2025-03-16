import{d as C,c as a,o as u,j as t,G as s,k as i,w as l,a as e,_ as c,p as _,C as g,af as p,ag as B}from"./chunks/framework.d1ikmuyC.js";import{_ as d,d as y,f}from"./chunks/index.C2pdwt3j.js";import"./chunks/theme.CDaA6osb.js";const b=`<script setup lang="ts">
  import {CBButton} from '@carrybrick/vue'
  
<\/script>

<template>
  <main>
    <div >
      <h3>设置icon</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton icon="Plus">
            增加 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" icon="Minus">
            减少 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain icon="CirclePlus">
            更多 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large" icon="Search">
            搜索 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default" icon="Delete">
            删除 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small" icon="Refresh">
            更新 
          </CBButton>
        </div>
      </div>
    </div>
    <div >
      <h3>设置loading</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain loading>
            loading 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton  round loading>
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" round loading>
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain round loading >
          </CBButton>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>  
h3 {
  margin-bottom: 10px;
}
.row {
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
</style>`,w={class:"row"},X={class:"mr-10"},x={class:"mr-10"},N={class:"mr-10"},$={class:"mr-10"},W={class:"mr-10"},z={class:"mr-10"},D={class:"row"},V={class:"mr-10"},Y={class:"mr-10"},Z={class:"mr-10"},M={class:"mr-10"},L={class:"mr-10"},k={class:"mr-10"},R=C({__name:"icon-btn",setup(m){return(r,n)=>(u(),a("main",null,[t("div",null,[n[6]||(n[6]=t("h3",null,"设置icon",-1)),t("div",w,[t("div",X,[s(i(d),{icon:"Plus"},{default:l(()=>n[0]||(n[0]=[e(" 增加 ")])),_:1})]),t("div",x,[s(i(d),{type:"primary",icon:"Minus"},{default:l(()=>n[1]||(n[1]=[e(" 减少 ")])),_:1})]),t("div",N,[s(i(d),{type:"primary",plain:"",icon:"CirclePlus"},{default:l(()=>n[2]||(n[2]=[e(" 更多 ")])),_:1})]),t("div",$,[s(i(d),{type:"primary",size:"large",icon:"Search"},{default:l(()=>n[3]||(n[3]=[e(" 搜索 ")])),_:1})]),t("div",W,[s(i(d),{type:"primary",size:"default",icon:"Delete"},{default:l(()=>n[4]||(n[4]=[e(" 删除 ")])),_:1})]),t("div",z,[s(i(d),{type:"primary",size:"small",icon:"Refresh"},{default:l(()=>n[5]||(n[5]=[e(" 更新 ")])),_:1})])])]),t("div",null,[n[10]||(n[10]=t("h3",null,"设置loading",-1)),t("div",D,[t("div",V,[s(i(d),{loading:""},{default:l(()=>n[7]||(n[7]=[e(" loading ")])),_:1})]),t("div",Y,[s(i(d),{type:"primary",loading:""},{default:l(()=>n[8]||(n[8]=[e(" loading ")])),_:1})]),t("div",Z,[s(i(d),{type:"primary",plain:"",loading:""},{default:l(()=>n[9]||(n[9]=[e(" loading ")])),_:1})]),t("div",M,[s(i(d),{round:"",loading:""})]),t("div",L,[s(i(d),{type:"primary",round:"",loading:""})]),t("div",k,[s(i(d),{type:"primary",plain:"",round:"",loading:""})])])])]))}}),h=c(R,[["__scopeId","data-v-90606264"]]),J=`<script setup lang="ts">
  import {CBButton} from '@carrybrick/vue'
<\/script>

<template>
  <main>
    <div >
      <h3>设置size</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton size="large">
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton >
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton size="small">
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large">
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default">
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small">
            info 
          </CBButton>
        </div>
      </div>
    </div>
    <div >
      <h3>设置round</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton size="large" round>
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton round>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton size="small" round>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="large" round>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="default" round>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" size="small" round @click="()=>console.log('click1')">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置disabled</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton disabled>
            default 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton type="primary" disabled>
            primary 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton type="success" disabled>
            success 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton plain disabled>
            warning 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton plain type="primary" disabled>
            danger 
          </CBButton>
        </div>
        <div class="mr-10">
          <CBButton text type="primary" disabled @click="()=>console.log('click')">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    
    
  </main>
</template>

<style scoped>  
h3 {
  margin-bottom: 10px;
}
.row {
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
</style>`,A={class:"row"},j={class:"mr-10"},T={class:"mr-10"},E={class:"mr-10"},G={class:"mr-10"},S={class:"mr-10"},q={class:"mr-10"},F={class:"row"},P={class:"mr-10"},H={class:"mr-10"},O={class:"mr-10"},I={class:"mr-10"},Q={class:"mr-10"},K={class:"mr-10"},U={class:"row"},nn={class:"mr-10"},tn={class:"mr-10"},sn={class:"mr-10"},ln={class:"mr-10"},dn={class:"mr-10"},en={class:"mr-10"},on=C({__name:"advance",setup(m){return(r,n)=>(u(),a("main",null,[t("div",null,[n[8]||(n[8]=t("h3",null,"设置size",-1)),t("div",A,[t("div",j,[s(i(d),{size:"large"},{default:l(()=>n[2]||(n[2]=[e(" default ")])),_:1})]),t("div",T,[s(i(d),null,{default:l(()=>n[3]||(n[3]=[e(" primary ")])),_:1})]),t("div",E,[s(i(d),{size:"small"},{default:l(()=>n[4]||(n[4]=[e(" success ")])),_:1})]),t("div",G,[s(i(d),{type:"primary",size:"large"},{default:l(()=>n[5]||(n[5]=[e(" warning ")])),_:1})]),t("div",S,[s(i(d),{type:"primary",size:"default"},{default:l(()=>n[6]||(n[6]=[e(" danger ")])),_:1})]),t("div",q,[s(i(d),{type:"primary",size:"small"},{default:l(()=>n[7]||(n[7]=[e(" info ")])),_:1})])])]),t("div",null,[n[15]||(n[15]=t("h3",null,"设置round",-1)),t("div",F,[t("div",P,[s(i(d),{size:"large",round:""},{default:l(()=>n[9]||(n[9]=[e(" default ")])),_:1})]),t("div",H,[s(i(d),{round:""},{default:l(()=>n[10]||(n[10]=[e(" primary ")])),_:1})]),t("div",O,[s(i(d),{size:"small",round:""},{default:l(()=>n[11]||(n[11]=[e(" success ")])),_:1})]),t("div",I,[s(i(d),{type:"primary",size:"large",round:""},{default:l(()=>n[12]||(n[12]=[e(" warning ")])),_:1})]),t("div",Q,[s(i(d),{type:"primary",size:"default",round:""},{default:l(()=>n[13]||(n[13]=[e(" danger ")])),_:1})]),t("div",K,[s(i(d),{type:"primary",size:"small",round:"",onClick:n[0]||(n[0]=()=>console.log("click1"))},{default:l(()=>n[14]||(n[14]=[e(" info ")])),_:1})])])]),t("div",null,[n[22]||(n[22]=t("h3",null,"设置disabled",-1)),t("div",U,[t("div",nn,[s(i(d),{disabled:""},{default:l(()=>n[16]||(n[16]=[e(" default ")])),_:1})]),t("div",tn,[s(i(d),{type:"primary",disabled:""},{default:l(()=>n[17]||(n[17]=[e(" primary ")])),_:1})]),t("div",sn,[s(i(d),{type:"success",disabled:""},{default:l(()=>n[18]||(n[18]=[e(" success ")])),_:1})]),t("div",ln,[s(i(d),{plain:"",disabled:""},{default:l(()=>n[19]||(n[19]=[e(" warning ")])),_:1})]),t("div",dn,[s(i(d),{plain:"",type:"primary",disabled:""},{default:l(()=>n[20]||(n[20]=[e(" danger ")])),_:1})]),t("div",en,[s(i(d),{text:"",type:"primary",disabled:"",onClick:n[1]||(n[1]=()=>console.log("click"))},{default:l(()=>n[21]||(n[21]=[e(" info ")])),_:1})])])])]))}}),rn=c(on,[["__scopeId","data-v-2af7558a"]]),an=`<script setup lang="ts">
  import {CBButton} from '@carrybrick/vue'
<\/script>

<template>
  <main>
    <div>
      <h3>设置type</h3>
      <div class="row">
        <div class="mr-10">
          <CBButton >
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary">
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success">
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning">
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger">
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info">
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置plain</h3>
      <div class="row">
        <div class="mr-10" plain>
          <CBButton >
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" plain>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success" plain>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning" plain>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger" plain>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info" plain>
            info 
          </CBButton>
        </div>
      </div>
    </div>

    <div >
      <h3>设置text</h3>
      <div class="row">
        <div class="mr-10" >
          <CBButton text>
            default 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="primary" text>
            primary 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="success" plain text>
            success 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="warning" plain text>
            warning 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="danger" plain text>
            danger 
          </CBButton>
        </div>

        <div class="mr-10">
          <CBButton type="info" plain text>
            info 
          </CBButton>
        </div>
      </div>
    </div>
    
  </main>
</template>

<style scoped>  
h3 {
  margin-bottom: 10px;
}
.row {
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
</style>`,un={class:"row"},mn={class:"mr-10"},vn={class:"mr-10"},pn={class:"mr-10"},Bn={class:"mr-10"},yn={class:"mr-10"},fn={class:"mr-10"},Cn={class:"row"},cn={class:"mr-10",plain:""},_n={class:"mr-10"},gn={class:"mr-10"},bn={class:"mr-10"},wn={class:"mr-10"},Xn={class:"mr-10"},xn={class:"row"},Nn={class:"mr-10"},$n={class:"mr-10"},Wn={class:"mr-10"},zn={class:"mr-10"},Dn={class:"mr-10"},Vn={class:"mr-10"},Yn=C({__name:"basic",setup(m){return(r,n)=>(u(),a("main",null,[t("div",null,[n[6]||(n[6]=t("h3",null,"设置type",-1)),t("div",un,[t("div",mn,[s(i(d),null,{default:l(()=>n[0]||(n[0]=[e(" default ")])),_:1})]),t("div",vn,[s(i(d),{type:"primary"},{default:l(()=>n[1]||(n[1]=[e(" primary ")])),_:1})]),t("div",pn,[s(i(d),{type:"success"},{default:l(()=>n[2]||(n[2]=[e(" success ")])),_:1})]),t("div",Bn,[s(i(d),{type:"warning"},{default:l(()=>n[3]||(n[3]=[e(" warning ")])),_:1})]),t("div",yn,[s(i(d),{type:"danger"},{default:l(()=>n[4]||(n[4]=[e(" danger ")])),_:1})]),t("div",fn,[s(i(d),{type:"info"},{default:l(()=>n[5]||(n[5]=[e(" info ")])),_:1})])])]),t("div",null,[n[13]||(n[13]=t("h3",null,"设置plain",-1)),t("div",Cn,[t("div",cn,[s(i(d),null,{default:l(()=>n[7]||(n[7]=[e(" default ")])),_:1})]),t("div",_n,[s(i(d),{type:"primary",plain:""},{default:l(()=>n[8]||(n[8]=[e(" primary ")])),_:1})]),t("div",gn,[s(i(d),{type:"success",plain:""},{default:l(()=>n[9]||(n[9]=[e(" success ")])),_:1})]),t("div",bn,[s(i(d),{type:"warning",plain:""},{default:l(()=>n[10]||(n[10]=[e(" warning ")])),_:1})]),t("div",wn,[s(i(d),{type:"danger",plain:""},{default:l(()=>n[11]||(n[11]=[e(" danger ")])),_:1})]),t("div",Xn,[s(i(d),{type:"info",plain:""},{default:l(()=>n[12]||(n[12]=[e(" info ")])),_:1})])])]),t("div",null,[n[20]||(n[20]=t("h3",null,"设置text",-1)),t("div",xn,[t("div",Nn,[s(i(d),{text:""},{default:l(()=>n[14]||(n[14]=[e(" default ")])),_:1})]),t("div",$n,[s(i(d),{type:"primary",text:""},{default:l(()=>n[15]||(n[15]=[e(" primary ")])),_:1})]),t("div",Wn,[s(i(d),{type:"success",plain:"",text:""},{default:l(()=>n[16]||(n[16]=[e(" success ")])),_:1})]),t("div",zn,[s(i(d),{type:"warning",plain:"",text:""},{default:l(()=>n[17]||(n[17]=[e(" warning ")])),_:1})]),t("div",Dn,[s(i(d),{type:"danger",plain:"",text:""},{default:l(()=>n[18]||(n[18]=[e(" danger ")])),_:1})]),t("div",Vn,[s(i(d),{type:"info",plain:"",text:""},{default:l(()=>n[19]||(n[19]=[e(" info ")])),_:1})])])])]))}}),Zn=c(Yn,[["__scopeId","data-v-2c939d15"]]),hn=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"vue/button.md","filePath":"vue/button.md"}'),Mn={name:"vue/button.md"},Jn=Object.assign(Mn,{setup(m){const r=_(!0);return(n,o)=>{const v=g("ClientOnly");return u(),a("div",null,[o[3]||(o[3]=t("h1",{id:"button-按钮",tabindex:"-1"},[e("Button 按钮 "),t("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1)),o[4]||(o[4]=t("h2",{id:"代码演示",tabindex:"-1"},[e("代码演示 "),t("a",{class:"header-anchor",href:"#代码演示","aria-label":'Permalink to "代码演示"'},"​")],-1)),p(s(i(y),null,null,512),[[B,r.value]]),s(v,null,{default:l(()=>[s(i(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[0]||(o[0]=()=>{r.value=!1}),vueCode:i(an)},{vue:l(()=>[s(Zn)]),_:1},8,["vueCode"])]),_:1}),p(s(i(y),null,null,512),[[B,r.value]]),s(v,null,{default:l(()=>[s(i(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[1]||(o[1]=()=>{r.value=!1}),vueCode:i(J)},{vue:l(()=>[s(rn)]),_:1},8,["vueCode"])]),_:1}),p(s(i(y),null,null,512),[[B,r.value]]),s(v,null,{default:l(()=>[s(i(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:o[2]||(o[2]=()=>{r.value=!1}),vueCode:i(b)},{vue:l(()=>[s(h)]),_:1},8,["vueCode"])]),_:1})])}}});export{hn as __pageData,Jn as default};
