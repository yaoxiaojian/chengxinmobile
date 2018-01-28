<template lang="html">
    <Panel title="意向车辆" :class="[$style.panel,cname]">
        <select :class="$style.carlist" name="" @change="brandChange" v-model="carList">
            <option value="">品牌</option>
            <option :value="brand.brandname" v-for="brand in itemsBrand" :key="brand.brandname">{{ brand.brandname }}</option>
        </select>
        <select :class="$style.carname" name="" v-model="seriesList">
            <option value="">系列</option>
            <option :value="series.seriesname" v-for="series in itemsSeries" :key="series.seriesname">{{ series.seriesname }}</option>
        </select>
        <select :class="$style.caryear" name="" v-model="caryearList">
            <option value="">车龄</option>
            <option value="0">不限</option>
            <option value="1">1年内</option>
            <option value="2">1-3年</option>
            <option value="3">3-5年</option>
            <option value="4">5-8年</option>
            <option value="5">8-10年</option>
            <option value="6">10年以上</option>
        </select>
        <select :class="$style.carprice" name="" v-model="carpriceList">
            <option value="">价格</option>
            <option value="0">不限</option>
            <option value="1">3万以下</option>
            <option value="2">3-5万</option>
            <option value="3">5-8万</option>
            <option value="4">8-10万</option>
            <option value="5">10-15万</option>
            <option value="6">15-20万</option>
            <option value="7">20-30万</option>
            <option value="8">30-50万</option>
            <option value="9">50-100万</option>
            <option value="10">100万以上</option>
            <option value="11">10万以下</option>
        </select>
        <select :class="$style.cardate" name="" v-model="cardateList">
            <option value="">上牌日期</option>
            <option value="">不限</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
        </select>
        <select :class="$style.mileage" name="" v-model="mileageList">
            <option value="">行驶公里数</option>
            <option value="0">不限</option>
            <option value="1">1万公里以下</option>
            <option value="2">3万公里以下</option>
            <option value="3">5万公里以下</option>
            <option value="4">10万公里以下</option>
        </select>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import branList from "../../api/brandserieslist.json"

export default {
    components: {
        Panel,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            itemsBrand: [],
            itemsSeries: [],
            carList: "",
            seriesList: "",
            caryearList: "",
            carpriceList: "",
            cardateList: "",
            mileageList: "",
            brandId: "",
            seriesId: "",
            caryearId: "",
            carpriceId: "",
            cardateId: "",
            mileageId: "",
        }
    },
    mounted() {
        for (const value of branList.brand) {
            this.itemsBrand.push({ brandname: value.brandname })
        }
    },
    watch: {
        carList(newbrandId, oldbrandId) {
            this.brandId = newbrandId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },
        seriesList(newseriesId, oldseriesId) {
            this.seriesId = newseriesId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },
        caryearList(newcaryearId, oldcaryearId) {
            this.caryearId = newcaryearId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },
        carpriceList(newcarpriceId, oldcarpriceId) {
            this.carpriceId = newcarpriceId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },
        cardateList(newcardateId, oldcardateId) {
            this.cardateId = newcardateId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },
        mileageList(newmileageId, oldmileageId) {
            this.mileageId = newmileageId
            this.$emit("showWantChange", [this.brandId, this.seriesId, this.caryearId, this.carpriceId, this.cardateId, this.mileageId])
        },

    },
    methods: {
        brandChange(e) {
            this.brandIndex = e.target.selectedIndex
            const seriesData = branList.brand[this.brandIndex - 1].series
            this.itemsSeries.splice(0, this.itemsSeries.length)
            for (const value of seriesData) {
                this.itemsSeries.push({ seriesname: value.seriesname })
            }
        },
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  background: #f18101;
  padding: 50px 0 70px 0;
  overflow: hidden;
  select{
    width: 230px;
    height: 55px;
    box-sizing: border-box;
    border: #656565 1px solid;
    color:#f18101;
    font-size: 26px;
    margin-top: 30px;
    &:nth-child(2n+1){
      float: right;
      margin-right: 70px;
    }
    &:nth-child(2n+2){
      margin-left: 70px;
    }
  }
}
</style>
