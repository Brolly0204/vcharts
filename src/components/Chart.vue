<template>
  <div>
    <button @click="changeChart">change chart</button>
    <ve-chart
      :data="chartData"
      :settings="chartSettings"
    ></ve-chart>
  </div>
</template>

<script>
export default {
  data() {
    this.typeArr = ['line', 'histogram', 'pie', 'ring', 'bar', 'funnel', 'radar', 'waterfall']
    this.index = 0
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      chartSettings: {
        dataType: 'KMB',
        type: this.typeArr[this.index]
      }
    }
  },
  methods: {
    changeChart() {
      this.index++
      if (this.index >= this.typeArr.length) this.index = 0
      this.chartSettings = { type: this.typeArr[this.index] }
    }
  }
}
</script>