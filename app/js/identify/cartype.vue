<template lang="html">
    <Panel title="车型" :class="$style.panel">
        <select :class="$style.carlist" name="">
            <option value="">品牌</option>
        </select>
        <select :class="$style.carname" name="">
            <option value="">系列</option>
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
