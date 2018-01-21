<template lang="html">
  <Panel title="预算金额" :class='$style.panel'>
    <select>
        <option value="">预算金额</option>
        <option value="0-30000">3万以下</option>
        <option value="30000-50000">3-5万</option>
        <option value="50000-80000">5-8万</option>
        <option value="80000-100000">8-10万</option>
        <option value="100000-150000">10-15万</option>
        <option value="150000-200000">15-20万</option>
        <option value="200000-300000">20-30万</option>
        <option value="300000-500000">30-50万</option>
        <option value="500000-1000000">50-100万</option>
        <option value="1000000-9999999">100万以上</option>
    </select>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components:{
    Panel,
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  background: #f18101;
  padding: 50px 0 50px;
  overflow: hidden;
  select{
    width: 500px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin: 30px 0 0 70px;
  }
}
</style>
