<template>
    <div class="layout">
      <mNavBar></mNavBar>
        <div class="layout-content">
            <Row>
                  <transition appear>
                    <router-view ></router-view>
                  </transition>
            </Row>
        </div>
        <mFooterBar></mFooterBar>
    </div>
</template>
<script>
    import {mNavBar,mFooterBar} from '@/components/layout'
    export default {
      data(){
        return {
          paramsid : this.$store
        }
      },
      components:{
        mNavBar,
        mFooterBar
      },
      methods:{
        showStore(){
          console.log(this.paramsid)
        }
      },
      mounted:function(){
        this.showStore()
      }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }

</style>
