<template>
<!-- 表单组件 -->
 <div id="translateForm">
  <form @submit="formSubmit" >
   <!-- <input type="text" placeholder='输入需要翻译的内容' v-model="textTotranslate"> -->
   <select name="" id="" v-model="language">
    <option value="en">English</option>
    <option value="ru">Russian</option>
    <option value="ko">Korean</option>
   </select>
   <input type="submit" value="翻译">
  </form>
 </div>
</template>
  
<script>
export default {
 name: 'translateForm',
 data () {
  return {

   //用户选择的语言
   language:""
  }
 },
 methods:{
  //点击翻译传给父元素
  formSubmit(e){
      var textTotranslate = this.detail.city;
   this.$emit("formSubmit",this.textTotranslate,this.language)
   e.preventDefault();
  }
 }
}
</script>
  
<style scoped>
  
</style>