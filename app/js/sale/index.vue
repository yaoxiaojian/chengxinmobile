<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype title="现有车辆"/>
        <cardate/>
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
import cartype from "../public/cartype.vue"
import information from "../public/information.vue"
import cardate from "./cardate.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        cardate,
        information,
    },
}
</script>

<style lang="scss" module>

</style>
