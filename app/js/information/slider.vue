<template lang="html">
    <Slider :items="items" :cname="$style.slider"/>
</template>

<script>
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [],
        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.slider{
  margin-top: 100px;
  overflow: hidden;
  img{
    width: 100%;
    display:block;
  }
}
</style>
