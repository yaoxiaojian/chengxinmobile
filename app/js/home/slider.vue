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
            items: [{
                src: "//chengxinmobile.saic-gm.com/img/kv/kv6.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv2.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/1",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv3.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/2",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv4.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/3",
            }],
        }
    },
}
</script>

<style lang="scss" module>
.slider{
  margin-top: 100px;
  overflow: hidden;
  img{
    width: 100%;
    display:block;
  }
}
</style>
