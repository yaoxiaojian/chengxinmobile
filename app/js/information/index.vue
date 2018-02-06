<template lang="html">
    <div>
        <Heador/>
        <Slider :items="items" :cname="$style.slider"/>
        <Panel :class="$style.panel" :cname="$style.price">
            <h5>别克凯越 2011款{{ this.$route.params.carid }}</h5>
            <section>
                <span>市场<br >参考价</span>
                5.40万
                <img src="http://chengxinmobile.saic-gm.com/img/cars-search/icon03.png" alt="">
                <p>苏州建通汽车销售服务有限公司</p>
                <a href="tel:"><img src="http://chengxinmobile.saic-gm.com/img/cars-search/icon02.jpg"></a>
            </section>
        </Panel>
        <Panel title="车辆概述" :cname="$style.massege">
            <ul>
                <li>所在地:苏州市</li>
                <li>编号:1000143348</li>
                <li>上牌日期:2011年08月16日</li>
                <li>行驶里程:9.9万公里</li>
                <li>发布日期:</li>
                <li>车辆颜色:银色</li>
                <li>联系人:赵建农</li>
                <li>排气量:1.6</li>
            </ul>
        </Panel>
        <Panel title="车主自述" :cname="$style.introduce">
            <p>2011款 三厢轿车 4门 LX 自动 4速 前轮驱动 1.6多点式喷射</p>

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
                    <td>61650元</td>
                    <td><span>85</span>元</td>
                    <td><span>18</span>个月</td>
                </tr>
                <tr :class="{ [$style.active]: 2 === selected }" @click="choose(2)">
                    <td>30%</td>
                    <td>61650元</td>
                    <td><span>85</span>元</td>
                    <td><span>24</span>个月</td>
                </tr>
                <tr :class="{ [$style.active]: 3 === selected }" @click="choose(3)">
                    <td>30%</td>
                    <td>61650元</td>
                    <td><span>85</span>元</td>
                    <td><span>30</span>个月</td>
                </tr>
                <tr :class="{ [$style.active]: 4 === selected }" @click="choose(4)">
                    <td>30%</td>
                    <td>61650元</td>
                    <td><span>85</span>元</td>
                    <td><span>36</span>个月</td>
                </tr>
            </table>


        </Panel>
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
            items: [{
                src: "//chengxinmobile.saic-gm.com/img/kv/kv6.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv2.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/1",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv3.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/2",
            }, {
                src: "//chengxinmobile.saic-gm.com/img/kv/kv4.jpg",
                href: "//chengxinmobile.saic-gm.com/h5/2017xz/3",
            }],
            selected: null,
            carid: "",
        }
    },
    mounted() {
        this.carid = this.$route.params.carid
    },
    methods: {
        choose(index) {
            this.selected = index
        },
        getcardetail() {
            axios.get(`http://chengxinmobile.saic-gm.com/api/cardetail.aspx?ids=${this.carid}`)
                .then()
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
  margin: 80px 65px 0 65px;
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

}
</style>
