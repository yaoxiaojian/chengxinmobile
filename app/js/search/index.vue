<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype/>
        <carlist/>
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
import carlist from "./carlist.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        carlist,
    },
}
</script>

<style lang="scss" module>

</style>
