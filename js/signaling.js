function heartBeat() {
  //心跳请求接口
  $.ajax({
    url: heartbeatInterface,
    type: 'POST',
    dataType: 'jsonp',
    jsonpCallback: "dealyHeartBeat",
    error: function(res) {
      setTimeout("heartBeat()", 1000);
    },
    success: function (res) {
      setTimeout("heartBeat()", 1000);
    }
  });
}
//调用心跳请求接口
function dealyHeartBeat() {
  setTimeout("heartBeat()", 1000);
}
heartBeat()
