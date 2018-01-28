<template lang="html">
    <div>
        <Heador/>
        <carlist/>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import carlist from "./carlist.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        carlist,
    },
}
</script>

<style lang="scss" module>

</style>
