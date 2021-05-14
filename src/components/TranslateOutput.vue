<template>
 <!-- 显示组件 -->
 <div id='translateOutput'>
  {{translatedText}}
 </div>
</template>
  
<script>
export default {
 name: 'translateOutput',
 props:[
  'translatedText'
 ],
 data () {
  return {
    
  }
 }
}
</script>
  
<style scoped>
  
</style>