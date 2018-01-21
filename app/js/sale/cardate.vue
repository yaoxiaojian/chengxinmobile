<template lang="html">
    <Panel title="上牌日期" :class="$style.panel">
        <select :class="$style.yearold" name="">
          <option value="">年份</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
        <select :class="$style.monthold" name="">
          <option value="">月份</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>

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
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin-top: 30px;
    &:nth-child(2){
      margin-left: 70px;
    }
    &:last-child{
      float: right;
      margin-right: 70px;
    }
  }
}
</style>
