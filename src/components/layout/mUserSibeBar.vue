<template lang="html">
  <Menu active-name="1-1" width="auto" :open-names="['1']" :accordion='false'>
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-navigate"></Icon>
              用户信息
          </template>
          <router-link to='userInfo'>
            <Menu-item name="1-1">账户信息</Menu-item>
          </router-link>
          <router-link to="passwordChange">
            <Menu-item name="1-2">密码修改</Menu-item>
          </router-link>
          <router-link to="phoneChange">
            <Menu-item name="1-3">手机修改</Menu-item>
          </router-link>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-analytics"></Icon>
              产品订购
          </template>
          <router-link to="order">
            <Menu-item name="2-1">产品订购</Menu-item>
          </router-link>
      </Submenu>
  </Menu>
</template>

<script>
export default {
}
</script>

<style lang="css">
a{
  color: #666
}
</style>
