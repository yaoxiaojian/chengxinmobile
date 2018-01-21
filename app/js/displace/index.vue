<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype/>
        <cardisplace/>
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
import cartype from "./cartype.vue"
import cardisplace from "./cardisplace.vue"
import information from "../public/information.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        cardisplace,
        information
    },
}
</script>

<style lang="scss" module>

</style>
