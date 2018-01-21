<template lang="html">
    <Panel title="所在地区" class="panel">
        <select class="province" name="" @change="provinceChange">
            <option v-for="province in itemsProvince" :value="province.proid">{{ province.proName }}</option>
        </select>
        <select class="city" name="">
            <option v-for="city in itemsCity" :value="city.cityid">{{ city.cityname }}</option>
        </select>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import provinceData from "../../api/province.json"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            itemsProvince: [
                {
                    proid: "",
                    proName: "省份",
                },
            ],
            itemsCity: [
                {
                    cityid: "",
                    cityname: "城市",
                },
            ],
        }
    },
    mounted() {
        console.log(provinceData.province)
        const pronvinceData = provinceData.province
        for (let i = 0; i < pronvinceData.length; i++) {
            this.itemsProvince.push({ proid: pronvinceData[i].proid, proName: pronvinceData[i].proname })
        }
    },
    methods: {
        provinceChange(e) {
            this.selected = e.target.selectedIndex
            const cityData = provinceData.province[this.selected - 1].citys
            console.log(cityData.length)
            this.itemsCity.splice(1, this.itemsCity.length)
            for (let j = 0; j < cityData.length; j++) {
                this.itemsCity.push({ cityid: cityData[j].cityid, cityname: cityData[j].cityname })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../css/element.scss';
.panel{
  @include panel;
  background: #f18101;
  padding-top: 155px;
  overflow: hidden;
  select{
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin-top: 30px;
    &:nth-child(2){
      margin-left: 70px;
    }
    &:last-child{
      float: right;
      margin-right: 70px;
    }
  }
}
</style>
