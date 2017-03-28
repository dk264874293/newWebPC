<template lang="html">
  <Menu active-name="1-2" width="auto" :open-names="['1']">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-navigate"></Icon>
              市场定位
          </template>
          <router-link to="/guidance/market/navOneOne">
            <Menu-item name="1-1">
              市场概览
            </Menu-item>
          </router-link>
          <router-link to="/guidance/market/navOneTwo">
            <Menu-item name="1-2">
              品类规划
            </Menu-item>
          </router-link>
          <router-link to="/guidance/market/navOneThree">
            <Menu-item name="1-3">价格结构</Menu-item>
          </router-link>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-keypad"></Icon>
              产品开发
          </template>
          <Menu-item name="2-1">选项 1</Menu-item>
          <Menu-item name="2-2">选项 2</Menu-item>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="ios-analytics"></Icon>
              商品企划
          </template>
          <Menu-item name="3-1">选项 1</Menu-item>
          <Menu-item name="3-2">选项 2</Menu-item>
      </Submenu>
      <Submenu name="4">
          <template slot="title">
              <Icon type="ios-analytics"></Icon>
              店铺运营
          </template>
          <Menu-item name="4-1">选项 1</Menu-item>
          <Menu-item name="4-2">选项 2</Menu-item>
      </Submenu>
  </Menu>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
