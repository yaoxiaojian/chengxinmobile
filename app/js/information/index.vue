<template lang="html">
    <div>
        <Heador/>
        <Slider :items="items" :cname="$style.slider"/>
        <div class="cardata" v-for="item in carsItem" :key="item.vhclId">
            <Panel :class="$style.panel" :cname="$style.price">
                <h5>{{ item.brand }}{{ item.series }}{{ item.ModelYear }}款</h5>
                <section>
                    <span>市场<br >参考价</span>
                    {{ item.price }}万
                    <img v-if="item.status === 1" src="http://chengxinmobile.saic-gm.com/img/cars-search/icon03.png" alt="">
                    <p>{{ item.VendorFullName }}</p>
                    <a :href="'tel:' + item.Linkphone"><img src="http://chengxinmobile.saic-gm.com/img/cars-search/icon02.jpg"></a>
                </section>
            </Panel>
            <Panel title="车辆概述" :cname="$style.massege">
                <ul>
                    <li>所在地:{{ item.vehicleCity }}</li>
                    <li>编号:{{ item.vhclId }}</li>
                    <li>上牌日期:{{ item.signDate }}</li>
                    <li>行驶里程:{{ Math.ceil(item.mileage / 10000) }}万公里</li>
                    <li>发布日期:{{ item.insureDate }}</li>
                    <li>车辆颜色:{{ item.color }}</li>
                    <li>联系人:{{ item.Linkman }}</li>
                    <li>排气量:{{ item.dspm }}</li>
                </ul>
            </Panel>
            <Panel title="车主自述" :cname="$style.introduce">
                <p>{{ item.model }}</p>
            </Panel>
            <Panel title="贷款套餐" :cname="$style.loan">
                <table cellpadding="0" cellspacing="0">
                    <tr>
                        <td width="25%">首付比例</td>
                        <td width="25%">贷款金额</td>
                        <td width="25%">月供</td>
                        <td width="25%">贷款期数</td>
                    </tr>
                    <tr :class="{ [$style.active]: 1 === selected }" @click="choose(1)">
                        <td>30%</td>
                        <td>{{ (item.price * 0.3).toFixed(2) }}元</td>
                        <td>{{ Math.ceil((item.price * 0.3).toFixed(2)*(0.149/12)*Math.pow(1+0.149/12,18)/(Math.pow(1+0.149/12,18)-1)*1000 ) }}元</td>
                        <td><span>18</span>个月</td>
                    </tr>
                    <tr :class="{ [$style.active]: 2 === selected }" @click="choose(2)">
                        <td>30%</td>
                        <td>{{ (item.price * 0.3).toFixed(2) }}元</td>
                        <td>{{ Math.ceil((item.price * 0.3).toFixed(2)*(0.149/12)*Math.pow(1+0.149/12,24)/(Math.pow(1+0.149/12,24)-1)*1000 ) }}元</td>
                        <td><span>24</span>个月</td>
                    </tr>
                    <tr :class="{ [$style.active]: 3 === selected }" @click="choose(3)">
                        <td>30%</td>
                        <td>{{ (item.price * 0.3).toFixed(2) }}元</td>
                        <td>{{ Math.ceil((item.price * 0.3).toFixed(2)*(0.149/12)*Math.pow(1+0.149/12,30)/(Math.pow(1+0.149/12,30)-1)*1000 ) }}元</td>
                        <td><span>30</span>个月</td>
                    </tr>
                    <tr :class="{ [$style.active]: 4 === selected }" @click="choose(4)">
                        <td>30%</td>
                        <td>{{ (item.price * 0.3).toFixed(2) }}元</td>
                        <td>{{ Math.ceil((item.price * 0.3).toFixed(2)*(0.149/12)*Math.pow(1+0.149/12,36)/(Math.pow(1+0.149/12,36)-1)*1000 ) }}元</td>
                        <td><span>36</span>个月</td>
                    </tr>
                </table>
                <p>更多贷款方案，请致电<a href="tel:400-920-3535">400-920-3535</a>咨询。</p>
            </Panel>
        </div>
        <footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "../core/slider.vue"
import Panel from "../core/panel.vue"
import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

