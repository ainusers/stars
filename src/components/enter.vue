<template>
  <div :style="backgroundImg"></div>
  <!--展示信息-->
  <div class="busuanzi">
    <span id="busuanzi_container_site_pv">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
    <span id="busuanzi_container_site_uv">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
  </div>
</template>

<script>
  let script;
  export default {
    data() {
      return {
        backgroundImg: {
          backgroundImage: "url(" + require("../assets/enter/image/background.png") + ")",
          height: '97vh',
          width: '99vw',
          backgroundColor: '#fcfce7',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        },
      }
    },
    mounted() {
      script = require("busuanzi.pure.js");
    },
    watch: {
      $route(to, from) {
        if (to.path != from.path) {
          script.fetch();
        }
      }
    }
  }
</script>
