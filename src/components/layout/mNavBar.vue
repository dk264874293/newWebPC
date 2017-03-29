<template lang="html">
  <Menu mode="horizontal" theme="light" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
          <router-link to='/'>
            <Menu-item name="1">
                <Icon type="ios-navigate"></Icon>
                决策指导
            </Menu-item>
          </router-link>
          <router-link to='/follow/store'>
            <Menu-item name="2">
                <Icon type="heart"></Icon>
                我的关注
            </Menu-item>
          </router-link>
      </div>
      <div class="layout-ico">
        <ul class="clearFloat">
          <li>
            <Icon type="ios-cart"></Icon>
            产品订购
          </li>
          <li>
            <Icon type="ios-cart"></Icon>
            帮助中心
          </li>
          <li>
            <Icon type="ios-person"></Icon>
            zsj111
          </li>
        </ul>
      </div>
  </Menu>
</template>

<script>
export default {
  name:'mNavBar',
  data(){
    return {

    }
  }
}
</script>

<style lang="css">
.layout-logo{
    width: 203px;
    height: 32px;
    background-image: url(../../assets/img/logo-1.png);
    background-size: cover;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
  float: left;
    width: 420px;
    margin: 0 auto;
    margin-left: 50px;
  }
  .layout-ico{
    float: right;
    margin-right: 20px;
  }
  .layout-ico li{
    float: left;
    margin-right: 20px;
    font-size: 14px;
    line-height: 32px;
  }
</style>
