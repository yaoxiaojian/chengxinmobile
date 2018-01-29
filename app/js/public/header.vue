<template lang="html">
    <nav :class="$style.nav">
        <div :class="$style.menucontent">
            <div :class="[{[$style.close]:isactive},$style.menu]" @click="toggleClose"/>
            <div :class="$style.search">
                <input placeholder="输入质保编号查询" v-model="certNum" >
                <button @click="numSearch"/>
            </div>
        </div>
        <div :class="[{[$style.open]:isopen},$style.menulist]">
            <ul>
                <li>
                    <router-link :to="{ name: 'search'}">
                      车源搜索
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'dealer'}">
                      查询经销商
                    </router-link>
                </li>
                <li>最新活动</li>
                <li>关于诚新二手车</li>
                <li>
                    <router-link :to="{ name: 'sale'}">
                        <img src="//chengxinmobile.saic-gm.com/img/icon/sale.png" alt="">
                        一键卖车
                    </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'displace'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/displace.png" alt="">
                    一键置换
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'buy'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/buy.png" alt="">
                    我要买车
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'identify'}">
                    <img src="//chengxinmobile.saic-gm.com/img/icon/check.png" alt="">
                    车辆鉴定
                  </router-link>
                </li>
                <li>
                    <img src="//chengxinmobile.saic-gm.com/img/icon/wechat.png" alt="">
                    官方微信
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isactive: false,
            isopen: false,
            certNum: "",
        }
    },
    methods: {
        toggleClose() {
            this.isactive = !this.isactive,
            this.isopen = !this.isopen
        },
        numSearch() {
            this.$http.get(`http://chengxinmobile.saic-gm.com/api/certsearch.aspx?code=${this.certNum}`).then(response => {
                console.log(response.data)
            })
        },
    },
}
</script>

<style lang="scss" module>
@import '../../css/layout.scss';
.nav{
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  height: 100px;
  z-index: 999;
  a{
    text-decoration: none;
    color:#000;
  }
  .menucontent{
    height: 100px;
    width: 100%;
    z-index: 99;
    background:#fff url('//chengxinmobile.saic-gm.com/img/logo.png') no-repeat center;
    background-position: 37px center;
    background-size: auto 50%;
    position: absolute;
    .menu{
      width: 45px;
      height:35px;
      background: url('//chengxinmobile.saic-gm.com/img/menu.png') no-repeat center;
      float:right;
      margin: 34px 27px 0 0;
      &.close{
        background: url('//chengxinmobile.saic-gm.com/img/close.png') no-repeat center;
      }
    }
    .search{
      position: relative;
      float:right;
      margin: 27px 25px 0 0;
      input{
        width: 200px;
        height:50px;
        box-sizing: border-box;
        border: 1px solid #363636;
        font-size: 20px;
        padding-left: 10px;
        display: block;
        border-radius: none;
      }
      button{
        position: absolute;
        background: url('//chengxinmobile.saic-gm.com/img/search-2.png') no-repeat center;
        width: 31px;
        height:31px;
        top : 10px;
        right :10px;
        border: none;
        padding: 0;
      }
    }
  }
  .menulist{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #e5e5e5;
    border: #4b4b4b 1px solid;
    padding-top: 100px;
    transform: translateY(-100%);
    transition:all 1s;
    ul{
      @include flex;
      width: 100%;
      img{
        width: 62px;
        height:62px;
        margin: 14px 12px 0 0;
        float: left;
      }
      li{
        width: 590px;
        height: 90px;
        font-size: 24px;
        line-height: 90px;
        margin: 0 auto 0;
        position: relative;
        &:after{
          content: '';
          position: absolute;
          bottom:0;
          height: 1px;
          width: 100%;
          background: #000;
          left: 0;
        }
        &:last-child{
          &:after{
            display: none;
          }
        }
      }
    }
    &.open{
      transform: translateY(0%);
    }
  }
}
</style>
