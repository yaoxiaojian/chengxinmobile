<template lang="html">
    <Panel title="车龄" :class="$style.panel">
        <select :class="$style.caryear" name="">
          <option value="">车龄</option>
          <option value="1-3年">1-3年</option>
          <option value="3-5年">3-5年</option>
          <option value="5-8年">5-8年</option>
          <option value="8-10年">8-10年</option>
          <option value="10年以上">10年以上</option>
        </select>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel($linewidth:370px);
  background: #f18101;
  padding-top: 50px;
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
