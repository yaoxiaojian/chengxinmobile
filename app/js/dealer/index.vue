<template lang="html">
    <div>
        <Heador/>

        <dealerlist/>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import dealerlist from "./dealerlist.vue"

export default {
    components: {
        Heador,
        footor,
        Navbar,
        dealerlist,
    },
}
</script>

<style lang="scss" module>

</style>