export default {
    components: {
        Heador,
        Slider,
        Panel,
        footor,
        Navbar,
    },
    data() {
        return {
            items: [],
            selected: null,
            carid: "",
            carsItem: [],
        }
    },
    mounted() {
        this.carid = this.$route.params.carid
        console.log(this.$route.params.carid)
        this.getcardetail(this.carid)
    },
    methods: {
        choose(index) {
            this.selected = index
        },
        getcardetail() {
            axios.get(`http://chengxinmobile.saic-gm.com/api/cardetail.aspx?ids=${this.carid}`)
                .then(response => {
                    for (const value of response.data.cars) {
                        console.log(value)
                        this.carsItem.push({ brand: value.brand, series: value.series, price: value.price, VendorFullName: value.dealer.VendorFullName, Linkman: value.dealer.Linkman, Linkphone: value.dealer.Linkphone, vhclId: value.vhclId, signDate: value.signDate, dspm: value.dspm, mileage: value.mileage, status: value.status, color: value.color, vehiclePackage: value.vehiclePackage, ModelYear: value.redbookCode.ModelYear, model: value.model, vehicleCity: value.vehicleCity, insureDate: value.insureDate })
                        this.items.push({ src: value.left45 }, { src: value.right45 }, { src: value.engine }, { src: value.front }, { src: value.behind }, { src: value.side })
                    }
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
body,.panel,section{
  background: #fff !important;
}
.slider{
  margin-top: 100px;
  overflow: hidden;
  img{
    width: 100%;
    display:block;
  }
}
.price{
  margin: 80px 65px 0 65px !important;
  >h4{
    display: none;
  }
  >h5{
    color: #f08200;
    font-size: 40px;
    border-bottom: 1px #f08200 solid;
    line-height: 58px;
    margin-bottom: 14px;
    font-weight: bold;
  }
  section{
    font-size: 50px;
    color: #363636;
    margin-left: 20px;
    position: relative;
    span{
      display: inline-block;
      font-size: 20px;
      width: 66px;
      border-right: 1px solid #000;
      box-sizing: border-box;
      padding-right: 2px;
      line-height: 26px;
    }
    >img{
      position: absolute;
      width: 178px;
      height: 53px;
      right: 0;
      top: 0;
    }
    >a{
      position: absolute;
      bottom: 0;
      right: 0;
    }
    p{
      line-height: 40px;
      font-size: 20px;
      width: 310px;
      margin-top: 44px;
      display: inline-block;
    }
  }

}
.massege{
  margin-top: 50px;
  >h4{
    color: #f08200;
    margin-bottom: 30px;
    &:before{
      background: #f08200;
    }
    &:after{
      background: #f08200;
    }
  }
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 65px 0 65px;
    li{
      width: 50%;
      box-sizing: border-box;
      padding:10px 0 10px 20px;
      color: #363636;
      background: #ebebeb;
      margin-bottom: 1px;
      font-size: 18px;
    }
  }
}
.introduce{
  >h4{
    color: #f08200;
    margin-bottom: 30px;
    &:before{
      background: #f08200;
    }
    &:after{
      background: #f08200;
    }
  }
  margin-top: 50px;
  p{
    width: 500px;
    margin: 0 65px 0 65px;
    border: dashed #000 1px;
    box-sizing: border-box;
    padding: 10px 6px 20px 6px;
    border-radius: 0px;
    font-size: 18px;
    line-height: 28px;
  }
}
.loan{
  margin-top: 50px;
  >h4{
    color: #f08200;
    margin-bottom: 30px;
    &:before{
      background: #f08200;
    }
    &:after{
      background: #f08200;
    }
  }
  table{
    width: 500px;
    margin: 0 65px 0 65px;
    tr{
      font-size: 20px;
      border: 1px solid #000;
      color: #f06000;
      text-align: center;
      height: 60px;
      line-height: 60px;
      &:first-child{
        border: none;
        color: #000;
      }
      &.active{
        td{
          background: #f08200;
          color: #fff;
        }
      }
    }
  }
  p{
    font-size: 24px;
    color: #363636;
    margin: 20px 65px 0 65px;
  }
}
</style>
