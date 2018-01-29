<template lang="html">
    <div>
        <cararea @showAreaChange="showAreaData" :class="$style.cararea">
            <div :class="$style.sinput">
                <input type="text">
                <button/>
            </div>
        </cararea>
        <Panel title="经销商" :class="$style.panel">
            <ul :class="$style.dealerlist">
                <li v-for="item in dealerData" :key="item.VendorCode">
                    <h4>{{ item.VendorFullName }}</h4>
                    <p>销售电话：{{ item.Linkphone }}</p>
                    <p>地区：{{ item.province }}</p>
                    <p>公司地址：{{ item.Address }}</p>
                </li>
            </ul>
        </Panel>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import Panel from "../core/panel.vue"
import cararea from "../public/cararea.vue"
Vue.use(VueAxios, axios)
export default {
    components: {
        Panel,
        cararea,
    },
    data() {
        return {
            dealerData: [],
        }
    },
    methods: {
        showAreaData(data) {
            console.log(data)
            this.dealerData = []
            this.province = data[0]
            this.city = data[1]
        },
        getdealerData() {
            axios.get(`http://chengxinmobile.saic-gm.com/api/dealerlist.aspx?province=${this.province}&city=${this.city}&keywords=${this.keywords}`)
                .then(response => {
                    for (const value of response.data.dealers) {
                        console.log(value)
                        this.dealerData.push({ VendorFullName: value.VendorFullName, Linkphone: value.Linkphone, province: value.province, Address: value.Address })
                    }
                    // this.wait = false
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
.cararea{
  >h4{
    display: none;
  }
  .sinput{
    width: 500px;
    height: 55px;
    position: relative;
    margin-left: 70px;
    input{
      width: 500px;
      height: 55px;
      box-sizing: border-box;
      border: #656565 0.025rem solid;
      color: #f18101;
      font-size: 28px;
      padding-left: 10px;
    }
    button{
      width: 56px;
      height: 55px;
      background: transparent url('http://chengxinmobile.saic-gm.com/img/search-1.png') no-repeat center;
      background-position: center;
      background-size: auto 50%;
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
    }
  }
}
.panel{
  @include panel;
  >h4{
    color:#f08200 !important;
    margin:56px 0 0 70px;
    padding-bottom: 30px;
    &:before{
      background: #f08200 !important;
    }
    &:after{
      top: auto !important;
      bottom:0px !important;
      right:70px !important;
      width: 500px !important;
      background: #f08200 !important;
    }
  }
  .dealerlist{
    margin-left: 70px;
    h4{
      font-size:28px;
      color:#363636;
      margin:38px 0;
    }
    p{
      margin:38px 0;
      font-size:24px;
      color:#363636;
      position: relative;
      padding-left: 30px;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      }
      &:nth-child(2){
        background: url(http://chengxinmobile.saic-gm.com/img/icon/phone.png) no-repeat center left;
        background-size: auto;
      }
      &:nth-child(3){
        background: url(http://chengxinmobile.saic-gm.com/img/icon/area.png) no-repeat center left;
        background-size: auto;
      }
      &:nth-child(4){
        background: url(http://chengxinmobile.saic-gm.com/img/icon/address.png) no-repeat center left;
        background-size: auto;
      }
    }
  }
}
</style>
