<template lang="html">
    <Panel :class="$style.panel">
        <div :class="$style.carsearch">
            <input type="text" placeholder="输入车型">
            <button>搜索</button>
        </div>
        <div :class="$style.carchoose">
            排序方式
            <span @click="timeChange">时间<em v-if="timeDown">↓</em><em v-else>↑</em></span>
            <span @click="priceChange">价格<em v-if="priceDown">↓</em><em v-else>↑</em></span>
            <span>认证车</span>
        </div>
        <div :class="$style.carlist">
            <ul>
                <li>
                    <img src="//chengxin.saic-gm.com/var/data/1000295247/4eaf44a630ed8c6f10fa856b56cf9b23.jpg" alt="">
                    <div :class="$style.cartip">
                        <h4>奥迪Q52011款</h4>
                        <p>2011款 旅行车 5</p>
                        <p>2011年上牌 / 3.8万公里</p>
                        <span>20.00万</span>
                    </div>
                </li>
            </ul>
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
            timeDown: true,
            priceDown: true,
        }
    },
    methods: {
        timeChange() {
            this.timeDown = !this.timeDown
        },
        priceChange() {
            this.priceDown = !this.priceDown
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
  }
  .carlist{
    margin-left: 70px;
    width: 500px;
    ul{
      li{
        img{
          width: 200px;
          height:150px;
        }
        .cartip{
          float: right;
          width: 280px;
          height:150px;
          h4{
            font-size: 32px;
            color: #6d6d6d;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
