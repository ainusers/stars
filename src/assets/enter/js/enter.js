var xmlHttp;
//发送一个消息
/*function sendMessage(str) {
    if(str==""){
        return
    }
    //添加信息
    document.getElementById('talk').innerHTML += `<div class="me" style="clear: both">
                                                <div class="i-talk">
                                                    <div class="me-chat">我</div>
                                                    <div class="content">${str}</div>
                                                    <span class="i-talk-cor"></span>
                                                </div>
                                            </div>`
    //清空输入框
    document.getElementById('search').value = '';


    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("恭喜您，您的浏览器不支持ajax！");
        return;
    }
    var url = "http://www.tuling123.com/openapi/api?key=00af5f988608401fa2d4030958f046ae";
    url = url + "&info=" + str;
    url = url + "&userid=1234";
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}*/
//接收到一个消息
/*function stateChanged(){
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
}*/



$(".hot-item").on("click",function(){
    var aa=$(this).attr("id");
    var testname=document.getElementById(aa).innerHTML;
    document.getElementById('talk').innerHTML += `<div class="me" style="clear: both">
                                                <div class="i-talk">
                                                    <div class="me-chat">我</div>
                                                    <div class="content">${testname}</div>
                                                    <span class="i-talk-cor"></span>
                                                </div>
                                            </div>`

    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("恭喜您，您的浏览器不支持ajax！");
        return;
    }
    var url = "http://www.tuling123.com/openapi/api?key=00af5f988608401fa2d4030958f046ae";
    url = url + "&info=" + testname;
    url = url + "&userid=1234";
    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    document.getElementById("msg_end").click();
})
