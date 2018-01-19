<template lang="html">
    <Panel title='topfive' :class="$style.panel">
      <img src="//chengxinmobile.saic-gm.com/img/kv/active4.jpg" alt="">
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
.panel{
  >h4{
    display: none;
  }
  img{
    width: 600px;
    height:273px;
    margin: 0 auto;
    display: block;
  }
}
</style>
