<template lang="html">
          <Menu :theme="'light'" active-name="1">
            <router-link to='/follow/store'>
              <Menu-item name="1">
                  <Icon type="home"></Icon>
                  关注的店铺
              </Menu-item>
            </router-link>
            <router-link to='/follow/commodity'>
              <Menu-item name="2">
                  <Icon type="ios-pricetags"></Icon>
                  关注的商品
              </Menu-item>
            </router-link>
            <router-link to='/follow/element'>
              <Menu-item name="3">
                  <Icon type="ios-keypad"></Icon>
                  关注的元素
              </Menu-item>
            </router-link>
          </Menu>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
