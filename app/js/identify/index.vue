<template lang="html">
    <div>
        <Heador/>
        <cararea/>
        <cartype title="车型" :cname="$style.ipanel"/>
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
import information from "../public/information.vue"
import cartype from "../public/cartype.vue"
import caryear from "./caryear.vue"
import carkm from "./carkm.vue"


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
@import '../../css/element.scss';
.ipanel{
  >h4{
    &:after{
      width: 370px;
    }
  }
  select{
    width: 500px !important;
    height: 55px !important;
    &:nth-child(n+4){
      display: none !important;
    }
  }
}
</style>
