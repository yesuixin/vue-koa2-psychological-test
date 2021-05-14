<template>
  <div>
  
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
   
  </div>


</template>
<script>
  // const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
 
    
        cities: ['上海', '北京', '广州', '深圳']
      };
    }
  }
</script>