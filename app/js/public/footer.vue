<template lang="html">
    <Panel title="底部导航" :class="$style.panel">
      <ul>
        <li>上汽通用汽车有限公司</li>
        <li>联系电话：021-28902890 </li>
        <li>地址：上海浦东新区申江路1500号</li>
        <li>沪ICS备05015204号-1 / 京公网安备11010802011243号</li>
      </ul>
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
@import "../../css/element.scss";
.panel{
  @include panel;
  margin: 30px 22px 0;
  >h4{
    display: none;
  }
  ul{
    margin-top: 20px;
    li{
      margin-bottom: 18px;
      font-size: 20px;
      text-align: center;
      color: #8d8c8c;
      line-height: 26px;
      &:last-child{
        margin-bottom: 160px;
      }
    }
  }
}
</style>
