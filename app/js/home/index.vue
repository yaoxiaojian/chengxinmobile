<template lang="html">
    <div>
        <Heador/>
        <slider/>
        <ada/>
        <Type/>
        <adb/>
        <adc/>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./slider.vue"
import ada from "./ada.vue"
import Type from "./type.vue"
import adb from "./adb.vue"
import adc from "./adc.vue"

export default {
    components: {
        Heador,
        Slider,
        ada,
        Type,
        adb,
        adc,
        footor,
        Navbar,
    },
}
</script>

<style lang="scss">

</style>
