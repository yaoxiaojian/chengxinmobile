<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype/>
        <carprice/>
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
import carprice from "./carprice.vue"
import information from "../public/information.vue"
import cartype from "./cartype.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        carprice,
        information,
    },
}
</script>

<style lang="scss" module>

</style>
