<template lang="html">
    <Panel title="个人详情" :class="$style.panel">
        <input class="name" type="text" placeholder="姓名">
        <select class="sex" name="">
            <option>男</option>
            <option>女</option>
        </select>
        <input class="mobile" type="tel" placeholder="电话">
        <input class="email" type="email" placeholder="姓名">
        <button class="submit" type="button" name="button">提交</button>
        <button class="reset" type="button" name="button">重置</button>
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
  @include panel($color:#f18101,$iconcolor:#f18101);
  margin-top: 55px;
  input,select{
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin-top: 30px;
    padding-left: 10px;
    color: #f18101;
  }
  input{
    &:nth-child(2n+2){
      margin-left: 70px;
    }
    &:nth-child(2n+1){
      float: right;
      margin-right: 70px;
    }
  }
  select{
    float: right;
    margin-right: 70px;
  }
  button{
    @include btn;
    display: block;
    margin: 30px auto 30px;
  }
}
</style>
