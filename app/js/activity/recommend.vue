<template lang="html">
    <div>
        <Heador/>
        <img src="http://chengxinmobile.saic-gm.com/img/recommend/title.jpg" alt="">
        <router-link :to="{ name: '', params: {} }">
            <img src="http://chengxinmobile.saic-gm.com/img/recommend/kv1.jpg" :class="$style.kv" alt="">
        </router-link>
        <router-link :to="{ name: '', params: {} }">
            <img src="http://chengxinmobile.saic-gm.com/img/recommend/kv2.jpg" :class="$style.kv" alt="">
        </router-link>
        <router-link :to="{ name: '', params: {} }">
            <img src="http://chengxinmobile.saic-gm.com/img/recommend/kv3.jpg" :class="$style.kv" alt="">
        </router-link>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
    },
}
</script>

<style lang="scss" module>
div{
  >img{
    margin-top: 100px;
  }
}
.kv{
  width: 600px;
  height: 250px;
  margin: 25px 20px 0;
}
</style>
