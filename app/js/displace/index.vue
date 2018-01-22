<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype title="现有车辆"/>
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
import cartype from "../public/cartype.vue"
import information from "../public/information.vue"
import cardisplace from "./cardisplace.vue"


export default {
    components: {
        Heador,
        footor,
        Navbar,
        cararea,
        cartype,
        cardisplace,
        information,
    },
}
</script>

<style lang="scss" module>

</style>
