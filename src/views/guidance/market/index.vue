<template lang="html">
  <div>
    <guidanceBar></guidanceBar>
    <router-view></router-view>
  </div>
</template>

<script>
import {guidanceBar} from '@/components/layout/assembly'
export default {
  data(){
    return {
    }
  },
  components:{
    guidanceBar
  }
}
</script>

<style lang="css">
</style>
