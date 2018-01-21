<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype/>
        <caryear/>
        <carkm/>
        <information/>
        <footor/>
        <Navbar/>

    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import cararea from "../public/cararea.vue"
import caryear from "./caryear.vue"
import carkm from "./carkm.vue"
import information from "../public/information.vue"
import cartype from "./cartype.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        caryear,
        carkm,
        information,
    },
}
</script>

<style lang="scss" module>

</style>
