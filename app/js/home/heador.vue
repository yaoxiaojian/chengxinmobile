<template lang="html">
    <nav :class="$style.nav">
        <div :class="[{[$style.close]:isactive},$style.menu]" @click='toggleClose'/>
        <div :class="$style.search">
          <input placeholder="输入质保编号查询" >
          <button></button>
        </div>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            isactive: false,
        }
    },
    methods: {
        toggleClose() {
            this.isactive = !this.isactive
        },
    },
}
</script>

<style lang="scss" module>
.nav{
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  background:#fff url('//chengxinmobile.saic-gm.com/img/logo.png') no-repeat center;
  background-position: 37px center;
  background-size: auto 50%;
  z-index: 999;
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
</style>
