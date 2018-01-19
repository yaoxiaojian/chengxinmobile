<template lang="html">
    <div>
        <Heador/>
        <slider/>
        <ada/>
        <Type/>
        <adb/>
        <adc/>
    </div>
</template>

<script>
import Heador from "./heador.vue"
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
    },
}
</script>

<style lang="scss" module>

</style>
