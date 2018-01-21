<template lang="html">
    <Panel title="购买车辆" :class="$style.panel">
        <select :class="$style.carlist" name="">
            <option value="">品牌</option>
        </select>
        <select :class="$style.carname" name="">
            <option value="">系列</option>
        </select>
        <select :class="$style.caryear" name="">
            <option value="">年份</option>
        </select>
        <select :class="$style.cardspm" name="">
            <option value="">排量</option>
        </select>
        <select :class="$style.cardescript" name="">
            <option value="">描述</option>
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
  padding-top: 50px;
  overflow: hidden;
  select{
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin-top: 30px;
    &:nth-child(2n+1){
      float: right;
      margin-right: 70px;
    }
    &:nth-child(2n+2){
      margin-left: 70px;
    }
    &:last-child{
      width: 500px;
      float: none;
    }
  }
}
</style>
