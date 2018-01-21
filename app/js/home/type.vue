<template lang="html">
    <panel title="快捷选择" :class="$style.panel">
        <ul>
            <li>凯越</li>
            <li>君威</li>
            <li>君越</li>
            <li>科鲁兹</li>
            <li>迈锐宝</li>
            <li>科帕奇</li>
            <li>英朗</li>
            <li>GL8</li>
            <li>10万以下</li>
            <li>10-15万</li>
            <li>3-5年</li>
            <li>10万公里以下</li>
        </ul>

    </panel>
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
  margin: 36px auto;
  >h4{
    display: none;
  }
  ul{
    @include flex(row);
    width: 600px;
    margin: 0 auto;
    li{
      width: 150px;
      height:83px;
      box-sizing: border-box;
      font-size: 28px;
      text-align: center;
      line-height: 83px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-right:1px solid #a7a7a7;
      border-bottom:1px solid #a7a7a7;
      background: #ededed;
      &:nth-child(4n){
        border-right:none;
      }
      &:nth-child(n+9){
        border-bottom:none;
      }
    }
  }
}
</style>
