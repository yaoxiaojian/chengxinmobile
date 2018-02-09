<template lang="html">
    <div>
        <Heador/>
        <img src="http://chengxinmobile.saic-gm.com/img/about/loan/title.jpg" alt="">
        <img src="http://chengxinmobile.saic-gm.com/img/about/loan/kv.jpg" alt="">
        <Panel title="专项金融贷款，购车便捷无忧" :class="$style.panel">


        </Panel>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Panel from "../core/panel.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        Panel,
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
div{
  >img:nth-child(2){
    display: block;
    margin-top: 100px;
  }
}
.panel{
  @include panel($linewidth:87px);
  >h4{
    color:#f08200;
    &:before{
      background: #f08200;
    }
    &:after{
      background: #f08200;
    }
  }
}

</style>
