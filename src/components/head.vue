
<template><div>
    <van-count-down :time="time" />
    </div></template>

<script>

export default {

  name: 'HomeHeader',
    data() {
    return {
      time:  3 * 60 * 1000,
    };
  },


}
</script>