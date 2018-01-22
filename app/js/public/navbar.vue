<template lang="html">
    <Panel :class="$style.panel">
        <ul>
            <li>
                <router-link :to="{ name: 'sale'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/sale.png" >
                    <p>一键卖车</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'displace'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/displace.png" >
                    <p>一键置换</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'buy'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/buy.png" >
                    <p>我要买车</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'identify' }">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/check.png" >
                    <p>车辆鉴定</p>
                </router-link>
            </li>
            <li @click="maskShow">
                <img src="//chengxinmobile.saic-gm.com/img/icon/wechat.png" >
                <p>官方微信</p>
            </li>
        </ul>
        <div :class="$style.mask" v-show="show">
            <img src="//chengxinmobile.saic-gm.com/img/wechat.png" alt="">
        </div>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        maskShow() {
            this.show = !this.show
        },
    },
}
</script>

<style lang="scss" module>
@import '../../css/layout.scss';
@import "../../css/element.scss";
.panel{
  @include panel;
  >h4{
    display: none;
  }
  ul{
    @include flex(row);
    align-items: center;
    height: 100%;
    z-index: 2;
    position:fixed;
    height:140px;
    bottom:0;
    left:0;
    right:0;
    background: #fff;
    li{
      width: 20%;
      position: relative;
      a{
        text-decoration: none;
      }
      img{
        width: 64px;
        height: 64px;
        margin: 0 auto 10px;
        display: block;
      }
      p{
        text-align: center;
        font-size:20px;
        color: #363636;
        text-decoration: none;
      }
      &:after{
        content:'';
        position: absolute;
        height: 80px;
        background-color: #887c86;
        top: 7px;
        right: 0;
        width: 1px;
      }
      &:last-child{
        &:after{
          display:none;
        }
      }

    }
  }
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.8);
    z-index: 1;
    img{
      position: absolute;
      width: 514px;
      height:310px;
      bottom:155px;
      right: 20px;
    }
  }
}
</style>
