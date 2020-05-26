<template>
  <!--展示信息-->
  <div class="count" :style="backgroundImg">
    <span id="busuanzi_container_site_pv">
      本站总访问量
      <span id="busuanzi_value_site_pv"></span>次
      <span class="post-meta-divider">|</span>
    </span>
      <span id="busuanzi_container_site_uv">
      本站访客数
      <span id="busuanzi_value_site_uv"></span>人
    </span>
    <br/>
    <span id="busuanzi_date">载入天数...</span><span id="busuanzi_time">载入时分秒...</span>
  </div>
</template>
<style>
  .count {
    text-align: center;
  }
</style>
<script>
  let script;
  let now = new Date();
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
      setInterval(this.runTime,250);
    },
    watch: {
      $route(to, from) {
        if (to.path != from.path) {
          script.fetch();
        }
      }
    },methods: {
      // 网站运行时间
      runTime: function() {
        let grt= new Date("08/26/2017 16:42:38");//此处修改你的建站时间或者网站上线时间
        now.setTime(now.getTime()+250);
        let days = (now - grt ) / 1000 / 60 / 60 / 24;
        let dayCount = Math.floor(days);
        let hours = (now - grt ) / 1000 / 60 / 60 - (24 * dayCount);
        let hoursCount = Math.floor(hours);
        if(String(hoursCount).length ==1 ){hoursCount = "0" + hoursCount;}
        let minutes = (now - grt ) / 1000 /60 - (24 * 60 * dayCount) - (60 * hoursCount);
        let miniCount = Math.floor(minutes); if(String(miniCount).length ==1 ){miniCount = "0" + miniCount;}
        let seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dayCount) - (60 * 60 * hoursCount) - (60 * miniCount);
        let mouseCount = Math.round(seconds); if(String(mouseCount).length ==1 ){mouseCount = "0" + mouseCount;}
        document.getElementById("busuanzi_date").innerHTML = "感谢您的支持,本站安全运行"+dayCount+"天";
        document.getElementById("busuanzi_time").innerHTML = hoursCount + "小时" + miniCount + "分" + mouseCount + "秒";
      }
    }
  }
</script>
