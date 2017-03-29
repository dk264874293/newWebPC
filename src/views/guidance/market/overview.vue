<template lang="html">
  <div id="content">
    <div id="main">
    </div>
    <h1>市场概览</h1>
  </div>
</template>

<script>

export default {
  data(){
    return {
      chart: null,
      opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
       opinionData: [
         {value:26, name:'学习氛围差'},
         {value:31, name:'学习氛围一般'},
         {value:8, name:'学习氛围很好'}
       ]
    }
  },
  methods:{
    showThat(){
      this.chart = this.echarts.init(document.getElementById('main'))
      console.log(this.chart)
      this.chart.setOption({
        title: {
          text: '寝室学习氛围情况调查',
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 24,
            fontFamily: 'Helvetica',
            fontWeight: 400
          }
        },
        tooltip: {
          trigger: 'item',
          formatte: "{b}: {c} ({d}%)"
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {}
          },
          right: 15,
          top: 10
        },
        legend: {
            orient: 'vertical',
            left: 5,
            top: 10,
            data: this.opinion,
        },
        series: [
          {
            name: '寝室学习氛围',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
     })
    }
  },
  mounted(){
    this.showThat()
  }
}
</script>

<style lang="css">
#main{
  width: 600px;
  height: 600px;
}
</style>
