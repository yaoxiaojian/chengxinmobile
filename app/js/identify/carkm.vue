<template lang="html">
    <Panel title="行驶公里数" :class="$style.panel">
        <select :class="$style.carkm" name="">
          <option value="">行驶公里数</option>
          <option value="1万公里以下">1万公里以下</option>
          <option value="3万公里以下">3万公里以下</option>
          <option value="5万公里以下">5万公里以下</option>
          <option value="10万公里以下">10万公里以下</option>
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
