<template lang="html">
    <Panel title="所在地区" :class="$style.panel">
        <slot/>
        <select :class="$style.province" name="" @change="provinceChange" v-model="provinceList" >
            <option value="">省份</option>
            <option v-for="province in itemsProvince" :value="province.proid" :key="province.proid">{{ province.proName }}</option>
        </select>
        <select :class="$style.city" name="" v-model="cityList">
            <option value="">城市</option>
            <option v-for="city in itemsCity" :key="city.cityid">{{ city.cityname }}</option>
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
            itemsProvince: [],
            itemsCity: [],
            provinceId: "",
            cityId: "",
            provinceList: "",
            cityList: "",
        }
    },
    watch: {
        provinceList(newprovinceId, oldprovinceId) {
            if (newprovinceId != oldprovinceId) {
                this.cityId = ""
            }
            this.provinceId = newprovinceId
            this.$emit("showAreaChange", [this.provinceId, this.cityId])
        },
        cityList(newcityId, oldcityId) {
            this.cityId = newcityId
            this.$emit("showAreaChange", [this.provinceId, this.cityId])
        },

    },
    mounted() {
        const pronvinceData = provinceData.province
        for (const value of pronvinceData) {
            this.itemsProvince.push({ proid: value.proid, proName: value.proname })
        }
    },
    methods: {
        provinceChange(e) {
            this.selectIndex = e.target.selectedIndex
            const cityData = provinceData.province[this.selectIndex - 1].citys
            this.itemsCity.splice(0, this.itemsCity.length)
            for (const value of cityData) {
                this.itemsCity.push({ cityid: value.cityid, cityname: value.cityname })
            }
        },
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  background: #f18101 !important;
  padding-top: 155px !important;
  overflow: hidden !important;
  select{
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin: 30px 0 0 0;
    &.province{
      margin-left: 70px;
    }
    &.city{
      float: right;
      margin-right: 70px;
    }
  }
}
</style>
