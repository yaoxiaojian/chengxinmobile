<template lang="html">
    <Panel title="超值推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <router-link :to="{ name: 'recommend'}">
                    <img src="//chengxinmobile.saic-gm.com/img/kv/active1.jpg" alt="">
                </router-link>
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home'}">
                            <img src="//chengxinmobile.saic-gm.com/img/kv/active2.jpg" alt="">
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home'}">
                            <img src="//chengxinmobile.saic-gm.com/img/kv/active7.jpg" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },

}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  @include panel;
  >h4{
      display: none;
  }
  .content{
    margin: 20px 22px 0;
    @include flex(row);
    .item:nth-child(1){
      margin-right:15px;
      img{
        width:230px;
        height:260px;
      }
    }
    .item:nth-child(2){
      ul{
        li{
          img{
            width: 350px;
            height:120px;
          }
          &:first-child{
            margin-bottom: 20px;
          }
        }
      }
    }
  }

}
</style>
