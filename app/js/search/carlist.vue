<template lang="html">
    <div class="">
        <cararea @showAreaChange="showAreaData"/>
        <cartype @showWantChange="showWantCar"/>
        <Panel :class="$style.panel">
            <div :class="$style.carsearch">
                <input type="text" placeholder="输入车型" v-model="keywords">
                <button @click="searchKeywords">搜索</button>
            </div>
            <div :class="$style.carchoose">
                排序方式
                <span @click="timeChange">时间<em v-if="timeDown">↓</em><em v-else>↑</em></span>
                <span @click="priceChange">价格<em v-if="priceDown">↓</em><em v-else>↑</em></span>
                <span :class="{[$style.active]:isauth.isactive}" @click="certChange">认证车</span>
            </div>
            <div :class="$style.carlist">
                <ul>
                    <li v-for="item in carData" :key="item.vhclId" :data-id="item.vhclId">
                        <router-link :to="{ name: 'information', params: { carid : item.vhclId }}">
                            <img :src="item.pic45" alt="">
                            <div :class="$style.cartip">
                                <h4>{{ item.brand }}{{ item.series }}{{ item.ModelYear }}款</h4>
                                <p>{{ item.model }}</p>
                                <p>{{ item.ModelYear }}年上牌 / {{ Math.ceil(item.mileage / 10000) }}万公里</p>
                                <span>{{ item.price }}万</span>
                                <img v-if="item.isauth==1" src="//chengxinmobile.saic-gm.com/img/cars-search/icon03.png" alt="">
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </Panel>
    </div>

</template>

<script>
import Panel from "../core/panel.vue"
import cararea from "../public/cararea.vue"
import cartype from "./cartype.vue"
import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(VueAxios, axios)
export default {
    components: {
        Panel,
        cararea,
        cartype,
    },
    data() {
        return {
            province: "",
            city: "",
            brand: "",
            series: "",
            dealercode: "",
            pagesize: "",
            pagenum: "",
            price: "",
            carold: "",
            carkm: "",
            signdate: "",
            keywords: "",
            vtype: "",
            seriesother: "",
            brandother: "",
            timeDown: true,
            priceDown: true,
            sortby: "lastTime",
            orderby: "asc",
            isauth: {
                isactive: true,
                iscert: 0,
            },
            pagesize: 3,
            pagenum: 1,
            carData: [],
            scroll: "",
            vhclId: "",
            wait: false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.loadCars)
        this.getCarlistData()
    },
    methods: {
        timeChange() {
            this.carData = []
            this.timeDown = !this.timeDown
            this.sortby = "lastTime"
            this.orderby = this.orderby === "asc" ? "desc" : "asc"
            this.pagenum = 1
            this.getCarlistData()
        },
        priceChange() {
            this.carData = []
            this.priceDown = !this.priceDown
            this.sortby = "price"
            this.orderby = this.orderby === "asc" ? "desc" : "asc"
            this.pagenum = 1
            this.getCarlistData()
        },
        certChange() {
            this.carData = []
            this.isauth.isactive = !this.isauth.isactive
            this.isauth.iscert = this.isauth.iscert === 0 ? 1 : 0
            this.pagenum = 1
            this.getCarlistData()
        },
        showAreaData(data) {
            this.carData = []
            this.province = data[0]
            this.city = data[1]
            this.pagenum = 1
            this.getCarlistData()
        },
        showWantCar(data) {
            this.carData = []
            this.brand = data[0]
            this.series = data[1]
            this.carold = data[2]
            this.price = data[3]
            this.signdate = data[4]
            this.carkm = data[5]
            this.pagenum = 1
            this.getCarlistData()
        },
        loadCars() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTo
            const bodyHeight = document.body.offsetHeight - 50
            const clientHeight = document.documentElement.clientHeight
            if (bodyHeight - clientHeight <= scrollTop) {
                this.pagenum++
                this.getCarlistData()
                this.wait = true
            }
        },
        searchKeywords() {
            this.getCarlistData()
        },
        getCarlistData() {
            if (this.wait) {
                return
            }
            axios.get(`http://chengxinmobile.saic-gm.com/api/carlist.aspx?province=${this.province}&city=${this.city}&brand=${this.brand}&series=${this.series}&dealercode=${this.dealercode}&pagesize=${this.pagesize}&pagenum=${this.pagenum}&price=${this.price}&carold=${this.carold}&carkm=${this.carkm}&signdate=${this.signdate}&keywords=${this.keywords}&vtype=${this.vtype}&seriesother=${this.seriesother}&brandother=${this.brandother}&sortby=${this.sortby}&orderby=${this.orderby}&isauth=${this.isauth.iscert}`)
                .then(response => {
                    for (const value of response.data.cars) {
                        console.log(value)
                        this.carData.push({ vhclId: value.vhclId, brand: value.brand, series: value.series, ModelYear: value.ModelYear, model: value.model, mileage: value.mileage, pic45: value.pic45, price: value.price, isauth: value.isauth })
                    }
                    this.wait = false
                })
                .catch(response => {
                    console.log(response)
                })
        },

    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  background: #e5e5e5;
  >h4{
    display: none;
  }
  .carsearch{
    padding-top: 56px;
    input{
      width: 374px;
      height: 56px;
      margin-left: 70px;
      font-size: 24px;
      box-sizing: border-box;
      padding-left: 10px;
      border:#000 solid 1px;
    }
    button{
      width: 110px;
      height:56px;
      box-sizing:border-box;
      border:#000 solid 1px;
      color:#f08200;
      line-height: 56px;
      text-align: center;
      font-size: 24px;
      background: #fff;
      padding: 0;
    }
  }
  .carchoose{
    padding-left: 70px;
    color: #f08200;
    font-size: 24px;
    margin-top: 34px;
    span{
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: #fff;
      display: inline-block;
      padding: 0 26px;
      margin-left: 6px;
      em{
        margin-left: 5px;
      }
    }
    .active{
      color: #656565;
    }
  }
  .carlist{
    width: 500px;
    margin: 30px 70px 60px 70px;
    position: relative;
    ul{
      li{
        margin: 0 0 60px 0;
        position: relative;
        &:after{
          content:"";
          position: absolute;
          width: 100%;
          height: 1px;
          background: #ababab;
          bottom:-30px;
          left:0;
        }
        img{
          width: 200px;
          height:150px;
        }
        .cartip{
          float: right;
          width: 280px;
          height:150px;
          position: relative;
          h4{
            font-size: 30px;
            color: #6d6d6d;
            font-weight: bold;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
          }
          p{
            font-size: 24px;
            color: #6d6d6d;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
            margin-top: 8px;
          }
          span{
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 30px;
            color: #f08200;
          }
          img{
            width: 150px;
            height: 40px;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
