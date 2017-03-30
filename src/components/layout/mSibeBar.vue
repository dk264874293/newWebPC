<template lang="html">
  <Menu active-name="1-1" width="auto" :open-names="['1','2','3']" :accordion='false'>
      <Submenu name="1">
          <template slot="title">
              <Icon type="android-locate"></Icon>
              市场定位
          </template>
          <router-link to="/guidance/market/overview">
            <Menu-item name="1-1">
              市场概览
            </Menu-item>
          </router-link>
          <router-link to="/guidance/market/planning">
            <Menu-item name="1-2">
              品类规划
            </Menu-item>
          </router-link>
          <router-link to="/guidance/market/structure">
            <Menu-item name="1-3">价格结构</Menu-item>
          </router-link>
      </Submenu>
      <!-- <Submenu name="2">
          <template slot="title">
              <Icon type="ios-keypad"></Icon>
              产品开发
          </template>
          <Menu-item name="2-1">选项 1</Menu-item>
          <Menu-item name="2-2">选项 2</Menu-item>
      </Submenu> -->
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-pricetags"></Icon>
              商品企划
          </template>
          <router-link to="/guidance/commodity/element">
            <Menu-item name="2-1">风尚元素</Menu-item>
          </router-link>
          <router-link to="/guidance/commodity/space">
            <Menu-item name="2-2">价格空间</Menu-item>
          </router-link>
          <router-link to="/guidance/commodity/chooseModel">
            <Menu-item name="2-3">商品选款</Menu-item>
          </router-link>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="arrow-graph-up-right"></Icon>
              店铺运营
          </template>
          <router-link to="/guidance/operating/monitoring">
            <Menu-item name="3-1">竞店监控</Menu-item>
          </router-link>
          <router-link to="/guidance/operating/optimize ">
            <Menu-item name="3-2">单价优化</Menu-item>
          </router-link>
          <router-link to="/guidance/operating/warning">
            <Menu-item name="3-3">销售预警</Menu-item>
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
