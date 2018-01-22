<template lang="html">
    <Panel :title="title" :class="[$style.panel,cname]">
        <select :class="$style.carlist" name="" @change="brandChange">
            <option value="" v-for="brand in itemsBrand" :key="brand.brandname">{{ brand.brandname }}</option>
        </select>
        <select :class="$style.carname" name="">
            <option value="" v-for="series in itemsSeries" :key="series.seriesname">{{ series.seriesname }}</option>
        </select>
        <select :class="$style.caryear" name="">
            <option value="">年份</option>
        </select>
        <select :class="$style.cardspm" name="">
            <option value="">排量</option>
        </select>
        <select :class="$style.cardescript" name="">
            <option value="">描述</option>
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
            itemsBrand: [
                {
                    brandname: "品牌",
                },
            ],
            itemsSeries: [
                {
                    seriesname: "系列",
                },
            ],
        }
    },
    mounted() {
        for (const value of branList.brand) {
            this.itemsBrand.push({ brandname: value.brandname })
        }
    },
    methods: {
        brandChange(e) {
            this.selected = e.target.selectedIndex
            const seriesData = branList.brand[this.selected - 1].series
            this.itemsSeries.splice(1, this.itemsSeries.length)
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
  padding-top: 50px;
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
    &:last-child{
      width: 500px;
      float: none;
    }
  }
}
</style>
