<template>
  <div id="container">
    <div class="header">
      <div class="logo logo-text">在线陪聊</div>
    </div>
    <div class="main">
      <div class="lside">
        <div class="chat-box">
          <div class="jspScrollable" tabindex="0">
            <div class="jspContainer">
              <div class="jspPane" id="jspPane">
                <div class="rctCtn chtCtn lft" >
                  <div class="chtMsg chtMsg-greeting">
                    <div id="talk">
                      <div class="robot">
                        <div class="chat">
                          <div class="robot-icon"></div>
                          <div class="robot-response">
                            <div class="robot-chat">
                              主人你好，有什么需要吗？
                            </div>
                          </div>
                          <span class="robot-talk-cor"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a id="msg_end" name="1" href="#1"> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hot-number">
          热门问题：
          <div id="ecs" class="hot-item">ecs</div>
          <div id="yuming" class="hot-item">域名</div>
          <div id="beian" class="hot-item">备案</div>
          <div id="youxiang" class="hot-item">邮箱</div>
        </div>

        <div class="ask-area">
          <div class="input-area">
            <ul class="input-tip">
              <textarea v-model="searchValue" id="search" autocomplete="off" disableautocomplete placeholder="主人，您有什么想问的吗？" autofocus></textarea>
            </ul>
          </div>
          <button class="send-btn" @click="sendMessage(searchValue)">
            发送
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 引入外部样式css -->
<style scoped>
  @import '../assets/enter/css/enter.css';
</style>
<!-- 引入外部样式js -->
<script>
  import '../assets/enter/js/enter.js';
  export default {
    data() {
      return {
        searchValue: ''
      }
    },
    methods:{
      sendMessage(str) {
        if(str=="") return
        //添加信息
        document.getElementById('talk').innerHTML += `<div class="me" style="clear: both">
                                                    <div class="i-talk">
                                                        <div class="me-chat">我</div>
                                                        <div class="content">${str}</div>
                                                        <span class="i-talk-cor"></span>
                                                    </div>
                                                </div>`;
        //清空输入框
        document.getElementById('search').value = '';
        let xmlHttp = this.GetXmlHttpObject()
        if (xmlHttp == null) {
          alert("恭喜您，您的浏览器不支持ajax！");
          return;
        }
        let url = "http://www.tuling123.com/openapi/api?key=00af5f988608401fa2d4030958f046ae";
        url = url + "&info=" + str;
        url = url + "&userid=1234";
        xmlHttp.onreadystatechange = stateChanged();
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);

        function stateChanged(){
          if(xmlHttp.readyState==4){
            var msg=eval('('+xmlHttp.responseText+')');
            document.getElementById('talk').innerHTML += `<div class="robot" style="clear: both">
                                                            <div class="chat">
                                                                <div class="robot-icon" style="width:46px;height: 46px;"></div>
                                                                <div class="robot-response">
                                                                    <div class="robot-chat">
                                                                        ${msg.text}
                                                                    </div>
                                                                </div>
                                                                <span class="robot-talk-cor"></span>
                                                            </div>
                                                        </div>`;
          }
          document.getElementById("msg_end").click();
          document.getElementById('search').focus();
        }
      },
      GetXmlHttpObject(){
        let xmlHttp=null;
        try{
          xmlHttp=new XMLHttpRequest();
        }catch(e){
          try{
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
          }catch(e){
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        }
        return xmlHttp;
      }
    }
  }
</script>
